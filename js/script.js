// Muestra u oculta un consejo al hacer clic en el botón.
const boton = document.getElementById("boton-consejo");
const consejo = document.getElementById("consejo-extra");

boton.addEventListener("click", function () {
    consejo.hidden = !consejo.hidden;

    if (consejo.hidden) {
        boton.textContent = "Mostrar consejo extra";
    } else {
        boton.textContent = "Ocultar consejo extra";
    }
});
