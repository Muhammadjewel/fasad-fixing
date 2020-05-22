<?php

/* https://api.telegram.org/botXXXXXXXXXXXXXXXXXXXXXXX/getUpdates,
где, XXXXXXXXXXXXXXXXXXXXXXX - токен вашего бота, полученный ранее */

//Переменная $name,$phone, $mail получает данные при помощи метода POST из формы
$name = $_POST['name'];
$phone = $_POST['phone'];
$message = $_POST['message'];
$text = $_POST['interest'];
$position = $_POST['whom'];

//в переменную $token нужно вставить токен, который нам прислал @botFather
$token = "795805038:AAHt4stb-XxVA9dZJUtIPeZ_D7daedsGavE";

//нужна вставить chat_id (Как получить chad id, читайте ниже)
$chat_id = "-1001478792106";

//Далее создаем переменную, в которую помещаем PHP массив
$arr = array(
    'Имя пользователя: ' => $name,
    'Телефон: ' => $phone,
    'Форма: ' => $position,
);

if($message) {
    $arr['Сообщение:'] = $message;
}
if($text) {
    $arr['Интересует:'] = $text;
}

//При помощи цикла перебираем массив и помещаем переменную $txt текст из массива $arr
foreach($arr as $key => $value) {
    $txt .= "<b>".$key."</b> ".$value."%0A";
};

//header("Location:https://api.telegram.org/bot[bot_tocken]/sendMessage?chat_id=[your_chat_id]&text=+'$username'+");


//Осуществляется отправка данных в переменной $sendToTelegram
$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

//Если сообщение отправлено, напишет "Thank you", если нет - "Error"
if ($sendToTelegram) {
    echo "Сообщение отправлено успешно!";
} else {
    echo "error";
}
?>