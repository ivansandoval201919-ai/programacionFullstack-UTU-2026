
let selectCategoria = document.querySelector('#selectCategoria');
let inputBuscador = document.querySelector('#inputBuscador');
let gridProductos = document.querySelector('#gridProductos');
let msgResultado = document.querySelector('#msgResultado');

let allProducts = [];


document.querySelector('#selectCategoria').addEventListener('change', async () => {
    const categoria = selectCategoria.value;
    try {
        const response = await fetch(`https://fakestoreapi.com/products/category/${categoria}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        console.log('GET >', data);
        gridProductos.innerHTML = '';
        data.forEach(product => {
            gridProductos.innerHTML += `
                <article class="product-card">
                    <img src="${product.image}" alt="${product.title}" width="200px" height="200px">
                    <h3>${product.title}</h3>
                    <p class="categoria">${product.category}</p>
                    <p class="precio">$${product.price}</p>
                    <button onclick="agregarAlCarrito(${product.id}, '${product.title}', ${product.price}, '${product.image}')">
                        Agregar al carrito
                    </button>
                </article>
            `;
        });
        msgResultado.innerHTML = '';
    } catch (error) {
        console.error('ERROR: ', error);
        msgResultado.innerHTML = 'Error al filtrar por categoría.';
    }
});


try {
    const responseCategories = await fetch('https://fakestoreapi.com/products/categories', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const categories = await responseCategories.json();
    console.log('GET categorías >', categories);
    selectCategoria.innerHTML = '<option value="all">Todas</option>';
    categories.forEach(categoria => {
        selectCategoria.innerHTML += `<option value="${categoria}">${categoria}</option>`;
    });

    const responseProducts = await fetch('https://fakestoreapi.com/products', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const data = await responseProducts.json();
    console.log('GET productos >', data);
    allProducts = data;
    data.forEach(product => {
        gridProductos.innerHTML += `
            <article class="product-card">
                <img src="${product.image}" alt="${product.title}" width="200px" height="200px">
                <h3>${product.title}</h3>
                <p class="categoria">${product.category}</p>
                <p class="precio">$${product.price}</p>
                <button onclick="agregarAlCarrito(${product.id}, '${product.title}', ${product.price}, '${product.image}')">
                    Agregar al carrito
                </button>
            </article>
        `;
    });
    msgResultado.innerHTML = '';
} catch (error) {
    console.error('ERROR: ', error);
    msgResultado.innerHTML = 'Error al cargar los productos.';
}



inputBuscador.addEventListener('input', () => {
    const query = inputBuscador.value.toLowerCase();
    const filtrados = allProducts.filter(product =>
        product.title.toLowerCase().includes(query)
    );
    gridProductos.innerHTML = '';
    filtrados.forEach(product => {
        gridProductos.innerHTML += `
            <article class="product-card">
                <img src="${product.image}" alt="${product.title}" width="200px" height="200px">
                <h3>${product.title}</h3>
                <p class="categoria">${product.category}</p>
                <p class="precio">$${product.price}</p>
                <button onclick="agregarAlCarrito(${product.id}, '${product.title}', ${product.price}, '${product.image}')">
                    Agregar al carrito
                </button>
            </article>
        `;
    });
    
    if (filtrados.length === 0) {
        msgResultado.innerHTML = 'No se encontraron productos.';
    } else {
        msgResultado.innerHTML = '';
    }
});

//Ivan sandoval

const carrito = [];

const 
