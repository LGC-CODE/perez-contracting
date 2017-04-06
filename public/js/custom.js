
 /* jQuery Pre loader
  -----------------------------------------------*/
$(window).load(function(){
    $('.preloader').fadeOut(1000); // set duration in brackets    
});


$(document).ready(function() {

  /* Hide mobile menu after clicking on a link
    -----------------------------------------------*/
    $('.navbar-collapse a').click(function(){
        $(".navbar-collapse").collapse('hide');
    });


  /* Smoothscroll js
  -----------------------------------------------*/
    $(function() {
        $('.navbar-default a').bind('click', function(event) {
            var $anchor = $(this);
            $('html, body').stop().animate({
                scrollTop: $($anchor.attr('href')).offset().top - 49
            }, 1000);
            event.preventDefault();
        });
    });


 /* Home Slideshow Vegas
  -----------------------------------------------*/
  $(function() {
    $('body').vegas({
        slides: [
            { src: '/images/con5.jpg' },
            { src: '/images/con11.jpg' },
            { src: '/images/con16.jpg' }
        ],
        timer: false,
        transition: 'random',
        animation: 'random'
    });
  });


  /* Team carousel
  -----------------------------------------------*/
  $(document).ready(function() {
       $("#home-carousel").owlCarousel({
          items : 1,
          autoplay: false,
          autoplayHoverPause: true
      }).trigger('owl.play', 5000);
    });
    

    /* Back to Top
    -----------------------------------------------*/
    $(window).scroll(function() {
      if ($(this).scrollTop() > 200) {
          $('.go-top').fadeIn(200);
            } else {
                $('.go-top').fadeOut(200);
           }
        });   
          // Animate the scroll to top
        $('.go-top').click(function(event) {
          event.preventDefault();
        $('html, body').animate({scrollTop: 0}, 300);
    });


  /* wow
  -------------------------------*/
  new WOW({ mobile: false }).init();

  });

  /* wow
  -------------------------------*/

  var app = angular.module('myApp', []);

  app.controller('myCtrl', ['$scope', function($scope){

  $scope.emailUs = function(){
    if(!$scope.subject || $scope.subject == undefined  || $scope.subject == ""){ return; }
    if(!$scope.body || $scope.body == undefined || $scope.body == ""){ return; }

    subject = encodeURIComponent($scope.subject);
    body = encodeURIComponent($scope.body);

    var link = "mailto:perezdionicio76@gmail.com?subject=";
    link += subject;
    link += '&body=';
    link += body;

    window.location.href = link;

    $('.success').fadeIn(1000);
  }; 

  }]);









