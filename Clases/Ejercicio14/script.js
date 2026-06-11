let getCat = document.querySelector('#getCat');
let imgCat = document.querySelector('#imgCat');
let like = document.querySelector('#like');
let dislike = document.querySelector('#dislike');
getCat.addEventListener('click', async () => {

    try{
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
        imgCat.innerHTML = `<img id="${cat.id}"src="${data[0].url}" width=300px height=300px >`;
        

    }

    catch(error){
        console.error('ERROR: ', error);
    }

    
});
like.addEventListener('click', async () => {
        try{
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
            resultado.innerHTML = `<prev>${JSON.stringify(data, null, 2)}</prev>`;
        }catch(error){
            console.error('ERROR: ', error);
        }
    });

dislike.addEventListener('click', async () => {
        try{
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
            resultado.innerHTML = `<prev>${JSON.stringify(data, null, 2)}</prev>`;
        }catch(error){
            console.error('ERROR: ', error);
        }
    });
