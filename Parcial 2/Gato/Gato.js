var t = true;
window.onload = function() {
    document.getElementById("content").addEventListener("click", function(evento) {
        console.log(evento.target.className);
        if (evento.target.className == "cajagrid") {
            if (t) {
                document.getElementById(evento.target.id).classList.toggle("cajaX");
                t = false;
            } else {
                document.getElementById(evento.target.id).classList.toggle("cajaO");
                t = true;
            }
        }

    });
}

function Limpiar() {
    document.getElementsByClassName("cajagrid cajaX").classList.removeClass;
    document.getElementsByClassName("cajagrid cajaO").classList.removeClass;
}