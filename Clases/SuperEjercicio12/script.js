let name = document.querySelector("#name");
let description = document.querySelector("#description");
let kind = document.querySelector("#kind");
let state = document.querySelector("#state");
let img = document.querySelector("#img");
let errorTask = document.querySelector('#error-task');
let errorImg = document.querySelector('#error-img');
let submitBtn = document.querySelector('.btn-gradient');
let modooscuro = document.querySelector ('#modooscuro');
let valoracion = document.querySelector('#valoracion');




submitBtn.addEventListener('click', function(event) {
    event.preventDefault();

    const grupos = document.querySelectorAll('.control-formulario');
grupos.forEach(function(grupo){
    const campo = grupo.querySelector('.input, textarea, select');
    const error = grupo.querySelector('.error-message');

    if(campo && error){
        error.classList.toggle('visible', campo.value.trim() === "");
    }
});
let errorValoracion = valoracion.closest('.control-formulario')
                                .querySelector('.error-message');
let valor = Number(valoracion.value);
if (valoracion.value.trim() !== "" && (valor < 1 || valor > 5)) {
    errorValoracion.textContent = "No se aceptan valores mayores a 5 y menores a 1";
    errorValoracion.classList.add('visible');
}
else {
     errorValoracion.textContent = "Solo se aceptan numeros";
    errorValoracion.classList.add('visible');
}
    

    if(name.value.trim() !== '' && description.value.trim() !== '' && kind.value.trim() !== '' && state.value.trim() !== '' && img.value.trim() !== '') {
       
        let div = document.createElement('div');
        div.classList.add('task');


        const pTask = document.createElement('p');
        const btnComplete = document.createElement('button');
        btnComplete.textContent = "Completar"
        const btnDelete = document.createElement('button');
        btnDelete.textContent = "Eliminar"

        pTask.textContent = `Nombre: ${name.value}`;
        div.appendChild(pTask);
        div.appendChild(btnComplete);
        div.appendChild(btnDelete);

        btnComplete.addEventListener('click', function(){
            div.classList.toggle('completed');
            updateCounts();
        })

        btnDelete.addEventListener('click', function(){
            div.remove();
            updateCounts();
        })

        document.body.appendChild(div);

        name.value = "";
        description.value = "";
        kind.value = "";
        state.value = "";
        img.value = "";
        updateCounts();
    }
});

function updateCounts() {
    const total = document.querySelectorAll('.task').length;
    document.querySelector('#total-count').textContent = total;
}


let oscuro = false;

modooscuro.addEventListener('click', function() {
    oscuro = !oscuro;

    const content = document.querySelector('.content');
    const title = document.querySelector('.title');

    if (oscuro) {
        content.style.backgroundColor = "black";
        content.style.color = "white";
        title.style.color = "white";
    } else {
        content.style.backgroundColor = "#f0f0f0";
        content.style.color = "black";
        title.style.color = "black";
    }
});



    

