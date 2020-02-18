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
if(isset($dataObject-> correo)) {

$email_to = "usuariogespro@gmail.com";
$email_subject = "Consulta técnica - Caja de Herramientas";

if(!isset($dataObject-> correo) ||
!isset($dataObject-> nombre) ||
!isset($dataObject-> detalle)) {
echo json_encode(array('error'=>'true','msj'=>'Faltan datos y el formulario no ha sido enviado.')); 
die();
}

$nombre=utf8_decode($dataObject-> correo);
$correo=utf8_decode($dataObject-> nombre);
$detalle=utf8_decode($dataObject-> detalle);
$errores=[];
$mensajes=[];
$conn = conectarDB();
    
  if ($conn->connect_error) {
      die("Connection failed: " . $conn->connect_error);
  }

  $sql = "INSERT INTO `reportes`(`nombre`, `correo`, `detalle`) VALUES ('$nombre','$correo','$detalle')";

  if ($conn->query($sql) === TRUE) {
      if  (enviarCorreo($email_to,$email_subject,$correo,$nombre,$detalle)){
        echo json_encode(array('error'=>'false','msj'=>'Mensaje enviado y almacenado en la BD'));}
        else{
             echo json_encode(array('error'=>'false','msj'=>'Mensaje almacenado en la BD pero no se pudo enviar el correo'));}
  } else {
    echo json_encode(array('error'=>'true','msj'=>$conn->error)); 
  }

  $conn->close();

}

function enviarCorreo($email_to,$email_subject, $correo,$nombre,$detalle){
$email_message = "Detalles del reporte técnico:". "<br><br>";
$email_message .= "E-mail: " . $correo . "<br>";
$email_message .= "Nombre: " . $nombre . "<br>";
$email_message .= "Detalle: " . $detalle . "<br>";

// Ahora se envía el e-mail usando la función mail() de PHP
$headers = 'From: correo@de.prueba'."\r\n";
$headers .= "X-Priority: 3 \r\n";
$headers .= "MIME-Version: 1.0 \r\n";
$headers .= "Content-Transfer-Encoding: 7bit \r\n";

//*****************************************************************//
 $formato= "html";
if($formato == "html")
 { $headers .= "Content-Type: text/html; charset=iso-8859-1 \r\n";  }
   else
    { $headers .= "Content-Type: text/plain; charset=iso-8859-1 \r\n";  } 
if(@mail($email_to, $email_subject, $email_message, $headers))
{
  return true;
  /*echo json_encode(array('error'=>'false','msj'=>'Su reporte ha sido enviado con éxito'));*/  
}
 else{
     return false;
  /*  echo json_encode(array('error'=>'true','msj'=>'El formulario no pudo ser enviado.'));*/
 }
}
?>