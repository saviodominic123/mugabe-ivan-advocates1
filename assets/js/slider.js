// Basic slider template
document.addEventListener("DOMContentLoaded", () => {
    const sliders = document.querySelectorAll(".slider");
    sliders.forEach(slider => {
        let index = 0;
        const slides = slider.querySelectorAll(".slide");
        setInterval(() => {
            slides.forEach((s,i) => s.style.display = (i===index ? "block":"none"));
            index = (index + 1) % slides.length;
        }, 5000);
    });
});
