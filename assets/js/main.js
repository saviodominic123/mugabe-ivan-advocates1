// =========================
// MAIN JS FOR SITE
// Handles: Sticky Header, Mobile Nav, Tabbed Sitemap, Footer Year
// =========================
document.addEventListener("DOMContentLoaded", () => {

  /* ---------------------------
     STICKY HEADER
  --------------------------- */
  const header = document.querySelector(".site-header");
  if (header) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        header.classList.add("scrolled");
      } else {
        header.classList.remove("scrolled");
      }
    });
  }

  /* ---------------------------
     HAMBURGER MOBILE NAV
  --------------------------- */
  const hamburger = document.querySelector(".hamburger");
  const mobileNav = document.querySelector(".nav--mobile");

  if (hamburger && mobileNav) {
    // Toggle mobile menu
    hamburger.addEventListener("click", () => {
      mobileNav.classList.toggle("open");
      hamburger.classList.toggle("is-active"); // optional if you want animated bars
      document.body.style.overflow = mobileNav.classList.contains("open") ? "hidden" : "";
    });

    // Close mobile menu if clicking outside links
    mobileNav.addEventListener("click", (e) => {
      if (e.target === mobileNav) {
        mobileNav.classList.remove("open");
        hamburger.classList.remove("is-active");
        document.body.style.overflow = "";
      }
    });
  }

  /* ---------------------------
     TABBED SITEMAP
  --------------------------- */
  const tabLinks = document.querySelectorAll(".tab-link");
  const tabContents = document.querySelectorAll(".tab-content");

  if (tabLinks.length && tabContents.length) {
    tabLinks.forEach(tab => {
      tab.addEventListener("click", () => {
        const targetId = tab.dataset.tab;

        // Remove active class from all
        tabLinks.forEach(t => t.classList.remove("active"));
        tabContents.forEach(c => c.classList.remove("active"));

        // Add active class to clicked tab
        tab.classList.add("active");
        const content = document.getElementById(targetId);
        if (content) content.classList.add("active");
      });
    });
  }

  /* ---------------------------
     DYNAMIC YEAR IN FOOTER
  --------------------------- */
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

});
