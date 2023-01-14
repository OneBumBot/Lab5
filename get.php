<?php

require_once "db_conn.php";

$id = htmlspecialchars($_GET['id'] ?? '');

$q = "'SELECT * FORM `Num` WHERE `ID` = '$id'";

$result = mysqli_query($sql, $q);
$result = $result->fetch_assoc();

echo $result['NUM'];