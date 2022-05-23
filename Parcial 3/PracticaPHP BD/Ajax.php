<?php
    try {
        $mbd = new PDO('mysql:host=localhost\MSSQLSERVER02;dbname=L19100223', $usuario, $contraseña);
        foreach($mbd->query('SELECT * from Formulario') as $fila) {
            echo $fila;
        }
        $mbd = null;
    } catch (PDOException $e) {
        print "¡Error!: " . $e->getMessage() . "<br/>";
        die();
    }
?>