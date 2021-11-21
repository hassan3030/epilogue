$(function() {



    // $(".navbar").css("display", "none");
    // $(window).scroll(function() {
    //     if ($(window).scrollTop() > 80) {
    //         $(".navbar").css("display", "block");
    //         $(".navbar").slideUp(1000, function() {

    //         });
    //     } else {

    //         $(".navbar").slideDown(1000, function() {

    //         });
    //     }
    // })
    $('.carousel').carousel({
        interval: 2000
    })

    $(window).scroll(function() {
        if ($(window).scrollTop() > 80) {
            $(".navbar").css({
                'margin-top': '0px',
                'opacity': '1'
            })
        } else {
            $(".navbar").css({
                'margin-top': '-100px',
                'opacity': '0'
            })
        }
    });

    // $(".ab").bind("click", function() {

    //     $(".sty").attr("href", "style/style2.css");
    // })


});