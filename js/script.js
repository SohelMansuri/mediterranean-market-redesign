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
    
    /* Animations on scroll */
    /* Flags Animation */
    var flagsAnimation = new Waypoint({
      element: document.getElementById('js--wp-1'),
      handler: function(direction) {
        var pulseAnimation = " animated animate__animated animate__pulse";
          
        var iFI = document.getElementById("animate-indian-flag");
        var aFI = document.getElementById("animate-arabic-flag");
        var pFI = document.getElementById("animate-pakistani-flag");
        var tFI = document.getElementById("animate-turkish-flag");
          
        iFI.className += pulseAnimation;
        aFI.className += pulseAnimation;
        pFI.className += pulseAnimation;
        tFI.className += pulseAnimation;
      }});
    
    /* Customer Reviews Animation */
    var customerReviewsAnimation = new Waypoint({
      element: document.getElementById('js--wp-2'),
      handler: function(direction) {
        var bounceInDown = " animated animate__animated animate__bounceInDown";
        var x = document.getElementsByClassName("customer-review-box");
        var i;
        for (i = 0; i < x.length; i++) {
          x[i].className += bounceInDown;
        }
      }
    });
    
     /* Newsletter Animation */
    var newsletterAnimation = new Waypoint({
      element: document.getElementById('js--wp-3'),
      handler: function(direction) {
        var bounceInDown = " animated animate__animated animate__lightSpeedInRight";
        var x = document.getElementsByClassName("newsletter-image-holder");
        var i;
        for (i = 0; i < x.length; i++) {
          x[i].className += bounceInDown;
        }
      }, offset: '400px'
    });
    
//    , offset: '250px' 
//    , offset: '400px' 
});