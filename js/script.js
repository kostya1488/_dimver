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