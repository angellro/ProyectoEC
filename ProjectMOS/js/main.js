/* =======================================================
	Autor: Ángel Lahuerta Romero
	Empresa: KOKOA Software
	Web: MOS - Main.js
	Versión: 1.0
	============================================================ */


/*--Funcion principal y motor principal de interacción con las librerías--*/
(function ($) {
	"use strict";
	var nav = $('nav');
	var navHeight = nav.outerHeight();

	$('.navbar-toggler').on('click', function () {
		if (!$('#mainNav').hasClass('navbar-reduce')) {
			$('#mainNav').addClass('navbar-reduce');
		}
	})

	/*--Animación y funcionamiento posicional al pulsar el boton inferior de subir--*/
	$(window).scroll(function () {
		if ($(this).scrollTop() > 100) {
			$('.back-to-top').fadeIn('slow');
		} else {
			$('.back-to-top').fadeOut('slow');
		}
	});
	$('.back-to-top').click(function () {
		$('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
		return false;
	});

	/*--Scroll para la animacion automatica en navegación superior--*/
	$('a.js-scroll[href*="#"]:not([href="#"])').on("click", function () {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html, body').animate({
					scrollTop: (target.offset().top - navHeight + 5)
				}, 1000, "easeInOutExpo");
				return false;
			}
		}
	});

	/*--Menu de interación superior, reproduce reducción de pixels para cambio de 
		estilo al interactuar distintas posiciones--*/
	$(window).trigger('scroll');
	$(window).on('scroll', function () {
		var pixels = 50;
		var top = 1200;
		if ($(window).scrollTop() > pixels) {
			$('.navbar-expand-md').addClass('navbar-reduce');
			$('.navbar-expand-md').removeClass('navbar-trans');
		} else {
			$('.navbar-expand-md').addClass('navbar-trans');
			$('.navbar-expand-md').removeClass('navbar-reduce');
		}
		if ($(window).scrollTop() > top) {
			$('.scrolltop-mf').fadeIn(1000, "easeInOutExpo");
		} else {
			$('.scrolltop-mf').fadeOut(1000, "easeInOutExpo");
		}
	});

	/*--Controla el texto animado teniendo como separador el uso de la coma--*/
	/*--Establece el control de velocidad en escritura y borrado como tiempo 
		de muestra por cada serie*/
	if ($('.text-slider').length == 1) {
		var typed_strings = $('.text-slider-items').text();
		var typed = new Typed('.text-slider', {
			strings: typed_strings.split(','),
			typeSpeed: 80,
			loop: true,
			backDelay: 1100,
			backSpeed: 30
		});
	}

	/*--Adapta el contenido del testimonio de la descripción del equipo de trabajo
		para establecer redimensión--*/
	$('#testimonial-mf').owlCarousel({
		margin: 20,
		responsive: {
			0: {
				items: 1,
			}
		}
	});
})(jQuery);