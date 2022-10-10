// function for section Features


$('.notes > div').on('click', function(){
	$(this).toggleClass('active').next('.notes-slide').slideToggle(600);
	$(this).children('.notes-title').toggleClass('change-notes-color');
	$(this).parent('.notes').toggleClass('change-notes-border');

})


// function for section Hire


$('.jobs').on('click', function(){
	$(this).toggleClass('active').next('.jobs-hidden').slideToggle(600);
	$(this).children('.jobs-arrow').toggleClass('jobs-arrow-rotate');
	$(this).parent('.hire__jobs').toggleClass('change-color');
	
})


// function for section modal-overlay


$('.modal-overlay').on('click', function(e){
	if($(e.target).closest('.modal').length == 0){
		$(this).fadeOut();
	}
});

$('.close').on('click', function(){
	$(this).parents('.modal-overlay').fadeOut();
})

$('#open-modal').on('click', function(){
	$('.modal-overlay').fadeIn();
})


// Carousel function 

$('.carousel__info').bxSlider({
	mode: 'fade',
	controls: false,
	pager: true,

	auto: true,
 });


// Scroll button 


$(window).on('scroll', function(){
	if($(this).scrollTop() > 500){
		$('#up').fadeIn()
	}
	else{
		$('#up').fadeOut()
	}
})

$('#up').on('click', function(){
	$('html, body').animate({scrollTop: 0}, 500)
})


// link to section Hire


$('#hire-link').on('click', function(e){
	e.preventDefault();
	$('html, body').animate({scrollTop: $('#hire').offset().top}, 1000)
})



$('#menuToggle #toggleCheckbox').change(function(){
	if(this.checked){
		$('body').css({'overflow': "hidden"})
	}
	else {
		$('body').css({'overflow': "visible"})
	}
})

$('#up').on('click', function(){
	$('html, body').animate({scrollTop: 0}, 500)
})

$('#audience_link').on('click', function(e){
	e.preventDefault();
	document.getElementById('toggleCheckbox').checked = false
	$('body').css({'overflow': "visible" })
	$('html, body').animate({scrollTop: $('#audience').offset().top})
})