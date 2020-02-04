<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");
header("Content-Type: text/html; charset=utf-8");
$method = $_SERVER['REQUEST_METHOD'];
require 'conectar.php';

  $nombre = utf8_decode( $dataObject-> nombre) ;
  $descripcion = utf8_decode($dataObject-> descripcion);
  $id_nivel = $dataObject-> id_nivel;
  $anno = utf8_decode($dataObject-> anno);
  $url = utf8_decode($dataObject-> url);		
  $ciclo =  utf8_decode($dataObject-> ciclo);
  $materia =  utf8_decode($dataObject-> materia);
  $apoyo = $dataObject-> apoyo;
  $id_poblacion = $dataObject-> id_poblacion;		
  $plan = utf8_decode($dataObject-> plan);
  $usuario =  utf8_decode($dataObject-> usuario);

  $conn = conectarDB();
    
  if ($conn->connect_error) {
      die("Connection failed: " . $conn->connect_error);
  }

  $sql = "INSERT INTO `recursos`(`nombre`, `descripcion`, `id_nivel`, `anno`, `url`, `ciclo`, `materia`, `apoyos`, `id_poblacion`, `plan`, `id_usuario`) VALUES ('$nombre','$descripcion','$id_nivel','$anno','$url','$ciclo','$materia','$apoyo','$id_poblacion','$plan','$usuario')";

  if ($conn->query($sql) === TRUE) {
        echo json_encode(array('error'=>'false','msj'=>'ok'));
  } else {
    echo json_encode(array('error'=>'true','msj'=>$conn->error)); 
  }

  $conn->close();

?>