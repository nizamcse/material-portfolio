$(document).ready(function(){
    $(".menu__level--current").find('li').each(function(index){
        var transitionTime = 100*(index + 3 );
        $(this).css({
            transition : 'all '+transitionTime+'ms ease-in-out'
        });
    });

    $(".menu-link").on('click',function(){
        var curr = $(this).data('submenu');
        console.log(curr);
        if(curr){

            //$(".menu__level").find(".menu__level--current").removeClass("menu__level--current");
            $(".menu__level--current").addClass("right-out");
            $(".menu__level").removeClass("menu__level--current");
            $(".menu__level[data-menu='"+curr+"']").addClass("menu__level--current").addClass("right-in").removeClass("right-out");
        }
    });
    $(".right-out").find('li').each(function(index){
        var transitionTime = 100*(index + 1 );
        $(this).css({
            transition : 'all '+transitionTime+'ms ease-in-out'
        });
    });


    /// Slide show


    /*$(".btn-next").on("click",function(){
        var nextt = $(".current").next();
        if(!nextt.is(':last-child')){
            $(".slide-container").find(".current").removeClass("current");
            nextt.addClass("current");
        }
        else{
            $(".slide-container").find(".current").removeClass("current");
            $(".slide-item").first().addClass("current");
        }
    });


    $(".btn-prev").on("click",function(){
        var prevv= $(".current").prev();
        if(! prevv.is(":first-child")){
            $(".slide-container").find(".current").removeClass("current");
            prevv.addClass("current");
        }
        else{
            $(".slide-container").find(".current").removeClass("current");
            $(".slide-item").last().addClass("current");
        }
    })
    */

    $('.btn-next').on('click',function () {
        var nextt = $('.current').next();
        var curr = $('.current');
        if (!curr.is(':last-child')){
            $('.slide-item').find('.current').removeClass('current');
            nextt.addClass('current');
        }
        else{
            $(".slide-container").find(".current").removeClass("current");
            $(".slide-item").first().addClass("current");
        }

    });
    $('.btn-prev').on('click',function () {
        var current = $('.slide-container').find('.current');

        if(!current.is(':first-child')){
            var prevv =  $(".slide-container").find(".current").prev();
            $(".slide-container").find(".current").removeClass("current");
            prevv.addClass('current');
        }

        else{
            $(".slide-container").find(".current").removeClass("current");
            $(".slide-item").last().addClass("current");
        }
    });


});




