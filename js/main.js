(function($){

    $(function(){
        
        var revealButton = $('.reveal-button'),
            navbar = $('.navbar');

        revealButton.on('click', function(){
            var isHidden = navbar.hasClass('hidden'),
                duration = 600,
                easing = "swing";

            if(isHidden) {
                navbar.removeClass('hidden')
                navbar.stop().slideDown(duration, easing);
            } else {
                navbar.addClass('hidden');
                navbar.stop().slideUp(duration, easing)
            }
        });
    });

})(jQuery);