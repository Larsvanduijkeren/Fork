$(document).ready(function(){headerController(),mobileMenu(),setCategoryItems(),parallax(),buttons(),smoothScroll(),quotesCarousel(),lightbox()});var lightbox=function(){var o=$("body"),t=$(".image-lightbox"),e=$(".image-lightbox .image");$(".lightbox-trigger").click(function(){e.css("background-image","url("+$(this).attr("data-image")+")"),o.addClass("lightbox-open")}),t.click(function(){o.removeClass("lightbox-open"),setTimeout(function(){e.css("background-image","none")},500)})},quotesCarousel=function(){$(".quotes-list").slick({infinite:!0,slidesToShow:1,slidesToScroll:1,autoplay:!0,autoplaySpeed:5e3,arrows:!1,dots:!0})},smoothScroll=function(){var o=$("header");$('a[href^="#"]').on("click",function(t){t.preventDefault();var e=$($(this).attr("href")).position().top-o.outerHeight();$("html, body").animate({scrollTop:e},1e3)})},buttons=function(){$(".btn.download").click(function(){$(this).addClass("clicked")})},parallax=function(){window.matchMedia("(min-width: 991px)").matches&&($(".home-hero").css("background-position","50% "+($(this).scrollTop()/30+70)+"%"),$(window).scroll(function(){$(".home-hero").css("background-position","50% "+($(this).scrollTop()/30+70)+"%")}))},setCategoryItems=function(){var o=$(".cat-filter li a"),t=window.location.pathname;"/portfolio/"===t?$(".default-cat").addClass("current"):o.each(function(){var o=$(this).attr("data-slug");t==="/portfolio/category/"+o+"/"&&$(this).addClass("current")})},mobileMenu=function(){var o=$("body"),t=$(".close"),e=$(".hamburger");$(".mobile-menu");e.click(function(){o.addClass("mobile-menu-open")}),t.click(function(){o.removeClass("mobile-menu-open")})},headerController=function(){var o=$(window),t=$("body");o.scrollTop()>0&&t.addClass("scrolled"),o.scroll(()=>{o.scrollTop()>0?t.addClass("scrolled"):t.removeClass("scrolled")})};