$(function() {

    /** 
     * Mobile Nav
     *
     * Hubspot Standard Toggle Menu
     */
    $('.custom-menu-primary').addClass('js-enabled');
    
    /* Mobile button with three lines icon */
        $('.custom-menu-primary .hs-menu-wrapper').before('<div class="mobile-trigger"><div class="inner"><span>Menu</span></div></div>');
        
    /* Uncomment for mobile button that says 'MENU' 
        $('.custom-menu-primary .hs-menu-wrapper').before('<div class="mobile-trigger">MENU</div>');
    */
    $('.custom-menu-primary .flyouts .hs-item-has-children > a').after(' <div class="child-trigger"><i></i></div>');
    $('.mobile-trigger .inner').click(function() {
        $(this).parent('.mobile-trigger').next('.custom-menu-primary .hs-menu-wrapper').fadeToggle(250);
        $('body').toggleClass('mobile-open');
        $('.child-trigger').removeClass('child-open');
        $('.hs-menu-children-wrapper').slideUp(250);
        return false;
     });

    $('.child-trigger').click(function() {
        $(this).parent().siblings('.hs-item-has-children').find('.child-trigger').removeClass('child-open');
        $(this).parent().siblings('.hs-item-has-children').find('.hs-menu-children-wrapper').slideUp(250);
        $(this).next('.hs-menu-children-wrapper').slideToggle(250);
        $(this).next('.hs-menu-children-wrapper').children('.hs-item-has-children').find('.hs-menu-children-wrapper').slideUp(250);
        $(this).next('.hs-menu-children-wrapper').children('.hs-item-has-children').find('.child-trigger').removeClass('child-open');
        $(this).toggleClass('child-open');
        return false;
    });
		$('.body-container iframe').wrap('<div class="post-video" />');
  if ($('.custom-header').length) {
  	 $(document).ready(function () {
       var pos = $(".custom-header").offset().top;
       $(window).scroll(function () {
           if ($(this).scrollTop() > pos) {
               $('body').addClass('fixheader');
           } else {
               $('body').removeClass('fixheader');
           }
       });
    });
}
});
$('a.icon-close').click(function(){
    $(this).parent('.hs-register-group').slideToggle();
    $(this).parent('.hs-register-group').next('#pull-down').slideToggle();
	return false;
});
$('#pull-down').click(function(){
    $(this).prev('.hs-register-group').slideToggle();
    $(this).slideToggle();
});
$(function() {
 $('a[href*=#]:not([href=#])').click(function() {
   if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
     var target = $(this.hash);
     target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
     if (target.length) {
       $('html,body').animate({
         scrollTop: target.offset().top - 20
       }, 1000);
       return false;
     }
   }
 });
});
	

$(document).ready(function(){ $('.custom-header').parent('.row-fluid ').addClass('hs-min-height');$('.hs-parellex').closest('body').find('.custom-banner').addClass('hs-parellax');if($('.video-banner-area').length){ $('body').addClass('has-video-banner');}});

/**
 * Author: Heather Corey
 * jQuery Simple Parallax Plugin
 *
 */
(function($) {
    $.fn.parallax = function(options) {
        var windowHeight = $(window).height();
        // Establish default settings
        var settings = $.extend({
            speed        : 0.15
        }, options);
        // Iterate over each object in collection
        return this.each( function() {
        // Save a reference to the element
        var $this = $(this);
        // Set up Scroll Handler
        $(document).scroll(function(){
    var scrollTop = $(window).scrollTop();
            var offset = $this.offset().top;
            var height = $this.outerHeight();
    // Check if above or below viewport
if (offset + height <= scrollTop || offset >= scrollTop + windowHeight) {
return;
}
var yBgPosition = Math.round((offset - scrollTop) * settings.speed);
                // Apply the Y Background Position to Set the Parallax Effect
    $this.css('background-position', 'center ' + yBgPosition + 'px');
                
        });
        });
    }
}(jQuery));
$(document).ready(function(){
  $('.hs-parellax, .hs-full-width-with-background-module, .hs-banner-image').parallax({
    speed : 0.1
  });
});
$('.hs-accordion-with-form-title > a').click(function(){
	$(this).parent().next().slideToggle();
  return false;
});
$('body').click(function(){
  $('.hs-pop-wrapper').fadeOut();
});

$('.hs-pop-form').prepend('<button title="Close (Esc)" type="button" class="mfp-close">×</button>');
$('.lightbox').click(function(w){
  w.stopPropagation();
  $($(this).attr('href')).fadeIn();
  return false
});
$('.hs-pop-form').click(function(w){
   w.stopPropagation();
});

$('.mfp-close').click(function(){
  $('.hs-pop-wrapper').fadeOut();
});

$(window).load(function(){
  $('ul.slick-dots').wrap('<div class="control-wrap" />');
  $('button.slick-prev').prependTo('.control-wrap');
  $('button.slick-next').appendTo('.control-wrap');
$('div#pd .hs-accordion-with-form .hs-accordion-with-form-content-inner .hs-form').after('<p style="text-align: left;"><strong>For further details please contact the VETDSS Team:&nbsp;</strong><a href="mailto:vet.support@collarts.edu.au">vet.support@collarts.edu.au</a></p>');
});

