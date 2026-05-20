alert("Hola mundo!");

let name = prompt('Ingrese el nombre: ');
console.log(name);
alert('Bienvenido: ' + name);

let number = Number(prompt('Ingrese el primer numero: '));
let number2 = Number(prompt('Ingrese el segundo numero: '));
let total = number + number2;

console.log(total);
alert('La suma de ' + number + ' y ' + number2 + ' es ' + total);

let years = Number(prompt('Ingrese su edad actual: '));
if (years >= 18){
    alert('Usted es mayor de edad');
}else{
    alert('Usted es menor de edad');
}

let numberpar = Number(prompt('Ingrese un numero para saber si es par o impar: '));
if(numberpar%2 == 0){
    console.log(numberpar + ' es par');
    alert(numberpar + ' es par');
}else{
    console.log(numberpar + ' es impar');
    alert(numberpar + ' es impar');
}

let num1 = Number(prompt('Ingrese el primer numero: '));
let num2 = Number(prompt('Ingrese el segundo numero: '));
let num3 = Number(prompt('Ingrese el tercer numero: '));
if (num1 > num2 && num1 > num3){
    alert('El numero mayor es: ' + num1)
}
if (num2 > num1 && num2 > num3){
    alert('El numero mayor es: ' + num2)
}
if (num3 > num1 && num3 > num2){
    alert('El numero mayor es: ' + num3)
}

let note = Number(prompt('Ingrese la nota: '));
if (note <5){
    alert('Insuficiente');
}
else if (note >= 5 && note < 7){
    alert('Aceptable');

}
else if(note > 7 && note <= 10){
    alert('Muy bien');
}
else if (note > 10){
    alert('Nota invalida');
}

for(let i = 0; i <=10; i ++){
    console.log(i);
}

for(let i = 1; i <=20; i ++){
    if (i % 2 == 0){
        console.log(i);
    }
    
}

let password = Number(prompt('Ingrese la contrasena: '));
if (password == 1234){
    alert('Correcta')
}else{
    alert('Incorrecta')
}

let total = 0;
for(let i=0; ; i++){
    let number1 = Number(prompt('Ingrese un numero: '));
    total += number1;
    if (number1 === 0){
        alert(total);
        break;
    }
}


let select = Number(prompt('1. Suma\n2. Resta\n3. Multiplicacion\n4. Division\n5. Salir'));
switch (select){
    case 1:
        let number1 = Number(prompt('Ingrese el primer numero: '));
        let number2 = Number(prompt('Ingrese el segundo numero: '));
        let total = number1 + number2;
        alert('La suma de ' + number1 + ' y ' + number2 + ' es ' + total);
        break;
    case 2:
        let number3 = Number(prompt('Ingrese el primer numero: '));
        let number4 = Number(prompt('Ingrese el segundo numero: '));
        let total2 = number3 - number4;
        alert('La resta de ' + number3 + ' y ' + number4 + ' es ' + total2);
        break;
    case 3:
        let number5 = Number(prompt('Ingrese el primer numero: '));
        let number6 = Number(prompt('Ingrese el segundo numero: '));
        let total3 = number5 * number6;
        alert('La multiplicacion de ' + number5 + ' y ' + number6 + ' es ' + total3);
        break;
    case 4:
        let number7 = Number(prompt('Ingrese el primer numero: '));
        let number8 = Number(prompt('Ingrese el segundo numero: '));
        let total4 = number7 / number8;
        alert('La division de ' + number7 + ' y ' + number8 + ' es ' + total4);
        break;
    case 5:
        alert('Adios');
        break;
    default:
        alert('Opcion invalida');
        break;
}
x
const fecha = new Date();
const formatoLocal = new Intl.DateTimeFormat('es-UY', {
  dateStyle: 'full' });
  let menuselect = Number (prompt('Seleccione una opcion:\n1. Saludar\n2. Mostrar fecha actual\n3. Generar numero aleatorio'));

switch (menuselect){
    case 1:
        alert('Hola!');
        break;
        case 2:
            alert(formatoLocal.format(fecha));
            break;
            case 3:
                randomNumber = Math.floor(Math.random() * 10000) + 1;
                alert('Numero aleatorio: ' + randomNumber);
                break;
        }


   const randomNumber = Math.floor(Math.random() * 10) + 1;

   for(let i = 0; i < 10; i++){
    let number = Number(prompt('Adivina el numero entre 1 y 10: '));

    if (number === randomNumber){
        alert('Felicidades, adivinaste el numero!');
        break;
    }
    else {
            alert('Incorrecto, intenta de nuevo');
        }
     
}

let total = 0;
for(let i = 1; i <= 10; i++){
    let number = Number(prompt('Ingrese un numero: '));

    if(number%2 == 0){
    total ++;
    }

}
alert('La cantidad de numeros pares ingresados es: ' + total);


let names = ['Jorge','Raul', 'Rupeto', 'Gonzalo', 'Ramon'];
console.log(names);


let names = ['Jorge','Raul', 'Rupeto', 'Gonzalo', 'Ramon'];
for(let i = 0; i < names.length; i++){
    console.log(names[i]);
}

let numbers = [1, 2, 3, 4, 5];

let mayor = Math.max(...numbers); // el "..." representa el operador de propagación, que permite pasar los elementos del array como argumentos individuales a la función Math.max()
let menor = Math.min(...numbers);

let note = [8, 2, 6, 8, 5];
let total = 0;
for(let i = 0; i < note.length; i++){
    total += note[i];
}
// Divide la suma total de las notas por la cantidad de notas para obtener el promedio
total /= note.length;
alert('El promedio de las notas es: ' + total);


let names = [];
while (true) {
    let name = prompt('Ingrese un nombre: ');
    if (name.trim().toLowerCase() === 'salir') {
        break;
    }
    names.push(name);
}

let names = ['A', 'B', 'C', 'D', 'E'];
for(let i = 0; i < names.length; i++){
    console.log(names[i]);
}

let number = [8, 2, 6, 8, 5];
for(let i = 0; i < number.length; i++){
    if (number[i] %2 == 0){
        console.log(number[i] + ' es par');
    }
}

const fruits = ['Manzana', 'Banana', 'Naranja', 'Pera', 'Uva'];
const includes = fruits.includes('Banana');
console.log(includes);
fruits.pop();
fruits.push('Sandia');
console.log(fruits);

