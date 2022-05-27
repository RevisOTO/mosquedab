window.onload = function() {

    $('#actualizar').click(function() {
        let idc = $('#consulta').val();
        $.post('../php/PHPBD.php', { idcons: idc }, function(data) {
            refrescar(data);
        }, 'json');
    });

    function refrescar(data) {
        console.log(data);
        $('#nomcomp').val(data.NombreCompleto);
        $('#fechanac').val(data.Fecha_Nac);
        $('#celular').val(data.Celular);
        $('#estado').val(data.Estado);
        $('#ciudad').val(data.Ciudad);
        $('#cp').val(data.CP);
        $('#curp').val(data.CURP);
    }
}