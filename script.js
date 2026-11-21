document.addEventListener("DOMContentLoaded", () => {
  // ==========================================
  // 1. TYPING ANIMATION
  // ==========================================

  const typingElement = document.querySelector(".typing-text");
  const typingText = "DevOps Engineer | AWS | Kubernetes | AI Automation";

  let typeIndex = 0;

  if (typingElement) {
    function typeEffect() {
      typingElement.textContent = typingText.slice(0, typeIndex);

      typeIndex++;

      if (typeIndex <= typingText.length) {
        setTimeout(typeEffect, 75);
      }
    }

    typeEffect();
  }

  // ==========================================
  // 2. SKILLS DATA
  // ==========================================

  const skillData = {
    aws: {
      title: "AWS Cloud",
      points: [
        "Managed AWS services including EC2, S3, ECR, RDS, IAM, VPC, Lambda, CloudWatch and CloudFormation.",

        "Worked with CodeCommit, CodeBuild, CodePipeline, Systems Manager Session Manager and AWS License Manager.",

        "Created IAM roles and permission policies using CloudFormation, with templates maintained in CodeCommit.",
      ],
    },

    docker: {
      title: "Containers & Orchestration",
      points: [
        "Containerized applications using Docker and supported Kubernetes deployments on Amazon EKS.",

        "Automated base image build, version selection, tagging and publishing workflows using Docker and Amazon ECR.",

        "Worked with image and artifact management using Amazon ECR, Amazon S3 and Nexus Repository Manager.",
      ],
    },

    kubernetes: {
      title: "CI/CD & Build Automation",
      points: [
        "Designed and maintained 5–10 Jenkins CI/CD pipelines using Groovy, Git and YAML.",

        "Automated builds, artifact management and deployment workflows for banking applications.",

        "Worked with AWS CodePipeline, CodeBuild, CodeCommit, Git and Maven.",

        "Built pipelines to package, version and publish artifacts to Nexus Repository Manager.",
      ],
    },

    jenkins: {
      title: "Monitoring, Logging & Enterprise Tools",
      points: [
        "Supported monitoring and troubleshooting using AWS CloudWatch and Splunk.",

        "Worked with Splunk Universal Forwarder, Tanium Client, Grafana and Prometheus.",

        "Automated enterprise application deployment using Jenkins and Nexus.",

        "Worked with Microsoft Active Directory domain joining and secure access management.",
      ],
    },

    linux: {
      title: "Operating Systems & Administration",
      points: [
        "Worked with Linux (Ubuntu) and Windows Server environments.",

        "Developed Bash/Shell scripts for infrastructure and operational automation.",

        "Supported server configuration, troubleshooting and deployment workflows.",
      ],
    },

    ai: {
      title: "Programming & Intelligent Automation",
      points: [
        "Developed automation scripts using Python, Bash/Shell and Groovy.",

        "Integrated Amazon Q with Amazon Bedrock Agents and Blue Prism for application error analysis and resolution recommendations.",

        "Developed Python Flask REST APIs with IAM-based access and workflow orchestration.",
      ],
    },
  };

  // ==========================================
  // 3. EXPERIENCE DATA
  // ==========================================

  const experienceData = {
    accenture: {
      title: "DevOps Engineer — Aug 2025 to Present",

      points: [
        "Designed and maintained 5–10 Jenkins CI/CD pipelines using Groovy, Git and YAML for banking application builds, artifact management and deployments.",

        "Automated provisioning and configuration of 10–30 AWS EC2 instances through parameterized Jenkins jobs.",

        "Integrated EC2, Amazon RDS, Microsoft Active Directory and Nexus for provisioning, database connectivity, domain joining and application installation.",

        "Automated deployments of Splunk Universal Forwarder, Tanium Client, Microsoft Edge, Firefox, Blue Prism and UiPath.",

        "Automated container base image upgrades using Docker and Amazon ECR, reducing manual upgrade effort by an estimated 50–70%.",

        "Automated Terraform and Ansible provisioning, reducing environment setup from over 3 hours to under 15 minutes.",

        "Contributed to an estimated 30–40% reduction in deployment time through automation.",
      ],
    },

    bedrock: {
      title: "Packaged App Development Associate — Feb 2024 to Aug 2025",

      points: [
        "Integrated Amazon Q with Amazon Bedrock Agents and Blue Prism for application error analysis and resolution recommendations.",

        "Developed Python Flask REST APIs connecting Blue Prism bots with Amazon Bedrock services, using secure IAM-based access.",

        "Developed Jenkins CI/CD pipelines integrated with Git and Maven for 5+ banking applications.",

        "Provisioned AWS infrastructure using EC2, S3, IAM and VPC.",

        "Automated infrastructure provisioning with Terraform and Ansible across development, staging and production.",

        "Containerized applications using Docker and supported Kubernetes deployment workflows.",
      ],
    },
  };

  // ==========================================
  // 4. PROJECT DETAILS
  // ==========================================

  const projectData = {
    "ci-cd": {
      kicker: "CI/CD · Banking Applications",

      title: "Jenkins CI/CD & Artifact Automation",

      summary:
        "Built Jenkins automation to streamline application build, release, artifact packaging and deployment workflows for banking applications.",

      work: [
        "Designed and maintained 5–10 Jenkins pipelines using Groovy, Git and YAML.",

        "Integrated Git and Maven into build and release workflows supporting 5+ banking applications.",

        "Built pipelines to package, version and publish artifacts to Nexus Repository Manager.",

        "Streamlined repository authentication and artifact management.",
      ],

      tools: [
        "Jenkins",
        "Groovy",
        "Git",
        "Maven",
        "YAML",
        "Nexus Repository Manager",
      ],

      impact:
        "Outcome: Improved consistency across build and release workflows and reduced manual intervention in artifact management.",
    },

    ec2: {
      kicker: "AWS · Infrastructure Automation",

      title: "Automated EC2 Provisioning & Server Configuration",

      summary:
        "Developed Jenkins automation to provision and configure AWS servers for enterprise banking workloads.",

      work: [
        "Automated provisioning and configuration of 10–30 EC2 instances through parameterized Jenkins jobs.",

        "Handled AMI selection, storage, security groups and post-provisioning setup.",

        "Integrated EC2, Amazon RDS, Microsoft Active Directory domain joining and Nexus Repository Manager.",

        "Automated enterprise application installation as part of server setup.",
      ],

      tools: [
        "AWS EC2",
        "Amazon RDS",
        "Jenkins",
        "Microsoft Active Directory",
        "Nexus",
      ],

      impact:
        "Outcome: Standardized repeatable server provisioning and reduced manual setup activities.",
    },

    images: {
      kicker: "Containers · Image Lifecycle",

      title: "Container Base Image Upgrade Automation",

      summary:
        "Automated base image upgrade workflows for Alpine Linux, Splunk, Tanium and database cronjob components.",

      work: [
        "Implemented version selection for base image upgrade workflows.",

        "Automated Docker image building, tagging and publishing to Amazon ECR.",

        "Retrieved application packages and version tags from Amazon S3 using Jenkins.",

        "Automated S3 cleanup after image publishing.",
      ],

      tools: ["Docker", "Amazon ECR", "Amazon S3", "Jenkins", "Alpine Linux"],

      impact:
        "Resume-reported outcome: Reduced manual base image upgrade effort by an estimated 50–70%.",
    },

    iac: {
      kicker: "Infrastructure as Code",

      title: "Cloud Infrastructure Provisioning with IaC",

      summary:
        "Automated AWS infrastructure provisioning and configuration management across development, staging and production.",

      work: [
        "Used Terraform and Ansible for infrastructure provisioning and configuration.",

        "Created custom AWS IAM roles and permission policies using CloudFormation.",

        "Maintained infrastructure templates in AWS CodeCommit.",

        "Supported EC2, S3, IAM, VPC, RDS, Lambda, ECR and CloudWatch.",
      ],

      tools: [
        "Terraform",
        "Ansible",
        "AWS CloudFormation",
        "AWS IAM",
        "CodeCommit",
      ],

      impact:
        "Resume-reported outcome: Reduced environment setup from over 3 hours to under 15 minutes (over 90% reduction).",
    },

    bedrock: {
      kicker: "AI · Intelligent Automation",

      title: "AI-assisted Application Error Analysis",

      summary:
        "Integrated Amazon Q, Amazon Bedrock Agents and Blue Prism to support application error analysis and resolution recommendations.",

      work: [
        "Connected Blue Prism bots with Amazon Bedrock services.",

        "Developed Python Flask REST APIs for communication between bots and Bedrock.",

        "Implemented IAM-based access controls and workflow orchestration.",

        "Supported application error analysis and resolution recommendations.",
      ],

      tools: [
        "Amazon Q",
        "Amazon Bedrock Agents",
        "Blue Prism",
        "Python",
        "Flask REST API",
        "AWS IAM",
      ],

      impact:
        "Outcome: Connected RPA workflows with generative AI services to support application troubleshooting.",
    },

    "enterprise-apps": {
      kicker: "Enterprise Automation",

      title: "Enterprise Application Installation Automation",

      summary:
        "Automated deployment of endpoint and enterprise applications through Jenkins and Nexus-based workflows.",

      work: [
        "Automated deployment of Splunk Universal Forwarder and Tanium Client.",

        "Automated installation of Microsoft Edge, Firefox, Blue Prism and UiPath.",

        "Integrated Jenkins automation with Nexus for package retrieval and installation.",

        "Supported standardized Windows AMIs with Microsoft Office Professional.",
      ],

      tools: [
        "Jenkins",
        "Nexus",
        "Splunk",
        "Tanium",
        "Blue Prism",
        "UiPath",
        "Windows Server",
      ],

      impact:
        "Outcome: Standardized enterprise application setup and reduced repetitive manual installation work.",
    },
  };

  // ==========================================
  // 5. POPUP MANAGEMENT
  // ==========================================

  const overlay = document.querySelector(".overlay");

  const popupIds = ["popup", "experience-popup", "project-popup"];

  function closeAllPopups() {
    popupIds.forEach((id) => {
      document.getElementById(id)?.classList.remove("active");
    });

    overlay?.classList.remove("active");
  }

  // ==========================================
  // 6. SKILLS & EXPERIENCE POPUPS
  // ==========================================

  function openListPopup(popupId, titleId, listId, data) {
    if (!data) return;

    const popup = document.getElementById(popupId);
    const title = document.getElementById(titleId);
    const list = document.getElementById(listId);

    if (!popup || !title || !list) return;

    title.textContent = data.title;

    list.replaceChildren();

    data.points.forEach((point) => {
      const li = document.createElement("li");

      li.textContent = point;

      list.appendChild(li);
    });

    closeAllPopups();

    popup.classList.add("active");

    overlay?.classList.add("active");
  }

  // Skills popup

  document.querySelectorAll(".card[data-skill]").forEach((card) => {
    card.addEventListener("click", () => {
      openListPopup(
        "popup",
        "popup-title",
        "popup-content",
        skillData[card.dataset.skill],
      );
    });
  });

  // Experience popup

  document.querySelectorAll(".experience-card[data-exp]").forEach((card) => {
    card.addEventListener("click", () => {
      openListPopup(
        "experience-popup",
        "exp-title",
        "exp-content",
        experienceData[card.dataset.exp],
      );
    });
  });

  // ==========================================
  // 7. PROJECT POPUPS
  // ==========================================

  function openProject(key) {
    const data = projectData[key];

    if (!data) return;

    const popup = document.getElementById("project-popup");

    if (!popup) return;

    document.getElementById("project-popup-kicker").textContent = data.kicker;

    document.getElementById("project-popup-title").textContent = data.title;

    document.getElementById("project-popup-summary").textContent = data.summary;

    // Project responsibilities

    const workList = document.getElementById("project-popup-work");

    workList.replaceChildren();

    data.work.forEach((item) => {
      const li = document.createElement("li");

      li.textContent = item;

      workList.appendChild(li);
    });

    // Technologies

    const toolsContainer = document.getElementById("project-popup-tools");

    toolsContainer.replaceChildren();

    data.tools.forEach((tool) => {
      const span = document.createElement("span");

      span.textContent = tool;

      toolsContainer.appendChild(span);
    });

    // Project impact

    document.getElementById("project-popup-impact").textContent = data.impact;

    closeAllPopups();

    popup.classList.add("active");

    overlay?.classList.add("active");
  }

  // Project button clicks

  document.querySelectorAll("[data-project-open]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.stopPropagation();

      openProject(button.dataset.projectOpen);
    });
  });

  // Entire project card clickable

  document.querySelectorAll(".experience-project").forEach((card) => {
    card.addEventListener("click", (event) => {
      if (event.target.closest("button, a")) return;

      openProject(card.dataset.project);
    });

    // Keyboard accessibility

    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();

        openProject(card.dataset.project);
      }
    });
  });

  // ==========================================
  // 8. CLOSE POPUPS
  // ==========================================

  document
    .querySelectorAll(".close-btn, .exp-close-btn, .project-close-btn")
    .forEach((button) => {
      button.addEventListener("click", closeAllPopups);
    });

  // Close on overlay click

  overlay?.addEventListener("click", closeAllPopups);

  // Close on Escape key

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeAllPopups();
    }
  });

  // ==========================================
  // 9. CONTACT FORM
  // ==========================================

  const contactForm = document.getElementById("contact-form");

  const contactStatus = document.getElementById("contact-status");

  const contactSubmit = document.getElementById("contact-submit");

  contactForm?.addEventListener("submit", async (event) => {
    event.preventDefault();

    if (!contactForm.reportValidity()) return;

    contactSubmit.disabled = true;

    contactSubmit.textContent = "Sending...";

    contactStatus.textContent = "";

    contactStatus.classList.remove("error");

    try {
      const response = await fetch(contactForm.action, {
        method: "POST",

        body: new FormData(contactForm),

        headers: {
          Accept: "application/json",
        },
      });

      const result = await response.json();

      if (
        !response.ok ||
        result.success === false ||
        result.success === "false"
      ) {
        throw new Error(result.message || "Message could not be sent.");
      }

      // Success message

      contactStatus.textContent =
        "Thanks! Your message has been sent successfully.";

      contactForm.reset();
    } catch (error) {
      // Error message

      contactStatus.textContent =
        "We couldn't send your message. Please email Spandanashetty2001@gmail.com directly.";

      contactStatus.classList.add("error");
    } finally {
      contactSubmit.disabled = false;

      contactSubmit.textContent = "Send Message";
    }
  });
});
