// ========================= script.js =========================

// Typing Animation

const text = "DevOps Engineer | AWS | Kubernetes | AI Automation";

let index = 0;

function typeEffect() {
  document.querySelector(".typing-text").innerHTML = text.slice(0, index);

  index++;

  if (index <= text.length) {
    setTimeout(typeEffect, 100);
  }
}

typeEffect();

// ================= SKILL DATA =================

const skillData = {
  aws: {
    title: "AWS Cloud",

    points: [
      "Managed EC2, S3, IAM, Lambda, CloudFormation & CloudWatch",

      "Worked with Kubernetes deployments in AWS EKS",

      "Built Jenkins & GitLab CI/CD pipelines",

      "Automated infrastructure using Terraform & CloudFormation",

      "Integrated Amazon Bedrock & Amazon Q",

      "Worked with CodeBuild, CodeDeploy & CodePipeline",

      "Managed deployment repositories in CodeCommit",
    ],
  },

  docker: {
    title: "Containerization",

    points: [
      "Built and managed Docker container images for application deployment and automation workflows.",

      "Deployed and managed containerized applications using Kubernetes on Amazon EKS.",

      "Stored and maintained Docker images in Amazon ECR for centralized container management.",

      "Worked on container orchestration, scaling, and deployment automation within Kubernetes environments.",

      "Supported container-based CI/CD deployment workflows for enterprise applications.",
    ],
  },

  kubernetes: {
    title: "CI/CD : Jenkins, GitLab, GitHub",

    points: [
      "Built and maintained CI/CD pipelines using Jenkins, GitLab CI/CD, and AWS DevOps services.",

      "Managed source code repositories and version control using AWS CodeCommit and GitLab.",

      "Automated application build and deployment processes using AWS CodeBuild.",

      "Implemented deployment workflows using AWS CodeDeploy and AWS CodePipeline.",

      "Integrated CI/CD pipelines with Docker, Kubernetes, and Amazon EKS deployment environments.",

      "Automated infrastructure provisioning and deployment activities through pipeline-based workflows.",
    ],
  },

  jenkins: {
    title: "Monitoring(Kibana, Grafana, CloudWatch) & Tool(Jira, Confluence)",

    points: [
      "Configured and monitored application and infrastructure logs using AWS CloudWatch, Kibana, and Grafana.",

      "Implemented monitoring dashboards, alerting, and performance tracking for cloud environments and applications.",

      "Analyzed system logs and metrics to support troubleshooting and operational monitoring activities.",

      "Used Jira for task tracking, sprint management, and project collaboration activities.",

      "Utilized Confluence for documentation, knowledge sharing, and operational process management.",
    ],
  },

  linux: {
    title: "Operating System",

    points: [
      "Performed Linux server administration",

      "Worked on shell scripting and automation",

      "Managed deployments, upgrades in Linux environments",

      "Handled troubleshooting and operational support",

      "Worked with Ubuntu cloud systems",
    ],
  },

  ai: {
    title: "AI Automation Experience",

    points: [
      "Developed and maintained automation scripts using Bash and Python for deployment, provisioning, and operational tasks.",

      "Worked with YAML and Groovy for CI/CD pipeline configuration and automation workflows.",

      "Created and managed SQL queries for data validation, reporting, and database operations.",

      "Supported automation and infrastructure management through scripting and configuration-based development.",
    ],
  },
};

// ================= EXPERIENCE DATA =================

const experienceData = {
  accenture: {
    title: "DevOps engineer (Packaged App Devlopment Analyst)",

    points: [
      "Cloud Infrastructure Management: Managed AWS cloud environments using EC2, S3, IAM, Lambda, CloudWatch, EKS, and SQS.",

      "CI/CD Pipeline Automation: Designed and maintained Jenkins CI/CD pipelines using Groovy, YAML, Python, and GitLab.",

      "Infrastructure as Code (IaC): Automated infrastructure provisioning using Terraform and AWS CloudFormation.",

      "Containerization & Kubernetes: Deployed and managed Docker and Kubernetes workloads within AWS EKS.",

      "Monitoring & Logging: Implemented monitoring and logging using CloudWatch, Grafana, and Kibana.",

      "AWS DevOps Services: Worked with CodeCommit, CodeBuild, CodeDeploy, and CodePipeline for deployment automation.",

      "Automation & Provisioning: Automated EC2 provisioning and environment setup through Jenkins and GitLab repositories.",

      "Linux Administration: Performed Linux/Ubuntu administration, shell scripting, troubleshooting, and operational support.",
    ],
  },

  bedrock: {
    title: "Packaged App Development Associate      2024-Aug 2025",

    points: [
      "Completed AWS & DevOps training focused on cloud infrastructure, CI/CD, Kubernetes, and automation.",

      "Developed GitLab automation scripts to provision EC2 instances and automate Blue Prism environment setup.",

      "Integrated Jenkins jobs with GitLab repositories to enable automated infrastructure provisioning on user requests.",

      "Created and configured UiPath automation jobs and deployed execution workflows using AWS EKS clusters.",

      "Built Kubernetes-based automation workflows enabling UiPath job execution without manual intervention.",
    ],
  },
};

// ================= SKILL POPUP =================

const cards = document.querySelectorAll(".card");

const popup = document.getElementById("popup");

const popupTitle = document.getElementById("popup-title");

const popupContent = document.getElementById("popup-content");

const overlay = document.querySelector(".overlay");

const closeBtn = document.querySelector(".close-btn");

// Open Skill Popup

cards.forEach((card) => {
  if (card.classList.contains("experience-card")) return;

  card.addEventListener("click", () => {
    const skill = card.getAttribute("data-skill");

    popupTitle.innerHTML = skillData[skill].title;

    popupContent.innerHTML = "";

    skillData[skill].points.forEach((point) => {
      popupContent.innerHTML += `<li>${point}</li>`;
    });

    popup.classList.add("active");

    overlay.classList.add("active");
  });
});

// Close Skill Popup

closeBtn.addEventListener("click", () => {
  popup.classList.remove("active");

  overlay.classList.remove("active");
});

// ================= EXPERIENCE POPUP =================

const expCards = document.querySelectorAll(".experience-card");

const expPopup = document.getElementById("experience-popup");

const expTitle = document.getElementById("exp-title");

const expContent = document.getElementById("exp-content");

const expCloseBtn = document.querySelector(".exp-close-btn");

// Open Experience Popup

expCards.forEach((card) => {
  card.addEventListener("click", () => {
    const exp = card.getAttribute("data-exp");

    expTitle.innerHTML = experienceData[exp].title;

    expContent.innerHTML = "";

    experienceData[exp].points.forEach((point) => {
      expContent.innerHTML += `<li>${point}</li>`;
    });

    expPopup.classList.add("active");

    overlay.classList.add("active");
  });
});

// Close Experience Popup

expCloseBtn.addEventListener("click", () => {
  expPopup.classList.remove("active");

  overlay.classList.remove("active");
});

// Overlay Close

overlay.addEventListener("click", () => {
  popup.classList.remove("active");

  expPopup.classList.remove("active");

  overlay.classList.remove("active");
});
