var sidebar = document.getElementById('sidebar')

document.getElementById("sidebar").onmouseover = function ToggleON() {
    sidebar.classList.remove("animOFF");
    sidebar.classList.add("animON");
}

document.getElementById("sidebar").onmouseout = function ToggleOFF() {
    sidebar.classList.add("animOFF");
    sidebar.classList.remove("animON");
}