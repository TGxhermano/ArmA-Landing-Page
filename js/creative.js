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

  var headerHeight = $(".masterhead").height();
  var top = headerHeight / 2;
  $("#header-content").css("top", top);

  console.log(top);
  $(window).scroll(function(event) {
    var st = $(this).scrollTop();
    var imageHeight = $("#header-content").height();
    var halfImage = imageHeight/2 + $("#mainNav").height()/2;

    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }

    var distance = $("#header-content").offset().top - $(window).scrollTop(); //get header distance from top
    var mastheadDistance = $(".masthead").offset().top - $(window).scrollTop(); //get masthead current offset from top
    mastheadDistance = Math.abs(mastheadDistance); //make the negative value a positive

    if(distance <= 0) { 
      $(".navbar-left").addClass("navbar-left-expand"); //move navigation items aside
      $(".navbar-right").addClass("navbar-right-expand");
      $("#header-content").css("top", halfImage);
      $("#header-content").addClass("mainLogo-docked");
      $("#mainLogo").addClass("mainLogo-scaled");
    }
    if(st < lastScroll && mastheadDistance <= halfImage) { //undock once .masthead has value of var top
      $(".navbar-left").removeClass("navbar-left-expand"); //expand navigation again
      $(".navbar-right").removeClass("navbar-right-expand");
      $("#header-content").css("top", top);
      $("#header-content").removeClass("mainLogo-docked");
      $("#mainLogo").removeClass("mainLogo-scaled");
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
