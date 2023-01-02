<?php


$datahost = "localhost";
$dataname = "ajax";
$datapass = "";
$dbuser = "root";

$conn = mysqli_connect($datahost, $dbuser, $datapass, $dataname);

if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

?>