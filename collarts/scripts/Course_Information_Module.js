
$(".inner_heads").on("click", (function() { 
    console.log($(this).siblings(".detail-answer").is(":visible")), 
    $(this).siblings(".detail-answer").is(":visible") ? ($(this).siblings(".detail-answer").slideUp(), 
    $(this).parent(".inner-faqs").removeClass("active")) : ($(".inner_heads").not(this).siblings(".detail-answer").slideUp(), 
    $(".inner_heads").not(this).parent(".inner-faqs").removeClass("active"), 
    $(this).siblings(".detail-answer").slideDown(), $(this).parent(".inner-faqs").addClass("active")) 
})) 
