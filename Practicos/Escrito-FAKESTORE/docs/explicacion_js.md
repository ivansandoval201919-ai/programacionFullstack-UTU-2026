# Explicación de los Cambios en JavaScript (script.js)

Este documento detalla línea por línea la lógica del módulo del carrito de compras en `script.js`.

---

## 1. Inicialización del Carrito
```javascript
const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
```

Esta línea crea el array que contiene todos los productos agregados. Se ejecuta **una sola vez** al cargar la página.

* **`localStorage.getItem('carrito')`**
  * **Qué hace:** Va al almacenamiento del navegador y busca un texto guardado bajo la clave `'carrito'`.
  * **Por qué:** `localStorage` guarda la información de forma permanente en la computadora del usuario, de modo que al recargar la página no se borren sus compras.
  * **Resultado:** Devuelve un string en formato JSON (ej. `'[{"id":1,"title":"Remera"}]'`) o `null` si es la primera vez que se usa la web.
* **`JSON.parse(...)`**
  * **Qué hace:** Toma el string (texto plano) y lo convierte en un array/objeto real de JavaScript.
  * **Por qué:** `localStorage` solo puede almacenar texto. Pero para trabajar en JS (hacer bucles, agregar cosas, etc.), necesitamos un array real, no texto.
* **`|| []` (Operador lógico OR)**
  * **Qué hace:** Actúa como red de seguridad. Si el lado izquierdo es `null` (primera visita del usuario), le asigna al `carrito` un array vacío `[]`.
  * **Por qué:** Si la variable `carrito` queda en `null`, cualquier llamada a funciones como `carrito.push()` rompería la página con un error fatal.

---

## 2. Guardar el Carrito en LocalStorage
```javascript
function guardarCarrito() {
    localStorage.setItem('carrito', JSON.stringify(carrito));
}
```

Esta función se llama **cada vez** que se modifica el carrito (agregar, quitar, cambiar cantidad) para que el disco se actualice.

* **`JSON.stringify(carrito)`**
  * **Qué hace:** Convierte nuestro array de productos de JS a un string plano en formato JSON.
  * **Por qué:** Como se mencionó, `localStorage` solo acepta texto plano.
* **`localStorage.setItem('carrito', ...)`**
  * **Qué hace:** Sobreescribe el valor de la clave `'carrito'` en el almacenamiento del navegador con el nuevo string.

---

## 3. Agregar un Producto al Carrito
```javascript
function agregarAlCarrito(id, title, price, image) {
    const productoExiste = carrito.find(n => n.id == id); 
    
    if (productoExiste) {
        productoExiste.cantidad += 1;
    } else {
        carrito.push({ id, title, price, image, cantidad: 1 });
    }
    
    guardarCarrito();
}
```

Esta función se activa cuando el usuario hace clic en el botón "Agregar al carrito" de cualquier tarjeta de producto.

* **`id, title, price, image`**
  * **Qué hace:** Parámetros que envían los botones del catálogo para indicarle a la función qué producto fue clickeado.
* **`carrito.find(n => n.id == id)`**
  * **Qué hace:** Recorre el array `carrito` y busca si ya existe algún elemento cuyo atributo `id` sea igual al `id` del producto que se quiere agregar.
  * **Resultado:** Devuelve la referencia al objeto del producto encontrado (si ya estaba) o `undefined` (si no estaba).
* **`if (productoExiste)`**
  * **Qué hace:** Si el producto ya existía en el carrito, entra en esta sección.
  * **`productoExiste.cantidad += 1;`**
    * **Qué hace:** Suma 1 a la cantidad de ese producto existente.
    * **Por qué:** En lugar de agregar dos veces el mismo producto en filas diferentes, simplemente aumentamos su número en la pantalla (ej. "Remera x 2").
* **`else`**
  * **Qué hace:** Si es la primera vez que se agrega ese producto, entra en esta sección.
  * **`carrito.push({ id, title, price, image, cantidad: 1 });`**
    * **Qué hace:** Empuja un nuevo objeto al array `carrito` con los datos del producto y establece su propiedad `cantidad` en `1`.
* **`guardarCarrito();`**
  * **Qué hace:** Guarda el array modificado en el almacenamiento local de forma persistente.

---

## 4. Estructura de `renderizarCarrito` (Inicial)
```javascript
function renderizarCarrito() {
    const carritoItems = document.querySelector('#carrito-items');
    const carritoTotal = document.querySelector('#carrito-total');
}
```
* **`document.querySelector('#carrito-items')`**
  * **Qué hace:** Busca en el documento HTML el elemento que tiene el ID `#carrito-items` (el contenedor de los productos) y lo guarda en la variable para poder modificarlo con JS.
* **`document.querySelector('#carrito-total')`**
  * **Qué hace:** Busca el elemento con el ID `#carrito-total` (donde se muestra el precio final) y lo guarda para poder actualizar la suma.
