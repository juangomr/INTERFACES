$(".cuadrado").hide();

$(document).ready(function () {
  $("button").click(function () {
    $(this).hide();
    $(".container").css({
      display: "block",
      top: 50 + "%",
      left: 50 + "%",
    });
    $(".cuadrado").show();
  });

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
  let contador = 0;

  var tiempoIni, tiempoFin, tiempo;
  $(".cuadrado").mouseenter(function (e) {
    if (contador < 10) {
      contador++;
      moverCuadrado();
      if (contador == 1) {
        tiempoIni = Math.floor(e.timeStamp / 1000);
      }
      if (contador == 10) {
        tiempoFin = Math.floor(e.timeStamp / 1000);
        tiempo = parseInt(tiempoFin) - parseInt(tiempoIni);
        console.log(tiempo);
      }
    }
  });
});
