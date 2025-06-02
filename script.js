// script.js

// 1. Mostrar mensaje de bienvenida una sola vez por sesión
if (sessionStorage.getItem("bienvenida") !== "mostrada") {
  alert("¡Bienvenido al sitio de básquet!");
  sessionStorage.setItem("bienvenida", "mostrada");
}

// 2. Validación básica del formulario de contacto
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", function (e) {
      const nombre = document.getElementById("nombre").value.trim();
      const email = document.getElementById("email").value.trim();
      const mensaje = document.getElementById("mensaje").value.trim();

      if (!nombre || !email || !mensaje) {
        e.preventDefault();
        alert("Por favor, completa todos los campos antes de enviar.");
      }
    });
  }

  // 3. Resaltar el enlace actual del menú
  const links = document.querySelectorAll("nav a");
  const current = location.pathname.split("/").pop();

  links.forEach((link) => {
    if (link.getAttribute("href") === current) {
      link.classList.add("activo");
    }
  });
});
