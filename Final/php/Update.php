<?php
        $idvar = $_POST['idcons'];

        try{
                $con = new PDO('mysql:host=localhost;dbname=L19100223', 'root', '');
            } catch(PDOException $e){
                echo $e->getMessage();
                exit();
        }

        $consulta = 'SELECT * from Formulario where idPersona = '.$idvar;
        $rows = $con->prepare($consulta);
        $rows -> execute();
        $res = $rows->fetch(pdo::FETCH_ASSOC);
        $rows -> closeCursor();

        $res_utf8 = array_map('utf8_encode', $res);
        echo json_encode($res_utf8);
?>