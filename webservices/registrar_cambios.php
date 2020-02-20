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
$mysqli = conectarDB();
$atendidos = $dataObject-> atendidos;
// var_dump($atendidos);
$ids = $dataObject-> ids;
// var_dump($ids);
// echo json_encode(array('error'=>'false','msj'=>$dataObject-> atendidos));
// $ids = array(1,2,3,4);
// $atendidos = array(0,1,0,1);

$allParams=array_combine($ids,$atendidos);
if($allParams){
    // $mysqli->autocommit(FALSE);
    $sql="UPDATE reportes SET atendida = ? WHERE id = ?";
    $stmt=$mysqli->prepare($sql);
    $stmt->bind_param('ii', $value,$id);
    $status=TRUE;
    foreach ($allParams as $id=>$value) {
        $stmt->execute() ? null : $msg =$stmt->error;
    }

    if(!$msg){
       // $mysqli->commit();
        $msg= "Todo ok";
    }else{
       // $mysqli->rollback();
    }
   // $mysqli->autocommit(TRUE);
} else {
    $msg="Error, no se pueden combinar los valores, por favor revísalos";
}
$mysqli->close();
echo json_encode(array('error'=>'false','msj'=>$msg));

//$i = 0;
// foreach($atendidos as $a){
//     //echo $ids[$i];
//     $actualizacion = "UPDATE `recursos` SET `atendida`= '$a' WHERE `id`= '$ids[$i]'";
//     $resultadoActualizacion = mysqli_query($conexion, $actualizacion);  
//         if($resultadoActualizacion)
//         {
//             echo json_encode(array('error'=>'false','msj'=>"actualizado 1"));
//         }
//         else
//         {
//             echo json_encode(array('error'=>'true','msj'=>"No se actualizó")); 
//         }
//     $i++;
//  }
?>