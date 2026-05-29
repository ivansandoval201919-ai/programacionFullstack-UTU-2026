let input = document.querySelector('#inputTask');
let errorTask = document.querySelector('#error-task');
let button = document.querySelector('#button');

function updateCounts(){
    const total = document.querySelectorAll('.task').length;
    const completes = document.querySelectorAll('.task.completed').length;
    const pendientes = total - completes;

    document.querySelector('#total-count').textContent = total;
    document.querySelector('#completed-count').textContent = completes;
    document.querySelector('#pending-count').textContent = pendientes;
    
}

button.addEventListener('click', function(event){
    event.preventDefault();

    errorTask.classList.toggle('visible', input.value === "");

    if(input.value !== '') {
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
})
