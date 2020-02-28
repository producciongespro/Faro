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

$id_nivel = $dataObject-> id_nivel;
if (isset ($dataObject-> materia)) {
  $materia =  utf8_decode($dataObject-> materia); 
} else {
  $materia =  "N/A"; 
}
$anno = utf8_decode($dataObject-> anno);
$nombre = utf8_decode( $dataObject-> nombre) ;
$descripcion = utf8_decode($dataObject-> descripcion); 
$url = utf8_decode($dataObject-> url);
$apoyo = $dataObject-> apoyo;
$usuario =  utf8_decode($dataObject-> id_usuario);
img_educatico = utf8_decode($dataObject-> img_educatico);

  $conn = conectarDB();
    
  if ($conn->connect_error) {
      die("Connection failed: " . $conn->connect_error);
  }

  $sql = "INSERT INTO `recursos`(`nombre`, `descripcion`, `id_nivel`, `anno`, `url`, img_educatico, `materia`, `apoyos`, `id_usuario`) VALUES ('$nombre','$descripcion','$id_nivel','$anno','$url','img_educatico','$materia','$apoyo','$usuario')";

  if ($conn->query($sql) === TRUE) {
        echo json_encode(array('error'=>'false','msj'=>'Recurso agregado satisfactoriamente'));
  } else {
    echo json_encode(array('error'=>'true','msj'=>$conn->error)); 
  }

  $conn->close();

?>