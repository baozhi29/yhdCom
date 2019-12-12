<?php
	header('content-type:text/html;charset=utf8');
	header('Access-Control-Allow-Origin:*');
	$connect = mysqli_connect('localhost','root','root','user',3306);
	if(mysqli_connect_error()){
		die('数据库连接错误');
	}

	$username = $_POST['username'];
	$password = $_POST['password'];
$sql = "SELECT * FROM info WHERE username='$username' AND password='$password'" ;
$result = mysqli_query($connect,$sql);
$rows = mysqli_num_rows($result);
if($rows>0){
	echo "0";
}else{
	$sql = "INSERT INTO info (username,password) VALUES ('$username','$password')";
	$result = mysqli_query($connect,$sql);
	if($result){
		setcookie("username",$username,time()+24*60*60);
		setcookie("password",$password,time()+24*60*60);
		echo "1";
	}else{
		echo "0";
	}
}

?>