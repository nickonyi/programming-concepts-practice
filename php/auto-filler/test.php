<?php

// Get the user id
$user_id = $_REQUEST['user_id'];

// Database connection
$con = mysqli_connect("localhost", "root", "", "auto-filler");

if ($user_id !== "") {
	
	// Get corresponding first name and
	// last name for that user id	
	 $query = mysqli_query($con, "SELECT first_name,
	last_name FROM user_data WHERE user_id='$user_id'");

	$row = mysqli_fetch_array($query);

	// Get the first name
	echo $first_name = $row["first_name"];

	// Get the first name
	echo $last_name = $row["last_name"];
}


?>
