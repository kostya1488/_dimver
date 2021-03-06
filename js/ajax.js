$(document).ready(function() {
    $("#ajax_form").submit(
        function() {
            sendAjaxForm('ajax_form', 'php/formhandler.php');
            return false;
        }
    );
});

function sendAjaxForm(ajax_form, url) {
    $.ajax({
        url: url, //url страницы (action_ajax_form.php)
        type: "POST", //метод отправки
        dataType: "html", //формат данных
        data: $("#" + ajax_form).serialize(), // Сеарилизуем объект
        success: function(response) { //Данные отправлены успешно
            result = $.parseJSON(response);
            $('#ajax_form').hide('slow');
            $('#response').show();
        },
        error: function(response) { // Данные не отправлены
            $('#ajax_form').hide('slow');
            $('#response').html('Ошибка! <br> Данные не отправлены.').css('color', '#f44336')
            $('#response').show();

        }
    });
}