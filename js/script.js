// aside right animation and spiner 

$(document).ready(function () {
    $(".setting").click(function () {
        $(".aside-section").toggleClass("newClass");
        $(".setting").toggleClass("sitting_clicl");
        $(".buynow-icon").toggleClass("sitting_clicl")
        $("#icon-click").toggleClass("animation_style");
    })

    // windo scroll top 0 
    $(window).scroll(function () {
        if ($(this).scrollTop() > 250) {
            $("#btn-up").css({
                opacity: "1",
                visibility: "visible"
            });
        } else {
            $("#btn-up").css({
                opacity: "0",
                visibility: "hidden",

            });
        }
    });


    $("#btn-up").click(function () {
        $("html").animate({
                scrollTop: 0,
            },
            1200
        );
    });

    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });

    // owl
    $(document).ready(function() {
 
        $("#owl-demo").owlCarousel({
          items : 4,
          lazyLoad : true,
          navigation : true
        
        }); 
       
      });
    //   navbar
    $("#main").click(function () {
        $("#mySidenav").toggleClass("toggle-width")
        $("#main").toggleClass("toggle-margin")
    })
});;