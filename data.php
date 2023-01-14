<?php
	session_start();
	require_once "db_conn.php";
	if(isset($_GET['read'])){
	$num = htmlspecialchars($_POST['num'] ?? '');
	$q = "SELECT * FROM `Num`";
	$num = mysqli_query($sql, $q);
	$nums = mysqli_fetch_all($num);
	$echo ='';
		if($nums){
		foreach ($nums as $num) {
		$echo .= "<td>$num[1]</td>";
		}
	}
	echo $echo;
}
?>