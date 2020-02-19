<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");
header("Content-Type: text/html; charset=utf-8");
$method = $_SERVER['REQUEST_METHOD'];
$JSONData = file_get_contents("php://input");
$dataObject = json_decode($JSONData);  
require 'conectar.php';
$conexion = conectarDB();
$atendidos = $dataObject-> atendidos;
$ids = $dataObject-> ids;
// for ($i=0; $i < sizeof($atendidos); $i++) { 
//     $actualizacion = "UPDATE `recursos` SET `atendida`='$atendidos[i]' WHERE `id`='$id[i]'";
//     $resultadoActualizacion = mysqli_query($conexion, $actualizacion);  
// }
// if($resultadoActualizacion)
// {
 echo json_encode(array('error'=>'false','msj'=>$atendidos));
// }
// else
// {
//  echo json_encode(array('error'=>'true','msj'=>$conexion->error)); 
// }
?>