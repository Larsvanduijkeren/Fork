$(document).ready(function () {
  smoothScroll();
  handleForm();
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

var handleForm = function(e) {
  e.preventDefault();

  gtag('event', 'sign_up');
};
