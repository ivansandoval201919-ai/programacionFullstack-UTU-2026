<?php
/*echo "BLOQUE 1";
//Ejercicio 1
$nombre = "Ana";
$edad = 17;
$ciudad = "Libertad";


echo "Me llamo ". $nombre. ", tengo ". $edad." y vivo en ". $ciudad;

//Ejercicio 2
$nombredelproducto = "Teclado";
$precio = 1200;
$cantidaddisponible = 5;

echo "\nProducto: ". $nombredelproducto . "\nPrecio: $". $precio . "\nStock: ". $cantidaddisponible . " unidades";

//Ejercicio 3

$nombredeljugador = "Mateo";
$nombredelpersonaje = "DragonX";
$nivel = 25;
$servidor = "latinoamericano";

echo "\n=== PERFIL DEL JUGADOR ===\n". $nombredeljugador . "\nPersonaje: " . $nombredelpersonaje. "\n💪: " . $nivel ."\n🌍: " . $servidor . "\n========================";

//Ejercicio 4
/*
<?php

$nombre = "Lucía";
$curso = "Tercero";
$materia = "Programación";

echo "Nombre: " . $Nombre;
echo "<br>Curso: " . curso;
echo "<br>Materia: " . $materias;

?>

EL ERROR ES EN "curso" NO SE LE INVOCA COMO VARIABLE Y EN "$materias" NO EXISTE LO MISMO CON "$Nombre" SE CREARON CON OTROS NOMBRES. EL <br> NO FUNCIONA COMO EN HTML, SI HAY QUE USAR SALTOS DE LINEA SE USA "\n".
*/
/*
echo "BLOQUE 2";
//Ejercicio 1
$num1 = 2;
$num2 = 2;

echo "\nSuma: " . $num1 + $num2;
echo "\nResta: " . $num1 - $num2;
echo "\nMultiplicacion: " . $num1 * $num2;
echo "\nDivision: " . $num1 / $num2;

//Ejercicio 2

$base = 5;
$altura = 2;

$area = $base * $altura;

echo "\nEl area del rectangulo es: " . $area;

//Ejercicio 3

$nota1 = 8;
$nota2 = 7;
$nota3 = 9;

echo "\nEl promedio es: ". ($nota1 + $nota2 + $nota3)/3;

//Ejercicio 4

$minutos = 135;
$horas = $minutos / 60;

echo "\n".$minutos . " minutos equivalen a " . (int)$horas . " horas y ". $minutos%60 . " minutos"; 

echo "\nBLOQUE 3";

//Ejercicio 1

$Num1 = 1;
$Num2 = 2;
switch ($Num1){
    case $Num1 === $Num2:
        echo "\nSon iguales";
        break;
    case $Num1 > $Num2:
        
        echo "\nEl primer numero es mayor.";
        break;
        case $Num2 > $Num1:
            echo "\nEl segundo numero es mayor.";
            break;
}

//Ejercicio 2
$edad = 20;

if ($edad >=18){
    echo "Es mayor.";
}else{
    echo "Es menor.";
}

//Ejercicio 3

$numero = 10;
$texto = "10";

if ($numero == $texto){
    echo "\nCompara todo haciendolo texto plano. Devuelve true.";

} else{
    exit;
}
if ($numero === $texto){
    echo "\nCompara los tipos de variables. Devuelve false.";

} else{
    exit;
}

//Ejercicio 4

$stockdisponible = 10;
$cantidadsolicitada = 2;
$precio = 1200;
$presupuestodelcliente = 1300;

switch ($stockdisponible){
    case $stockdisponible>0:
    echo "\nExiste stock suficiente.";
    break;
    case $presupuestodelcliente >= $precio:
    echo "\nEl cliente tiene dinero suficiente.";
    break;


}
*/
/*
echo "\nBLOQUE 4";
//Ejercicio 1
$puntuacion = 50;

if ($puntuacion >=50){
    echo "\nGanaste!";
}

//Ejercicio 2

$numero = 3;

if ($numero>0){
    echo "\nPositivo.";
} if($numero<0){
    echo "\nNegativo.";

}
else {
    echo "\nCero.";
}

//Ejercicio 3

$Numero = 5;

if($Numero%2 == 0){
    echo "\nEs par.";
} else {
    echo "\nEs impar.";
}

//Ejercicio 4

$Nota = 7;

switch($Nota){
    case $Nota < 6: echo "\nInsuficiente";
    break;
    case $Nota >= 6 && $Nota < 8: echo "\nAprobado";
    break;
    case $Nota >= 9 && $Nota < 10: echo "\nMuy bueno";
    break;
    case $Nota >= 11 && $Nota < 12: echo "\nSobresaliente";
    break;
    default: echo "\nNota no valida.";

}

echo "\nBLOQUE 5";

//Ejercicio 1
$user = "admin";
$contrasena= 1234;

if ($user = "admin" && $contrasena=1234){
    echo "\nInicio de sesion correcto.";
} else{    
    echo "\nInicio de sesion incorrecto.";
}

//Ejercicio 2
$rol= "administrador";

if($rol == "administrador" || $rol == "docente"){
    echo "\nAcceso permitido.";
}
else{
    echo"\nAcceso denegado.";
}

//Ejercicio 3

$precio= 1200;
$presupuesto= 9000;
$stock=20;
$cantidadsolicitada=2;

if ($stock>0 || $presupuesto>=$precio){
    echo "\nCompra realizada.";
} else {
    echo "\nCompra invalida.";
}

//Ejercicio 4

$edad = 16;
$entrada = true;
$adulto = true;

if ($edad>=18 && $entrada==true){
    echo "\nAcceso permitido.";
} else if ($edad<18 && $entrada==true && $adulto==true) {
    echo "\nAcceso permitido con permiso de adulto.";
} else {    
    echo "\nAcceso denegado.";
}

echo "\nBLOQUE 6";

echo"\nEjercicio 1";
$edad = 11;
$precioentrada= 1200;

if($edad<12){
    
    echo "\nEl total por el descuento es: " . $precioentrada*0.50;
} else{
    echo"\nNo tienes descuento de entrada.";
}
echo "\nEjercicio 2";

$preciounitario= 200;
$cantidadcomprada=5;

if($cantidadcomprada>=5){
    echo "\nSubtotal: " . $preciounitario * $cantidadcomprada;
    echo "\nDescuento del 10%: " .($preciounitario * $cantidadcomprada) * 0.10;
    echo "\nTotal: " . ($preciounitario * $cantidadcomprada) - ($preciounitario * $cantidadcomprada) * 0.10;
} else{
    echo "\nNo tienes descuento";
    echo "\nTotal: " . $preciounitario * $cantidadcomprada;
}

echo"\nEjercicio 3";

$totalcompra= 2000;
if($totalcompra<1000){
    echo "\nTotal: ". $totalcompra;

}
else if($totalcompra>=1000 && $totalcompra<=4999){
    echo"\nTotal original: " . $totalcompra;
    echo"\nDescuento del 10%: ". $totalcompra*0.10;
    echo"\nTotal final: ". $totalcompra - ($totalcompra*0.10);
    
}
else if($totalcompra>=5000){
    echo"\nTotal original: " . $totalcompra;
    echo"\nDescuento del 20%: ". $totalcompra*0.20;
    echo"\nTotal final: ". $totalcompra - ($totalcompra*0.20);
}
echo"\nEjercicio 4";

$nombre= "banana";
$precio=200;
$stock=10;
$cantidadsolicitada=2;

if($stock>0 && $cantidadsolicitada!=0){
    echo"\nCompraste: ". $nombre;
    echo "\nEl total es: " . $precio * $cantidadsolicitada;
} 

else if($cantidadsolicitada>=10){
    echo "\nCompraste: ". $nombre;
    echo "\nTotal con 15%: " . ($precio * $cantidadsolicitada) *0.15;
} 
else if($stock<=0){
    echo "\nNo hay stock disponible.";
}

echo "\nBloque 7";
echo "\nEjercicio 1";

for ($i = 1; $i <=10; $i++ ){
    echo "\n". $i;

}
echo "\nEjercicio 2";
for ($l = 10; $l >=1; $l-- ){
    echo "\n". $l;
 if($l == 1){
    echo "\n¡Comenzamos!";
 }
}
echo "\nEjercicio3";

for ($o = 1; $o <=20; $o ++ ){
    if ($o %2 ==0){
        echo "\n". $o;
    }

}
echo "\nEjercicio4";

$numero = 3;
for ($i = 1; $i <=10; $i++ ){
 echo "\n" . $numero * $i;
}

echo "\nBloque 8";
echo "\nEjercicio 1";

$totales=0;
for ($i =1 ; $i <=10; $i ++){
    $totales+= $i;
    
}
    echo "\nEl total es: ". $totales;

    $totalidad=0;
    echo "\nEjercicio 2";
    for ($i =1 ; $i <=100; $i ++){
    $totalidad+= $i;
    
}
echo "\nEl total es: ". $totalidad;


echo "\nEjercicio 3";
for ($i =1 ; $i <=50; $i ++){
    $totalidad+= $i;
    
    if($i % 2 == 0){
        echo "\n" . $i;
    }
}
echo "\nTotal: " . $totalidad;  

echo "\nEjercicio 4";

for ($i =1 ; $i <=100; $i ++){
    $totalidad+= $i;
    
    if($i % 3 == 0){
        echo "\n" . $i;
    }

}
    echo "\nTotal: " . $totalidad;  

    echo "\nBloque 9";
    
    echo "\nEjercicio 1";

$numero = 1;

while ($numero <=10) {
    echo "\n". $numero;
    $numero++;
}

echo "\nEjercicio 2";

$num = 2;

while ($num <=20) {
    
   if($num %2 ==0){ echo "\n". $num;
    
   }$num++;
}

echo "\nEjercicio 3";

$a = 1;

while ($a <=100){
    echo "\n" . $a;
    $a *= 2;
    
}
echo "\nEjercicio 4";

$pesos = 0;
$meses = 0;

while ($pesos <=5000){

echo "\nAhorro durante el mes " . $meses . " son un total de " . $pesos;
$pesos += 500;

$meses++;
}
echo "\nBloque 10";

echo "\nEjercicio 1";
function saludar(){
echo "\nBienvenido al sistema.";

}
saludar();
saludar();

echo "\nEjercicio 2";
function saludarUsuario($nombre){

    echo "\nHola! " . $nombre;

}

saludarUsuario("A");
saludarUsuario("B");

echo "\nEjercicio 3";
function sumar($numero1, $numero2){
    $total= $numero1 + $numero2;

    echo "\nLa suma total es: " . $total;
}

sumar(10,20);

echo "\nEjercicio 4";

function calcularTotal($precio, $cantidad){

    $total = $precio * $cantidad; 

    echo "\nEl total de la compra es: " . $total;
}

calcularTotal(10,20);

echo "\nBloque 11";

echo "\nEjercicio 1";

function esMayorDeEdad($edad){
    if($edad>=18){
        return true;

    }else{return false;}

}

echo esMayorDeEdad(19);

echo "\nEjercicio 2";

function esPar($numero){
    if($numero%2==0){
        return true;
    }else{return false;}
}
esPar(10);

echo "\nEjercicio 3";

function finalprice($precio, $descuento){
$total= $precio*$descuento;
echo "\n$total";
}
finalprice(200, 0.20);

echo "\nEjercicio 4";

function promedio($nota1, $nota2, $nota3){
return $promedio= ($nota1+$nota2+$nota3)/3;



}
function aprobado($promedio){
    if ($promedio>=5){
        echo "\nAprobado";
    }else{
        echo "\nReprobado";
    }
}


$promedioobtenido = promedio(10,10,10);
aprobado($promedioobtenido);


echo "\nBloque 12";
echo "\nEjercicio 1";

$nombres = ["Juan", "Ana", "Luis", "Sara", "Carlos"];

echo $nombres[0];
echo $nombres[1];
echo $nombres[2];
echo $nombres[3];
echo $nombres[4];

echo "\nEjercicio 2";

$nombres = ["Juan", "Ana", "Luis", "Sara", "Carlos"];

for($i=0; $i < count ($nombres); $i ++){
    echo "\n". $nombres[$i];
}

foreach($nombres as $nombre){
    echo "\n" . $nombre;
}

echo "\nEjercicio 3";

$prices = [100, 200, 300, 400, 500];

foreach ($prices as $price){
    echo "\n$". $price;


}
echo "\nEjercicio 4";
$total = 0;
$numbers = [1,2,3];
foreach ($numbers as $number){
    $total += $number;
}
echo "\nTotal: " . $total;
$total = 0;
echo "\n" . $total = array_sum($numbers);


echo "\nBloque 13";

echo "\nEjercicio 1";

$numeros = [1, 2, 3 , 4, 5];

foreach($numeros as $numero){
    if($numero%2 ==0){
     echo "\n" . $numero;   
    }
}
echo "\nEjercicio 2";

$notas = [1, 2, 3, 4, 5, 6, 7, 8, 9 , 10];

foreach($notas as $nota){
    if($nota>=6){
        echo "\n" . $nota;
    }
}

echo "\nEjercicio 3";

$nombres= ["Ana", "Luis", "Sara", "Carlos"];
$name="Luis";

foreach ($nombres as $nombre){
    if($nombre === $name){
        echo "\nNombre encontrado";
    }
}

if(in_array($name, $nombres)){
    
    echo "\nNombre encontrado";
}

echo "\nEjercicio 4";

$numeros = [11, 388, 92];

$mayor= $numeros[0];
foreach($numeros as $numero){

    if($numero > $mayor){
        $mayor=$numero;
    }
}
echo "\nNumero mayor es " . $mayor;

$mayor = max($numeros);
echo "\nNumero mayor es " . $mayor;

echo "\nBloque 14";

echo "\nEjercicio 1";

$numeros = [1, 2, 3, 80];
$total =0;
foreach($numeros as $numero){
    $total+=$numero;
    
}
echo "Total: " . $total . "\nCantidad: " . count($numeros) . "\nPromedio: " . $total/count($numeros);
echo "\nEjercicio 2";

$notas= [10, 8, 7, 9, 6];

foreach($notas as $nota){
if($nota>=5){
    echo "\nNota:" . $nota . " APROBADO";
} else {
    echo "\nNota:" . $nota . " REPROBADO";
}

}

echo "\nEjercicio 3";

$notas= [1, 2, 3, 4, 5, 6, 7, 8, 9 , 10];
$aprobados=0;
$reprobados=0;
$total=0;
foreach($notas as $nota){
    echo "\n". $nota;
        $total+=$nota;

if($nota>=5){
    $aprobados ++;
}else{
    $reprobados ++;
}
}

echo "\nPromedio: " . $total/count($notas) . "\nAprobados: " . $aprobados . "\nReprobados: " . $reprobados;

echo "\nEjercicio 4";

$numeros= [1, 2, 3, 4, 5, 6, 7, 8, 9 , 10];
$pares=0;
$impares=0;
$total=0;
foreach($numeros as $numero){
    echo "\n". $numero;
        $total+=$numero;

if($numero%2 == 0){
    $pares ++;
}else{
    $impares ++;
}
}

echo "\nTotal: " . $total . "\nPares: " . $pares . "\nImpares: " . $impares . "\nNumero mayor: " . max($numeros) . "\nNumero menor: " . min($numeros);

echo "\nBloque 15";

echo "\nEjercicio 1";

$datos=[
    'nombre' => 'Juan',
    'edad' => 20,
    'ciudad' => 'San jose'
];

echo "\nHola " . $datos['nombre'] . ", tienes " . $datos['edad'] . " años y vives en " . $datos['ciudad'];

echo "\nEjercicio 2";

$producto=[
    'nombre' => 'Silla Gamer',
    'precio' => 2000,
    'stock' => 10
];

echo "\nTu producto " . $producto['nombre'] . ", vale " . $producto['precio'] . " y quedan " . $producto['stock'] . " unidades";

echo "\nEjercicio 3";

$productos=[
    'nombre' => 'Silla Gamer',
    'precio' => 2000,
    'stock' => 10
];
$productos['precio'] = 3000;
$productos['stock'] = 9;
$productos['categoria'] = 'Gamer';

echo "\nTu producto " . $productos['nombre'] . ", vale " . $productos['precio'] . " y quedan " . $productos['stock'] . " unidades, la categoria es " . $productos['categoria'];

echo "\nEjercicio 4";

$producto=[
    'nombre' => 'Silla Gamer',
    'precio' => 2000,
    'stock' => 10
];

$cantidadsolicitada=3;

if($cantidadsolicitada<=$producto['stock']){
    $total = $cantidadsolicitada*$producto['precio'];
    $producto['stock']-=$cantidadsolicitada;
    echo "\nTotal: " . $total;
    
}else{
    echo "\nNo hay stock disponible.";
}

echo "\nBloque 16";

echo "\nEjercicio 1";

$productos= [
    ['nombre' => "Silla", 'precio' => 100, 'stock' => 10],
    ['nombre' => "Mesa", 'precio' => 2000, 'stock' => 0],
    ['nombre' => "Lampara", 'precio' => 300, 'stock' => 0]
];


foreach($productos as $producto){
    echo "\n" . $producto['nombre'] . ": $" . $producto['precio'];
}

echo "\nEjercicio 2";

foreach($productos as $producto){
if($producto['stock']>0){
    echo "\n" . $producto['nombre'] . ": $" . $producto['precio'];
}else{
    echo "\nNo hay stock disponible.";
}
}

echo "\nEjercicio 3";
foreach($productos as $producto){
if($producto['precio']>1000){
    echo "\n" . $producto['nombre'] . ": $" . $producto['precio'];
}
}

echo "\nEjercicio 4";

$total = 0;
foreach($productos as $producto){
$total += $producto['precio'] * $producto['stock'];

}
echo "\nTotal: " . $total;

*/
echo "\nBloque 17";

$productos=[
    ['nombre' => 'Silla', 'precio' => 1000, 'stock' => 10],
    ['nombre' => 'Mesa', 'precio' => 2000, 'stock' => 0],
    ['nombre' => 'Lampara', 'precio' => 300, 'stock' => 0],
    ['nombre' => 'Silla', 'precio' => 234, 'stock' => 10],

];

$productobuscado= 'Mesa';

$resultado=array_filter($productos, function($p) use ($productobuscado){
return $p['nombre']==$productobuscado;
});


if($resultado){
    $producto = reset($resultado);
    echo "\nNombre: " . $producto['nombre'];
    echo "\nPrecio: " . $producto['precio'];
    echo "\nStock: " . $producto['stock'];
} else {
    echo "\nProducto no encontrado";
}



?>