const text = "Soy desarrollador Full Stack con experiencia en proyectos personales. Me gusta construir interfaces limpias y funcionales. =)";
const target = document.getElementById("typed-text");
let i = 0;
function type() {
    if (i < text.length) {
        target.innerHTML += text.charAt(i);
        i++;
        setTimeout(type, 30); // velocidad de tipeo
    }
}

// Asegurate de ejecutar esto cuando el DOM esté cargado
window.addEventListener("DOMContentLoaded", () => {
    type();
});