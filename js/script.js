$(document).ready(function() {
    $('.ico-bars').click(function(){
        $('.ico-bars').toggleClass('fa-xmark');
        $('.nav-menu ul').slideToggle();
    });
    $(window).resize(function(){
        if($(document).width()<=991){
            $('.nav-menu ul').hide();
        }
        if($(document).width()>991){
            $('.nav-menu ul').show();
        }
    });
});