let getCat = document.querySelector('#getCat');
let imgCat = document.querySelector('#imgCat');
let like = document.querySelector('#like');
let dislike = document.querySelector('#dislike');

let likeCount = document.querySelector('#likeCount');
let dislikeCount = document.querySelector('#dislikeCount');
let resultado = document.querySelector('#resultado');

let likes = 0;
let dislikes = 0;

getCat.addEventListener('click', async () => {
    try {
        const response = await fetch('https://api.thecatapi.com/v1/images/search', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': 'live_rxyoCXdGVeagFAbWSFfu4lNZu777k1gDKsYqNhh2ZdMAKhnbP3fJG04WgWWLIzui'
            }
        });
        const data = await response.json();
        console.log("GET >", data);
        const cat = data[0];
        imgCat.innerHTML = `<img id="${cat.id}" src="${data[0].url}" width=300px height=300px >`;
        
        resultado.innerHTML = '';
    }
    catch (error) {
        console.error('ERROR: ', error);
    }
});

like.addEventListener('click', async () => {
    if (!imgCat.querySelector('img')) {
        resultado.innerHTML = 'Get a cat before vote';
        return;
    }

    try {
        const response = await fetch('https://api.thecatapi.com/v1/votes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': 'live_rxyoCXdGVeagFAbWSFfu4lNZu777k1gDKsYqNhh2ZdMAKhnbP3fJG04WgWWLIzui'
            },
            body: JSON.stringify({
                image_id: imgCat.querySelector('img').id,
                value: 1
            })
        });
        const data = await response.json();
        console.log("POST >", data);

        likes++;
        likeCount.textContent = likes;

        resultado.innerHTML = 'registered vote';

        setTimeout(() => {
            getCat.click();
        }, 500); //timeout para que el usuario lea el mensaje del voto realizado

    } catch (error) {
        console.error('ERROR: ', error);
    }
});

dislike.addEventListener('click', async () => {
    if (!imgCat.querySelector('img')) {
        resultado.innerHTML = 'Get a cat before vote';
        return;
    }

    try {
        const response = await fetch('https://api.thecatapi.com/v1/votes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-api-key': 'live_rxyoCXdGVeagFAbWSFfu4lNZu777k1gDKsYqNhh2ZdMAKhnbP3fJG04WgWWLIzui'
            },
            body: JSON.stringify({
                image_id: imgCat.querySelector('img').id,
                value: -1
            })
        });
        const data = await response.json();
        console.log("POST >", data);

        dislikes++;
        dislikeCount.textContent = dislikes;

        resultado.innerHTML = 'registered vote';

        setTimeout(() => {
            getCat.click();
        }, 500);

    } catch (error) {
        console.error('ERROR: ', error);
    }
});
