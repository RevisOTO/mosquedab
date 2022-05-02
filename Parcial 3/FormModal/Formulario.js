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
        swal({
            title: "Hola",
            text: "Hiciste click en un boton",
            icon: "success",
        });
    });
});