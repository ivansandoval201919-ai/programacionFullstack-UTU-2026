# Explicación de los Cambios en CSS (style.css)

Este documento explica cada regla de CSS agregada en `style.css` para el diseño del carrito de compras en formato "Dark Mode Tecnológico".

---

## 1. Estilos del Cuerpo (`body`)
```css
body {
    background-color: var(--bg-main);
    color: var(--text-primary);
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    min-height: 100vh;
}
```
* **`background-color: var(--bg-main);`**
  * **Qué hace:** Aplica el color de fondo guardado en la variable `--bg-main` (un tono azul oscuro profundo `#0a0e17`).
  * **Por qué:** Evita el fondo blanco por defecto del navegador y establece el tono del "Dark Mode".
* **`color: var(--text-primary);`**
  * **Qué hace:** Cambia el color del texto a blanco (`#ffffff`).
  * **Por qué:** Permite leer los textos sobre el fondo oscuro (contraste).
* **`font-family: ...;`**
  * **Qué hace:** Cambia la tipografía a fuentes modernas sin serifas.
  * **Por qué:** Hace que el diseño se vea más limpio y profesional en comparación con la tipografía por defecto del navegador (Times New Roman).
* **`min-height: 100vh;`**
  * **Qué hace:** Fuerza al `body` a ocupar por lo menos el 100% de la altura de la ventana visible (`vh` = viewport height).
  * **Por qué:** Evita que el fondo oscuro se corte si hay poco contenido en la página.

---

## 2. Contenedor Principal del Carrito (`#carrito`)
```css
#carrito {
    background-color: var(--bg-surface);
    border: 1px solid var(--border-color);
    border-radius: 8px;
    padding: 20px;
    min-width: 300px;
    max-width: 350px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-self: flex-start;
}
```
* **`background-color: var(--bg-surface);`**
  * **Qué hace:** Aplica un color de fondo gris azulado un poco más claro (`#121824`) que el fondo de la página.
  * **Por qué:** Crea una jerarquía visual, haciendo que el carrito resalte como un panel encima de la página.
* **`border: 1px solid var(--border-color);` y `border-radius: 8px;`**
  * **Qué hace:** Coloca un borde fino de color `#2e374a` y redondea las esquinas.
  * **Por qué:** Da un aspecto de tarjeta moderna y prolija.
* **`min-width: 300px;` y `max-width: 350px;`**
  * **Qué hace:** Limita el ancho del panel para que no se estire demasiado ni se encoja tanto que no quepan los nombres de los productos.
* **`display: flex;` y `flex-direction: column;`**
  * **Qué hace:** Activa Flexbox en vertical dentro del carrito.
  * **Por qué:** Alinea todos los elementos internos (título, lista, total) uno debajo de otro automáticamente.
* **`gap: 16px;`**
  * **Qué hace:** Deja un espacio de 16 píxeles entre los elementos del panel.
  * **Por qué:** Evita usar `margin` repetidamente para separar los elementos.
* **`align-self: flex-start;`**
  * **Qué hace:** Alinea el panel arriba dentro del contenedor flex del catálogo.
  * **Por qué:** Evita que el carrito se estire verticalmente de manera extraña si el catálogo de productos es muy largo.

---

## 3. Contenedor de la Lista (`#carrito-items`)
```css
#carrito-items {
    display: flex;
    flex-direction: column;
    gap: 12px;
    max-height: 400px;
    overflow-y: auto;
}
```
* **`max-height: 400px;`**
  * **Qué hace:** Establece que la lista no puede medir más de 400 píxeles de alto.
* **`overflow-y: auto;`**
  * **Qué hace:** Habilita una barra de scroll vertical si los productos superan los 400px de altura.
  * **Por qué:** Evita que si el usuario agrega 20 productos, el carrito se extienda infinitamente hacia abajo y rompa el diseño de la pantalla.

---

## 4. Tarjeta de cada Producto en el Carrito (`.cart-item`)
```css
.cart-item {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 10px;
    background-color: var(--bg-card);
    border: 1px solid var(--border-color);
    border-radius: 6px;
}
```
* **`display: flex;` y `align-items: center;`**
  * **Qué hace:** Convierte la tarjeta en un contenedor horizontal y centra sus elementos (imagen, textos, botones) verticalmente.
* **`background-color: var(--bg-card);`**
  * **Qué hace:** Fondo aún más claro (`#1c2333`) para la tarjeta del producto.
  * **Por qué:** Genera contraste tridimensional: Página (oscuro) → Panel del Carrito (medio) → Producto del carrito (claro).

---

## 5. Imagen del Producto (`.cart-item img`)
```css
.cart-item img {
    width: 50px;
    height: 50px;
    object-fit: contain;
    background-color: #fff;
    border-radius: 4px;
    padding: 2px;
}
```
* **`width: 50px;` y `height: 50px;`**
  * **Qué hace:** Achica la imagen del producto a una miniatura.
* **`object-fit: contain;`**
  * **Qué hace:** Redimensiona la imagen sin deformarla (no la estira).
* **`background-color: #fff;`**
  * **Qué hace:** Le da un fondo blanco a la imagen.
  * **Por qué:** Como las imágenes de FakeStore tienen fondo transparente, se verían mal sobre nuestro fondo oscuro. El fondo blanco hace que resalten.

---

## 6. Textos del Producto (`.cart-item-info`)
```css
.cart-item-info h4 {
    font-size: 13px;
    color: var(--text-primary);
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
}
```
* **`-webkit-line-clamp: 1;` y `text-overflow: ellipsis;`**
  * **Qué hace:** Corta el título del producto si es muy largo y le añade tres puntos suspensivos (`...`) al final.
  * **Por qué:** Evita que títulos extremadamente largos (de 3 líneas) deformen el tamaño de la tarjeta en el carrito.

---

## 7. Controles de Cantidad (`.cart-item-controls` y botones)
```css
.cart-item-controls button {
    background-color: var(--accent-purple);
    color: var(--text-primary);
    border: none;
    border-radius: 4px;
    width: 24px;
    height: 24px;
    cursor: pointer;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
}
```
* **`background-color: var(--accent-purple);`**
  * **Qué hace:** Pinta los botones de `+` y `-` de color púrpura neón (`#7f00ff`).
* **`width: 24px;` y `height: 24px;`**
  * **Qué hace:** Hace los botones perfectamente cuadrados y pequeños.
* **`cursor: pointer;`**
  * **Qué hace:** Cambia el cursor a la "manito" al pasar el mouse por encima.
  * **Por qué:** Indica visualmente al usuario que el botón es interactivo (clicable).

---

## 8. Botón Eliminar (`.btn-eliminar`)
```css
.btn-eliminar {
    background: none;
    border: none;
    color: #ff4444;
    cursor: pointer;
}
```
* **`color: #ff4444;`**
  * **Qué hace:** Pinta el emoji de la papelera o el texto de color rojo.
  * **Por qué:** En UX (experiencia de usuario), el rojo advierte de una acción destructiva (eliminar).
