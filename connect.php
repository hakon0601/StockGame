
<?php

error_reporting(E_ALL);
ini_set('display_errors', '1');

$servername='localhost';
$username='capitalist';
$password='capitalist';
$dbname='stockpool';

//create connection
$conn =@mysql_connect ($servername,$username,$password);

@mysql_select_db($dbname,$conn);



?>