$(window).scroll(() => {
    let header = $('#header');

    if ($(window).scrollTop() > 30 && $(window).width() > 992) {
        header.addClass("sticky");
        $('#banner').css('margin-top', 126);

    } else {
        header.removeClass("sticky");
        $('#banner').css('margin-top', 0);
    }
});


$('#menu_button').click(() => {
    $('.open_menu').toggleClass('active')
});

$(".nav_link").on("click", function(event) {
    event.preventDefault();
    var id = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 500);
});