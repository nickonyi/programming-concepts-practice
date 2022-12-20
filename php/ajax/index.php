<?php
include_once 'db.php';
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
   
    <script  src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.1/jquery.min.js"></script>
   <script>
     $(document).ready(function(){
       let commentCount = 1;
       $('button').click(function(){
           commentCount++;
          $('#comments').load("load-comments.php",{
           commentNewCount : commentCount
          });
       })
     });
   </script> 
   <title>Ajax tutorial</title>
</head>
<body>
    <div id="comments">
    <div>
    <button>Show more comments</button>
</body>
</html>