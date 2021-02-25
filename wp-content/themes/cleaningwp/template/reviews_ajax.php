<?php
$DB_name = "cleaning";
$DB_USER = "root";
$DB_PASSWORD ="";
$DB_HOST = "localhost";

$connect = mysqli_connect($DB_HOST, $DB_USER, $DB_PASSWORD, $DB_name);
mysqli_set_charset($connect, "utf8");


$name = $_POST['name'];
$lastname = $_POST['lastname'];
$comment = $_POST['comments']; 
$star = (int)$_POST['star'];
$img = $_POST['fileimg'];
 
$link = mysqli_query($connect, "INSERT INTO reviews (name, lastname, comment, star, img ) VALUES ('$name','$lastname','$comment','$star', '$img') ");





var_dump($name);
var_dump($lastname);
var_dump($comment);
var_dump($star);
var_dump($img);
var_dump($link);