// Validación formulario
function validarFormulario() {
  const nombre = document.getElementById("nombre").value.trim();
  const correo = document.getElementById("correo").value.trim();
  const mensaje = document.querySelector("textarea").value.trim();

  if (!nombre || !correo || !mensaje) {
    alert("Por favor, completa todos los campos antes de enviar.");
    return false;
  }

  alert(`¡Gracias, ${nombre}! Tu mensaje ha sido enviado con éxito.`);
  return true;
}

// Modo oscuro / claro
const btnModo = document.getElementById("btnModo");
btnModo.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  btnModo.textContent = document.body.classList.contains("dark") ? "Modo Claro" : "Modo Oscuro";
});

// Botón volver arriba
const btnUp = document.getElementById("btnUp");
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    btnUp.style.display = "block";
  } else {
    btnUp.style.display = "none";
  }
});

btnUp.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
