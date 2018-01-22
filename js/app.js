
  $(document).ready(function() {
  /* Efecto splash*/
  $("#signview").hide();
  $("#registerview").hide();

  setTimeout(function() {
    $("#splashview").fadeOut(500);
    $("#signview").show();
  }, 1000);

  $("#singup").click(function() {
    setTimeout(function() {
      $("#signview").fadeOut(500);
      $("#registerview").show();
    }, 1000);
  });

/* Función para validar telefono y activar botón*/

$("#phone-input").keyup(validatePhone);

  function validatePhone () {
    if($("#phone-input").val().trim().length > 0 && $("#phone-input").val().trim().length == 10) {
      console.log("Viridiana");
      $("#next-view").removeAttr("disabled");
    } else {
      $("#next-view").attr("disabled" , true);
    }
  };

/* Función para validar telefono y activar botón*/

  $("#next-view").click(function() {
    setTimeout(function() {
      $("#registerview").fadeOut(500);
      $("#code-view").show();
    }, 1000);
  });

/* Función para generar codigo aleatorio*/

});