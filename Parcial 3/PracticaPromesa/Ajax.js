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

    let promesa = new Promise(function(resolve) {
        var ajaxRequest;
        ajaxRequest = new XMLHttpRequest();
        ajaxRequest.onreadystatechange = function() {
            if (ajaxRequest.readyState == 4) {

                resolve(ajaxRequest.responseText);
            }
        };
        ajaxRequest.open("GET", "Ajax.php", true);
        ajaxRequest.send();
    });
    promesa.then(data => document.getElementById("header").innerHTML = JSON.parse(data).header);
});