<?php
include 'connect.php';

/*
if (isset($_SESSION['username']) == false){
    echo $__SESSION['username'];
    header( "Location: login.html" );
    exit();
}*/

$cookie_name= 'stockUser';

if(isset($_COOKIE[$cookie_name])){


}
else{
    header( "Location: login.php" );
    exit();

}

$username = $_COOKIE[$cookie_name];

$query = "SELECT * FROM user WHERE  username = '$username'";
$result = @mysql_query($query) or die ("YOU SUCK FUCKER");

$row = @mysql_fetch_assoc($result);

if($row !== false){

        echo "Yo bitch ass username: " . $row['username']."<br>";
        echo "Yo bitch ass stock: " .$row['stock']."<br>";
        echo "Yo bitch ass bet: " .$row['bet']."<br>";
}
else{
    $query = "INSERT INTO user(username) VALUES ('$username')";
    @mysql_query($query) or die ("YOU FUCK SUCKER");
    echo $username . " was added to the database";


}

?>

<html>
<head>
<title>Marketplace</title>


</head>
<body>
<form action="submitted.php" method="post">
<select name="stock" id="stock" required>
<?php

$query = "SELECT * FROM stockbase";
$result = @mysql_query($query) or die ("YOU SUCK FUCKER");
while($row = @mysql_fetch_assoc($result)) {
    echo "<option value ='".$row['stock']."'>". $row['stock'] . " - " . $row['value'] . "</option>";

}


?>
</select><br>
<?php
echo "<input type='hidden' name ='username' id='username' value='".$username."'>";
?>

<input type="text" id="bet" name="bet" type="bet"/><br>
<input type="Submit" name="submit">
</form>
<form action="login.php" method="post">
<button name="logout" value="logout" type="submit">Log out</button>
</form>



</body>


</html>


