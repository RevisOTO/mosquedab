<?php
        $mbd = new PDO('mysql:host=localhost;dbname=L19100223', 'root', '');
        $consulta = 'SELECT * from Formulario where idPersona = 2';
        $rows = $mbd->prepare($consulta);
        $rows -> execute();
        $res = $rows->fetch(pdo::FETCH_ASSOC);
        echo print json_encode($res);
?>