<?php
session_start();
require_once('../utils/conn.php');
require_once('../utils/session_validation.php');

$data = json_decode(file_get_contents('php://input'), true);

header('Content-type:application/json;charset=utf8mb4');

if(empty($data['content'])){
  $json = array(
    "ok" => false,
    "message" => "No input content"
  );
  $response = json_encode($json);
  echo $response;
  die();
}

$user = getUserFromUsername($_SESSION['username']); 

$username = $user['username'];
$content = $data['content'];
$audio_time = floatval($data['audioTime']);

$sql = "insert into comments(username, content, audio_time) values(?, ?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param('sss',$username,$content,$audio_time);
$result = $stmt->execute();

if(!$result){
  $json = array(
    "ok" => false,
    "message" => $conn->error
  );

  $response = json_encode($json);
  echo $response;
  die();
}

$json = array(
  "ok" => true,
  "message" => "Success!",
);

$response = json_encode($json);
echo $response;


?>