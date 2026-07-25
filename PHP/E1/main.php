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
*/
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
    echo"Compraste: ". $nombre;
    echo "El total es: " . $precio * $cantidadsolicitada;
} 

else if($cantidadsolicitada>=10){
    echo"Compraste: ". $nombre;
    echo "Total con 15%: " . ($precio * $cantidadsolicitada) *0.15;
} 
else if($stock<=0){
    echo "No hay stock disponible.";
}
?>