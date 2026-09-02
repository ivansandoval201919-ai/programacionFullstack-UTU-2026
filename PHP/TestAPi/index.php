<?php
header('Content-Type: application/json');

$method= $_SERVER['REQUEST_METHOD'];

$productos = [
    ['id'=>1, 'nombre'=>'Zapato','precio'=>1200],
    ['id'=>2, 'nombre'=>'Pantalon','precio'=>2500],
    ['id'=>3, 'nombre'=>'remera','precio'=>1500],
    ['id'=>4, 'nombre'=>'calcetines','precio'=>500],
    ['id'=>5, 'nombre'=>'gorra','precio'=>2000],
];


if($method === 'GET'){
    foreach($productos as $producto){
     if($producto['id'] === 1){
        echo json_encode($producto);
     }
          echo json_encode($producto);

    }
}

if($method === 'POST'){
    $body = json_decode(file_get_contents('php://input'), true);
    
    $productos[] = $body;

    echo json_encode($productos);
}
    if($method === 'PUT'){
            $body = json_decode(file_get_contents('php://input'), true);
            $productos[] = $body;

            echo json_encode($productos);
    }


?>
