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

$nombre = utf8_decode( $dataObject-> nombre);
$descripcion = utf8_decode($dataObject-> descripcion); 
$url = utf8_decode($dataObject-> url);
$usuario =  utf8_decode($dataObject-> id_usuario);
$img_educatico = utf8_decode($dataObject-> img_educatico);
// $tabla =  utf8_decode($dataObject-> tabla);
$tabla = "recursos";
  $conn = conectarDB();
    
  if ($conn->connect_error) {
      die("Connection failed: " . $conn->connect_error);
  }

  if ($tabla === "recursos_ae") {
    $idPrograma = utf8_decode($dataObject-> idPrograma);
    $idSubprograma = utf8_decode($dataObject-> idSubprograma);
    $sql = "INSERT INTO `recursos_ae`(`idPrograma`, `idSubprograma`, `nombre`, `descripcion`, `url`, `imgEducatico`, `idUsuario`) VALUES ('$idPrograma', '$idSubprograma', '$nombre', '$descripcion', '$url', '$imgEducatico', '$idUsuario')";
  }
  else {
    $id_nivel = $dataObject-> id_nivel;
    if (isset ($dataObject-> materia)) {
      $materia =  utf8_decode($dataObject-> materia); 
    } else {
      $materia =  "N/A"; 
    }
    $anno = utf8_decode($dataObject-> anno);
    $apoyo = $dataObject-> apoyo;
    $sql = "INSERT INTO $tabla (`nombre`, `descripcion`, `id_nivel`, `anno`, `url`, `img_educatico`, `materia`, `apoyos`, `id_usuario`) VALUES ('$nombre','$descripcion','$id_nivel','$anno','$url','$img_educatico','$materia','$apoyo','$usuario')";
  }

  if ($conn->query($sql) === TRUE) { 
    $rs = mysqli_query($conn,"SELECT id from recursos ORDER BY id DESC LIMIT 1");
    if ($row = mysqli_fetch_row($rs)) {
        $id_ultimo = trim($row[0]);
        registrar_bitacora($conn, $usuario,$id_ultimo,'Agregar',1);
        echo json_encode(array('error'=>'false','msj'=>'Recurso agregado satisfactoriamente'));
    }
  } else {
    echo json_encode(array('error'=>'true','msj'=>$conn->error)); 
  }
?>