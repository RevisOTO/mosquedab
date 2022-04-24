var sidebar = $("#sidebar")

sidebar.onmouseover = function ToggleON() {
    sidebar.classList.remove("animOFF");
    sidebar.classList.add("animON");
}

sidebar.onmouseout = function ToggleOFF() {
    sidebar.classList.add("animOFF");
    sidebar.classList.remove("animON");
}