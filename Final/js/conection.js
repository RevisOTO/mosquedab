window.onload = function() {


    //Inputs apagados
    $('#nomcomp').attr("disabled", "disabled");
    $('#fechanac').attr("disabled", "disabled");
    $('#celular').attr("disabled", "disabled");
    $('#estado').attr("disabled", "disabled");
    $('#ciudad').attr("disabled", "disabled");
    $('#cp').attr("disabled", "disabled");
    $('#curp').attr("disabled", "disabled");

    //Botones desactivados
    $('#btnagregar').attr("disabled", "disabled");
    $('#btnactualizar').attr("disabled", "disabled");
    $('#btnmod').attr("disabled", "disabled");
    $('#btnlimp').attr("disabled", "disabled");

    //Consultar
    $('#btnconsultar').click(function() {
        let idc = $('#consulta').val();
        $.post('../php/Update.php', { idcons: idc }, function(data) {
            refrescar(data);
        }, 'json');
    });

    function refrescar(data) {
        $('#nomcomp').val(data.NombreCompleto);
        $('#fechanac').val(data.Fecha_Nac);
        $('#celular').val(data.Celular);
        $('#estado').val(data.Estado);
        $('#ciudad').val(data.Ciudad);
        $('#cp').val(data.CP);
        $('#curp').val(data.CURP);
    }

    //Agregar
    $('#btnagregar').click(function() {
        $('#btnagregar').attr("disabled", "disabled");
        agregar();
    });

    function agregar() {
        nomcomp = $('#nomcomp').val();
        fechanac = $('#fechanac').val();
        celular = $('#celular').val();
        estado = $('#estado').val();
        ciudad = $('#ciudad').val();
        cp = $('#cp').val();
        curp = $('#curp').val();

        if (($('#nomcomp').val() || $('#fechanac').val() || $('#celular').val() || $('#estado').val() || $('#ciudad').val() || $('#cp').val() || $('#curp').val()) != "") {

            objjson = '{"NombreCompleto":"' + nomcomp + '", "Fecha_Nac":"' + fechanac + '", "Celular":"' + celular + '", "Estado":"' + estado + '", "Ciudad":"' + ciudad + '", "CP":"' + cp + '", "CURP":"' + curp + '"}';

            $.post('../php/Agregar.php', { json: objjson }, function(data) {
                console.log(data);
            }, );
        } else {
            swal("Falta de rellenar campos");
        }
    }

    $('#btnnuevo').click(function name(params) {
        nuevo();
    });
    //Nuevo
    function nuevo() {
        $('#nomcomp').removeAttr("disabled");
        $('#fechanac').removeAttr("disabled");
        $('#celular').removeAttr("disabled");
        $('#estado').removeAttr("disabled");
        $('#ciudad').removeAttr("disabled");
        $('#cp').removeAttr("disabled");
        $('#curp').removeAttr("disabled");

        $('#btnagregar').removeAttr("disabled");
    }
}