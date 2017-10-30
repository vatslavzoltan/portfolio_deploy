$(document).ready(function () {
	//Scroll
	$('.top_menu ul li a').mPageScroll2id();
	//Animation fade
/*	$('.name_container h1').animated('fadeInDown');
	$('.name_container p, .s_descr_wrap').animated('fadeInUp');*/
	//Header height
	function heightDetect() {
		$('.main_head').css('height',$(window).height());
	};
		heightDetect();
	$(window).resize(function () {
		heightDetect();
	})
	//Parallax
	$('.main_head').parallax({imageSrc: 'img/bg.jpg'});
	//Preloader
	$(window).on ('load', function(){
		$('.preloader').delay(1000).fadeOut('slow');
	});
	//Menu btn
	$(document).ready(function(){
	$('.nav_icon').click(function(){
		$(this).toggleClass('open');
		});
	});
	$('.menu_item a').click(function () {
		$('.top_menu').fadeOut(600);
		$('.nav_icon').removeClass('open');
	}).append('<span>');

	$(".toggle_menu").click(function () {
		if($(".top_menu").is(":visible")){
			$('.top_menu').fadeOut(600);
			$('.top_menu li a').removeClass('fadeInUp animated');
		} else {
			$('.top_menu').fadeIn(800);
			$('.top_menu li a').addClass('fadeInUp animated');
		}
		$('.top_menu').click(function () {
			$(this).fadeOut(600);
			$('.nav_icon').removeClass('open');
		});
	});
	//Carousel
	$(document).ready(function(){
	  $('.owl-carousel').owlCarousel({
	  	items: 1,
	  	loop: true,
	  	nav: false,
	  	navText: ['<img src="img/back.svg" alt="left-arow" />','<img src="img/next.svg" alt="right-arow" />'],
	  	animateIn: 'slideInRight',
	  	animateOut: 'slideOutRight',

	  });
	});

	//Portfolio
	$('#product_grid').mixItUp();

	$('.portfolio_nav_item').click(function () {
		$('.portfolio_nav_item').removeClass('active');
		$(this).addClass('active');
	});
	$('.popup').click(function(){
		event.preventDefault();
	});
	$('.popup').magnificPopup({type:'inline'});

	$('.portfolio_item').each(function(i){
		$(this).find('.popup').attr("href",'#work_'+i);
		$(this).find('.port_item_descr').attr("id",'work_'+i);
	});
	//Form
	$("input,select,textarea").not("[type=submit]").jqBootstrapValidation();

	//E-mail Ajax Send
	$("form.callback").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$(th).find('.success_block').addClass('active').css('display','flex').hide().fadeIn();
			/*setTimeout(function() {
				$(th).find('.success').removeClass('active').fadeOut();
				th.trigger("reset");
			}, 3000);*/
		});
		return false;
	});
	//Top btn
	$(window).scroll(function () {
		if ($(this).scrollTop()>$(this).height()) {
			$(".top").addClass('active');
		}
		else{
			$('.top').removeClass('active');
		}
	});
	$('.top').click(function(){
		$('html, body').stop().animate({scrollTop: 0}, 'slow','swing');
	});

	
});
