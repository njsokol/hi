<?php
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Allow-Origin: http://localhost:8081");
header("Access-Control-Allow-Origin: http://localhost:8443");
header("Access-Control-Allow-Origin: http://localhost");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept, Authorization");

$data = json_decode(file_get_contents("php://input"));
$name = $data->name;

$servername = "localhost";
$username = "nathaoe2_read";
$password =  "reader123";
$dbname = "nathaoe2_halfmarathon";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 

$sql = "update hm_users set votes = votes + 1 where name = '".$name."'";

$result = $conn-> query($sql);

$conn->close();

?>