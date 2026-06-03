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

    let ok = true;

    if (name.value === "") {
        errorTask.classList.add('visible');
        ok = false;
    } else {
        errorTask.classList.remove('visible');
    }


    if (img.value === "") {
        errorImg.classList.add('visible');
        ok = false;
    } else {
        errorImg.classList.remove('visible');
    }

    if (!ok) return;

   
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