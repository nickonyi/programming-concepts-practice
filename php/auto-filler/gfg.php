<?php
include "load.php";
?>
<html>

<head>
	<script src=
		"https://code.jquery.com/jquery-3.2.1.min.js">
	</script>

	<script src=
"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"
		type="text/javascript">
	</script>
	
	<link rel="stylesheet" href=
"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">

	<script src=
"https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js">
	</script>
</head>

<body>
	<div class="container">
		<h1>GeeksForGeeks</h1>
		<div class="row">
			<div class="col-lg-6">
				<div class="form-group">
					<label>User Id</label>
					<input type='text' name="user_id"
						id='user_id' class='form-control'
						placeholder='Enter user id'
						onkeyup="GetDetail(this.value)" value="">
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col-lg-6">
				<div class="form-group">
					<label>First Name:</label>
					<input type="text" name="first_name"
						id="first_name" class="form-control"
						placeholder='First Name'
						value="">
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col-lg-6">
				<div class="form-group">
					<label>Last Name:</label>
					<input type="text" name="last_name"
						id="last_name" class="form-control"
						placeholder='Last Name'
						value="">
				</div>
			</div>
		</div>
	</div>
	<script src="jsd.js"></script>
</body>

</html>


