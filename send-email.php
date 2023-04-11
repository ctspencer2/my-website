<?php
if(isset($_POST['submit'])){
    $to = "ctspencer432@gmail.com";
    $name = $_POST['name'];
    $from = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];
    $headers = "From:" . $from;
    mail($to,$subject,$message,$headers);
    echo "Mail Sent. Thank you " . $name . ", we will contact you shortly.";
}
?>
