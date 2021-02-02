<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Content-Type: text/html; charset=utf-8");
$method = $_SERVER['REQUEST_METHOD'];
$tabla=$_GET['tabla'];
$TablaNombre="";
switch ($tabla) {
    case 1:
         $TablaNombre="recursos";
    break;
    case 2:
        $TablaNombre="desarrollo_profesional";
    break;
    case 3:
        $TablaNombre="planeamiento";
    break;
    default:
        echo "Valor fuera de rango";
        break;
}
        //$sql= "SELECT * FROM bitacora WHERE tabla=$TablaNombre";
//	$sql= "SELECT * FROM bitacora";

	$sql= "SELECT bitacora.id, $TablaNombre.nombre, bitacora.id_usuario, bitacora.fecha_evento, bitacora.evento, usuarios.usuario, tablas.tabla, bitacora.id_registro FROM bitacora INNER JOIN usuarios ON usuarios.id=bitacora.id_usuario INNER JOIN tablas ON bitacora.id_tabla=tablas.id INNER JOIN $TablaNombre ON bitacora.id_registro=$TablaNombre.id  WHERE id_tabla=$tabla";
        // echo "Consulta ".$sql;
include "conectar.php";
sleep(1);
function desconectar($conexion){

    $close = mysqli_close($conexion);

        if($close){
            echo '';
        }else{
            echo 'Ha sucedido un error inexperado en la desconexion de la base de datos
';
        }

    return $close;
}

function obtenerArreglo($sql){
    //Creamos la conexion con la funcion anterior
  $conexion = conectarDB();

    //generamos la consulta

        mysqli_set_charset($conexion, "utf8"); //formato de datos utf8

    if(!$resultado = mysqli_query($conexion, $sql)) die(); //si la conexi贸n cancelar programa

    $arreglo = array(); //creamos un array

    //guardamos en un array todos los datos de la consulta
    $i=0;

    while($row = mysqli_fetch_assoc($resultado))
    {
        $arreglo[$i] = $row;
        $i++;
    }

    desconectar($conexion); //desconectamos la base de datos

    return $arreglo; //devolvemos el array
}

        $r = obtenerArreglo($sql);
        echo json_encode($r);

?>