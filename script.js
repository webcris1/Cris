JavaScript for interactive functionality
document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll("nav ul li a");
    links.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = link.getAttribute("href").substr(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
});
