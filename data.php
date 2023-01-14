<?php
	session_start();
	$num = htmlspecialchars($_POST['num'] ?? '');
	$mysql = mysqli_connect('localhost', 'root', '', 'Numbers');
	$q = "SELECT * FROM `Num`";
	$q = "INSERT INTO `Num`(`ID`, `NUM`) VALUES (NULL ,'$num')";
	mysqli_query($mysql, $q);
	mysqli_close($mysql);
	setcookie('num', $num, time() + (60*60), "/");
	$nums = htmlspecialchars(mysqli_fetch_all($num));
	$echo ='';
	if($nums){
		foreach ($nums as $num) {
		$echo = "<td>$num[1]</td>";
		}
	}
	echo json_encode($nums);
	header('Location: /index.php');
?>