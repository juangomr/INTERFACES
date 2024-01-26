$(document).ready(function () {
  console.log("oka");

  $(".mostrar").click(function () {
    $(".contenedor").show();
    $(this).hide();
    $(".ocultar").show();
  });

  $(".ocultar").click(function () {
    $(".contenedor").hide();
    $(this).hide();
    $(".mostrar").show();
  });
});
