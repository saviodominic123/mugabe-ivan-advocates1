document.addEventListener("DOMContentLoaded", () => {
    const modals = document.querySelectorAll(".modal");
    const triggers = document.querySelectorAll("[data-modal]");
    const closeButtons = document.querySelectorAll(".modal-close");

    triggers.forEach(btn => {
        btn.addEventListener("click", () => {
            const modal = document.querySelector(btn.dataset.modal);
            if(modal) modal.style.display = "block";
        });
    });

    closeButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            btn.closest(".modal").style.display = "none";
        });
    });

    window.addEventListener("click", e => {
        modals.forEach(modal => {
            if(e.target === modal) modal.style.display = "none";
        });
    });
});
