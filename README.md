# Portfolio — Agostina Soracci

Sitio estático (HTML + CSS + JS, sin frameworks ni build). Listo para publicar en GitHub Pages.

## Estructura

```
portfolio/
├── index.html              → todo el contenido del sitio, organizado en secciones
├── assets/
│   ├── css/style.css       → sistema visual (colores, tipografía, layout)
│   ├── js/script.js        → menú mobile + resaltado del ítem de nav activo
│   ├── img/                → fotos y capturas del portfolio
│   └── docs/
│       └── CV_Agostina_Soracci.pdf   → el PDF que se descarga desde los botones "Descargar CV"
```

## Cómo actualizar el contenido

Todo el texto vive directamente en `index.html`, dividido en bloques claramente comentados
(`<!-- ============ EXPERIENCIA ============ -->`, etc.). No hace falta tocar el CSS para
editar textos.

### Agregar una experiencia laboral nueva
Dentro de `<ol class="rundown">`, copiá un bloque `<li class="rundown-item">...</li>` completo,
pegalo **primero** en la lista (arriba de todo, porque va de lo más reciente a lo más antiguo) y
reemplazá fecha, lugar, logo/imagen, puesto, empresa y viñetas.

### Agregar un proyecto nuevo
Dentro de `<div class="project-grid">`, copiá un bloque `<article class="project-card">...</article>`
y completalo. La clase `project-tag--award` es para reconocimientos/premios y
`project-tag--personal` para proyectos propios — usá la que corresponda para no mezclar tipos de
contenido.

### Cambiar una imagen
Reemplazá el archivo dentro de `assets/img/` manteniendo el mismo nombre, o subí uno nuevo y
actualizá el atributo `src` correspondiente en `index.html`.

### Actualizar el CV descargable
Reemplazá `assets/docs/CV_Agostina_Soracci.pdf` por la versión nueva, manteniendo el mismo nombre
de archivo (así no hay que tocar los links).

## Publicar en GitHub Pages

1. Subí esta carpeta completa (`portfolio/`) como la raíz de un repositorio en GitHub.
2. En el repo: **Settings → Pages → Branch**, elegí la rama principal (`main`) y la carpeta `/root`.
3. GitHub va a publicar el sitio en `https://tu-usuario.github.io/nombre-del-repo/` en un par de
   minutos.

No hay ningún paso de build: es HTML/CSS/JS plano, así que también funciona abriendo
`index.html` directamente en el navegador.
