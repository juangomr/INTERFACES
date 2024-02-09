$(".containerSecundario").hide();
$(document).ready(function () {
  $(".entrar").click(function () {
    $(".containerPrincipal").hide();
    $(".containerSecundario").show();
  });
});
