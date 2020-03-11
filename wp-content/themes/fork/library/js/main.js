$(document).ready(function () {
  headerController();
  mobileMenu();
  setCategoryItems();
  parallax();
  buttons();
  smoothScroll();
  quotesCarousel();
  lightbox();
});

var lightbox = function () {
  var body = $('body');
  var lightbox = $('.image-lightbox');
  var lightboxImage = $('.image-lightbox .image');
  var targetImage = $('.lightbox-trigger');

  targetImage.click(function () {
    lightboxImage.css('background-image', 'url(' + $(this).attr('data-image') + ')');
    body.addClass('lightbox-open');
  });

  lightbox.click(function () {
    body.removeClass('lightbox-open');

    setTimeout(function () {
      lightboxImage.css('background-image', 'none');
    }, 500);
  });
};

var quotesCarousel = function () {
  var quotes = $('.quotes-list');

  quotes.slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    dots: true,
  });
};

var smoothScroll = function () {
  var header = $('header');

  $('a[href^="#"]').on('click', function (e) {
    e.preventDefault();

    var scrollTop =
      $($(this).attr('href')).position().top -
      header.outerHeight();

    $('html, body').animate({ scrollTop: scrollTop }, 1000);
  });
};

var buttons = function () {
  var downloadButtons = $('.btn.download');

  downloadButtons.click(function () {
    $(this).addClass('clicked');
  });
};

var parallax = function () {
  var x = window.matchMedia("(min-width: 991px)");

  if (x.matches) {
    $(".home-hero").css("background-position", "50% " + ($(this).scrollTop() / 30 + 70) + "%");

    $(window).scroll(function () {
      $(".home-hero").css("background-position", "50% " + ($(this).scrollTop() / 30 + 70) + "%");
    });
  }
};


var setCategoryItems = function () {
  var items = $('.cat-filter li a');
  var currentPath = window.location.pathname;
  var catBase = "/portfolio/category/";

  if (currentPath === "/portfolio/") {
    $(".default-cat").addClass("current");
  } else {
    items.each(function () {
      var catName = $(this).attr('data-slug');
      var catPath = catBase + catName + "/";

      if (currentPath === catPath) {
        $(this).addClass('current');
      }
    });
  }
};

var mobileMenu = function () {
  var body = $('body');
  var close = $('.close');
  var hamburger = $('.hamburger');
  var mobileMenu = $('.mobile-menu');

  hamburger.click(function () {
    body.addClass('mobile-menu-open');
  });

  close.click(function () {
    body.removeClass('mobile-menu-open');
  });
};

var headerController = function () {
  var scrollWrapper = $(window);
  var body = $('body');

  if (scrollWrapper.scrollTop() > 0) {
    body.addClass('scrolled');
  }

  scrollWrapper.scroll(() => {
    if (scrollWrapper.scrollTop() > 0) {
      body.addClass('scrolled');
    } else {
      body.removeClass('scrolled');
    }
  });
};
