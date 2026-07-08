//Nicolas Negretto inicio 
const STORAGE_KEY = "ff_session";
 
const loginSection = document.getElementById("login");
const perfilSection = document.getElementById("perfil");
const catalogoMain = document.getElementById("catalogo");
const loginForm = document.getElementById("loginForm");
const loginError = document.getElementById("loginError");
const btnLogout = document.getElementById("btnLogout");
 
// muestra el perfil y el catalogo, y esconde el login
function mostrarVistaLogueado() {
    loginSection.classList.add("hidden");
    perfilSection.classList.remove("hidden");
    catalogoMain.classList.remove("hidden");
}
 
// muestra el login y esconde el perfil y el catalogo
function mostrarVistaLogin() {
    perfilSection.classList.add("hidden");
    catalogoMain.classList.add("hidden");
    loginSection.classList.remove("hidden");
}
 
// pone los datos del usuario en los <span> del perfil
function mostrarPerfil(usuario) {
    document.getElementById("perfilNombre").textContent = usuario.name.firstname + " " + usuario.name.lastname;
    document.getElementById("perfilUsuario").textContent = usuario.username;
    document.getElementById("perfilEmail").textContent = usuario.email;
    document.getElementById("perfilTelefono").textContent = usuario.phone;
}
 
// cuando se envía el formulario, se hace login contra la API
loginForm.addEventListener("submit", function (event) {
    event.preventDefault();
    loginError.classList.add("hidden");
 
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
 
    fetch("https://fakestoreapi.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: username, password: password })
    })
        .then(function (response) {
            if (!response.ok) {
                throw new Error("Usuario o contraseña incorrectos.");
            }
            return response.json();
        })
        .then(function (dataLogin) {
            let token = dataLogin.token;
 
            // si el login fue correcto, pedimos los datos del usuario
            fetch("https://fakestoreapi.com/users/1")
                .then(function (response) {
                    return response.json();
                })
                .then(function (usuario) {
                    // guardamos el token y el usuario en localStorage
                    let sesion = {
                        token: token,
                        usuario: usuario
                    };
                    localStorage.setItem(STORAGE_KEY, JSON.stringify(sesion));
 
                    mostrarPerfil(usuario);
                    mostrarVistaLogueado();
                    loginForm.reset();
                });
        })
        .catch(function (error) {
            console.log("ERROR de login: ", error);
            loginError.textContent = error.message;
            loginError.classList.remove("hidden");
        });
});
 
// al hacer click en "cerrar sesion" borramos los datos guardados
btnLogout.addEventListener("click", function () {
    localStorage.removeItem(STORAGE_KEY);
    mostrarVistaLogin();
});
 
// al cargar la pagina, revisamos si ya había una sesion guardada
let sesionGuardada = localStorage.getItem(STORAGE_KEY);
if (sesionGuardada !== null) {
    let datosSesion = JSON.parse(sesionGuardada);
    mostrarPerfil(datosSesion.usuario);
    mostrarVistaLogueado();
} else {
    mostrarVistaLogin();
}
 
// Nicolas Negretto Fin
// Augusto Fernandez inicio
let selectCategoria = document.querySelector('#selectCategoria');
let inputBuscador = document.querySelector('#inputBuscador');
let gridProductos = document.querySelector('#gridProductos');
let msgResultado = document.querySelector('#msgResultado');

let allProducts = [];


document.addEventListener('DOMContentLoaded', async () => {
    await fetchCategories();
    await fetchProducts();
});

async function fetchCategories() {
    try {
        const response = await fetch('https://fakestoreapi.com/products/categories', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        console.log('GET categorías >', data);

        selectCategoria.innerHTML = '<option value="all">Todas</option>';
        data.forEach(categoria => {
            selectCategoria.innerHTML += `<option value="${categoria}">${categoria}</option>`;
        });

        msgResultado.innerHTML = '';
    } catch (error) {
        console.error('ERROR: ', error);
        msgResultado.innerHTML = 'Error al cargar las categorías.';
    }
}

async function fetchProducts() {
    try {
        const response = await fetch('https://fakestoreapi.com/products', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        console.log('GET productos >', data);

        allProducts = data;
        renderProducts(data);

        msgResultado.innerHTML = '';
    } catch (error) {
        console.error('ERROR: ', error);
        msgResultado.innerHTML = 'Error al cargar los productos.';
    }
}

function renderProducts(products) {
    if (products.length === 0) {
        gridProductos.innerHTML = '';
        msgResultado.innerHTML = 'No se encontraron productos.';
        return;
    }

    gridProductos.innerHTML = '';
    products.forEach(product => {
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
}



selectCategoria.addEventListener('change', async () => {
    const categoria = selectCategoria.value;

    if (categoria === 'all') {
        renderProducts(allProducts);
        return;
    }

    try {
        const response = await fetch(`https://fakestoreapi.com/products/category/${categoria}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        console.log(`GET categoría ${categoria} >`, data);

        renderProducts(data);

        msgResultado.innerHTML = '';
    } catch (error) {
        console.error('ERROR: ', error);
        msgResultado.innerHTML = 'Error al filtrar por categoría.';
    }
});

inputBuscador.addEventListener('input', () => {
    const query = inputBuscador.value.toLowerCase();

    if (!query) {
        renderProducts(allProducts);
        return;
    }

    const filtrados = allProducts.filter(product =>
        product.title.toLowerCase().includes(query)
    );

    renderProducts(filtrados);
});
// Augusto Fernandez Fin
//Ivan sandoval




const carrito = JSON.parse(localStorage.getItem('carrito')) || [];

function guardarCarrito() {
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

function agregarAlCarrito(id, title, price, image){
const productoExiste = carrito.find(n => n.id == id); 
if(productoExiste){
productoExiste.cantidad+=1;
}
else{
 carrito.push({id, title, price, image, cantidad: 1});

}
    guardarCarrito();
        renderizarCarrito();


}

function renderizarCarrito(){
    const carritoItems = document.querySelector('#carrito-items');
    const carritoTotal = document.querySelector('#carrito-total');

    carritoItems.innerHTML= '';

    if(carrito.length === 0){
        carritoItems.innerHTML = '<p class="carrito-vacio">El carrito está vacío.</p>';

carritoTotal.textContent = '0.00';
return;
    }
    let total= 0;
    carrito.forEach(item =>{
        const subtotal = item.price * item.cantidad;
        total += subtotal;
        carritoItems.innerHTML +=`
             <div class="cart-item">
                <img src="${item.image}" alt="${item.title}">
                <div class="cart-item-info">
                    <h4>${item.title}</h4>
                    <p>$${item.price} x ${item.cantidad}</p>
                    <p>Subtotal: $${subtotal.toFixed(2)}</p>
                </div>
                <div class="cart-item-controls">
                    <button onclick="cambiarCantidad(${item.id}, -1)">-</button>
                    <span class="cantidad">${item.cantidad}</span>
                    <button onclick="cambiarCantidad(${item.id}, 1)">+</button>
                </div>
                <button class="btn-eliminar" onclick="eliminarDelCarrito(${item.id})">🗑️</button>
            </div>
        `;

    });
    carritoTotal.textContent = total.toFixed(2);
}

function cambiarCantidad(id, cambio) {
    const producto = carrito.find(item => item.id == id);
    if (producto) {
        producto.cantidad += cambio;
        if (producto.cantidad <= 0) {
            eliminarDelCarrito(id);
            return; 
        }
        guardarCarrito();
        renderizarCarrito();
    }
}
function eliminarDelCarrito(id) {
    const indice = carrito.findIndex(item => item.id == id);
    if (indice !== -1) {
        carrito.splice(indice, 1); 
    }
    guardarCarrito();
    renderizarCarrito();
}
    renderizarCarrito();
