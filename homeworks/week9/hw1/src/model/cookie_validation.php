<?php
session_start();
require_once('../utils/conn.php');
require_once('../utils/session_validation.php');

header('Content-type:application/json;charset=utf8mb4');

$user = getUserFromUsername($_SESSION['username']); 

$userdata = [
  "nickname"=>$user['nickname'],
  "avatar"=>$user['avatar']
];

$response = json_encode($userdata);
echo $response;

?>