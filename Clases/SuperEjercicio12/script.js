let name = document.querySelector("#name");
let description = document.querySelector("#description");
let kind = document.querySelector("#kind");
let state = document.querySelector("#state");
let img = document.querySelector("#img");
let errorTask = document.querySelector('#error-task');
let errorImg = document.querySelector('#error-img');
let button = document.querySelector('button');

button.addEventListener('click', function(event) {
    event.preventDefault();

event.preventDefault();

    errorTask.classList.toggle('visible', name.value.trim() === ""); // El ".trim()" borra los espacios del texto en caso de que haya

    if(name.value.trim() !== '') {
        let div =document.createElement('div');
        div.classList.add('task');

        const pTask = document.createElement('p');
        const btnComplete = document.createElement('button');
        btnComplete.textContent = "Completar"
        const btnDelete = document.createElement('button');
        btnDelete.textContent = "Eliminar"

        pTask.textContent = `Tarea: ${input.value}`;
        div.appendChild(pTask);
        div.appendChild(btnComplete);

        div.appendChild(btnComplete);
        btnComplete.addEventListener('click', function(){
            div.classList.toggle('completed');
            updateCounts();

        })

        div.appendChild(btnDelete);
        btnDelete.addEventListener('click', function(){
            div.remove();
            updateCounts();

        })

        document.body.appendChild(div);

        input.value = "";
        updateCounts();

    }
});

function updateCounts() {
    const total = document.querySelectorAll('.task').length;
    document.querySelector('#total-count').textContent = total;
}

lista.appendChild(li);
updateCounts();

btnDelete.addEventListener('click', function() {
    li.remove();
    updateCounts();
});