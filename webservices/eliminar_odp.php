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
require 'bitacora.php';
$conexion = conectarDB();
$id = $dataObject-> id;
$usuario= $dataObject-> id_usuario;
   $actualizacion = "UPDATE `desarrollo_profesional` SET `borrado`='1', `id_usuario`='$usuario' WHERE `id`='$id'";

   $resultadoActualizacion = mysqli_query($conexion, $actualizacion); 

   if($resultadoActualizacion)
   {
      registrar_bitacora($conexion, $usuario,$id,'Elimina',2);
      echo json_encode(array('error'=>'false','msj'=>'Datos borrados de forma exitosa'));
   }
   else
   {
    echo json_encode(array('error'=>'true','msj'=>$conexion->error)); 
   }
?>