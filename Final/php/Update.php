<?php
        $idvar = $_POST['idcons'];

        $mbd = new PDO('mysql:host=localhost;dbname=L19100223', 'root', '');  

        $consulta = 'SELECT * from Formulario where idPersona = '.$idvar;
        $rows = $mbd->prepare($consulta);
        $rows -> execute();
        $res = $rows->fetch(pdo::FETCH_ASSOC);

        $res_utf8 = array_map('utf8_encode', $res);
        echo json_encode($res_utf8);
?>