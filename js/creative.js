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

  var lastScroll = 0;
  var imgDocked = false;
  $(window).scroll(function(event) {
    var st = $(this).scrollTop();
    var imageHeight = $("#mainLogo").height();
    var top = imageHeight/2 - parseFloat("20%");

    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
    if($("#mainNav").offset().top > 150) {
      $(".navbar-left").addClass("navbar-left-expand");
      $(".navbar-right").addClass("navbar-right-expand");
    } else {
      $(".navbar-left").removeClass("navbar-left-expand");
      $(".navbar-right").removeClass("navbar-right-expand");
    }

    var distance = $("#header-content").offset().top - $(window).scrollTop();
    var mastheadDistance = $(".masthead").offset().top - $(window).scrollTop();
    mastheadDistance = Math.abs(mastheadDistance);
    var mastheadHeight = $("#header-content").height();

    console.log("mastheadOffset: " + mastheadDistance);
    console.log("mastheadHeight: " + mastheadHeight);
    console.log("top: " + top);

    if(distance <= 0) {
      $("#header-content").css("top", top);
      $("#header-content").addClass("mainLogo-docked");
      imgDocked = true;
        //$("#mainLogo").addClass("mainLogo-scaled");
    }
    if(imgDocked == true && st < lastScroll && mastheadDistance <= top) {
      //$("#header-content").css("top", "auto");
      $("#header-content").removeAttr("style");
      $("#header-content").removeClass("mainLogo-docked");
      imgDocked = false;
      //$("#mainLogo").removeClass("mainLogo-scaled");
    }
    lastScroll = st;
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
