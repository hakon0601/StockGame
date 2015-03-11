<?php

    include("dbconfig.php");
    $conn = mysql_connect($host, $user, $pswd);
    mysql_select_db($db, $conn);


    //run the query to search for the username and password the match
    $query = "SELECT * FROM `user`";
    $result = mysql_query($query) or die("Unable to load data from database because : ".mysql_error());


    while ($row = mysql_fetch_assoc($result)) {
    	echo nl2br($row['username']. "\n");
    }


?>