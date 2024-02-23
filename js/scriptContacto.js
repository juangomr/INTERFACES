let email = document.getElementById("recipient-email");
let texto = document.getElementById("message-text");
let msj = document.getElementById("mensajeError");
let ok = false;
let btn = document.getElementById("botonEnviar").addEventListener("click", function () {
    msj.innerHTML = "";
    if (email.value.length == 0 || email.value == null) {
        msj.innerHTML = "Por favor rellene el campo email";
    }
    if (texto.value.length == 0 || texto.value == null) {
        msj.innerHTML += "<br>" + "Por favor rellene el mensaje de texto";
    }
    else {
        ok = true;
    }

    if (ok) {
        $("#form").slideUp("slow");
        $(".exito").text("Mensaje enviado con éxito");
    }
}
)
