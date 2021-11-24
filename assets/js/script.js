$(document).ready(function() {

/*=============lang================*/
 $('*').click(function(e){
     if(!$(e.target).is('.ll')){
	      	console.log(e.target);
        $('.lang__dropdown').fadeOut(222);
     }
 });
 $(".ll").on("click", function(event) {
   event.preventDefault();
   $('.lang__dropdown').fadeIn(222);
 });
 
 $(".lang__dropdown a").on("click", function(event) {
     event.preventDefault();
     src = $(this).find('img').attr('src');
	 tx = $(this).find('span').text();
	 $('.lang__icon-drop span').html(tx);
     $('.lang__icon-drop img').attr('src', src);
     $('.lang__dropdown').fadeOut(222);
  });
 /*===========/lang===========*/

/*======Menu-toggle=============*/
  
  $(".burger").on("click", function() {
    $(this).toggleClass("active");
    $(".header__nav").toggleClass('active');
  });
  /*==========/menu-toggle=========*/

 /*=========Smooth scroll=============*/
  $("[data-scroll]").on("click", function(event) {
  event.preventDefault();
 
      blockID = $(this).data('scroll');
     
      blockOffset = $('#'+blockID).offset().top;

      $(".header__nav").removeClass('active');
      $(".burger").removeClass('active');
 
    $("html, body").animate ({
      scrollTop: blockOffset - 30
    }, 500);
  });
/*=========/smooth scroll=============*/

 /*============Differents==========*/
 $(".btn-differents").on("click", function(event) {
   event.preventDefault();
   $(".differents__content").slideToggle(333);
 });
 /*============/differents==========*/

 /*==========Application-label===========*/
 $('.application-form__item input').on('input', function() {
 

 if($(this).val().length == 0)
 {
   $(this).removeClass('active');
 }
 else
 {
   $(this).addClass('active');
 }

});
 /*==========application-label===========*/


	
});