<?php

$obj = json_decode($_POST["json"], false);
$nom = $_POST["nom"];

try{
    $con = new PDO('mysql:host=localhost;dbname=L19100223', 'root', '');
} catch(PDOException $e){
    echo $e->getMessage();
    exit();
} 

$sql = "UPDATE formulario
SET NombreCompleto = '$obj->NombreCompleto', Fecha_Nac = '$obj->Fecha_Nac', Celular = '$obj->Celular', Estado = '$obj->Estado', Ciudad = '$obj->Ciudad', CP = '$obj->CP', CURP = '$obj->CURP'
WHERE NombreCompleto = '" . $nom . "';";
    
$consultaM = $con -> prepare($sql);
$consultaM -> execute();
$consultaM -> closeCursor();

echo $sql;
?>