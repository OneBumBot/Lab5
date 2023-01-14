<?php

require_once "db_conn.php";

$id = htmlspecialchars($_GET['id'] ?? '');
$value = htmlspecialchars($_GET['v'] ?? '');

$q = "UPDATE `Num` SET `NUM`='$value' WHERE `ID` = '$id'";
	mysqli_query($sql, $q);