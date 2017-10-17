(function($) {
  "use strict"; // Start of use strict

  // refreshed/onload -> page scroll to top
  /*window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }*/

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 80)
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
  
  /* MAIN LOGO ANIMATION & NAVBAR SHRINK/ITEM MOVEMENT*/

  // Docks button only if viewport is 991px or bigger (Bootstrap md media query)

  if ($(window).width() >= 992) {

    var lastScroll = 0;

    $(window).scroll(function(event) { //scroll event handler
      var scrollTop = $(this).scrollTop(); //get distance scrolled from window top
      var imageHeight = $("#header-content").height(); //get main logo image file height
      var halfImage = imageHeight/2 + $("#mainNav").height()*0.05; //calc the place, seen from window top, where the top main logo is suppose to be placed

      //shrink/unshrink navbar
      if ($("#mainNav").offset().top > 100) {
        $("#mainNav").addClass("navbar-shrink");
      } else {
        $("#mainNav").removeClass("navbar-shrink");
      }

      var distance = $("#header-content").offset().top - $(window).scrollTop(); //get header distance from top
      var mastheadDistance = $(".masthead").offset().top - $(window).scrollTop(); //get .masthead current offset from top
      mastheadDistance = Math.abs(mastheadDistance); //make the negative value a positive

      if(distance <= 0) { 
        $(".navbar-left").addClass("navbar-left-expand"); //move navigation items aside
        $(".navbar-right").addClass("navbar-right-expand"); //^
        $("#header-content").css("top", halfImage); //set inline style attribute for main logo position
        $("#header-content").addClass("mainLogo-docked"); //css dock main logo
        $("#mainLogo").addClass("mainLogo-scaled"); //css shrink main logo
      }
      if(scrollTop < lastScroll && mastheadDistance <= halfImage) { //undock/unshrink
        $(".navbar-left").removeClass("navbar-left-expand"); //expand navigation again
        $(".navbar-right").removeClass("navbar-right-expand"); //^
        $("#header-content").removeAttr("style"); //remove inline style attribute for main logo placement
        $("#header-content").removeClass("mainLogo-docked"); //remove logo docking
        $("#mainLogo").removeClass("mainLogo-scaled"); //remove logo shrinking
      }
      lastScroll = scrollTop;
    });
  };

  /* SCROLL-TO-TOP BUTTON */

  // triggers button only if viewport bigger than 991px or bigger (Bootstrap md media query)
  if ($(window).width() >= 992) {
  window.onscroll = function() {checkScrollToTopCurrentScroll()}; // triggers scroll distance to top check function
  }

  //show scroll-to-top-button only on certain scroll down threshold
  function checkScrollToTopCurrentScroll() {
      if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
          document.getElementById("scrollToTopButton").style.display = "block";
      } else {
          document.getElementById("scrollToTopButton").style.display = "none";
      }
  }

  /* TWITCH ONLINE CHECK */

  //Twitch channel names go here
  //Must be string
  //ID of index.html element must be the same as twitch name

    var streamArray = ["tgxhermano", "geelsmark", "adirtynurse"];
    
    streamArray.forEach(function(user) {
      $.getJSON('https://wind-bow.gomix.me/twitch-api/streams/' + user + '?callback=?')
        .then(function(data){
          if(data.stream != null) {
            var userString = "".concat("#",user);
            var twitchLink = "".concat("https://go.twitch.tv/", user);
            $(userString).addClass("twitch-online");
            $(userString).attr("href", twitchLink);
          };
        });
    });


  // Workaround for making the main logo load if user refreshed the page and is scrolled down for more than 300 pixels
  if($("#mainNav").offset().top > 300) {
    $(window).onload(function(){
      
  })};

  // Scroll reveal calls
  window.sr = ScrollReveal();
  sr.reveal('.sr-icons-community', {
    duration: 600,
    scale: 0.3,
    distance: '0px'
  }, 100);
  sr.reveal('.sr-icons-media', {
    duration: 600,
    scale: 0.3,
    distance: '0px'
  }, 100);
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
