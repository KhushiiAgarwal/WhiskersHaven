function myFunction1() {
    document.getElementById("myDropdown1").classList.toggle("show1");
}
window.onclick = function(event) {
    if (!event.target.matches('.navbarIcon')) {
        var dropdowns = document.getElementsByClassName("dropdown-content1");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show1')) {
                openDropdown.classList.remove('show1');
            }
        }
    }
}