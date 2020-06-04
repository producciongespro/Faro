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
//$tabla = "recursos";
  $conn = conectarDB();
    
  if ($conn->connect_error) {
      die("Connection failed: " . $conn->connect_error);
  }

  if ($tabla === "recursos_ae") {
    $id= "idRecursoAe";
    $idPrograma = utf8_decode($dataObject-> idPrograma);
    if (isset($dataObject-> idSubprograma)) {
      $idSubprograma = utf8_decode($dataObject-> idSubprograma);
    }
    $sql = "INSERT INTO $tabla (`idPrograma`, `idSubprograma`, `nombre`, `descripcion`, `url`, `imgEducatico`, `idUsuario`) VALUES ('$idPrograma', '$idSubprograma', '$nombre', '$descripcion', '$url', '$img_educatico', '$usuario')";
    if ($conn->query($sql) === TRUE) { 
      echo json_encode(array('error'=>'false','msj'=>'Recurso AE agregado satisfactoriamente'));
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
     if (in_array("1",str_split($anno))) {
       $grados = ("vacío");
       $sql = "INSERT INTO $tabla (`nombre`, `descripcion`, `id_nivel`, `anno`, `url`, `img_educatico`, `materia`, `apoyos`, `id_usuario`) VALUES ('$nombre','$descripcion',1,'$grados','$url','$img_educatico','$materia','$apoyo','$usuario')";
       registrar($conn,$sql, $usuario, "recursos", $id);
     }
       if (in_array("2", str_split($anno))) {
        $grados = ("Primero, Segundo, Tercero, Cuarto, Quinto, Sexto");
        $sql = "INSERT INTO $tabla (`nombre`, `descripcion`, `id_nivel`, `anno`, `url`, `img_educatico`, `materia`, `apoyos`, `id_usuario`) VALUES ('$nombre','$descripcion',2,'$grados','$url','$img_educatico','$materia','$apoyo','$usuario')";
        registrar($conn,$sql, $usuario, "recursos", $id);
       }
       if (in_array("3", str_split($anno))) {
        $grados = ("Sétimo, Octavo, Noveno, Décimo, Undécimo");
        $sql = "INSERT INTO $tabla (`nombre`, `descripcion`, `id_nivel`, `anno`, `url`, `img_educatico`, `materia`, `apoyos`, `id_usuario`) VALUES ('$nombre','$descripcion',3,'$grados','$url','$img_educatico','$materia','$apoyo','$usuario')";
        registrar($conn,$sql, $usuario, "recursos", $id);
       }
       if (in_array("4", str_split($anno))) {
        $grados = ("Educación intercultural");
        $sql = "INSERT INTO $tabla (`nombre`, `descripcion`, `id_nivel`, `anno`, `url`, `img_educatico`, `materia`, `apoyos`, `id_usuario`) VALUES ('$nombre','$descripcion',4,'$grados','$url','$img_educatico','$materia','$apoyo','$usuario')";
        registrar($conn,$sql, $usuario, "recursos", $id);
       }
       if (in_array("5", str_split($anno))) {
        $grados = ("Educación jóvenes y adultos");
        $sql = "INSERT INTO $tabla (`nombre`, `descripcion`, `id_nivel`, `anno`, `url`, `img_educatico`, `materia`, `apoyos`, `id_usuario`) VALUES ('$nombre','$descripcion',5,'$grados','$url','$img_educatico','$materia','$apoyo','$usuario')";
        registrar($conn,$sql, $usuario, "recursos", $id);
       }
       if (in_array("6", str_split($anno))) {
        $grados = ("Programa nacional de ferias");
        $sql = "INSERT INTO $tabla (`nombre`, `descripcion`, `id_nivel`, `anno`, `url`, `img_educatico`, `materia`, `apoyos`, `id_usuario`) VALUES ('$nombre','$descripcion',6,'$grados','$url','$img_educatico','$materia','$apoyo','$usuario')";
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
        registrar_bitacora($conn, $usuario,$id_ultimo,'Agregar',1);
        echo json_encode(array('error'=>'false','msj'=>'Recurso agregado satisfactoriamente'));
    }
  } else {
    echo json_encode(array('error'=>'true','msj'=>$conn->error)); 
  }
}
   
}


?>