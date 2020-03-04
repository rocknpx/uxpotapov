$(function() {

	$('#my-menu').mmenu({
      extensions: [ 'widescreen', 'fx-menu-fade', 'fx-panels-none', 'fx-listitems-fade', 'pagedim-black', 'border-none', 'position-right', 'shadow-panels', 'theme-white'],
      navbar: {
         title: '<img src="img/uxp_logo.svg" alt="Портфолио Владимир Потапов">'
      },
      navbars: {
         "position": "bottom",
         "content": [
            "<a href='https://www.facebook.com/rocknpx/' class='soc-icon' target='_blank'>Fb</a>",
            "<a href='https://www.instagram.com/rocknpx/' class='soc-icon' target='_blank'>In</a>",
            "<a href='https://www.linkedin.com/in/ux-potapov/' class='soc-icon' target='_blank'>Lk</a>",
            "<a href='https://www.behance.net/rocknpx' class='soc-icon' target='_blank'>Be</a>",
            "<a href='https://dribbble.com/rocknpx' class='soc-icon' target='_blank'>Dr</a>",
         ]
      },
		"setSelected": {
			"hover": true
      },
		"pageScroll": true,
		scrollBugFix: false,

	});

   var API = $("#my-menu").data("mmenu");
	var $menuBtn = $(".hamburger");

	API.bind( "open:finish", function() {
		$menuBtn.addClass('is-active');
	});

	API.bind( "close:finish", function() {
		$menuBtn.removeClass('is-active');
	});

});


// ----- Owl Carusel -----

$(document).ready(function(){
   $('.carousel_brands').owlCarousel({
      loop: true,
      nav: true,
      smartSpeed: 700,
      navText: ['<div class="caourusel__nav_prev"></div>', '<div class="caourusel__nav_next"></div>'],
      center: true,
      responsiveClass: true,
      responsive: {
         0: {
            items: 1
         },
         480: {
            items: 1
         },
         1280: {
            items: 3
         },
         1680: {
            items: 5
         },
      },
      dots: false,
      autoplay: true,
      autoplayHoverPause: true,
      autoplayTimeout: 4000,
   });
});

// ----- Hide Menu on Scroll -----

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("vis_hdd_nav").style.top = "0";
  } else {
    document.getElementById("vis_hdd_nav").style.top = "-60px";
  }
  prevScrollpos = currentScrollPos;
};

// ----- Back to Top -----

var btn = $('.on-top-btn');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('active');
  } else {
    btn.removeClass('active');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, 'slow', 'swing');
});

//E-mail Ajax Send
$("form").submit(function() { //Change
	var th = $(this);
	$.ajax({
		type: "POST",
		url: "./php/mail.php", //Change
		data: th.serialize()
	}).done(function() {
		//alert("Thank you!");
		$(th).find('.success').addClass('active').css('display', 'flex').hide().fadeIn();
		setTimeout(function() {
			$(th).find('.success').removeClass('active').fadeOut();
			// Done Functions
			th.trigger("reset");
		}, 3000);
	});
	return false;
});


// ----- Text Area Size -----

const inputs = document.querySelectorAll('.inp-line-txt');

inputs.forEach(function(input){
	input.addEventListener('focus', function(){
		this.parentNode.classList.add('is-focused');
		this.parentNode.classList.add('has-label');
	});
	input.addEventListener('blur', function(){
		this.parentNode.classList.remove('is-focused');
		if(this.value == ''){
			this.parentNode.classList.remove('has-label');
		}
	});
});

autosize($('textarea'));


// ----- Smooth Scroll -----

$(document).ready(function() {
   var margin = 100; // переменная для контроля докрутки
   $("a").click(function() { '[href*="#"]' // тут пишите условия, для всех ссылок или для конкретных
      $("html, body").animate({
         scrollTop: $($(this).attr("href")).offset().top+ "px" // .top+margin - ставьте минус, если хотите увеличить отступ
      }, {
         duration: 800, // тут можно контролировать скорость
         easing: "swing"
      });
      return false;
   });
});

// ----- Preloader -----

$(window).on('load', function() {
	$('.preloader').delay(500).fadeOut('slow')
});
