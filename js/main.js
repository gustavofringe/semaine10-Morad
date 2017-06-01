function myFunction() {
    document.getElementById("monmenu").classList.toggle("show");
}
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("menu-cache");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
$(document).ready(function () {
    $('.list').hover(function () {
        var x = this.id;
        var links = '#p_' + x[2];
        $(links).addClass('hover');

    }, function () {
        var x = this.id;
        var links = '#p_' + x[2];
        $(links).removeClass('hover');
    });
});
