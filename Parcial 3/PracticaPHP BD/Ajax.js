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

    $('#fetch').ready(function() {
        document.getElementById("fetch").addEventListener("click", function() {

            let promesa = fetch('Ajax.php');
            promesa.then(respuesta)
                .then(data => {
                    console.log(respuesta);
                });
        })
    });
});