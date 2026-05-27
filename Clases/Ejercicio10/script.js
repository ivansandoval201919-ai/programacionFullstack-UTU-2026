
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
let name = document.querySelector('#name');
let color = document.querySelector('#color');
let text = document.querySelector('#text');

let button = document.querySelector('#button');


button.addEventListener('click', function(event){
    event.preventDefault(); // Evita que el formulario recargue la página al hacer click
    
    if (name.value !== "" && color.value !== "" && text.value !== ""){
        document.querySelector('#h1').classList.toggle('h1');
        
        // Crear el contenedor <div>
        if(name.value !==""){
        let nuevoDiv = document.createElement('div');
        }
        else{}
        // Crear los parrafos
        let pNombre = document.createElement('p');
        pNombre.textContent = `Name: ${name.value}`;
        
        let pColor = document.createElement('p');
        pColor.textContent = `Color: ${color.value}`;
        
        let pMensaje = document.createElement('p');
        pMensaje.textContent = `Message: ${text.value}`;
        
        // Juntar los parrafos dentro del <div>
        nuevoDiv.appendChild(pNombre);
        nuevoDiv.appendChild(pColor);
        nuevoDiv.appendChild(pMensaje);
        
        // Agregar el <div> al final del body
        document.body.appendChild(nuevoDiv);
    } else {
        alert("Debes rellenar los campos vacios");
    }
})
