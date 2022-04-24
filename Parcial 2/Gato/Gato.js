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

    X = [];
    O = [];
    t = true;
}

function Close() {
    document.getElementById("Ok").style.display = "none";
    document.getElementById("Emer").style.display = "none";

    document.getElementById("Emer").classList.remove("float");
}

Fwin = false;

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

    var win = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
        [1, 4, 7],
        [2, 5, 8],
        [3, 6, 9],
        [1, 5, 9],
        [3, 5, 7]
    ]

    //Circulos
    for (let i = 0; i < win.length; i++) {
        for (let j = 0; j < 4; j++) {
            let winner = win[i];
            let Cur = O[j];

            switch (j) {
                case 0:
                    if (winner.indexOf(Cur) != -1) {
                        var B1 = true;
                    }
                    break;
                case 1:
                    if (winner.indexOf(Cur) != -1) {
                        var B2 = true;
                    }
                    break;
                case 2:
                    if (winner.indexOf(Cur) != -1) {
                        var B3 = true;
                    }
                    break;
                case 3:
                    if (winner.indexOf(Cur) != -1) {
                        var B4 = true;
                    }
                    break;
            }
        }
        //((B1 && B2 && B3) || (B1 && B2 && B4) || (B1 && B3 && B4) || (B2 && B3 && B4))

        if ((B1 && B2 && B3) || (B1 && B2 && B4) || (B1 && B3 && B4) || (B2 && B3 && B4)) {
            if (document.getElementById("Emer").contains(document.getElementById("winmess"))) {
                document.getElementById("winmess").remove();
            }
            B1 = false;
            B2 = false;
            B3 = false;
            B4 = false;
            Fwin = true;
            Limpiar();
            document.getElementById("Ok").style.display = "block";
            document.getElementById("Emer").style.display = "block";

            document.getElementById("Emer").classList.add("float");


            let temp = "<a id=\"winmess\"> LOS CIRCULOS GANAN </a>"
            let a = document.createElement("a");
            a.innerHTML = temp;

            document.getElementById("Emer").appendChild(a.childNodes[0])

        }
        B1 = false;
        B2 = false;
        B3 = false;
        B4 = false;
    }

    //EQUIS
    for (let i = 0; i < win.length; i++) {
        for (let j = 0; j < 4; j++) {
            let winner = win[i];
            let Cur = X[j];

            switch (j) {
                case 0:
                    if (winner.indexOf(Cur) != -1) {
                        var BX1 = true;
                    }
                    break;
                case 1:
                    if (winner.indexOf(Cur) != -1) {
                        var BX2 = true;
                    }
                    break;
                case 2:
                    if (winner.indexOf(Cur) != -1) {
                        var BX3 = true;
                    }
                    break;
                case 3:
                    if (winner.indexOf(Cur) != -1) {
                        var BX4 = true;
                    }
                    break;
            }
        }
        //((B1 && B2 && B3) || (B1 && B2 && B4) || (B1 && B3 && B4) || (B2 && B3 && B4))

        if ((BX1 && BX2 && BX3) || (BX1 && BX2 && BX4) || (BX1 && BX3 && BX4) || (BX2 && BX3 && BX4)) {
            if (document.getElementById("Emer").contains(document.getElementById("winmess"))) {
                document.getElementById("winmess").remove();
            }
            BX1 = false;
            BX2 = false;
            BX3 = false;
            BX4 = false;
            Fwin = true;
            Limpiar();
            document.getElementById("Ok").style.display = "block";
            document.getElementById("Emer").style.display = "block";

            document.getElementById("Emer").classList.add("float");


            let temp = "<a id=\"winmess\"> LAS EQUIS GANAN </a>"
            let a = document.createElement("a");
            a.innerHTML = temp;

            document.getElementById("Emer").appendChild(a.childNodes[0])
        }
        BX1 = false;
        BX2 = false;
        BX3 = false;
        BX4 = false;
    }

    console.log(Fwin);
    //EMPATE
    if (X.length + O.length == 9 && !Fwin) {
        if (document.getElementById("Emer").contains(document.getElementById("winmess"))) {
            document.getElementById("winmess").remove();
        }


        document.getElementById("Ok").style.display = "block";
        document.getElementById("Emer").style.display = "block";

        document.getElementById("Emer").classList.add("float");


        let temp = "<a id=\"winmess\"> EMPATE NADIE GANA </a>"
        let a = document.createElement("a");
        a.innerHTML = temp;

        document.getElementById("Emer").appendChild(a.childNodes[0])
        Limpiar();
        Fwin = false;
    }
}