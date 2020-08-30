<?php
$to = "info@dimver.net.ua";
$subject = "Заявка с сайта";
$headers = "From: message@dimver.net.ua";




if (isset($_POST["name"]) && isset($_POST["email"]) && isset($_POST["message"]) ) { 

	// Формируем массив для JSON ответа
    $result = array(
    	'Имя' => $_POST["name"],
        'Email' => $_POST["email"],
    	'Сообщение' => $_POST["message"]        
    ); 

    // Переводим массив в JSON
    echo json_encode($result); 

    foreach ($result as $key => $value) {
        $txt_for_mail .= $key . ": " . $value ."\n";
 }

  mail($to, $subject, $txt_for_mail, $headers);

}



?>