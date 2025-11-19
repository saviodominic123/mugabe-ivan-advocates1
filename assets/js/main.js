// =========================
// MAIN JS FOR SITE
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
     MOBILE HAMBURGER MENU
  --------------------------- */
  const hamburger = document.querySelector(".hamburger");
  const mobileNav = document.querySelector(".nav--mobile");

  if(hamburger && mobileNav) {
    hamburger.addEventListener("click", () => {
      mobileNav.classList.toggle("open");
      hamburger.classList.toggle("open"); // optional: animate bars
      // prevent body scroll when menu open
      if(mobileNav.classList.contains("open")){
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "";
      }
    });

    // Close mobile menu when clicking a link
    const mobileLinks = document.querySelectorAll(".nav--mobile a");
    mobileLinks.forEach(link => {
      link.addEventListener("click", () => {
        mobileNav.classList.remove("open");
        hamburger.classList.remove("open");
        document.body.style.overflow = "";
      });
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

        // Remove active class from all tabs and contents
        tabLinks.forEach(t => t.classList.remove("active"));
        tabContents.forEach(c => c.classList.remove("active"));

        // Add active to clicked tab and its content
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
