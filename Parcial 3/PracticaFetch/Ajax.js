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
            promesa.then((respuesta) => respuesta.json())
                .then(data => {
                    $('#nomcomp').val(data.nomcomp);
                    $('#fechanac').val(data.fechanac);
                    $('#celular').val(data.celular);
                    $('#estado').val(data.estado);
                    $('#ciudad').val(data.ciudad);
                    $('#cp').val(data.cp);
                    $('#curp').val(data.curp);
                });
        })
    });
});