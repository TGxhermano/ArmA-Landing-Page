(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 48)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 48
  });

  // Collapse the navbar when page is scrolled
  // Dock logo to navbar when page is scrolled
  $(window).scroll(function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
    if($("#mainNav").offset().top > 200) {
      $(".navbar-left").addClass("navbar-left-expand");
      $(".navbar-right").addClass("navbar-right-expand");
    } else {
      $(".navbar-left").removeClass("navbar-left-expand");
      $(".navbar-right").removeClass("navbar-right-expand");
    }
    if($("#mainNav").offset().top > 300) {
      $("#mainLogo").addClass("mainLogo-scaled");
    }
    else {
      $("#mainLogo").removeClass("mainLogo-scaled");
    }
    if($("#mainNav").offset().top > 435) {
      $("#header-content").addClass("mainLogo-docked");
    } else {
      $("#header-content").removeClass("mainLogo-docked");
    }
  });

  // Workaround for making the main logo load if user refreshed the page and is scrolled down for more than 300 pixels
if($("#mainNav").offset().top > 300) {
  $(window).onload(function(){

  })};


  // Scroll reveal calls
  window.sr = ScrollReveal();
  sr.reveal('.sr-icons', {
    duration: 600,
    scale: 0.3,
    distance: '0px'
  }, 200);
  sr.reveal('.sr-button', {
    duration: 1000,
    delay: 200
  });
  sr.reveal('.sr-contact', {
    duration: 600,
    scale: 0.3,
    distance: '0px'
  }, 300);
  sr.reveal('.sr-mainLogo', {
    duration: 600,
    scale: 0.3,
    distance: '0px'
  });

  // Magnific popup calls
  $('.popup-gallery').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1]
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
    }
  });

})(jQuery); // End of use strict
