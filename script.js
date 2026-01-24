// ===== REVEAL ON SCROLL =====
const reveals = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  },
  { threshold: 0.15 }
);

reveals.forEach((reveal) => revealObserver.observe(reveal));


// ===== NAVBAR ACTIVE LINK ON SCROLL =====
const sections = document.querySelectorAll("section, header");
const navLinks = document.querySelectorAll(".nav-links li");

window.addEventListener("scroll", () => {
  let currentSection = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 150;
    const sectionHeight = section.offsetHeight;

    if (
      window.scrollY >= sectionTop &&
      window.scrollY < sectionTop + sectionHeight
    ) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach((li) => {
    li.classList.remove("active");
    const link = li.querySelector("a");

    if (link && link.getAttribute("href") === `#${currentSection}`) {
      li.classList.add("active");
    }
  });
});

const translations = {
  pt: {
    ".nav-about": "Sobre mim",
    ".nav-skills": "Habilidades",
    ".nav-projects": "Projetos",
    ".nav-education": "Formação Acadêmica",
    ".nav-certs": "Certificações",
    ".nav-contact": "Contato",

    ".hero-title": "Olá, eu sou Mateus Rocha",
    ".hero-description": "Estudante de Análise e Desenvolvimento de Sistemas com foco em análise de dados, utilizando SQL, Python e Power BI para transformar dados em insights claros e apoiar a tomada de decisão.",
    ".hero-btn-projects": "Ver projetos",
    ".hero-btn-cv": "Baixar CV",

    ".skills-title": "Minhas Habilidades",
    ".projects-title": "Meus Projetos",
    ".project-btn": "Ver no GitHub",
    ".education-title": "Formação Acadêmica",
    ".education-current": "Atualmente",

    ".contact-title": "Informações de Contato",
    ".contact-email-desc": "Envie um e-mail diretamente",
    ".contact-linkedin-desc": "Conecte-se comigo",

    ".footer-role": "Analista de Dados & Desenvolvedor",
    ".footer-rights": "Todos os direitos reservados."
  },

  en: {
    ".nav-about": "About me",
    ".nav-skills": "Skills",
    ".nav-projects": "Projects",
    ".nav-education": "Education",
    ".nav-certs": "Certifications",
    ".nav-contact": "Contact",

    ".hero-title": "Hi, I'm Mateus Rocha",
    ".hero-description": "Systems Analysis and Development student focused on data analysis, using SQL, Python, and Power BI to transform data into clear insights and support decision-making.",
    ".hero-btn-projects": "View projects",
    ".hero-btn-cv": "Download CV",

    ".skills-title": "My Skills",
    ".projects-title": "My Projects",
    ".project-btn": "View on GitHub",
    ".education-title": "Academic Background",
    ".education-current": "Present",

    ".contact-title": "Contact Information",
    ".contact-email-desc": "Send an email directly",
    ".contact-linkedin-desc": "Connect with me",

    ".footer-role": "Data Analyst & Developer",
    ".footer-rights": "All rights reserved."
  }
};

let currentLang = localStorage.getItem("lang") || "pt";

function applyTranslations(lang) {
  for (const selector in translations[lang]) {
    const el = document.querySelector(selector);
    if (el) {
      el.innerHTML = translations[lang][selector];
    }
  }
  localStorage.setItem("lang", lang);
  currentLang = lang;
  document.querySelector(".lang-btn").textContent = lang === "pt" ? "PT / EN" : "EN / PT";
}

// botão toggle
document.querySelector(".lang-btn").addEventListener("click", () => {
  const newLang = currentLang === "pt" ? "en" : "pt";
  applyTranslations(newLang);
});

// inicializa
applyTranslations(currentLang);
