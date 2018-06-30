// отмечать пункт меню соответствующий секции которая на экране (которой больше всего на экране)
;(function($){
    $.fn.scrollPlugin = function(options){
        var defaults = $.extend({
            speed: 400
        }, options);
        $('#a').addClass('nav__active');
  //      $('#a').addClass('nav__active');
  //      $(window).scroll(function() {
////cуперколхоз
  //         var box1 = $('.nav').offset().top;
  //         if(box1 < 400){
  //             $('#a').addClass('nav__active');
  //         } else{
  //             $('#a').removeClass('nav__active');
  //         }
  //         if(box1 >= 400 && box1 < 1000){
  //             $('#b').addClass('nav__active');
  //         } else{
  //             $('#b').removeClass('nav__active');
  //         }
  //         if(box1 >= 1000 && box1 < 1600){
  //             $('#c').addClass('nav__active');
  //         } else{
  //             $('#c').removeClass('nav__active');
  //         }
  //         if(box1 >= 1600){
  //             $('#d').addClass('nav__active');
  //         } else{
  //             $('#d').removeClass('nav__active');
  //         }
  //     });
        // второй варик недоделал
       // $(document).scroll(function () {
       //     s_top = $(window).scrollTop()+400;
//
       //     yes = $("#s_2").offset().top;
       //
       //     if(s_top > yes){
       //        var active = $('#b').addClass('nav__active');
       //         $('#a').removeClass('nav__active');
       //     }
       //     else{
       //         var disactive = $('#b').removeClass('nav__active');
       //         $('#a').addClass('nav__active');
//
       //     }
//
       // });
        this.each(function(i, link){
            //следим отступ сверху
            //$(function() {
            //    var eTop = $('.section').offset().top;
            //    log(eTop - $(window).scrollTop());
            //    $(window).scroll(function() {
            //        log(eTop - $(window).scrollTo//p());
            //    });
            //});
            //function log(txt) {
            //    $("#log").html("location : <b>" + txt + "</b> px")
//
            //
            //}
            var s = $(link).attr('href');
            var top = $(s).offset().top;
            $(window).on('scroll', function() {
                var y = $(s).height();
                if ($(window).scrollTop() >= top - y / 2) {
                    $('.nav__active').removeClass('nav__active');
                    $(link).addClass('nav__active');
                }
            });
            $(link).click(function(e){
                e.preventDefault();
                $('.nav a').each(function(index) {
                    $(this).removeClass('nav__active');
                });
                $(this).addClass('nav__active');
                $('html, body').animate({
                    scrollTop: top
                }, defaults.speed);
            });
        })
    }
}(jQuery));