<?php
//get data from form  
$name = $_POST['Name'];
$email= $_POST['Email'];
$phone= $_POST['Phone'];
$text= $_POST['text']
$to = "hassaanulhaq822gmail.com";
$subject = "Mail From SLS";
$txt ="Name = ". $name . "\r\n  Email = " . $email . "\r\n Phone =" .$phone . "\r\n text =$text";
$headers = "From: http://127.0.0.1:5500/Bujinech.html" . "\r\n" .
"CC: somebodyelse@example.com";
if($email!=NULL){
    mail($to,$subject,$txt,$headers);
}
//redirect
header("Location:thanakyou.html");
?>