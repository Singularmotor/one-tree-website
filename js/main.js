
$(document).ready(function(){
    
    $(window).scroll(function(){
    
       if($(window).scrollTop() > $(window).height()){
           $('.navbar').addClass('navbar-fixed-top');
       }
       if($(window).scrollTop() < $(window).height()){
           $('.navbar').removeClass('navbar-fixed-top');
      }
     });
 });

$(".navbar-dark ul li a[href^='#']").on('click',function(e){
                  
            e.preventDefault();
            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(this.hash).offset().top
            }, 300, function(){
                window.location.hash = hash;
            });
  });

$("#section-parallax .col-sm-8 a[href^='#']").on('click',function(e){
                  
            e.preventDefault();
            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(this.hash).offset().top
            }, 300, function(){
                window.location.hash = hash;
            });
  });

$(".footer .scroll-to-top a[href^='#']").on('click',function(e){
                  
            e.preventDefault();
            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(this.hash).offset().top
            }, 300, function(){
                window.location.hash = hash;
            });
  });

$("#cover .col-xs-3 a[href^='#']").on('click',function(e){
                  
            e.preventDefault();
            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(this.hash).offset().top
            }, 300, function(){
                window.location.hash = hash;
            });
  });

$("#cover .col-xs-9 a[href^='#']").on('click',function(e){
                  
            e.preventDefault();
            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(this.hash).offset().top
            }, 300, function(){
                window.location.hash = hash;
            });
  });

$('.js-wp-1').waypoint(function(direction){
            $('.js-wp-1').addClass('animated fadeInDown');
},{
    offset: '50%'
});

$('.js-wp-2').waypoint(function(direction){
            $('.js-wp-2').addClass('animated fadeInLeft');
},{
    offset: '50%'
});

$('.js-wp-3').waypoint(function(direction){
            $('.js-wp-3').addClass('animated fadeInUp');
},{
    offset: '50%'
});

$('.js-wp-4').waypoint(function(direction){
            $('.js-wp-4').addClass('animated fadeInRight');
},{
    offset: '50%'
});

$('.js-wp-5').each(function () {
    $(this).prop('Counter',0).animate({
        Counter: $(this).text()
    }, {
        
        duration: 1500,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});








