<?php

$testConnection = mysql_connect('localhost', 'root', 'password');

if (!$testConnection) {

die('Error: ' . mysql_error());

}

echo 'Database connection working!';

mysql_close($testConnection);

?>
