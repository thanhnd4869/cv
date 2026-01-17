// ============================================
// DATA LOADING
// ============================================

let data = null;

/**
 * Load CV data from JSON file
 */
async function loadData() {
  try {
    const response = await fetch("data/data.json");
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    data = await response.json();
    return data;
  } catch (error) {
    console.error("Error loading CV data:", error);
    // Fallback to empty data structure
    data = {
      personalInfo: { name: "Error Loading Data", title: "", details: {} },
      objective: [],
      education: [],
      workExperience: [],
      projects: [],
      skills: { technical: [], soft: "", office: "" },
      certifications: [],
      interests: "",
    };
    return data;
  }
}

// ============================================
// THEME FUNCTIONALITY
// ============================================

/**
 * Initialize theme toggle
 */
function initTheme() {
  const themeToggle = document.getElementById("themeToggle");
  const htmlElement = document.documentElement;

  // Check for saved theme preference or default to light mode
  const currentTheme = localStorage.getItem("theme") || "light";
  htmlElement.setAttribute("data-theme", currentTheme);

  // Set initial transform to ensure transition works on first click
  themeToggle.style.transform = "rotate(0deg)";

  // Toggle theme on button click
  themeToggle.addEventListener("click", function () {
    const currentTheme = htmlElement.getAttribute("data-theme");
    const newTheme = currentTheme === "light" ? "dark" : "light";

    htmlElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);

    // Add a subtle animation effect
    themeToggle.style.transform = "rotate(360deg)";
    setTimeout(() => {
      themeToggle.style.transform = "rotate(0deg)";
    }, 300);
  });
}

/**
 * Add smooth scroll behavior
 */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    });
  });
}

/**
 * Add fade-in animation on page load
 */
function initFadeInAnimation() {
  const cvContainer = document.querySelector(".cv-container");
  if (cvContainer) {
    cvContainer.style.opacity = "0";
    cvContainer.style.transform = "translateY(20px)";
    cvContainer.style.transition = "opacity 0.5s ease, transform 0.5s ease";

    setTimeout(() => {
      cvContainer.style.opacity = "1";
      cvContainer.style.transform = "translateY(0)";
    }, 100);
  }
}

// ============================================
// INITIALIZATION
// ============================================

async function init() {
  try {
    // Load templates first
    const templatesResponse = await fetch("templates.html");
    const templatesHtml = await templatesResponse.text();
    const container = document.getElementById("templates-container");
    container.innerHTML = templatesHtml;

    // Load CV data
    await loadData();

    // Render CV content
    renderHeader(data.personalInfo);
    renderAllSections(data);

    // Initialize features
    initTheme();
    initSmoothScroll();
    initFadeInAnimation();

    // Print functionality
    window.addEventListener("beforeprint", function () {
      console.log("Preparing to print CV...");
    });

    window.addEventListener("afterprint", function () {
      console.log("Print completed.");
    });
  } catch (error) {
    console.error("Initialization error:", error);
  }
}

document.addEventListener("DOMContentLoaded", init);
