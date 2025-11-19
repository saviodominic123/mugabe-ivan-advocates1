document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("navToggle");
  const mobileNav = document.getElementById("mobileNav");
  const navClose = document.getElementById("navClose");

  hamburger.addEventListener("click", () => {
    mobileNav.classList.toggle("open");
    hamburger.classList.toggle("active");
    document.body.style.overflow = mobileNav.classList.contains("open") ? "hidden" : "";
  });

  navClose.addEventListener("click", () => {
    mobileNav.classList.remove("open");
    hamburger.classList.remove("active");
    document.body.style.overflow = "";
  });

  document.querySelectorAll(".nav--mobile a").forEach(link => {
    link.addEventListener("click", () => {
      mobileNav.classList.remove("open");
      hamburger.classList.remove("active");
      document.body.style.overflow = "";
    });
  });

  // Dynamic year
  const yearEl = document.getElementById("year");
  if(yearEl) yearEl.textContent = new Date().getFullYear();
});
