<?php

if(isset($_POST['submit'])) {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];
    $to = "ctspencer432@gmail.com";
    $headers = "From: " . $email . "\r\n" .
               "Reply-To: " . $email . "\r\n" .
               "X-Mailer: PHP/" . phpversion();
    $email_body = "Name: $name\n\nEmail: $email\n\nSubject: $subject\n\nMessage:\n$message";
    $sent = mail($to, $subject, $email_body, $headers);
    if($sent) {
        echo "Thank you for contacting us!";
    } else {
        echo "Sorry, your message could not be sent.";
    }
}

?>
