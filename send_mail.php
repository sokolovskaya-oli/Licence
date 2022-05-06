<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require "PHPMailer/src/PHPMailer.php";
require "PHPMailer/src/Exception.php";

$mail = new PHPMailer(true);
$mail->CharSet = "UTF-8";

$name = $_POST["name"];
$email = $_POST["email"];
$phone = $_POST["phone"];
$message = $_POST["message"];

$body = $name . " " . $email . " " . $phone . " " . $message;
$theme = "[Заявка с формы]";

$mail->addAddress('licensepolska@gmail.com');

$mail->Subject = $theme;
$mail->Body = $body;

if (!$mail->send()){
    $message = "Данные не отправлены";
} else {
    $message = "Данные успешно отправлены!";
}

$response = ["message" => $message];
header('Content-type: application/json');
echo json_encode($response);

