$(document).ready(function(){
	$(window).scroll(function(){
		if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
		
	})
	//----toggle menu icon
	$('.menu_button').click(function(){
		$('.navbar .menu').toggleClass("active");
		$('.menu_button i').toggleClass("active");
	});
	//owl carousel 2 scripts
    $('.carousel').owlCarousel({margin:20,
		loop:true,
		autoplayHoverPause:true,
		responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
		})	;

}) ;    