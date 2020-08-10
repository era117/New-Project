$(function () {

	// $('button[filter="Web"]').click(function(){
	// 	$('filter > div').hide(300);
	// });



	filter = $("[filter]");

	$('button[filter="Web"]').on("click", function(event){
		event.preventDefault();
		$(".filter > div").hide(300);
		$(".filter > div[filter=Web]").show(300);
	});


	$('button[filter="Mockups"]').on("click", function(event){
		event.preventDefault();
		$(".filter > div").hide(300);
		$(".filter > div[filter=Mockups]").show(300);
	});


	$('button[filter="Ui"]').on("click", function(event){
		event.preventDefault();
		$(".filter > div").hide(300);
		$(".filter > div[filter=Ui]").show(300);
	});

	$('button[filter="All"]').on("click", function(event){
		event.preventDefault();
		$(".filter > div").hide(300);
		$(".filter > div").show(300);
	});



	$('.slider').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 3,
		arrows:false,
		dots:true,
		responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 2,

			}
		},{
			breakpoint: 768,
			settings: {
					slidesToShow: 1,
				slidesToScroll: 1,
			}
		}
		]
	});
	


	$(' ul.menu a[href^="#" ').on("click", function(){
		var target = $(this).attr("href");
		var targetID = $(target).offset().top;
		$("html, body").animate({
			scrollTop:targetID
		}, 300);
		$(' ul.menu a[href^="#" ').css({
			'color':'#212121'	
		});
		$(this).css({
			'color':'#004bee'	
		});

		
		return false;
	});



	let intro = $("#intro");
	let introH = intro.innerHeight();
	let scrollPos = $(window).scrollTop();



$(window).on("scroll resize", function () {
		let TopScroller = $("#toTop")
		if ($(this).scrollTop() > introH) {
			$(TopScroller).fadeIn()
		}
		else	 {
			$(TopScroller).fadeOut()
		}
});



$(".burger").on("click", function(){
	$("nav").slideToggle(500);


		if ( $(".burger").html()!='<i class="fas fa-bars"></i>'    ) {
			$(this).html('<i class="fas fa-times"></i>')
		}
		else{
			$(this).html('<i class="fas fa-bars"></i>')
		}


});


	$("#toTop").click ( function () {
		$('body,html').animate({
			scrollTop:0
		}, 300)
	});




});