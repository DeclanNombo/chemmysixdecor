 $('.togglebutton1').click(function(){
     $(this).fadeOut("slow")
    $('.home').toggleClass("hide");
    $('.sliding-menu').toggleClass("show");

}) 

$('.toggleclose').click(function(){
    $('.togglebutton1').fadeIn("slow");
    $('.home').toggleClass("hide");
    $('.sliding-menu').toggleClass("show");
})

$(".sliding-menu ul li").click(function(){
    $('.sliding-menu').toggleClass("show");
    $('.home').toggleClass("hide"); 
    $('.togglebutton1').fadeIn("slow");
});


