$(window).scroll(() => {
    let header = $('#header');

    if ($(window).scrollTop() > 30) {
        header.addClass("sticky");
        $('#coursel').css('margin-top', 126);

    } else {
        header.removeClass("sticky");
        $('#coursel').css('margin-top', 0);
    }
});

$(".nav_link").on("click", function(event) {
    event.preventDefault();
    var id = $(this).attr('href'),
        top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 500);
});