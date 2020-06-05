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
require 'varios_niveles.php';
require 'bitacora.php';

$url = 'niveles.json';
$data = file_get_contents($url); 
$niveles = json_decode($data); 


$nombre = utf8_decode( $dataObject-> nombre);
$descripcion = utf8_decode($dataObject-> descripcion); 
$url = utf8_decode($dataObject-> url);
$usuario =  utf8_decode($dataObject-> id_usuario);
$img_educatico = utf8_decode($dataObject-> img_educatico);
if (isset ($dataObject-> materia)) {
  $materia =  utf8_decode($dataObject-> materia); 
} else {
  $materia =  "N/A"; 
}
$apoyo = $dataObject-> apoyo;
$tabla =  utf8_decode($dataObject-> tabla);
$conn = conectarDB();
    
  if ($conn->connect_error) {
      die("Connection failed: " . $conn->connect_error);
  }

  if ($tabla === "recursos_ae") {
    $id= "idRecursoAe";
    $idPrograma = utf8_decode($dataObject-> idPrograma);
    if (isset($dataObject-> idSubprograma)) {
      $idSubprograma = utf8_decode($dataObject-> idSubprograma);
    } else{
      $idSubprograma = NULL;
    }
    $sql = "INSERT INTO $tabla (`idPrograma`, `idSubprograma`, `nombre`, `descripcion`, `url`, `imgEducatico`, `idUsuario`) VALUES ('$idPrograma', '$idSubprograma', '$nombre', '$descripcion', '$url', '$img_educatico', '$usuario')";
    if ($conn->query($sql) === TRUE) { 
      echo json_encode(array('error'=>'false','msj'=>'Recurso AE agregado satisfactoriamente'));
      $rs = mysqli_query($conn,"SELECT $id from $tabla ORDER BY $id DESC LIMIT 1");
      if ($row = mysqli_fetch_row($rs)) {
          $id_ultimo = trim($row[0]);
          $sql2 = "INSERT INTO `bitacora`(`id_usuario`, `evento`,`id_registro`, `tabla`) VALUES ('$usuario','Agregar','$id_ultimo','$tabla')";
          // registrar_bitacora($conexion, $usuario,$id_ultimo,'Agregar',1);
          if ($conn->query($sql2) === TRUE) { 
            echo json_encode(array('error'=>'false','msj'=>'Recurso agregado satisfactoriamente en la bitácora. usuario: '.$usuario.' Tabla: '.$tabla.' con el id: '.$id_ultimo));
      }
    }
    }
      else {
    echo json_encode(array('error'=>'true','msj'=>$conn->error)); 
    }
  }
  else {
    $anno = utf8_decode($dataObject-> anno);
    
    $id= "id";
    $id_nivel = $dataObject-> id_nivel;
    if ($id_nivel==="0") {
      $anno = floatval(preg_replace('/[^\d.]/', '',  $anno));
      $anno = trim($anno,",");
      $variosNiveles=str_split($anno);
      for ($k=0; $k < sizeof($variosNiveles) ; $k++) { 
        $grados = $niveles->$variosNiveles[$k];
        $sql = "INSERT INTO $tabla (`nombre`, `descripcion`, `id_nivel`, `anno`, `url`, `img_educatico`, `materia`, `apoyos`, `id_usuario`) VALUES ('$nombre','$descripcion','$variosNiveles[$k]','$grados','$url','$img_educatico','$materia','$apoyo','$usuario')";
        registrar($conn,$sql, $usuario, "recursos", $id);
      }
    }

else{
  $anno = utf8_decode($dataObject-> anno);
  $sql = "INSERT INTO $tabla (`nombre`, `descripcion`, `id_nivel`, `anno`, `url`, `img_educatico`, `materia`, `apoyos`, `id_usuario`) VALUES ('$nombre','$descripcion','$id_nivel','$anno','$url','$img_educatico','$materia','$apoyo','$usuario')";
  if ($conn->query($sql) === TRUE) { 
    $rs = mysqli_query($conn,"SELECT $id from $tabla ORDER BY $id DESC LIMIT 1");
    if ($row = mysqli_fetch_row($rs)) {
      $id_ultimo = trim($row[0]);
      $sql2 = "INSERT INTO `bitacora`(`id_usuario`, `evento`,`id_registro`, `tabla`) VALUES ('$usuario','Agregar','$id_ultimo','$tabla')";
      // registrar_bitacora($conexion, $usuario,$id_ultimo,'Agregar',1);
      if ($conn->query($sql2) === TRUE) { 
        echo json_encode(array('error'=>'false','msj'=>'Recurso agregado satisfactoriamente en la bitácora. usuario: '.$usuario.' Tabla: '.$tabla.' con el id: '.$id_ultimo));
  }
}
  } else {
    echo json_encode(array('error'=>'true','msj'=>$conn->error)); 
  }
}
   
}


?>