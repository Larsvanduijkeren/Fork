$(document).ready(function () {
  smoothScroll();

  gtag('event', 'xyz');
});

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
