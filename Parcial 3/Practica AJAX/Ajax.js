$(document).ready(function() {
    $("#btn1").click(function() {
        $('#alerta1').show();

    });
    $('#btncloseAlert').click(function() {
        $('#alerta1').hide();
    });

    $("#btn3").click(function() {
        $('#modal1').modal();

    });

    $("#swal").click(function() {

        var ajaxRequest;
        ajaxRequest = new XMLHttpRequest();
        ajaxRequest.onreadystatechange = function() {
            if (ajaxRequest.readyState == 4) {
                document.getElementById("header").innerHTML = "Formulario";
            }
        };
        ajaxRequest.open("GET", "Ajax.php", true);
        ajaxRequest.send();
    });
});