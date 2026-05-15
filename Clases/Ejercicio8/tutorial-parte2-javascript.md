# 🛠️ Tutorial Paso a Paso — Parte 2: JavaScript y Random.html

> Continuación de la Parte 1. Acá agregamos toda la funcionalidad con JavaScript.

---

## PASO 15: Abrir el `<script>` y crear la base de datos

Al final de `Index.html`, justo antes de `</body>`, agregá:

```html
<script>
```

Ahora empezamos a escribir JavaScript. Todo lo que va entre `<script>` y `</script>` es código JavaScript que el navegador ejecuta.

### La base de datos de canciones

```javascript
const SONGS = {
  rock: [
    { title: "El hijo de Hernández", artist: "Cuarteto de Nos", src: "songs/ElhijodeHernandez.mp3" }
  ],
  jpop: [
    { title: "IDOL", artist: "YOASOBI", src: "songs/IDOL.mp3" }
  ],
  electronic: [
    { title: "Closer", artist: "The Chainsmokers ft. Halsey", src: "songs/The Chainsmokers - Closer.mp3" }
  ],
  pop: [
    { title: "Bubble pop electric", artist: "Gwen Stefani", src: "songs/Bubble Pop Electric.mp3" }
  ]
};
```

**¿Qué es esto?** Un **objeto** que funciona como base de datos.

Pensalo como un armario con cajones:
```
SONGS (armario)
├── rock (cajón) → contiene una lista de canciones
│   └── [0] → { title: "...", artist: "...", src: "..." }
├── jpop (cajón) → contiene otra lista
│   └── [0] → { title: "...", artist: "...", src: "..." }
├── electronic (cajón)
│   └── [0] → { ... }
└── pop (cajón)
    └── [0] → { ... }
```

- `SONGS.rock` → te da el array de canciones de rock
- `SONGS.rock[0]` → te da la primera canción de rock
- `SONGS.rock[0].title` → te da `"El hijo de Hernández"`

**`const`** → no podés reasignar `SONGS` a otra cosa. Pero sí podés agregar canciones adentro.

---

## PASO 16: Colores y etiquetas por categoría

```javascript
const ACCENT = {
  rock: '#e8734a',
  jpop: '#c084d0',
  electronic: '#75ea4e',
  pop: '#1db954',
  random: '#1db954'
};

const LABEL = {
  rock: 'Rock',
  jpop: 'J-Pop',
  electronic: 'Electronic',
  pop: 'Pop',
  random: '✦ Random'
};
```

- `ACCENT` → qué color usar para cada categoría
- `LABEL` → qué texto mostrar para cada categoría

Cuando elegís "jpop", el código hace `ACCENT['jpop']` y obtiene `'#c084d0'` (lila).

**¿Por qué usar objetos y no if/else?** Es más limpio. En vez de:
```javascript
// ❌ Feo y largo:
if (cat === 'rock') color = '#e8734a';
else if (cat === 'jpop') color = '#c084d0';
// ... etc

// ✅ Limpio y corto:
color = ACCENT[cat];
```

---

## PASO 17: Variables de estado

```javascript
let currentCat  = null;    // ¿Qué categoría está seleccionada? (null = ninguna)
let currentSong = null;    // ¿Qué canción está cargada? (null = ninguna)
let isPlaying   = false;   // ¿Está sonando música? (false = no)
```

Estas variables **cambian** durante el uso de la app, por eso usan `let` (no `const`).

**`null`** = "no hay nada todavía". Al abrir la página no hay categoría ni canción seleccionada.
**`false`** = "no". No está sonando música al inicio.

---

## PASO 18: Guardar referencias a los elementos HTML

```javascript
const dropdown   = document.getElementById('catDropdown');
const catBtn     = document.getElementById('catBtn');
const idleMsg    = document.getElementById('idleMsg');
const playerCard = document.getElementById('player-card');
const catDisplay = document.getElementById('cat-display');
const songName   = document.getElementById('song-name');
const songArtist = document.getElementById('song-artist');
const playBtn    = document.getElementById('play-btn');
const playLabel  = document.getElementById('play-label');
const audio      = document.getElementById('audio-player');
const vinyl      = document.getElementById('vinyl');
const waveform   = document.getElementById('waveform');
```

**¿Qué hace `document.getElementById('catBtn')`?**

Le dice al navegador: "buscame en toda la página el elemento que tenga `id="catBtn"`" y te lo devuelve. Ahora la variable `catBtn` **ES** ese botón. Podés hacer cosas con él:
- `catBtn.textContent` → leer su texto
- `catBtn.classList.add('active')` → agregarle una clase CSS
- `catBtn.addEventListener(...)` → escuchar cuando le hacen click

**¿Por qué guardarlos en variables?** Para no escribir `document.getElementById('catBtn')` cada vez que lo necesitás. Es más corto y más rápido.

---

## PASO 19: Abrir y cerrar el dropdown

```javascript
catBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  dropdown.classList.toggle('open');
});

document.addEventListener('click', () => dropdown.classList.remove('open'));
```

**Línea por línea:**

1. `catBtn.addEventListener('click', ...)` → "cuando alguien haga click en el botón Category, ejecutá esto"

2. `(e) =>` → función flecha. `e` es el **evento** — un objeto que el navegador te da con información del click (dónde fue, en qué elemento, etc.)

3. `e.stopPropagation()` → **DETIENE** la propagación del evento. Sin esto pasa lo siguiente:
   - Click en catBtn → `toggle('open')` agrega "open" ✅
   - El click **sube** al `document` → `remove('open')` la quita ❌
   - Resultado: el menú nunca se abre

   Con `stopPropagation()`, el click se queda en el botón y no llega al `document`.

4. `dropdown.classList.toggle('open')` → si tiene la clase "open" la quita; si no la tiene, la agrega. Es como un interruptor.

5. `document.addEventListener('click', ...)` → "cuando alguien haga click en CUALQUIER parte de la página, cerrá el dropdown". Esto hace que si hacés click afuera del menú, se cierre.

---

## PASO 20: Detectar qué categoría se eligió

```javascript
document.querySelectorAll('.drop-item').forEach(item => {
  item.addEventListener('click', () => {
    selectCategory(item.dataset.cat);
    dropdown.classList.remove('open');
  });
});
```

**Desglose:**

1. `document.querySelectorAll('.drop-item')` → busca TODOS los elementos con clase `drop-item`. Devuelve una **lista** con los 4 botones del menú.

2. `.forEach(item => { ... })` → "para cada uno de esos botones, hacé esto". Es un **bucle**. Se ejecuta 4 veces, una por cada botón. `item` es el botón actual.

3. `item.addEventListener('click', () => { ... })` → le agrega un listener de click a CADA botón.

4. `item.dataset.cat` → lee el atributo `data-cat` del botón. Si el HTML dice `data-cat="rock"`, entonces `item.dataset.cat` es `"rock"`.

   La regla es: `data-LOQUEQUIERAS` en HTML → `element.dataset.LOQUEQUIERAS` en JS.

5. `selectCategory(item.dataset.cat)` → llama a la función pasándole la categoría.

6. `dropdown.classList.remove('open')` → cierra el menú.

---

## PASO 21: La función selectCategory

```javascript
function selectCategory(cat) {
  currentCat = cat;
  stopAudio();
  pickRandomSong(cat);
  applyAccent(ACCENT[cat]);
  catDisplay.textContent = LABEL[cat] || cat;
  idleMsg.classList.add('hidden');
  playerCard.classList.add('visible');
}
```

**`function selectCategory(cat) { }`** → define una función llamada `selectCategory` que recibe un **parámetro** llamado `cat`. Cuando la llamás con `selectCategory('rock')`, dentro de la función `cat` vale `'rock'`.

**Línea por línea:**

| Línea | Qué hace |
|-------|----------|
| `currentCat = cat` | Guarda la categoría actual |
| `stopAudio()` | Para la música que estuviera sonando |
| `pickRandomSong(cat)` | Elige una canción de esa categoría |
| `applyAccent(ACCENT[cat])` | Cambia los colores. `ACCENT['rock']` = `'#e8734a'` |
| `catDisplay.textContent = LABEL[cat] \|\| cat` | Muestra "Playing: Rock". El `\|\|` es "o": si `LABEL[cat]` no existe, usa `cat` |
| `idleMsg.classList.add('hidden')` | Oculta "Elige una categoría" |
| `playerCard.classList.add('visible')` | Muestra la tarjeta del reproductor |

---

## PASO 22: Elegir una canción aleatoria

```javascript
function pickRandomSong(cat) {
  const pool = SONGS[cat] || getAllSongs();
  currentSong = pool[Math.floor(Math.random() * pool.length)];
  songName.textContent   = currentSong.title;
  songArtist.textContent = currentSong.artist;
  audio.src = currentSong.src;
  playLabel.textContent = '▶ REPRODUCIR';
}

function getAllSongs() {
  return Object.values(SONGS).flat();
}
```

**`const pool = SONGS[cat] || getAllSongs()`**
- `SONGS['rock']` → el array de canciones de rock
- Si `cat` es `'random'`, `SONGS['random']` no existe → es `undefined`
- `undefined || getAllSongs()` → como el primer valor es falso, usa el segundo
- `getAllSongs()` devuelve TODAS las canciones de todas las categorías

**`Math.floor(Math.random() * pool.length)`** → número aleatorio:

Ejemplo con 4 canciones:
```
Math.random()          → 0.73    (número al azar entre 0 y 0.999...)
0.73 * 4               → 2.92   (multiplicado por cantidad de canciones)
Math.floor(2.92)       → 2      (redondeado para abajo)
pool[2]                → la tercera canción (los índices empiezan en 0)
```

**`Object.values(SONGS).flat()`**:
- `Object.values(SONGS)` → `[[cancionesRock], [cancionesJpop], [cancionesElectronic], [cancionesPop]]` (array de arrays)
- `.flat()` → aplana: `[cancion1, cancion2, cancion3, cancion4]` (un solo array)

**`audio.src = currentSong.src`** → le dice al elemento `<audio>` qué archivo cargar.

---

## PASO 23: Cambiar los colores del tema

```javascript
function applyAccent(color) {
  document.documentElement.style.setProperty('--accent', color);
}
```

- `document.documentElement` → el elemento `<html>`
- `.style.setProperty('--accent', color)` → cambia la variable CSS `--accent`

En CSS, todos estos usan `var(--accent)`:
- El título "Music Generator" → cambia de color
- El centro del vinilo → cambia de color
- Las barras del waveform → cambian de color
- El botón Play → cambia de color
- Los blobs → cambian de color

**Un solo cambio en JavaScript → todo se actualiza.**

---

## PASO 24: Play, Pause y Stop

```javascript
playBtn.addEventListener('click', () => {
  if (!currentSong) return;
  if (isPlaying) {
    pauseAudio();
  } else {
    playAudio();
  }
});
```

- `if (!currentSong) return;` → si no hay canción cargada, no hacer nada. `!` = "no". `!null` = `true`. `return` = salir de la función.
- `if (isPlaying)` → si está sonando, pausar. Si no, reproducir.

```javascript
function playAudio() {
  audio.play().catch(() => {});
  isPlaying = true;
  playLabel.textContent = '⏸ PAUSAR';
  vinyl.classList.add('spinning');
  waveform.classList.add('active');
}
```

- `audio.play()` → le dice al navegador que reproduzca el MP3
- `.catch(() => {})` → si falla (ej: el navegador bloquea autoplay), ignora el error
- Cambia el texto del botón a "PAUSAR"
- Agrega clase `spinning` al vinilo → CSS lo hace girar
- Agrega clase `active` al waveform → CSS muestra las barras

```javascript
function pauseAudio() {
  audio.pause();
  isPlaying = false;
  playLabel.textContent = '▶ REPRODUCIR';
  vinyl.classList.remove('spinning');
  waveform.classList.remove('active');
}
```

Lo opuesto: pausa, quita las animaciones, cambia el botón.

```javascript
function stopAudio() {
  audio.pause();
  audio.currentTime = 0;
  isPlaying = false;
  playLabel.textContent = '▶ REPRODUCIR';
  vinyl.classList.remove('spinning');
  waveform.classList.remove('active');
}
```

Como `pauseAudio` pero además `audio.currentTime = 0` → rebobina al inicio.

---

## PASO 25: Auto-siguiente y URL params

```javascript
audio.addEventListener('ended', () => {
  stopAudio();
  pickRandomSong(currentCat);
});
```

`'ended'` es un evento del `<audio>` que se dispara cuando la canción **termina**. Cuando eso pasa: para todo y elige otra canción de la misma categoría.

```javascript
const params = new URLSearchParams(location.search);
if (params.get('cat')) selectCategory(params.get('cat'));
```

- `location.search` → lo que viene después del `?` en la URL
- Si la URL es `index.html?cat=rock`, `params.get('cat')` = `"rock"`
- Entonces automáticamente selecciona esa categoría
- Esto lo usa `Random.html` para redirigir con una categoría ya elegida

**Finalmente, cerrá el script:**
```html
</script>
```

---

## PASO 26: Crear Random.html

Creá un archivo `Random.html`:

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Random — Generador de Música</title>
  <link rel="stylesheet" href="styler.css">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet">
</head>
<body>
  <div class="blob blob-1"></div>

  <p class="label">Modo</p>
  <div class="big">RANDOM</div>

  <div class="dice-wrap">
    <span class="d">🎲</span>
    <span class="d">🎲</span>
    <span class="d">🎲</span>
  </div>

  <p class="sub">Sorteando canción aleatoria...</p>

  <script>
    const cats = ['rock', 'jpop', 'random', 'electronic', 'pop'];

    setTimeout(() => {
      const picked = cats[Math.floor(Math.random() * cats.length)];
      window.location.href = `index.html?cat=${picked}`;
    }, 1400);
  </script>
</body>
</html>
```

**`setTimeout(función, 1400)`** → espera 1400 milisegundos (1.4 segundos) y ejecuta la función. Durante ese tiempo el usuario ve la animación de los dados.

**`window.location.href = \`...\``** → cambia la URL del navegador. Es como escribir una URL en la barra y dar Enter. Redirige a `Index.html` con la categoría elegida al azar.

---

## PASO 27: Crear styler.css (estilos de Random.html)

```css
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

:root {
  --bg:     #121212;
  --text:   #ededec;
  --accent: #1db954;
}

html, body {
  height: 100%;
  background: var(--bg);
  color: var(--text);
  font-family: 'Space Mono', monospace;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 24px;
}

/* Mancha de fondo centrada */
.blob {
  position: fixed;
  border-radius: 50%;
  filter: blur(110px);
  opacity: 0.1;
  pointer-events: none;
}
.blob-1 {
  width: 600px; height: 600px;
  background: #1db954;
  top: 50%; left: 50%;
  transform: translate(-50%,-50%);  /* centra el blob perfectamente */
}

/* Texto chico "Modo" */
.label {
  font-size: 0.72rem;
  letter-spacing: 4px;
  text-transform: uppercase;
  color: #6a6a6a;
}

/* Texto enorme "RANDOM" */
.big {
  font-family: 'Bebas Neue', sans-serif;
  font-size: clamp(3rem, 10vw, 8rem);
  letter-spacing: 8px;
  color: var(--accent);
  animation: pulse 1.5s ease-in-out infinite;
}

/* Animación: palpita (opacidad sube y baja) */
@keyframes pulse {
  0%, 100% { opacity: 1; }
  50%      { opacity: 0.65; }
}

.sub {
  font-size: 0.75rem;
  letter-spacing: 3px;
  color: #6a6a6a;
}

/* Contenedor de los dados */
.dice-wrap {
  display: flex;
  gap: 12px;
  align-items: center;
}

/* Cada dado tiene una animación con delays diferentes */
.d { animation: rollD 0.6s steps(1) infinite; }
.d:nth-child(1) { animation-delay: 0s; }
.d:nth-child(2) { animation-delay: .2s; }
.d:nth-child(3) { animation-delay: .4s; }

@keyframes rollD {
  0%   { content: "⚀"; }
  16%  { content: "⚁"; }
  33%  { content: "⚂"; }
  50%  { content: "⚃"; }
  66%  { content: "⚄"; }
  83%  { content: "⚅"; }
}
```

---

## PASO 28: Crear la carpeta de canciones

Creá una carpeta `songs/` y poné adentro tus archivos MP3. Los nombres tienen que coincidir **exactamente** con lo que dice en `SONGS`:

```
songs/
├── ElhijodeHernandez.mp3
├── IDOL.mp3
├── The Chainsmokers - Closer.mp3
└── Bubble Pop Electric.mp3
```

---

## ✅ ¡Terminado!

Si seguiste todos los pasos, ahora tenés:
1. **Index.html** → con HTML completo + CSS + JavaScript
2. **Random.html** → página de sorteo con redirección
3. **style.css** → estilos del reproductor
4. **styler.css** → estilos de la página random
5. **songs/** → carpeta con los MP3

Abrí `Index.html` en el navegador y todo debería funcionar.

---

## 📋 Resumen de conceptos JavaScript usados

| Concepto | Ejemplo en el código | Explicación simple |
|----------|---------------------|-------------------|
| `const` | `const SONGS = {...}` | Variable que no cambia |
| `let` | `let isPlaying = false` | Variable que sí cambia |
| Objeto | `{ title: "IDOL", artist: "YOASOBI" }` | Grupo de datos con nombre |
| Array | `['rock', 'jpop', 'pop']` | Lista ordenada |
| Función | `function playAudio() { }` | Bloque de código reutilizable |
| Arrow function | `() => { ... }` | Función corta (misma cosa) |
| `getElementById` | `document.getElementById('vinyl')` | Buscar elemento por id |
| `querySelectorAll` | `document.querySelectorAll('.drop-item')` | Buscar TODOS los que tengan esa clase |
| `addEventListener` | `btn.addEventListener('click', ...)` | "Cuando pase X, hacé Y" |
| `classList` | `.classList.add('open')` | Agregar/quitar clases CSS |
| `textContent` | `songName.textContent = "IDOL"` | Cambiar el texto de un elemento |
| `dataset` | `item.dataset.cat` | Leer atributos `data-*` |
| Template literal | `` `index.html?cat=${picked}` `` | String con variables adentro |
| `Math.random()` | `Math.random()` | Número al azar entre 0 y 1 |
| `Math.floor()` | `Math.floor(2.7)` → `2` | Redondear para abajo |
| `setTimeout` | `setTimeout(fn, 1400)` | Ejecutar después de X ms |
| `setProperty` | `.style.setProperty('--accent', color)` | Cambiar variable CSS desde JS |
| `stopPropagation` | `e.stopPropagation()` | Evitar que el evento suba |
| `URLSearchParams` | `new URLSearchParams(location.search)` | Leer parámetros de la URL |
