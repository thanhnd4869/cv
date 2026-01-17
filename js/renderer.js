// ============================================
// TEMPLATE-BASED RENDERER
// ============================================

/**
 * Clone and populate a template with data
 */
function useTemplate(templateId, data) {
  const template = document.getElementById(templateId);
  if (!template) {
    console.error(`Template not found: ${templateId}`);
    return null;
  }

  const clone = template.content.cloneNode(true);

  // Fill in data fields
  if (data) {
    // Handle simple fields
    clone.querySelectorAll("[data-field]").forEach((element) => {
      const field = element.getAttribute("data-field");
      const value = data[field];

      if (value !== undefined) {
        if (element.tagName === "IMG") {
          element.src = value;
          element.alt = data.name || "";
          element.onerror = function () {
            this.style.display = "none";
          };
        } else {
          element.textContent = value;
        }
      }
    });
  }

  return clone;
}

/**
 * Populate a list in template
 */
function populateList(container, items) {
  if (!items || items.length === 0) return;

  items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    container.appendChild(li);
  });
}

/**
 * Render header section
 */
function renderHeader(personalInfo) {
  const header = document.querySelector(".cv-header");
  if (!header) return;

  const headerContent = useTemplate("header-template", {
    profileImage: personalInfo.profileImage,
    name: personalInfo.name,
    title: personalInfo.title,
  });

  // Render personal info items
  const personalInfoContainer = headerContent.querySelector(".personal-info");
  const labels = {
    dob: "Dob:",
    gender: "Gender:",
    phone: "Phone:",
    email: "Email:",
    website: "Website:",
    address: "Address:",
  };

  Object.keys(labels).forEach((key) => {
    const itemContent = useTemplate("info-item-template", {
      label: labels[key],
      value: personalInfo.details[key],
    });
    personalInfoContainer.appendChild(itemContent);
  });

  header.appendChild(headerContent);
}

/**
 * Render a section with list content
 */
function renderListSection(title, items) {
  const section = useTemplate("section-template", { title });
  const content = section.querySelector("[data-content]");

  const ul = document.createElement("ul");
  populateList(ul, items);
  content.appendChild(ul);

  return section;
}

/**
 * Render timeline section (education, work, projects)
 */
function renderTimelineSection(title, items, type) {
  const section = useTemplate("section-template", { title });
  const content = section.querySelector("[data-content]");

  items.forEach((item) => {
    // Clone timeline template
    const timelineItem = useTemplate("timeline-template", {
      period: item.period || item.date,
    });

    const timelineContent = timelineItem.querySelector("[data-content]");

    // Choose appropriate content template
    let contentTemplate;
    if (type === "education") {
      contentTemplate = useTemplate("education-content-template", item);
    } else if (type === "work") {
      contentTemplate = useTemplate("work-content-template", {
        company: item.company,
        position: item.position,
      });
      const ul = contentTemplate.querySelector("[data-list]");
      populateList(ul, item.responsibilities);
    } else if (type === "project") {
      contentTemplate = useTemplate("project-content-template", {
        name: item.name,
        position: item.position,
        teamSize: item.teamSize,
        technologies: item.technologies,
      });
      const descList = contentTemplate.querySelectorAll("[data-list]")[0];
      const respList = contentTemplate.querySelectorAll("[data-list]")[1];
      populateList(descList, item.description);
      populateList(respList, item.responsibilities);
    }

    timelineContent.appendChild(contentTemplate);
    content.appendChild(timelineItem);
  });

  return section;
}

/**
 * Render skills section
 */
function renderSkillsSection(skills) {
  const section = useTemplate("section-template", { title: "SKILLS" });
  const content = section.querySelector("[data-content]");

  const skillsGrid = document.createElement("div");
  skillsGrid.className = "skills-grid";

  // Technical skills
  const techSkill = useTemplate("skill-item-template", {
    label: "Technical skills",
  });
  const techContent = techSkill.querySelector("[data-content]");
  const techList = document.createElement("ul");
  populateList(techList, skills.technical);
  techContent.appendChild(techList);
  skillsGrid.appendChild(techSkill);

  // Soft skills
  const softSkill = useTemplate("skill-item-template", {
    label: "Soft skills",
  });
  softSkill.querySelector("[data-content]").textContent = skills.soft;
  skillsGrid.appendChild(softSkill);

  // Office skills
  const officeSkill = useTemplate("skill-item-template", {
    label: "Office",
  });
  officeSkill.querySelector("[data-content]").textContent = skills.office;
  skillsGrid.appendChild(officeSkill);

  content.appendChild(skillsGrid);
  return section;
}

/**
 * Render certifications section
 */
function renderCertificationsSection(certifications) {
  const section = useTemplate("section-template", {
    title: "CERTIFICATIONS",
  });
  const content = section.querySelector("[data-content]");

  certifications.forEach((cert) => {
    const certItem = useTemplate("certification-template", cert);
    content.appendChild(certItem);
  });

  return section;
}

/**
 * Render all sections
 */
function renderAllSections(data) {
  const container = document.querySelector(".cv-container");
  if (!container) return;

  // Append all sections
  container.appendChild(renderListSection("OBJECTIVE", data.objective));
  container.appendChild(
    renderTimelineSection("EDUCATION", data.education, "education"),
  );
  container.appendChild(
    renderTimelineSection("WORK EXPERIENCE", data.workExperience, "work"),
  );
  container.appendChild(
    renderTimelineSection("PROJECTS", data.projects, "project"),
  );
  container.appendChild(renderSkillsSection(data.skills));
  container.appendChild(renderCertificationsSection(data.certifications));

  // Interests
  const interestsSection = useTemplate("section-template", {
    title: "INTERESTS",
  });
  const interestsContent = interestsSection.querySelector("[data-content]");
  const p = document.createElement("p");
  p.textContent = data.interests;
  interestsContent.appendChild(p);
  container.appendChild(interestsSection);
}
