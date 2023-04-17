<?php
if (isset($_POST['submit'])) {
    $to = 'ctspencer432@gmail,com'; // Your email address
    $subject = $_POST['subject']; // Subject of the message
    $name = $_POST['name']; // Name of the sender
    $email = $_POST['email']; // Email address of the sender
    $message = $_POST['message']; // Message body

    // Email headers
    $headers = "From: $name <$email>\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-type: text/plain; charset=utf-8\r\n";

    // Send the message
    $sent = mail($to, $subject, $message, $headers);

    if ($sent) {
        echo '<p>Your message has been sent successfully. Thank you for contacting us.</p>';
    } else {
        echo '<p>Sorry, there was an error sending your message. Please try again later.</p>';
    }
}
?>
