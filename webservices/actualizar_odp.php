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
$id_usuario = $dataObject-> usuario;
$nombre = $dataObject-> nombre;
$descripcion = $dataObject-> descripcion;
$fecha_ingreso = date("l jS \of F Y h:i:s A");

if (isset ($dataObject-> poblacion)) {
    $poblacion =  utf8_decode($dataObject-> poblacion); 
  } else {
    $poblacion =  "N/A"; 
  }
$url = $dataObject-> url;
$id_tipo = $dataObject-> id_tipo;
if (isset ($dataObject-> url_imagen)) {
  $url_imagen =  utf8_decode($dataObject-> url_imagen); 
} else {
  $url_imagen =  "N/A"; 
}
if (isset ($dataObject-> id_sub_categoria)) {
    $id_sub_categoria =  utf8_decode($dataObject-> id_sub_categoria); 
  } else {
    $id_sub_categoria =  "-1"; 
  }
   $actualizacion = "UPDATE `desarrollo_profesional` SET `nombre`= '$nombre',`descripcion`='$descripcion',`poblacion`='$poblacion',`url`='$url',`id_tipo`='$id_tipo',`id_usuario`='$id_usuario',`fecha_ingreso`='$fecha_ingreso,'`url_imagen`='$url_imagen',`id_sub_categoria`='$id_sub_categoria' WHERE `id`='$id'";

   $resultadoActualizacion = mysqli_query($conexion, $actualizacion); 

   if($resultadoActualizacion)
   {
    registrar_bitacora($conexion, $id_usuario,$id,'Edita',2);
    echo json_encode(array('error'=>'false','msj'=>'Datos actualizados correctamente'));
   }
   else
   {
    echo json_encode(array('error'=>'true','msj'=>$conexion->error)); 
   }
?>