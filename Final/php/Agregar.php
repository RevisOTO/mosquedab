<?php

$obj = json_decode($_POST["json"], false);

try{
    $con = new PDO('mysql:host=localhost;dbname=L19100223', 'root', '');
} catch(PDOException $e){
    echo $e->getMessage();
    exit();
} 

$sql = "INSERT INTO formulario (NombreCompleto, Fecha_Nac, Celular, Estado, Ciudad, CP, CURP) VALUES (\"$obj->NombreCompleto\", \"$obj->Fecha_Nac\", \"$obj->Celular\", \"$obj->Estado\", \"$obj->Ciudad\", \"$obj->CP\",\"$obj->CURP\")";
    
$consultaA = $con -> prepare($sql);
$consultaA -> execute();
$resultado = $consultaA->fetch(PDO::FETCH_ASSOC);
$consultaA -> closeCursor();

$resultadoJSON = json_encode($resultado);
echo $sql;
?>