$(document).ready(function () {
    $(".aceptar").on("click", function () {
        $(".cookies").slideUp("slow");
    });

    $(".enviar").on("click", function () {
        $("form").hide();
        $(".formulario").text("Solicitud correctamente enviada");
    });
});