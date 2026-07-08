# Explicación de CSS Socrática (style.css)

Este documento analiza las reglas y variables que implementaste como Integrante 3. Cada explicación está diseñada como un cuestionamiento socrático para ayudarte a internalizar el porqué de cada decisión técnica.

---

## 1. Declaración de Variables en `:root`
```css
:root {
  --bg-main: #0a0e17;       
  --bg-surface: #121824;    
  --bg-card: #1c2333;       
  --accent-cyan: #00f2fe;   
  --accent-purple: #7f00ff; 
  --accent-success: #39ff14;
  --text-primary: #ffffff;  
  --text-muted: #94a3b8;    
  --text-dark: #020617;     
  --border-color: #2e374a;  
}
```

### El cuestionamiento socrático:
* **¿Por qué creamos variables en lugar de escribir los colores directamente (`#0a0e17`, `#ffffff`) en cada regla?**
  * *Reflexión:* Si mañana el cliente decide cambiar el tono de fondo de la aplicación por uno más claro, ¿cuántos archivos y líneas tendrías que modificar? Al centralizar los colores en `:root`, cualquier cambio se hace en un solo lugar y se propaga a todo el sitio.
* **¿Qué significa `:root` en CSS?**
  * *Reflexión:* Representa el elemento de mayor nivel en el árbol del DOM (habitualmente la etiqueta `<html>`). Declarar variables aquí asegura que cualquier elemento de la página pueda heredarlas y usarlas.

---

## 2. Estilos del Cuerpo (`body`)
```css
body {
    background-color: var(--bg-main);
    color: var(--text-primary);
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    min-height: 100vh;
}
```

### El cuestionamiento socrático:
* **¿Qué pasaría si omitiéramos `min-height: 100vh`?**
  * *Reflexión:* Por defecto, un elemento bloque mide solo el alto de su contenido interno. Si tu página tiene un formulario de login muy pequeño, el `body` mediría solo unos 200px de alto, y el resto de la pantalla mostraría el fondo blanco por defecto del navegador. Al forzarlo a medir `100vh` (100% de la ventana), garantizas que el fondo oscuro cubra toda la pantalla desde el primer segundo.
* **¿Por qué usamos `var()` para asignar el fondo y el color de texto?**
  * *Reflexión:* Es la sintaxis nativa de CSS para consumir las variables de `:root`. Si no envolviéramos el nombre de la variable en `var()`, el navegador interpretaría la propiedad como un texto plano sin valor de color.

---

## 3. Clases Utilitarias de Visibilidad
```css
.hidden {
    display: none;
}
```

### El cuestionamiento socrático:
* **¿Cuál es la diferencia entre ocultar con `display: none` (nuestra clase `.hidden`) y usar `visibility: hidden` u `opacity: 0`?**
  * *Reflexión:* Si usas `visibility: hidden` u `opacity: 0`, el elemento se vuelve invisible pero **sigue ocupando espacio físico** en el diseño (queda un gran hueco vacío). Con `display: none`, el elemento se retira por completo del flujo del renderizado. Para nuestra SPA (donde queremos alternar entre la pantalla de login, el perfil y el catálogo sin dejar espacios vacíos intermedios), ¿cuál es la única opción válida? Exactamente, retirar el elemento físico usando `display: none`.

---

## 4. Contenedor del Panel del Carrito (`#carrito`)
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

### El cuestionamiento socrático:
* **¿Por qué definimos tanto un `min-width` como un `max-width`?**
  * *Reflexión:* Si el navegador se achica o agranda y usáramos solo `width: 100%`, el carrito podría deformarse. Al fijar un mínimo de 300px aseguramos que las imágenes de los productos, botones y textos entren cómodamente. El máximo de 350px previene que el panel devore el espacio asignado a la grilla de productos.
* **¿Qué solucionamos con `align-self: flex-start` en un contenedor flexbox?**
  * *Reflexión:* Por defecto, en un contenedor flex (`#catalogo`), los elementos hijos se estiran verticalmente para medir lo mismo que el más alto. Si el catálogo tiene 100 productos, el panel del carrito se estiraría miles de píxeles hacia abajo, dejando un espacio vacío enorme e innecesario debajo del total. Con `align-self: flex-start`, le indicamos al carrito: "mide solo lo que tu contenido requiera y alineate arriba".

---

## 5. Control de Desbordamiento de la Lista (`#carrito-items`)
```css
#carrito-items {
    display: flex;
    flex-direction: column;
    gap: 12px;
    max-height: 400px;
    overflow-y: auto;
}
```

### El cuestionamiento socrático:
* **¿Qué ocurriría si un usuario agrega 15 productos diferentes y no tuviéramos `max-height: 400px` ni `overflow-y: auto`?**
  * *Reflexión:* El panel del carrito crecería verticalmente de forma descontrolada, obligando al usuario a hacer scroll general hacia abajo solo para ver el botón de total. Al limitar la altura máxima a `400px` y definir `overflow-y: auto`, le ordenamos al navegador: "si la lista supera este tamaño, mantén el contenedor fijo y crea una barra de scroll interna".

---

## 6. Miniaturas del Carrito (`.cart-item img`)
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

### El cuestionamiento socrático:
* **¿Por qué es crítico usar `object-fit: contain` en lugar de dejar que la imagen tome un tamaño libre?**
  * *Reflexión:* Las imágenes de la API tienen diferentes proporciones (algunas son cuadradas, otras son verticales u horizontales). Si no aplicáramos `object-fit: contain`, las imágenes se estirarían y aplastarían para llenar los 50x50px, deformando el producto. `contain` le ordena a la imagen escalar de forma proporcional para caber dentro del contenedor sin recortarse ni deformarse.
* **¿Por qué les pusimos fondo blanco (`#fff`) y padding si la web es oscura?**
  * *Reflexión:* La mayoría de las imágenes de productos de la FakeStore API tienen fondos transparentes con bordes oscuros. Si las colocáramos directamente sobre nuestro panel gris oscuro, los bordes oscuros del producto serían invisibles. El cuadro blanco detrás actúa como un "lienzo" limpio para que cualquier producto destaque.
