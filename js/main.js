// =====================================
// JS PRINCIPAL DEL SITIO
// =====================================

// 1) Insertar automáticamente el año actual en el footer
const yearSpan = document.getElementById("year");
if (yearSpan) {
    const currentYear = new Date().getFullYear();
    yearSpan.textContent = currentYear;
}

// 2) (OPCIONAL) Desplazamiento suave al hacer clic en los enlaces de navegación
//    Esto mejora la experiencia de usuario cuando se navega a secciones internas.
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        const targetId = this.getAttribute("href");
        if (targetId && targetId.startsWith("#") && targetId.length > 1) {
            e.preventDefault();
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        }
    });
});

/*
   3) AQUÍ PUEDES AÑADIR FUTURAS FUNCIONALIDADES:
      - Menú móvil
      - Animaciones on scroll
      - Integración de trackers (por ejemplo, Google Analytics)
*/
