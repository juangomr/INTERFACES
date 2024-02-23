document.addEventListener("DOMContentLoaded", function () {
    var titulos = document.querySelectorAll(".titulo, .subtitulo, .slogan, .container2Video, .parrafo6, .card-description, .card-icons, .textoContainer4, .parrafoContainer4, .container5, .container6int, .container8ext, .container6extGris");

    function fadeIn() {
        titulos.forEach(function (titulo) {
            var bounding = titulo.getBoundingClientRect();
            var offset = 100; // Ajusta este valor según sea necesario

            // Verifica si el elemento está en el viewport con un pequeño offset
            if (bounding.top - offset < window.innerHeight) {
                titulo.style.opacity = 1;
                titulo.style.transform = "translateY(0)";
                titulo.style.transition = "opacity 1s, transform 1s"; // Añade transiciones suaves
            }
        });
    }

    window.addEventListener("scroll", fadeIn);

    // Llama a la función fadeIn al cargar la página para verificar si los elementos ya son visibles
    fadeIn();
});