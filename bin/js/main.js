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
});