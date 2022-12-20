<?php

    include "db.php";
     
    $commentNewCount = $_POST['commentNewCount'];
    
    $sql = "SELECT * FROM comments LIMIT $commentNewCount";
    $result = mysqli_query($conn, $sql);
    $count = mysqli_num_rows($result);
    if ($count > 0) {
        while ($row = mysqli_fetch_assoc($result)) {
            echo "<div class='comment-box'><p>";
            echo $row['author'];
            echo "</p><p>";
            echo $row['message'];
            echo "</p></div>";
          
        }
    } else {
        echo "There are no comments!";
    }
    
    ?>
    </div>