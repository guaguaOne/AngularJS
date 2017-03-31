<?php 
	header('Access-Control-Allow-Origin:*');
	include 'config.php';
	$name=$_POST["name"];
	$account=$_POST["account"];
	$password=$_POST["password"];
	$conn=mysql_connect("localhost",DB_ACCOUNT,DB_PASS) or die("连接失败"+mysql_error());
	// mysqli_query($conn,"create database maoning") or die("数据库创建失败");
	mysql_select_db(DB_NAME,$conn) or die("数据库选择失败"+mysql_error());
	// $sql="create table user
	// (
	// 	nickname varchar(15),
	// 	account varchar(15),
	// 	password varchar(15)
	// )";
	// mysql_query($sql,$conn) or die("数据表创建失败"+mysql_error());
	$sql="insert into user values
	(
		'$name',
		'$account',
		'$password'
	)";
	mysql_query($sql,$conn) or die("数据表插入失败"+mysql_error());
	echo $name;
	echo $account;
	echo $password;
 ?>