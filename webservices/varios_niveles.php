<?php
function registrar($conexion, $consulta, $usuario,$tabla,$id){   
//   mysqli_query($conexion,$consulta) or die ("Problemas al añadir elementos a la BD".mysqli_error($conexion));
  if ($conexion->query($consulta) === TRUE) { 
    $rs = mysqli_query($conexion,"SELECT $id from $tabla ORDER BY $id DESC LIMIT 1");
    if ($row = mysqli_fetch_row($rs)) {
        $id_ultimo = trim($row[0]);
        $sql2 = "INSERT INTO `bitacora`(`id_usuario`, `evento`,`id_registro`, `tabla`) VALUES ('$usuario','Agregar','$id_ultimo','$tabla')";
        // registrar_bitacora($conexion, $usuario,$id_ultimo,'Agregar',1);
        if ($conexion->query($sql2) === TRUE) { 
          echo json_encode(array('error'=>'false','msj'=>'Recurso agregado satisfactoriamente en la bitácora. usuario: '.$usuario.' Tabla: '.$tabla.' con el id: '.$id_ultimo));
    }
  }}
 else {
    echo json_encode(array('error'=>'true','msj'=>$conexion->error)); 
  }
}
?>