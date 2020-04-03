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
$usuario = $dataObject-> usuario;
$nombre = $dataObject-> nombre;
$descripcion = $dataObject-> descripcion;
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
  $conn = conectarDB();
    
  if ($conn->connect_error) {
      die("Connection failed: " . $conn->connect_error);
  }

  $sql = "INSERT INTO `desarrollo_profesional`(`nombre`, `descripcion`, `poblacion`, `url`, `id_tipo`, `url_imagen`, `id_sub_categoria`) VALUES ('$nombre', '$descripcion', '$poblacion', '$url', '$id_tipo', '$url_imagen', '$id_sub_categoria')";

  if ($conn->query($sql) === TRUE) { 
    $rs = mysqli_query($conn,"SELECT id from recursos ORDER BY id DESC LIMIT 1");
    if ($row = mysqli_fetch_row($rs)) {
        $id_ultimo = trim($row[0]);
        registrar_bitacora($conn, $usuario,$id_ultimo,'Agregar',2);
        echo json_encode(array('error'=>'false','msj'=>'Recurso agregado satisfactoriamente'));
    }
  } else {
    echo json_encode(array('error'=>'true','msj'=>$conn->error)); 
  }
?>