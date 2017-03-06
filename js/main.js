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
            };
        });

        // Obsługa formularza

        var addButton = $('.add-button'),
            textField = $('#input-field'),
            list = $('.list');

        addButton.on('click', function(e){
            e.preventDefault();
            var value = textField.val().trim();

            if(value !== "") {
                var newElement = $('<li class="item">'+value+'</li>')
                list.append(newElement)
            } else {
                return;
            }

        })

    });

})(jQuery);