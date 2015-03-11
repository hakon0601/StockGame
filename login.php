<?php

$cookie_name='stockUser';
if(isset($_POST['logout'])){
    unset($_COOKIE['stockUser']);
    setcookie('stockUser', null, -1, '/');


}
if(isset($_POST['username'])){
   $cookie_value=$_POST['username'];
   setcookie($cookie_name, $cookie_value, time() + (86400 * 30), "/");
    header( "Location: market.php" );
    exit();
}


if(isset($_COOKIE['stockUser'])){
    header( "Location: market.php" );
    exit();

}

?>

<html>
<head>
<title>Login</title>
</head>

<body>
<form  method="post">
<label for ="username"> Skriv inn brukernavn</label>
<input type ="text" name ="username" id="username" required="required"/><br>
<input type="submit" value="Submit"/>
</form>





</body>





</html>
