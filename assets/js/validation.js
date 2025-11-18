document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("contactForm");
    if(form){
        form.addEventListener("submit", function(e){
            e.preventDefault();
            let valid = true;
            form.querySelectorAll("[required]").forEach(input => {
                if(input.value.trim() === "") valid = false;
            });
            if(valid){
                alert("Form submitted successfully!");
                form.reset();
            } else {
                alert("Please fill all required fields.");
            }
        });
    }
});
