// ==========================
// SCROLL ANIMATIONS
// ==========================
const animatedElements = document.querySelectorAll('.fade-in, .practice-card, .team-card, .article-card');

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

animatedElements.forEach(el => {
    el.classList.add('fade-in');
    observer.observe(el);
});
