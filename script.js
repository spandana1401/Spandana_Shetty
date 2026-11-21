// Typing Animation
const text = "DevOps Engineer | AWS | Kubernetes | AI Automation";
let index = 0;

function typeEffect() {
  document.querySelector(".typing-text").innerHTML = text.slice(0, index);
  index++;
  if (index <= text.length) setTimeout(typeEffect, 100);
}
typeEffect();

// ================= SKILL DATA =================
const skillData = {
  cicd: {
    title: "CI/CD & Build Automation",
    points: [
      "<b>Jenkins</b>, <b>Groovy</b>, YAML, Git, Maven",
      "<b>AWS CodePipeline</b> and <b>CodeBuild</b> for automated builds and continuous delivery",
      "Source control with Git and <b>AWS CodeCommit</b>",
      "Jenkins pipelines for builds, artifact management and deployments",
    ],
  },
  aws: {
    title: "AWS Cloud",
    points: [
      "<b>Compute & storage:</b> EC2, S3, ECR, RDS, Lambda",
      "<b>Networking & access:</b> VPC, IAM",
      "<b>Operations:</b> CloudWatch, CloudFormation, CodeCommit",
      "<b>Secure access & licensing:</b> Systems Manager Session Manager, AWS License Manager",
    ],
  },
  iac: {
    title: "Infrastructure as Code & Configuration Management",
    points: [
      "<b>Terraform</b> and <b>Ansible</b> for AWS infrastructure provisioning",
      "<b>AWS CloudFormation</b> for IAM roles and permission policies",
      "Environment setup time cut from <b>3+ hours to under 15 minutes (90%+)</b>",
      "Templates maintained in AWS CodeCommit",
    ],
  },
  containers: {
    title: "Containers, Orchestration & Artifacts",
    points: [
      "<b>Docker</b> image building, tagging and publishing",
      "<b>Kubernetes (EKS)</b> deployment support",
      "<b>Nexus Repository Manager</b>, Amazon S3 and Amazon ECR for artifact management",
      "Automated base image upgrades for Alpine Linux, Splunk and Tanium",
    ],
  },
  monitoring: {
    title: "Monitoring, Logging & Security",
    points: [
      "<b>Monitoring & logging:</b> Splunk, AWS CloudWatch, Grafana, Prometheus",
      "<b>Endpoint management:</b> Tanium",
      "<b>Access management:</b> AWS IAM, Microsoft Active Directory (MSAD), domain joining, Session Manager",
      "<b>Code quality:</b> SonarQube",
    ],
  },
  scripting: {
    title: "Scripting, Operating Systems & AI Automation",
    points: [
      "<b>Languages:</b> Python, Bash/Shell, Groovy, YAML",
      "<b>Operating systems:</b> Linux (Ubuntu), Windows Server",
      "<b>AI & intelligent automation:</b> Amazon Q, Amazon Bedrock Agents",
    ],
  },
};

// ================= EXPERIENCE DATA =================
const experienceData = {
  devops: {
    title: "DevOps Engineer <small>(Aug 2025 - Present)</small>",
    points: [
      "Designed and maintained <b>5-10 Jenkins CI/CD pipelines</b> using Groovy, Git and YAML for banking applications.",
      "Automated provisioning of <b>10-30 AWS EC2 instances</b> via parameterized Jenkins jobs (AMI, storage, security groups, post-provisioning setup).",
      "Built end-to-end Jenkins automation integrating <b>EC2, RDS, MSAD and Nexus</b> for provisioning, database connectivity, domain joining and software installation.",
      "Automated deployment of <b>Splunk Universal Forwarder, Tanium, Edge, Firefox, Blue Prism and UiPath</b> using Jenkins and Nexus.",
      "Automated base image upgrades (Alpine Linux, Splunk, Tanium) with <b>Docker and ECR</b>, reducing manual effort by an estimated <b>50-70%</b>.",
      "Built Jenkins pipelines to retrieve packages from <b>S3</b>, publish images to <b>ECR</b>, and publish artifacts to <b>Nexus</b>.",
      "Cut environment setup from 3+ hours to under 15 minutes (<b>90%+ reduction</b>) with <b>Terraform and Ansible</b>.",
      "Created IAM roles and policies with <b>CloudFormation</b>, stored in CodeCommit.",
      "Secured access with <b>Session Manager</b> and managed licensing with <b>License Manager</b>.",
      "Scripted in Python, Bash and Groovy; monitored with CloudWatch and Splunk, contributing to an estimated <b>30-40% reduction in deployment time</b>.",
    ],
  },
  associate: {
    title: "Packaged App Development Associate <small>(Feb 2024 - Aug 2025)</small>",
    points: [
      "Integrated <b>Amazon Q with Amazon Bedrock Agents and Blue Prism</b> for application error analysis and resolution recommendations.",
      "Developed <b>Python Flask REST APIs</b> connecting Blue Prism bots to Bedrock with secure <b>IAM-based access</b>.",
      "Built <b>Jenkins CI/CD pipelines</b> with Git and Maven for <b>5+ banking applications</b>.",
      "Provisioned AWS infrastructure using <b>EC2, S3, IAM and VPC</b>.",
      "Automated provisioning and configuration with <b>Terraform and Ansible</b> across dev, staging and production.",
      "Containerized applications with <b>Docker</b> and supported <b>Kubernetes</b> deployment workflows.",
    ],
  },
};

// ================= POPUPS =================
const cards = document.querySelectorAll(".card");
const popup = document.getElementById("popup");
const popupTitle = document.getElementById("popup-title");
const popupContent = document.getElementById("popup-content");
const overlay = document.querySelector(".overlay");
const closeBtn = document.querySelector(".close-btn");

cards.forEach((card) => {
  if (card.classList.contains("experience-card")) return;
  card.addEventListener("click", () => {
    const skill = skillData[card.getAttribute("data-skill")];
    popupTitle.innerHTML = skill.title;
    popupContent.innerHTML = skill.points.map((p) => `<li>${p}</li>`).join("");
    popup.classList.add("active");
    overlay.classList.add("active");
  });
});

closeBtn.addEventListener("click", () => {
  popup.classList.remove("active");
  overlay.classList.remove("active");
});

const expCards = document.querySelectorAll(".experience-card");
const expPopup = document.getElementById("experience-popup");
const expTitle = document.getElementById("exp-title");
const expContent = document.getElementById("exp-content");
const expCloseBtn = document.querySelector(".exp-close-btn");

expCards.forEach((card) => {
  card.addEventListener("click", () => {
    const exp = experienceData[card.getAttribute("data-exp")];
    expTitle.innerHTML = exp.title;
    expContent.innerHTML = exp.points.map((p) => `<li>${p}</li>`).join("");
    expPopup.classList.add("active");
    overlay.classList.add("active");
  });
});

expCloseBtn.addEventListener("click", () => {
  expPopup.classList.remove("active");
  overlay.classList.remove("active");
});

overlay.addEventListener("click", () => {
  popup.classList.remove("active");
  expPopup.classList.remove("active");
  overlay.classList.remove("active");
});

// ================= CONTACT FORM =================
const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

contactForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const btn = contactForm.querySelector("button");
  btn.disabled = true;
  btn.textContent = "Sending...";
  formStatus.className = "form-status";
  formStatus.textContent = "";

  try {
    const res = await fetch(
      "https://formsubmit.co/ajax/spandanashetty2001@gmail.com",
      {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(contactForm),
      },
    );
    const data = await res.json();
    if (res.ok && String(data.success) === "true") {
      formStatus.textContent = "Thank you! Your message has been sent.";
      formStatus.classList.add("ok");
      contactForm.reset();
    } else {
      throw new Error(data.message || "Failed");
    }
  } catch (err) {
    formStatus.textContent =
      "Sorry, the message could not be sent. Please email me directly instead.";
    formStatus.classList.add("err");
  } finally {
    btn.disabled = false;
    btn.textContent = "Send Message";
  }
});
