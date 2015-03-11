<?php
include 'connect.php';
    if (isset($_COOKIE['stockUser']) == false){
        echo "L0g the fuck In!";
        header( "Location: login.php" );
        exit();
    }
    $username = $_COOKIE['stockUser'];
    $stock = $_POST['stock'];
    $bet =  $_POST['bet'];

    $query = "UPDATE user SET stock ='$stock', bet='$bet' WHERE username='$username'";
    echo $query;
    mysql_query($query) or die ("YOU FUCK SUCKER");
     header( "Location: market.php" );



?>