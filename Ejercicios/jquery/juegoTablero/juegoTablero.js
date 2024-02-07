$(".cuadrado").hide();

$(document).ready(function () {

  var tiempoIni, tiempoFin, tiempo;
  let contador = 0;

  $("button").click(empezar);

  function empezar() {
    $(this).hide();
    $(".container").css({
      display: "block",
      top: "50%",
      left: "50%",
    });
    $(".cuadrado").show().mouseenter(juego);
  }

  function moverCuadrado() {
    let alturaCuadrado = $(".cuadrado").height();
    let anchoCuadrado = $(".cuadrado").width();
    let alturaContenedor = $(".container").height();
    let anchoContenedor = $(".container").width();
    let x2 = anchoContenedor - anchoCuadrado;
    let y2 = alturaContenedor - alturaCuadrado;
    let x = Math.floor(Math.random() * x2);
    let y = Math.floor(Math.random() * y2);
    $(".cuadrado").css({ top: x + "px", left: y + "px" });
  }

  function reiniciar() {
    contador = 0;
    $(".cuadrado").hide();
    $("button").show().html("Reiniciar");
    $("button").click(empezar);

  }

  function juego() {

    contador++;
    if (contador <= 10) {
      if (contador == 1) {
        tiempoIni = Date.now();
      }
      if (contador == 10) {
        tiempoFin = Date.now();
        tiempo = (tiempoFin - tiempoIni) / 1000;
        $(".tiempo1").html("<p>" + tiempo.toFixed(2) + " segundos</p>");
        reiniciar();
      }
      moverCuadrado();
    }

  }
});
