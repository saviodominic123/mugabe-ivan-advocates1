document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const mobileNav = document.querySelector(".nav--mobile");

  if (hamburger && mobileNav) {
    hamburger.addEventListener("click", () => {
      mobileNav.classList.toggle("open");
      hamburger.classList.toggle("active");
      document.body.style.overflow = mobileNav.classList.contains("open") ? "hidden" : "";
    });
  }

  const mobileLinks = document.querySelectorAll(".nav--mobile a");
  mobileLinks.forEach(link => {
    link.addEventListener("click", () => {
      mobileNav.classList.remove("open");
      hamburger.classList.remove("active");
      document.body.style.overflow = "";
    });
  });

  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
