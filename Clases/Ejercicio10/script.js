
/*let text=document.getElementById('text');

text.textContent="s";


let title=document.getElementById('title');
title.innerHTML=`<h1>hola</h1>`;
console.log(title.innerHTML);

let img = document.querySelector('img');
img.src = 'https://promotonews.com/wp-content/uploads/2020/09/IMG-LOGO.jpg';

let input = document.querySelector('input');

let btn = document.querySelector('button');

btn.addEventListener('click',function(){
    alert(input.value);
    
})

let style = document.querySelector('#style');

style.addEventListener('click', function(){
    document.body.classList.add('style_body');
})

let style1 = document.querySelector('#style1');

style1.addEventListener('click', function(){
    document.body.classList.toggle('style_body');
})


let input1 = document.querySelector('#input1');

let button = document.querySelector('#button');

let lista = document.querySelector('#lista');

button.addEventListener('click', function(){
    let nuevoItem = document.createElement('li');
    nuevoItem.textContent = input1.value;
    lista.appendChild(nuevoItem);
    input1.value = "";
})
*/
const inputName = document.querySelector('#name');
const inputColor = document.querySelector('#color');
const inputText = document.querySelector('#text');
const errorName = document.querySelector('#error-name');
const errorColor = document.querySelector('#error-color');
const errorText = document.querySelector('#error-text');
const submitButton = document.querySelector('#button');

submitButton.addEventListener('click', function(event) {
    event.preventDefault(); // Evita que el formulario recargue la página al hacer click
    
    // Verifica cada campo y si es true da error sino muestra el if
    errorName.classList.toggle('visible', inputName.value === "");
    errorColor.classList.toggle('visible', inputColor.value === "");
    errorText.classList.toggle('visible', inputText.value === "");

    // si no esta vacio
    if (inputName.value !== "" && inputColor.value !== "" && inputText.value !== "") {
        document.querySelector('#h1').classList.toggle('h1');
        
        // Crear el contenedor div para agrupar los datos
        const resultContainer = document.createElement('div');
        
        // Crear los parrafos 
        const pNombre = document.createElement('p');
        pNombre.textContent = `Name: ${inputName.value}`;
        
        const pColor = document.createElement('p');
        pColor.textContent = `Color: ${inputColor.value}`;
        
        const pMensaje = document.createElement('p');
        pMensaje.textContent = `Message: ${inputText.value}`;
        
        // Juntar los parrafos dentro del contenedor div
        resultContainer.appendChild(pNombre);
        resultContainer.appendChild(pColor);
        resultContainer.appendChild(pMensaje);
        
        // Agregar el contenedor al final del body
        document.body.appendChild(resultContainer);

        // Despues de enviar el formulario los campos quedan en blanco como si fueran la primera vez, sin esto quedarian todos los resultados acumulados
        inputName.value = "";
        inputColor.value = "";
        inputText.value = "";
    }
});
