# Explicación de JS Socrática (script.js)

Este documento analiza en detalle cada línea de código de la lógica del carrito de compras que implementaste como Integrante 3. Cada bloque de código está explicado de forma socrática para entrenar tu razonamiento de ingeniería.

---

## 1. Recuperar el Estado (Carga Inicial)
```javascript
const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
```

### El cuestionamiento socrático:
* **¿Por qué usamos `const` si el contenido del carrito va a modificarse agregando o quitando productos?**
  * *Reflexión:* En JavaScript, declarar un array con `const` significa que no podemos **reasignar** la variable a otro valor (por ejemplo, no podemos hacer `carrito = 'otro texto'`). Sin embargo, los arrays y objetos en JS son mutables; sí podemos modificar sus elementos internos (`carrito.push` o `carrito.splice`). Usar `const` protege la referencia de nuestra variable de ser sobreescrita por accidente.
* **¿Qué pasaría si intentáramos hacer `JSON.parse(null)`?**
  * *Reflexión:* Si es la primera vez que un usuario entra al sitio, `localStorage.getItem('carrito')` devuelve `null`. `JSON.parse(null)` devuelve `null`. Si no pusiéramos la red de seguridad `|| []` al final, nuestra variable `carrito` guardaría el valor `null`. En la siguiente línea donde llamemos a `carrito.push(...)` o intentemos leer `carrito.length`, la página web colapsará porque `null` no es una estructura de datos iterable. El operador `||` evalúa la "verdad" de lo que tiene a la izquierda; al ver un valor falso (`null`), lo ignora y asigna lo que tiene a su derecha (un array vacío `[]` real).

---

## 2. Guardar el Carrito en Disco
```javascript
function guardarCarrito() {
    localStorage.setItem('carrito', JSON.stringify(carrito));
}
```

### El cuestionamiento socrático:
* **¿Por qué no podemos hacer simplemente `localStorage.setItem('carrito', carrito)`?**
  * *Reflexión:* `localStorage` es un sistema de almacenamiento de clave-valor que **solo acepta strings (cadenas de texto)**. Si intentas pasarle un array de objetos directamente, el navegador llamará internamente al método `.toString()` del array, convirtiendo tu carrito en el texto inútil `"[object Object],[object Object]"`. Perderías toda la información de los productos. `JSON.stringify()` serializa tu array estructurado en una cadena de texto JSON legible para que pueda persistirse intacta.

---

## 3. Agregar un Producto al Carrito
```javascript
function agregarAlCarrito(id, title, price, image){
    const productoExiste = carrito.find(n => n.id == id); 
    if(productoExiste){
        productoExiste.cantidad += 1;
    }
    else{
        carrito.push({id, title, price, image, cantidad: 1});
    }
    guardarCarrito();
    renderizarCarrito();
}
```

### El cuestionamiento socrático:
* **¿Cómo hace `carrito.find()` para saber qué producto estamos buscando?**
  * *Reflexión:* `.find()` recibe una función de callback (`n => n.id == id`). Recorre el array `carrito` uno por uno y evalúa la condición por cada objeto (`n`). Devuelve inmediatamente la referencia al primer objeto que cumpla la condición. Si no encuentra nada que coincida, devuelve `undefined`.
* **¿Por qué `productoExiste.cantidad += 1` modifica el array si no estamos haciendo ningún push?**
  * *Reflexión:* Este es uno de los conceptos más importantes de la programación: **la asignación por referencia**. En JavaScript, cuando guardas el resultado de `.find()` en una constante (`productoExiste`), no estás haciendo una copia del producto; estás guardando una "flecha" (puntero) que apunta al objeto real que vive dentro del array `carrito`. Modificar la propiedad de ese objeto cambia los datos directamente en el array original.
* **¿Por qué llamamos a `guardarCarrito()` y `renderizarCarrito()` al final?**
  * *Reflexión:* Modificar el array en memoria no hace que la base de datos (localStorage) cambie automáticamente, ni que los ojos del usuario vean la actualización en la pantalla. Debes indicarle explícitamente al navegador que grabe los datos nuevos y que redibuje la interfaz visual con la información actualizada.

---

## 4. Renderizar el Carrito
```javascript
function renderizarCarrito(){
    const carritoItems = document.querySelector('#carrito-items');
    const carritoTotal = document.querySelector('#carrito-total');

    carritoItems.innerHTML = '';

    if(carrito.length === 0){
        carritoItems.innerHTML = '<p class="carrito-vacio">El carrito está vacío.</p>';
        carritoTotal.textContent = '0.00';
        return;
    }
    // ...
```

### El cuestionamiento socrático:
* **¿Por qué es fundamental vaciar la lista con `carritoItems.innerHTML = ''` antes de renderizar?**
  * *Reflexión:* Si el carrito ya tiene el "Producto A", y el usuario agrega el "Producto B", al llamar a `renderizarCarrito()` sin vaciar el contenedor, el bucle volvería a dibujar el "Producto A" (que ya estaba en pantalla) y luego añadiría el "Producto A" y el "Producto B" nuevamente. El contenedor terminaría mostrando elementos repetidos e inconsistentes. Limpiar la pizarra antes de dibujar asegura que siempre mostremos exactamente lo que hay en el array.
* **¿Por qué incluimos un `return;` dentro de la condición del carrito vacío?**
  * *Reflexión:* Si el carrito no tiene elementos, no hay nada que recorrer en el bucle `forEach` de abajo. El `return;` detiene inmediatamente la ejecución de la función y sale de ella, evitando procesamiento innecesario y previniendo errores al intentar calcular totales sobre listas vacías.

---

## 5. El Bucle de Renderizado e Inyección de HTML
```javascript
    let total = 0;
    carrito.forEach(item => {
        const subtotal = item.price * item.cantidad;
        total += subtotal;
        carritoItems.innerHTML += `
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
```

### El cuestionamiento socrático:
* **¿Cuál es la diferencia entre usar `=` y usar `+=` al modificar `innerHTML`?**
  * *Reflexión:* Si usaras `=`, cada iteración del bucle sobreescribiría la tarjeta anterior, haciendo que en pantalla solo aparezca el último producto del array. Al usar `+=` (adición combinada), le indicamos al navegador: "mantén lo que ya habías dibujado y añade esta nueva tarjeta al final".
* **¿Por qué usamos `subtotal.toFixed(2)` en lugar de mostrar `subtotal` directamente?**
  * *Reflexión:* Las operaciones matemáticas con números decimales en computación a veces generan valores extraños por problemas de coma flotante (por ejemplo, `19.99 * 3` podría resultar en `59.970000000000006`). `toFixed(2)` redondea el número y asegura que siempre mostremos exactamente dos dígitos decimales en pantalla (ej. `$59.97`), dando un aspecto limpio de moneda.
* **¿De dónde salen las funciones `cambiarCantidad` y `eliminarDelCarrito` que están dentro del string?**
  * *Reflexión:* Son funciones globales que escribiste en JS. Al inyectar el HTML con la propiedad `onclick="cambiarCantidad(...)"`, el navegador vincula físicamente el clic físico del usuario en la pantalla con la lógica de tu función de JavaScript, pasándole dinámicamente el ID del producto correspondiente.

---

## 6. Modificar Cantidad y Auto-Eliminar
```javascript
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
```

### El cuestionamiento socrático:
* **¿Por qué delegamos en `eliminarDelCarrito(id)` en lugar de escribir la eliminación adentro del `if`?**
  * *Reflexión:* Uno de los principios más importantes de la ingeniería de software es **DRY (Don't Repeat Yourself - No te repitas)**. Si ya tienes una función cuyo único propósito es eliminar un producto, actualizar la base de datos y redibujar la pantalla, lo correcto es reutilizarla. Si mañana cambia la forma en que eliminamos productos, solo tendrás que modificar la función `eliminarDelCarrito` y este cambio afectará automáticamente a los botones de resta cuando lleguen a cero.

---

## 7. Eliminar en el Lugar
```javascript
function eliminarDelCarrito(id) {
    const indice = carrito.findIndex(item => item.id == id);
    if (indice !== -1) {
        carrito.splice(indice, 1);
    }
    guardarCarrito();
    renderizarCarrito();
}
```

### El cuestionamiento socrático:
* **¿Por qué usamos `.splice(indice, 1)` y cómo se comporta este método?**
  * *Reflexión:* El método `.splice(posicion, cantidad)` modifica el array en el que se ejecuta directamente. Le dice a JavaScript: "ve a la posición de este índice y elimina exactamente 1 elemento a partir de allí". Si usáramos un método como `.filter()`, este nos devolvería un array nuevo, obligándonos a reasignar la variable `carrito`. Como declaramos `carrito` como una constante (`const`), no podemos reasignarla, por lo que `.splice` es la herramienta idónea al modificar el array existente "en su lugar".
