<?php
function registrar($conexion, $consulta, $usuario,$tabla,$id){   
//   mysqli_query($conexion,$consulta) or die ("Problemas al añadir elementos a la BD".mysqli_error($conexion));
  if ($conexion->query($consulta) === TRUE) { 
    $rs = mysqli_query($conexion,"SELECT id from recursos ORDER BY id DESC LIMIT 1");
    if ($row = mysqli_fetch_row($rs)) {
        $id_ultimo = trim($row[0]);
        registrar_bitacora($conexion, $usuario,$id_ultimo,'Agregar',1);
        echo json_encode(array('error'=>'false','msj'=>'Recurso agregado satisfactoriamente'));
    }
}
 else {
    echo json_encode(array('error'=>'true','msj'=>$conexion->error)); 
  }
}
?>