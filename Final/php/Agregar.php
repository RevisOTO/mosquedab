<?php
include("Update.php");

$obj = json_decode($_POST["json"], false);

$sql = "INSERT INTO formulario (NombreCompleto, Fecha_Nac, Celular, Estado, Ciudad, CP, CURP) VALUES (\"$obj->NombreCompleto\", $obj->Fecha_Nac, \"$obj->Celular\", \"$obj->Estado\", \"$obj->Ciudad\", \"$obj->CP\",\"$obj->CURP\")";
    
$consultaA = $GLOBALS["mbd"] -> prepare($sql);
$consultaA -> execute();
$consultaA -> closeCursor();

echo $GLOBALS["mbd"];
?>