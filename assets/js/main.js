// =========================
// MAIN JS FOR SITE
// Handles: Sticky Header, Mobile Nav, Tabbed Sitemap, Footer Year, Hamburger
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

  if(hamburger && mobileNav) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active"); // animate hamburger to X
      mobileNav.classList.toggle("open");   // show/hide mobile nav
      document.body.style.overflow = mobileNav.classList.contains("open") ? "hidden" : "";
    });

    // Close mobile nav when clicking a link
    mobileNav.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => {
        mobileNav.classList.remove("open");
        hamburger.classList.remove("active");
        document.body.style.overflow = "";
      });
    });

    // Optional: close if clicking outside the menu
    mobileNav.addEventListener("click", e => {
      if(e.target === mobileNav) {
        mobileNav.classList.remove("open");
        hamburger.classList.remove("active");
        document.body.style.overflow = "";
      }
    });
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

        tabLinks.forEach(t => t.classList.remove("active"));
        tabContents.forEach(c => c.classList.remove("active"));

        tab.classList.add("active");
        const content = document.getElementById(targetId);
        if(content) content.classList.add("active");
      });
    });
  }

  /* ---------------------------
     DYNAMIC YEAR IN FOOTER
  --------------------------- */
  const yearEl = document.getElementById("year");
  if(yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

});
