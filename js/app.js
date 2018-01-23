
$(document).ready(function() {
  /* Efecto splash*/
  $("#signview").hide();
  $("#registerview").hide();
  $("#inputcode-view").hide();
  $("#registerform-view").hide();
  $("#Successfulregistration-view").hide();
  $("#code-view").hide();

  setTimeout(function() {
    $("#splashview").fadeOut(500);
    $("#signview").show();
  }, 3000);

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


  /* Función para generar codigo aleatorio y pintarlo en su contenedor*/
  var array = [];
  function myFunction (){
    var x = Math.floor((Math.random()*10));
    array.push(x);
    return x
  }

  function codigoRandom () {
    var codigo = ""
    for (var i=0; i<3; i++){
      codigo += myFunction();
    }

    var codeNew = (codigo);
    console.log (codeNew);

    $("#code").text(codeNew);
  }
  codigoRandom();

  /* Función para pasar a vista de entrega de codigo*/

  $("#next-view").click(function() {
    setTimeout(function() {
      $("#registerview").fadeOut(500);
      $("#code-view").show();
    }, 1000);
  });

  /* Función para pasar a verificacion de codigo*/

  $("#btn-ok").click(function() {
    setTimeout(function() {
      $("#code-view").fadeOut(500);
      $("#inputcode-view").show();
    }, 1000);
  });

  /* Función para comparar codigo*/

  $("#code-input").keyup(keepCode);
  function keepCode () {
    var $codeUser = $('#code-input').val();
    console.log($codeUser);
  };


  $("#code-input").keyup(validateCode);
  function validateCode () {
    if($("codeUser").val() == $("codeNew").val()) {
      $("#btncode-next").removeAttr("disabled");
    } else {
      $("#btncode-next").attr("disabled" , true);
    }
  };

  /* Función para activar boton de reenvio de codigo*/

  $("#resend-code").click(function() {
    setTimeout(function() {
      $("#splashview").hide();
      $("#signview").hide();
      $("#registerview").hide();
      $("#inputcode-view").fadeOut(500);
      $("#code-view").show();
    }, 1000);
  });

  /* Función para pasar a vista de registro*/

  $("#btncode-next").click(function() {
    setTimeout(function() {
      $("#inputcode-view").fadeOut(500);
      $("#registerform-view").show();
    }, 1000);
  });

  /* Función para validar INPUTS*/

  $("#input-name").keyup(validateName);

  function validateName () {
    if($("#input-name").val().trim().length > 0) {
      $("#btn-next3").removeAttr("disabled");
    } else {
      $("#btn-next3").attr("disabled" , true);
    }
  };

  $("#input-mail").keyup(validateMail);

  function validateMail () {
    if($("#input-mail").val().trim().length > 0) {
      $("#btn-next3").removeAttr("disabled");
    } else {
      $("#btn-next3").attr("disabled" , true);
    }
  };

  $("#input-checkbox").click(validateCheckbox);

  function validateCheckbox () {
    if($("#input-checkbox").val().trim().length > 0) {
      $("#btn-next3").removeAttr("disabled");
    } else {
      $("#btn-next3").attr("disabled" , true);
    }
  };

  /* Función para pasar a vista de registro exitoso*/

  $("#btn-next3").click(function() {
    setTimeout(function() {
      $("#registerform-view").fadeOut(1000);
      $("#Successfulregistration-view").show();
    }, 1000);
  });

});
