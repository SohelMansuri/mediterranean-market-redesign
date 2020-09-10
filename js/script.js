$(document).ready(function() {
    /* Mobile Navigation */
    $('.js--nav-icon').click(function() {
        var nav = $('.js--mobile-nav');
        nav.slideToggle(200);
        
//        document.getElementById("mobile-menu-icon").setAttribute("name","car-outline");
        
//        var name = document.getElementById("mobile-menu-icon").getAttribute("name");
//        var name = $(".js--nav-icon:first")[0].getAttribute("name");
//        var name = $(".js--nav-icon:first")[0].getAttribute("name");
        
        var menuIcon = document.getElementById("mobile-menu-icon");
        var menuIconName = menuIcon.getAttribute("name");
        if(menuIconName == "menu-outline") {
            menuIcon.setAttribute("name", "close-outline");
        } else {
            menuIcon.setAttribute("name", "menu-outline");
        }  
    });
});