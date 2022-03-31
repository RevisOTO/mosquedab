window.onload = function() {
    document.getElementById("content").addEventListener("click", function(evento) {
        console.log(evento.target.id);

        document.getElementById(evento.target.id).classList.toggle("cajamarilla");
    });
}