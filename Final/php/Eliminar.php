<?php

$nom = $_POST["nom"];

try{
    $con = new PDO('mysql:host=localhost;dbname=L19100223', 'root', '');
} catch(PDOException $e){
    echo $e->getMessage();
    exit();
} 

$sql = "DELETE FROM formulario WHERE NombreCompleto = '".$nom."'";
    
$consultaA = $con -> prepare($sql);
$consultaA -> execute();
$resultado = $consultaA->fetch(PDO::FETCH_ASSOC);
$consultaA -> closeCursor();

$resultadoJSON = json_encode($resultado);
echo $sql;
?>