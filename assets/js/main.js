(function ($) {
  "use strict";
  
  // ==========================================
  //      Start Document Ready function
  // ==========================================
  $(document).ready(function () {
    
  // ============== Mobile Menu Sidebar & Offcanvas Js Start ========
  $('.toggle-mobileMenu').on('click', function () {
    $('.mobile-menu').addClass('active');
    $('.side-overlay').addClass('show');
    $('body').addClass('scroll-hide-sm');
  }); 

  $('.close-button, .side-overlay').on('click', function () {
    $('.mobile-menu').removeClass('active');
    $('.side-overlay').removeClass('show');
    $('body').removeClass('scroll-hide-sm');
  }); 
  // ============== Mobile Menu Sidebar & Offcanvas Js End ========
  
    
  // ===================== Scroll Back to Top Js Start ======================
  var progressPath = document.querySelector('.progress-wrap path');
  var pathLength = progressPath.getTotalLength();
  progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
  progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
  progressPath.style.strokeDashoffset = pathLength;
  progressPath.getBoundingClientRect();
  progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
  var updateProgress = function () {
    var scroll = $(window).scrollTop();
    var height = $(document).height() - $(window).height();
    var progress = pathLength - (scroll * pathLength / height);
    progressPath.style.strokeDashoffset = progress;
  }
  updateProgress();
  $(window).scroll(updateProgress);
  var offset = 50;
  var duration = 550;
  jQuery(window).on('scroll', function() {
    if (jQuery(this).scrollTop() > offset) {
      jQuery('.progress-wrap').addClass('active-progress');
    } else {
      jQuery('.progress-wrap').removeClass('active-progress');
    }
  });
  jQuery('.progress-wrap').on('click', function(event) {
    event.preventDefault();
    jQuery('html, body').animate({scrollTop: 0}, duration);
    return false;
  })
  // ===================== Scroll Back to Top Js End ======================
  
   // ========================= Counter Up Js End ===================
   const counterUp = window.counterUp.default;

   const callback = (entries) => {
     entries.forEach((entry) => {
       const el = entry.target;
       if (entry.isIntersecting && !el.classList.contains('is-visible')) {
         counterUp(el, {
           duration: 1200,
           delay: 16,
         });
         el.classList.add('is-visible');
       }
     });
   };
 
   const IO = new IntersectionObserver(callback, { threshold: 1 });
 
   // Counter for each
  const counter = document.querySelector('.counter');
  if (counter) {
    IO.observe(counter);
  }
  // counter individual
  //  const counter = document.querySelector('.counter-number');
  //  if (counter) {
  //    IO.observe(counter);
  //  }
   // ========================= Counter Up Js End ===================


  // ========================= Scroll Spy Js Start ===================
  const scrollSpy = new bootstrap.ScrollSpy(document.body, {
    target: '#navbar-example'
  });
  // ========================= Scroll Spy Js End ===================

  
  // ========================= Wow Js Start ===================
  
  $(document).ready(function() {
    new WOW().init();
  });
  // ========================= Wow Js End ===================

// ========================== LightBox Start =======================
  lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true
  });
// ========================== LightBox End =======================


  // ========================= Testimonials Slider Js Start ==============  
   $('.banner-thumb-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2200,
    speed: 1500,
    dots: false,
    pauseOnHover: true,
    arrows: true,
    draggable: true,
    rtl: $('html').attr('dir') === 'rtl' ? true : false,
    speed: 1200,
    infinite: true,
    nextArrow: '#deals-next',
    prevArrow: '#deals-prev',
    centerMode: true,
    responsive: [
      {
        breakpoint: 424,
        settings: {
          slidesToShow: 2,
          arrows: false,
        }
      },
    ]
  });  
// ========================= Testimonials Slider Js End ===================


  // ========================= Testimonials Slider Js Start ==============
  $('.testimonials-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 1500,
    dots: true,
    pauseOnHover: true,
    arrows: true,
    draggable: true,
    rtl: $('html').attr('dir') === 'rtl' ? true : false,
    speed: 900,
    infinite: true,
    nextArrow: '#deals-next',
    prevArrow: '#deals-prev',
    responsive: [
      {
        breakpoint: 1399,
        settings: {
          slidesToShow: 3,
          arrows: false,
        }
      },
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 2,
          arrows: false,
        }
      },
      {
        breakpoint: 575,
        settings: {
          slidesToShow: 1,
          arrows: false,
        }
      },
    ]
  });  
// ========================= Testimonials Slider Js End ===================


// ========================= UI Element One Slider Js End ===================
$(".ui-element-one-slider").slick({
  speed: 6000,
  autoplay: true,
  autoplaySpeed: 0,
  cssEase: 'linear',
  slidesToShow: 5,
  slidesToScroll: 1,
  infinite: true,
  swipeToSlide: true,
  centerMode: true,
  focusOnSelect: true,
  arrows: false,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 4,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 425,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
});
// ========================= UI Element One Slider Js End ===================

// ========================= UI Element Two Slider Js End ===================
$(".ui-element-two-slider").slick({
  speed: 12000,
  autoplay: true,
  autoplaySpeed: 0,
  cssEase: 'linear',
  slidesToShow: 5,
  slidesToScroll: 1,
  infinite: true,
  swipeToSlide: true,
  centerMode: true,
  focusOnSelect: true,
  arrows: false,
  rtl: true,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 4,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 425,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
});
// ========================= UI Element Two Slider Js End ===================

// ========================= UI Element Two Slider Js End ===================
$(".ui-element-three-slider").slick({
  speed: 6000,
  autoplay: true,
  autoplaySpeed: 0,
  cssEase: 'linear',
  slidesToShow: 5,
  slidesToScroll: 1,
  infinite: true,
  swipeToSlide: true,
  centerMode: true,
  focusOnSelect: true,
  arrows: false,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 4,
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 425,
      settings: {
        slidesToShow: 1,
      }
    }
  ]
});
// ========================= UI Element Two Slider Js End ===================


  
  });
  // ==========================================
  //      End Document Ready function
  // ==========================================

  // ========================= Preloader Js Start =====================
    $(window).on("load", function(){
      $('.preloader').fadeOut(); 
    })
    // ========================= Preloader Js End=====================

    // ========================= Header Sticky Js Start ==============
    $(window).on('scroll', function() {
      if ($(window).scrollTop() >= 260) {
        $('.header').addClass('fixed-header');
      }
      else {
          $('.header').removeClass('fixed-header');
      }
    }); 
    // ========================= Header Sticky Js End===================

})(jQuery);
