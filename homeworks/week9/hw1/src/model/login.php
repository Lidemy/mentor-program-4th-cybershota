<?php
session_start();
require_once('../utils/conn.php');

$loginData = json_decode(file_get_contents('php://input'),true);

if(empty($loginData['username']|| empty($loginData['password']))){
  $json = array(
    "ok" => false,
    "message" => "No input content"
  );
  $response = json_encode($json);
  echo $response;
  die();
}

$username = $loginData['username'];
$password = $loginData['password'];

$sql = sprintf(
  "SELECT * FROM users WHERE username='%s' AND password='%s'",
  $username,
  $password
);

$result = $conn->query($sql);

// 錯誤處理
// 如果只寫 !result 會出現我沒預期的錯誤，無法順利傳送自訂 JSON
if($result->num_rows === 0){
  $json = array(
    "ok" => false,
    "message" => "User not found.",
    "error_code" => 404
  );

  $response = json_encode($json);
  echo $response;
  die();
}

// 找使用者
if($result->num_rows){
  $data = array();

  while($row = $result->fetch_assoc()){
    array_push($data,array(
      "nickname"=>$row['nickname'],
      "avatar"=>$row['avatar']
    ));
  }

  $json = array(
    "ok" => true,
    "message" => "Successfully Found User!",
    "data" => $data
  );

  $expire = time() + 3600 * 24 * 30;
  $_SESSION['username'] = $username;
  
  $response = json_encode($json);
  echo $response;
}

?>