<?php
        $mbd = new PDO('mysql:host=localhost;dbname=L19100223', 'root', '');
        $consulta = 'SELECT * from Formulario where idPersona = 1';
        $rows = $mbd->prepare($consulta);
        $rows -> execute();
        $res = $rows->fetch(pdo::FETCH_ASSOC);

        $res_utf8 = array_map('utf8_encode', $res);
        echo json_encode($res_utf8);
?>