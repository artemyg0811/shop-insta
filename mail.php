<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Переменные, которые отправляет пользователь
$name = $_POST['name'];
$phone = $_POST['phone'];

// Формирование самого письма
$title = "Запись на сессию";
$body = "
<b>Имя:</b> $name<br>
<b>Телефон:</b> $phone<br><br>";

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    //$mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host       = 'smtp.mail.ru'; // SMTP сервера вашей почты
    $mail->Username   = 'insta-shop95@mail.ru'; // Логин на почте
    $mail->Password   = 'Tu4ATaTet3i|'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('insta-shop95@mail.ru', 'Робот InstaMin'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('artiom.ygryumov@gmail.com');

// Отправка сообщения
$mail->isHTML(true);
$mail->Subject = $title;
$mail->Body = $body;    

// Проверяем отравленность сообщения
if ($mail->send()) {
    echo "Заявка успешно отправлена";
  } else {$result = "error";}

  } catch (Exception $e) {
      $result = "error";
      $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
  }

  // Отображение результатаа
  // echo json_encode(["result" => $result, "resultfile" => $rfile, "status" => $status]);
  return false;
?>
