// MAIN JS
document.addEventListener("DOMContentLoaded", () => {

  /* ---------------------------
     STICKY HEADER
  --------------------------- */
  const header = document.querySelector(".site-header");
  if(header) {
    window.addEventListener("scroll", () => {
      if(window.scrollY > 50) header.classList.add("scrolled");
      else header.classList.remove("scrolled");
    });
  }

  /* ---------------------------
     HAMBURGER MOBILE MENU
  --------------------------- */
  const hamburger = document.querySelector(".hamburger");
  const mobileNav = document.querySelector(".nav--mobile");

  if(hamburger && mobileNav) {
    hamburger.addEventListener("click", () => {
      mobileNav.classList.toggle("open");
      // animate hamburger bars
      hamburger.classList.toggle("active");
      // prevent scrolling when menu open
      document.body.style.overflow = mobileNav.classList.contains("open") ? "hidden" : "";
    });
  }

  /* Optional: close mobile menu when a link is clicked */
  const mobileLinks = document.querySelectorAll(".nav--mobile a");
  mobileLinks.forEach(link => {
    link.addEventListener("click", () => {
      mobileNav.classList.remove("open");
      hamburger.classList.remove("active");
      document.body.style.overflow = "";
    });
  });

  /* ---------------------------
     TABBED SITEMAP
  --------------------------- */
  const tabLinks = document.querySelectorAll(".tab-link");
  const tabContents = document.querySelectorAll(".tab-content");

  if(tabLinks.length && tabContents.length) {
    tabLinks.forEach(tab => {
      tab.addEventListener("click", () => {
        const targetId = tab.dataset.tab;

        tabLinks.forEach(t => t.classList.remove("active"));
        tabContents.forEach(c => c.classList.remove("active"));

        tab.classList.add("active");
        document.getElementById(targetId).classList.add("active");
      });
    });
  }

  /* ---------------------------
     DYNAMIC YEAR IN FOOTER
  --------------------------- */
  const yearEl = document.getElementById("year");
  if(yearEl) yearEl.textContent = new Date().getFullYear();

});
