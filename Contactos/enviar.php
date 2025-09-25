<?php
// LLAMANDO CAMPOS
$nombre = $_POST['nombre'];
$correo = $_POST['correo'];
$telefono = $_POST['telefono'];
$mensaje = $_POST['mensaje'];
// DATOS CORREO
$destinatario = "alexpeluches0@gmail.com";
$asunto = " Contacto desde nuestra web ";

$carta = "De: $nombre \n";
$carta.= "Correo: $correo\n";
$carta.= "Telefono:: $telefono\n";
$carta.= "Mensaje: $mensaje";
// ENVIANDO MENSAJE
mail($destinatario,$asunto,$carta);
header('Location: https://localhost/Proyecto_Web/Contactos/mensajeEnvio.html')



?>


