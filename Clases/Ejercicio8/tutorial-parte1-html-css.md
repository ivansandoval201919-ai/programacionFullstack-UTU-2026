# 🛠️ Tutorial Paso a Paso — Parte 1: HTML y CSS

> Seguí estos pasos en orden y vas a tener la página visual completa (sin funcionalidad todavía).

---

## PASO 1: Crear el archivo Index.html vacío

Creá un archivo `Index.html` y escribí la estructura base:

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Generador de Música</title>
  <link rel="stylesheet" href="style.css">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet">
</head>
<body>

</body>
</html>
```

**¿Qué hace cada línea?**
- `<!DOCTYPE html>` → le dice al navegador que es HTML5
- `lang="es"` → el idioma es español
- `charset="UTF-8"` → acepta acentos, ñ, emojis
- `viewport` → hace que se vea bien en celulares
- `<link rel="stylesheet">` → conecta el archivo CSS
- `<link rel="preconnect">` → le avisa al navegador que va a necesitar conectarse a Google Fonts (más rápido)
- El último `<link>` → descarga las fuentes **Bebas Neue** y **Space Mono**

---

## PASO 2: Agregar los blobs decorativos

Dentro de `<body>`, agregá:

```html
<!-- Blobs: manchas de color borrosas de fondo -->
<div class="blob blob-1"></div>
<div class="blob blob-2"></div>
```

Son divs vacíos. CSS los convierte en círculos enormes y borrosos. Son decoración pura.

---

## PASO 3: Crear la Navbar

Debajo de los blobs:

```html
<nav>
  <div class="nav-title">Music Generator</div>
  <div class="nav-right">

    <!-- Menú desplegable de categorías -->
    <div class="dropdown" id="catDropdown">
      <button class="nav-btn" id="catBtn">
        Category<span class="arrow">▾</span>
      </button>
      <div class="dropdown-menu">
        <button class="drop-item" data-cat="rock"> Rock</button>
        <button class="drop-item" data-cat="jpop"> J-Pop</button>
        <button class="drop-item" data-cat="electronic"> Electronic</button>
        <button class="drop-item" data-cat="pop"> Pop</button>
      </div>
    </div>

    <!-- Botón Random -->
    <a class="nav-random" href="random.html">✦ Random</a>

  </div>
</nav>
```

**Estructura:**
- `<nav>` tiene dos hijos: el título (izquierda) y `.nav-right` (derecha)
- `.nav-right` contiene el dropdown y el link a Random
- El dropdown tiene un botón que lo abre y un menú oculto con las opciones
- Cada opción tiene `data-cat="nombre"` → JavaScript lo lee después para saber qué categoría elegiste
- `<span class="arrow">▾</span>` → la flechita que rota cuando se abre el menú

---

## PASO 4: Crear el área principal (hero)

Debajo de `</nav>`:

```html
<main class="hero">

  <!-- Mensaje inicial (se oculta al elegir categoría) -->
  <p class="idle-msg" id="idleMsg">Elige una categoría</p>

  <!-- Tarjeta del reproductor (empieza oculta) -->
  <div id="player-card">
    <p class="category-label">Playing: <span id="cat-display">—</span></p>

    <div class="vinyl" id="vinyl"></div>

    <div>
      <p class="song-name" id="song-name">—</p>
      <p class="song-artist" id="song-artist">—</p>
    </div>

    <div class="waveform" id="waveform">
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
    </div>

    <button id="play-btn"><span id="play-label">▶ REPRODUCIR</span></button>
  </div>

  <audio id="audio-player"></audio>

</main>
```

**¿Qué es cada cosa?**
- `<main>` → etiqueta semántica que dice "este es el contenido principal"
- `.idle-msg` → texto grande "Elige una categoría" que desaparece al seleccionar
- `#player-card` → la tarjeta con el vinilo, nombre de canción, barras y botón. **Empieza oculta** con CSS
- `.vinyl` → div vacío que CSS convierte en un disco de vinilo
- `.waveform` → 5 divs `.bar` vacíos que CSS anima como ecualizador
- `<audio>` → elemento HTML5 para reproducir sonido. Está invisible, JavaScript lo controla

---

## PASO 5: Crear style.css — Reset y Variables

Creá el archivo `style.css` y empezá con:

```css
/* RESET: elimina márgenes y paddings por defecto del navegador */
*, *::before, *::after {
  box-sizing: border-box;  /* width incluye padding y border */
  margin: 0;
  padding: 0;
}

/* VARIABLES: colores y medidas reutilizables */
:root {
  --bg:            #121212;   /* fondo principal, casi negro */
  --surface:       #1e1e1e;   /* fondo de tarjetas y navbar */
  --surface-alt:   #282828;   /* fondo de hover */
  --border:        #333333;   /* bordes sutiles */
  --accent:        #1db954;   /* color principal (cambia con JS) */
  --accent-rock:   #e8734a;   /* naranja para Rock */
  --accent-jpop:   #c084d0;   /* lila para J-Pop */
  --accent-electronic: #75ea4e; /* verde lima para Electronic */
  --accent-pop:    #5fe2ae;   /* verde agua para Pop */
  --text:          #ededec;   /* texto principal (blanco hueso) */
  --text-sub:      #a7a7a7;   /* texto secundario (gris) */
  --muted:         #6a6a6a;   /* texto muy apagado */
  --nav-h:         64px;      /* altura de la navbar */
}

/* ESTILOS BASE del body */
html, body {
  height: 100%;
  background: var(--bg);        /* usa la variable --bg */
  color: var(--text);
  font-family: 'Space Mono', monospace;  /* fuente por defecto */
  overflow-x: hidden;           /* oculta scroll horizontal */
}
```

**¿Qué es `var(--bg)`?** → Lee el valor de la variable `--bg` (que es `#121212`). Si después cambiás `--bg`, todos los lugares que usan `var(--bg)` se actualizan automáticamente.

---

## PASO 6: CSS de la Navbar

```css
nav {
  position: fixed;       /* queda pegada arriba aunque hagas scroll */
  top: 0;                /* pegada al borde de arriba */
  left: 0;               /* desde la izquierda */
  right: 0;              /* hasta la derecha */
  height: var(--nav-h);  /* 64px */
  background: var(--surface);
  border-bottom: 1px solid var(--border);  /* línea sutil abajo */
  display: flex;                  /* activa flexbox */
  align-items: center;            /* centra verticalmente */
  justify-content: space-between; /* título a la izq, controles a la der */
  padding: 0 40px;                /* espacio a los lados */
  z-index: 100;                   /* por encima de todo lo demás */
}

.nav-title {
  font-family: 'Bebas Neue', sans-serif;  /* fuente de título */
  font-size: 1.9rem;        /* tamaño grande */
  letter-spacing: 4px;      /* espacio entre letras */
  color: var(--accent);     /* color verde (cambia con el tema) */
}

.nav-right {
  display: flex;          /* los hijos se ponen en fila */
  align-items: center;    /* centrados verticalmente */
  gap: 8px;               /* 8px de espacio entre cada hijo */
}
```

---

## PASO 7: CSS del Dropdown

```css
.dropdown { position: relative; }
/* relative permite que los hijos con position:absolute
   se posicionen RESPECTO a este contenedor */

.nav-btn {
  background: transparent;    /* fondo transparente */
  border: 1px solid var(--border);
  color: var(--text-sub);
  font-family: 'Space Mono', monospace;
  font-size: 0.78rem;
  letter-spacing: 2px;
  text-transform: uppercase;  /* convierte a MAYÚSCULAS */
  padding: 8px 18px;
  cursor: pointer;             /* manito al pasar el mouse */
  border-radius: 20px;         /* bordes redondeados (píldora) */
  transition: border-color .2s, color .2s, background .2s;
  /* transition = los cambios son suaves en 0.2 segundos */
}

/* Cuando pasás el mouse por encima O cuando tiene la clase .active */
.nav-btn:hover, .nav-btn.active {
  border-color: var(--text);
  color: var(--text);
  background: var(--surface-alt);
}

/* La flechita ▾ */
.nav-btn .arrow {
  display: inline-block;
  margin-left: 6px;
  transition: transform .25s;  /* la rotación es suave */
  font-size: 0.65rem;
}

/* Cuando el dropdown tiene la clase "open", la flecha rota 180° */
.dropdown.open .arrow { transform: rotate(180deg); }

/* El menú desplegable */
.dropdown-menu {
  position: absolute;           /* se posiciona respecto al .dropdown */
  top: calc(100% + 8px);        /* justo debajo del botón + 8px */
  right: 0;                     /* alineado a la derecha */
  background: #282828;
  border-radius: 8px;
  min-width: 170px;
  display: none;                /* OCULTO por defecto */
  flex-direction: column;       /* los items van en columna */
  overflow: hidden;             /* recorta lo que sobresale */
  box-shadow: 0 16px 48px rgba(0,0,0,0.5);  /* sombra fuerte */
}

/* Cuando .dropdown tiene la clase "open" → muestra el menú */
.dropdown.open .dropdown-menu { display: flex; }

/* Cada opción del menú */
.drop-item {
  background: none;
  border: none;
  color: var(--text-sub);
  font-family: 'Space Mono', monospace;
  font-size: 0.78rem;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 14px 20px;
  cursor: pointer;
  text-align: left;
  border-left: 3px solid transparent;  /* borde izquierdo invisible */
  transition: color .15s, border-color .15s, background .15s;
}

/* Hover general */
.drop-item:hover {
  color: var(--text);
  background: rgba(255,255,255,0.06);  /* fondo blanco casi invisible */
}

/* Hover específico por categoría: el borde izquierdo toma su color */
.drop-item[data-cat="rock"]:hover {
  border-left-color: var(--accent-rock);
  color: var(--accent-rock);
}
.drop-item[data-cat="jpop"]:hover {
  border-left-color: var(--accent-jpop);
  color: var(--accent-jpop);
}
.drop-item[data-cat="electronic"]:hover {
  border-left-color: var(--accent-electronic);
  color: var(--accent-electronic);
}
.drop-item[data-cat="pop"]:hover {
  border-left-color: var(--accent-pop);
  color: var(--accent-pop);
}
```

**`[data-cat="rock"]`** → es un **selector de atributo**. Selecciona elementos que tengan exactamente ese atributo con ese valor.

---

## PASO 8: CSS del botón Random

```css
.nav-random {
  background: var(--accent);
  border: none;
  color: #000;                    /* texto negro */
  font-family: 'Space Mono', monospace;
  font-size: 0.78rem;
  font-weight: 700;              /* negrita */
  letter-spacing: 2px;
  text-transform: uppercase;
  padding: 9px 20px;
  cursor: pointer;
  border-radius: 20px;
  text-decoration: none;         /* quita el subrayado del <a> */
  transition: background .2s, transform .15s;
}

.nav-random:hover {
  background: #1ed760;           /* verde un poco más claro */
  transform: scale(1.04);        /* crece 4% */
}
```

---

## PASO 9: CSS del Hero y Blobs

```css
.hero {
  min-height: 100vh;         /* mínimo 100% de la altura de la pantalla */
  display: flex;
  flex-direction: column;    /* los hijos van en columna (de arriba a abajo) */
  align-items: center;       /* centrado horizontal */
  justify-content: center;   /* centrado vertical */
  padding-top: var(--nav-h); /* deja espacio para la navbar fija */
}

.blob {
  position: fixed;           /* fijo en la pantalla */
  border-radius: 50%;        /* círculo */
  filter: blur(100px);       /* MUY borroso */
  opacity: 0.07;             /* casi invisible (7%) */
  pointer-events: none;      /* los clicks lo atraviesan */
}
.blob-1 {
  width: 560px; height: 560px;
  background: var(--accent);
  top: -120px; left: -140px;    /* arriba a la izquierda, parcialmente fuera */
}
.blob-2 {
  width: 440px; height: 440px;
  background: var(--accent-rock);
  bottom: -100px; right: -100px; /* abajo a la derecha */
}

/* Mensaje "Elige una categoría" */
.idle-msg {
  font-family: 'Bebas Neue', sans-serif;
  font-size: clamp(2rem, 5vw, 4rem);
  /* clamp(MIN, PREFERIDO, MAX): el tamaño se adapta a la pantalla
     - mínimo 2rem
     - ideal 5% del ancho de pantalla
     - máximo 4rem */
  letter-spacing: 5px;
  color: var(--muted);
  text-align: center;
  opacity: 0.5;
  user-select: none;       /* no se puede seleccionar con el mouse */
  transition: opacity .4s;
}

/* Cuando JS agrega la clase "hidden" */
.idle-msg.hidden {
  opacity: 0;
  pointer-events: none;
}
```

---

## PASO 10: CSS del Player Card

```css
#player-card {
  display: none;             /* OCULTO al inicio */
  flex-direction: column;
  align-items: center;
  gap: 24px;                 /* espacio entre cada hijo */
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 40px 48px;
  animation: fadeUp .45s ease both;  /* aparece desde abajo */
}

/* Cuando JS agrega "visible", se muestra */
#player-card.visible { display: flex; }

/* Animación de aparición */
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(24px); }
  /* empieza invisible y 24px más abajo */
  to   { opacity: 1; transform: translateY(0); }
  /* termina visible y en su posición normal */
}

.category-label {
  font-size: 0.7rem;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: var(--muted);
}
.category-label span {
  color: var(--accent);   /* "Rock" en color de acento */
  font-weight: 700;
}
```

---

## PASO 11: CSS del Vinilo

```css
.vinyl {
  width: 180px;
  height: 180px;
  border-radius: 50%;           /* círculo perfecto */
  background: conic-gradient(   /* degradado CIRCULAR (como reloj) */
    #1e1e1e 0deg, #2a2a2a 40deg, #1e1e1e 80deg,
    #2a2a2a 120deg, #1e1e1e 160deg, #2a2a2a 200deg,
    #1e1e1e 240deg, #2a2a2a 280deg, #1e1e1e 320deg, #2a2a2a 360deg
  );
  /* Alterna gris oscuro y gris claro para simular surcos del disco */
  box-shadow:
    0 0 0 7px #161616,          /* anillo oscuro */
    0 0 0 11px #222,            /* anillo gris */
    0 20px 50px rgba(0,0,0,.6); /* sombra abajo */
  position: relative;           /* necesario para el ::after */
}

/* Pseudo-elemento: crea el PUNTO CENTRAL del vinilo */
.vinyl::after {
  content: '';              /* obligatorio para que aparezca */
  position: absolute;       /* se posiciona respecto al .vinyl */
  top: 50%; left: 50%;      /* centro */
  transform: translate(-50%,-50%);  /* ajusta al centro exacto */
  width: 42px; height: 42px;
  border-radius: 50%;
  background: var(--accent);       /* color de acento */
  box-shadow: 0 0 16px rgba(29,185,84,0.4);  /* brillo suave */
  transition: background .4s, box-shadow .4s;
}

/* Cuando JS agrega "spinning", el vinilo gira */
.vinyl.spinning { animation: spin 3s linear infinite; }

@keyframes spin {
  to { transform: rotate(360deg); }  /* gira 360° */
}
```

---

## PASO 12: CSS del nombre de canción y artista

```css
.song-name {
  font-family: 'Bebas Neue', sans-serif;
  font-size: clamp(1.6rem, 4vw, 2.6rem);  /* responsive */
  letter-spacing: 3px;
  text-align: center;
  color: var(--text);
}

.song-artist {
  font-size: 0.75rem;
  letter-spacing: 2px;
  color: var(--text-sub);
  text-transform: uppercase;
  margin-top: -16px;      /* lo sube para estar más cerca del título */
}
```

---

## PASO 13: CSS del botón Play

```css
#play-btn {
  background: var(--accent);
  border: none;
  color: #000;
  font-family: 'Bebas Neue', sans-serif;
  font-size: 1.1rem;
  font-weight: 700;
  letter-spacing: 4px;
  padding: 14px 48px;
  cursor: pointer;
  border-radius: 50px;          /* forma de píldora */
  transition: background .2s, transform .15s;
}

#play-btn:hover {
  background: #1ed760;
  transform: scale(1.05);       /* crece 5% */
}

#play-btn:active {
  transform: scale(0.98);       /* se achica al hacer click */
}
```

---

## PASO 14: CSS del Waveform (barras de ecualizador)

```css
.waveform {
  display: flex;
  align-items: center;
  gap: 4px;
  height: 36px;
  opacity: 0;                  /* invisible al inicio */
  transition: opacity .4s;
}

/* Cuando JS agrega "active", se hace visible */
.waveform.active { opacity: 1; }

.waveform .bar {
  width: 4px;
  border-radius: 2px;
  background: var(--accent);
  animation: wave 1s ease-in-out infinite;
}

/* Cada barra tiene un delay diferente → efecto de onda */
.waveform .bar:nth-child(2) { animation-delay: .1s; }
.waveform .bar:nth-child(3) { animation-delay: .2s; }
.waveform .bar:nth-child(4) { animation-delay: .3s; }
.waveform .bar:nth-child(5) { animation-delay: .15s; }

@keyframes wave {
  0%,100% { height: 6px; }    /* chiquita */
  50%     { height: 28px; }    /* grande */
}

/* El <audio> no se ve */
audio { display: none; }
```

---

## ✅ En este punto tenés toda la parte visual completa

Si abrís `Index.html` en el navegador vas a ver:
- Fondo oscuro con manchas de color sutiles
- Navbar con "Music Generator", botón Category (no funciona todavía) y botón Random
- Texto "Elige una categoría" centrado

**Para que todo funcione (abrir menú, elegir categoría, reproducir música) necesitás JavaScript → ve a la Parte 2.**
