let btn = document.querySelector('#btn');
let div = document.querySelector('#div');
const categoria = document.querySelector('#categoria');
const tipo = document.querySelector('#type')
const language = document.querySelector('#language')
btn.addEventListener('click', async function () {
    const response = await fetch("https://v2.jokeapi.dev/joke/" + categoria.value + "?lang=" + language.value + "&type= " + tipo.value + "");
    const data = await response.json();
    div.innerHTML = data.joke;
})
