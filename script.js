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
