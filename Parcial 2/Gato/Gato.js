var t = true;
window.onload = function() {
    document.getElementById("content").addEventListener("click", function(evento) {
        if (evento.target.className == "cajagrid") {
            if (t) {
                document.getElementById(evento.target.id).classList.toggle("cajaX");
                t = false;
            } else {
                document.getElementById(evento.target.id).classList.toggle("cajaO");
                t = true;
            }

        }
        CheckWin();

    });
}
var c = 'Caja'

function Limpiar() {

    for (let index = 0; index < 9; index++) {
        c = 'Caja'
        c = c.concat(index + 1)
        if (document.getElementById(c).className == "cajagrid cajaO") {
            document.getElementById(c).classList.remove("cajaO");
        } else if (document.getElementById(c).className == "cajagrid cajaX") {
            document.getElementById(c).classList.remove("cajaX");
        }
    }
    OO = '';
    XX = '';

    X = [];
    O = [];
    t = true;
}

var OO = '';
var XX = '';



function CheckWin() {
    var X = [];
    var O = [];

    for (let index = 0; index < 9; index++) {
        c = 'Caja'
        c = c.concat(index + 1)

        if (document.getElementById(c).className == "cajagrid cajaO") {
            O.push(index + 1);
        }
    }

    for (let index = 0; index < 9; index++) {
        c = 'Caja'
        c = c.concat(index + 1)

        if (document.getElementById(c).className == "cajagrid cajaX") {
            X.push(index + 1);
        }
    }
    XX = '';
    XX = X.join();
    console.log(XX);

    OO = '';
    OO = O.join();
    console.log(OO);



    switch (OO) {
        case '1,2,3':
            confirm("GANAN CIRCULOS");
            Limpiar();
            break;
        case '4,5,6':
            confirm("GANAN CIRCULOS");
            Limpiar();
            break;
        case '7,8,9':
            confirm("GANAN CIRCULOS");
            Limpiar();
            break;
        case '1,4,7':
            confirm("GANAN CIRCULOS");
            Limpiar();
            break;
        case '2,5,8':
            confirm("GANAN CIRCULOS");
            Limpiar();
            break;
        case '3,6,9':
            confirm("GANAN CIRCULOS");
            Limpiar();
            break;
        case '1,5,9':
            confirm("GANAN CIRCULOS");
            Limpiar();
            break;
        case '3,5,7':
            confirm("GANAN CIRCULOS");
            Limpiar();
            break;
    }

    switch (XX) {
        case '1,2,3':
            Limpiar();
            confirm("GANAN LAS EQUIS");
            break;
        case '4,5,6':
            Limpiar();
            confirm("GANAN LAS EQUIS");
            break;
        case '7,8,9':
            Limpiar();
            confirm("GANAN LAS EQUIS");
            break;
        case '1,4,7':
            Limpiar();
            confirm("GANAN LAS EQUIS");
            break;
        case '2,5,8':
            Limpiar();
            confirm("GANAN LAS EQUIS");
            break;
        case '3,6,9':
            Limpiar();
            confirm("GANAN LAS EQUIS");
            break;
        case '1,5,9':
            Limpiar();
            confirm("GANAN LAS EQUIS");
            break;
        case '3,5,7':
            Limpiar();
            confirm("GANAN LAS EQUIS");
            break;
    }

    if (X.length + O.length == 9) {
        confirm("EMPATE NADIE GANA");
        Limpiar();
    }
}