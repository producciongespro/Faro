<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Allow: GET, POST, OPTIONS, PUT, DELETE");
header("Content-Type: text/html; charset=utf-8");
function registrar_bitacora($conn,$usuario,$id_ultimo,$accion,$tabla){
  $sql2 = "INSERT INTO `bitacora`(`id_usuario`, `evento`, `id_registro`, `tabla`) VALUES ('$usuario','$accion','$id_ultimo','$tabla')";
  if ($conn->query($sql2) === TRUE) { 
    
  $conn->close();
}
}
?>