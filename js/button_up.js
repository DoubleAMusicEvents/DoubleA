$(document).ready(function() {
    $('.up').hide();

    $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
            $('.up').fadeIn();
        } else {
            $('.up').fadeOut();
        }
    });

    $('.up').click(function(e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    })
});