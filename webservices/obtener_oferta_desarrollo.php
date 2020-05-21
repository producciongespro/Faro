<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Content-Type: text/html; charset=utf-8");
$method = $_SERVER['REQUEST_METHOD'];
$sql= "SELECT desarrollo_profesional.id, desarrollo_profesional.nombre, desarrollo_profesional.descripcion, desarrollo_profesional.poblacion, desarrollo_profesional.url, desarrollo_profesional.url_imagen,desarrollo_profesional.id_tipo, tipos_odp.oferta,desarrollo_profesional.id_sub_categoria, sub_categorias_idp.sub_categoria  FROM `desarrollo_profesional` LEFT JOIN `sub_categorias_idp` ON desarrollo_profesional.id_sub_categoria=sub_categorias_idp.id LEFT JOIN `tipos_odp` ON tipos_odp.id=desarrollo_profesional.id_tipo WHERE desarrollo_profesional.borrado = 0 ORDER BY desarrollo_profesional.id";
include "conectar.php";
//sleep(1);
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