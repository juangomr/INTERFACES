$(".main2").hide();

$(document).ready(function () {
  $(".iniciar").click(function () {
    $(".main").hide();
    $(".main2").show();
  });

  $(".iniciarSesion").prop("disabled", true);

  $(".form-control1, .form-control2").on("input", function () {

    if ($(this).val() == "" ) {
      $(".iniciarSesion").prop("disabled", true);
    } else {
      $(".iniciarSesion").prop("disabled", false);
    }
  })


});
