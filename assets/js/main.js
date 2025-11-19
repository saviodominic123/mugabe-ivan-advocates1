// =========================
// MAIN JS FOR SITE
// Handles: Sticky Header, Mobile Nav, Tabbed Sitemap, Footer Year
// =========================
document.addEventListener("DOMContentLoaded", () => {

  /* ---------------------------
     STICKY HEADER
  --------------------------- */
  const header = document.querySelector(".site-header");
  if(header) {
    window.addEventListener("scroll", () => {
      if(window.scrollY > 50) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    });
  }

  /* ---------------------------
     MOBILE HAMBURGER TOGGLE
  --------------------------- */
  const hamburger = document.querySelector(".hamburger");
  const mobileNav = document.querySelector(".nav--mobile");
  const mobileClose = document.querySelector(".nav-close");

  if(hamburger && mobileNav && mobileClose) {
    const openNav = () => {
      mobileNav.classList.add("open");
      hamburger.setAttribute("aria-expanded", "true");
      document.body.style.overflow = "hidden";
    };
    const closeNav = () => {
      mobileNav.classList.remove("open");
      hamburger.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
    };

    hamburger.addEventListener("click", openNav);
    mobileClose.addEventListener("click", closeNav);
    mobileNav.addEventListener("click", e => { if(e.target === mobileNav) closeNav(); });
  }

  /* ---------------------------
     TABBED SITEMAP
  --------------------------- */
  const tabLinks = document.querySelectorAll(".tab-link");
  const tabContents = document.querySelectorAll(".tab-content");

  if(tabLinks.length && tabContents.length) {
    tabLinks.forEach(tab => {
      tab.addEventListener("click", () => {
        const targetId = tab.dataset.tab;
        if(!targetId) return;

        // Remove active from all
        tabLinks.forEach(t => t.classList.remove("active"));
        tabContents.forEach(c => c.classList.remove("active"));

        // Activate selected tab and content
        tab.classList.add("active");
        const content = document.getElementById(targetId);
        if(content) content.classList.add("active");
      });
    });
  }

  /* ---------------------------
     FOOTER YEAR
  --------------------------- */
  const yearEl = document.getElementById("year");
  if(yearEl) yearEl.textContent = new Date().getFullYear();

});
