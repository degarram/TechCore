# Auditoría de Licencias y Derechos de Autor - TechCore

Este documento recopila la trazabilidad legal, autoría, fuentes originales y tipos de licencia de todos los recursos multimedia integrados en el proyecto, garantizando el cumplimiento de los derechos de autor y las condiciones de atribución (Creative Commons / Dominio Público).

---

## 📸 1. Imágenes y Gráficos Estáticos

### Fotografía 1: [Nombre descriptivo del recurso]

* **Archivo final optimizado:** `src/media/img/ejemplo-1.webp`
* **Archivo original en bruto:** `media-bruto/img/ejemplo-1-raw.jpg`
* **Autor / Creador:** [Nombre del fotógrafo/a o usuario]
* **Fuente / Repositorio original:** [Enlace directo a la URL de Unsplash, Pexels, Pixabay o Wikimedia Commons](https://...)
* **Tipo exacto de licencia:** Creative Commons Cero 1.0 Universal (`CC0-1.0`) / Dominio Público
* **Modificaciones realizadas:** Recorte de encuadre (*crop*), reescalado a [X]px de ancho y compresión en formato WebP (< 150 KB).

---

### Fotografía 2: [Nombre descriptivo del recurso]

* **Archivo final optimizado:** `src/media/img/ejemplo-2.webp`
* **Archivo original en bruto:** `media-bruto/img/ejemplo-2-raw.jpg`
* **Autor / Creador:** [Nombre del fotógrafo/a o usuario]
* **Fuente / Repositorio original:** [Enlace directo a la URL del repositorio](https://...)
* **Tipo exacto de licencia:** Creative Commons Atribución 4.0 Internacional (`CC-BY-4.0`)
* **Modificaciones realizadas:** Reescalado de resolución para el contenedor de la maqueta y optimización a WebP (< 150 KB).

---

### Fotografía 3: [Nombre descriptivo del recurso]

* **Archivo final optimizado:** `src/media/img/ejemplo-3.webp`
* **Archivo original en bruto:** `media-bruto/img/ejemplo-3-raw.jpg`
* **Autor / Creador:** [Nombre del fotógrafo/a o usuario]
* **Fuente / Repositorio original:** [Enlace directo a la URL del repositorio](https://...)
* **Tipo exacto de licencia:** Creative Commons Atribución - Compartir Igual 4.0 Internacional (`CC-BY-SA-4.0`)
* **Modificaciones realizadas:** Ajuste de encuadre, reescalado de dimensiones y exportación a WebP (< 150 KB).

---

### Logotipo / Icono Vectorial

* **Archivo final optimizado:** `src/media/img/logo-techcore.svg`
* **Archivo original en bruto:** `media-bruto/img/logo-techcore-raw.svg`
* **Autor / Diseñador:** [Nombre del diseñador/a o plataforma]
* **Fuente / Repositorio original:** [Enlace directo a SVGRepo, Flaticon o creación propia](https://...)
* **Tipo exacto de licencia:** Licencia MIT / `CC0-1.0` / Dominio Público
* **Modificaciones realizadas:** Limpieza de metadatos XML redundantes y ajuste de la paleta de colores para coincidir con la guía de estilos (UI Kit).

---

## 🎬 2. Vídeo

### Clip de Fondo / Cabecera (10–15 segundos)

* **Archivo final optimizado:** `src/media/video/intro-banner.mp4`
* **Archivo original en bruto:** `media-bruto/video/intro-banner-4k.mov`
* **Autor / Creador:** [Nombre del videógrafo/a o productora]
* **Fuente / Repositorio original:** [Enlace directo a Pexels Video, Pixabay Video o Coverr](https://...)
* **Tipo exacto de licencia:** Creative Commons Cero (`CC0-1.0`) / Licencia Pexels (Uso libre sin copyright)
* **Modificaciones realizadas:** Recorte de duración a [X] segundos, reescalado de resolución a 1080p/720p y compresión con HandBrake (contenedor MP4, códec H.264, *Web Optimized* activado).

---

## 🎵 3. Audio

### Pista de Audio / Efecto Sonoro

* **Archivo final optimizado:** `src/media/audio/sound-effect.mp3` (u `.ogg`)
* **Archivo original en bruto:** `media-bruto/audio/sound-effect-raw.wav`
* **Autor / Creador:** [Nombre del diseñador de sonido o artista]
* **Fuente / Repositorio original:** [Enlace directo a Freesound, Pixabay Audio o Wikimedia](https://...)
* **Tipo exacto de licencia:** Creative Commons Atribución 4.0 Internacional (`CC-BY-4.0`)
* **Modificaciones realizadas:** Recorte de fragmento temporal en Audacity, normalización de ganancia, aplicación de *fade in/out* y exportación a MP3 con *bitrate* de 128 kbps (o menor).

---

## 📊 4. Tabla Resumen de Métricas (Justificación Técnica WPO)

| Recurso | Formato Bruto | Peso Bruto | Formato Final | Peso Optimizado | Reducción (%) | Licencia |
| :--- | :---: | :---: | :---: | :---: | :---: | :---: |
| Foto 1 | `.jpg` | [X] MB | `.webp` | [X] KB | -[%] | `CC0-1.0` |
| Foto 2 | `.jpg` | [X] MB | `.webp` | [X] KB | -[%] | `CC-BY-4.0` |
| Foto 3 | `.png` | [X] MB | `.webp` | [X] KB | -[%] | `CC-BY-SA-4.0` |
| Icono | `.svg` | [X] KB | `.svg` | [X] KB | -[%] | `MIT` / `CC0` |
| Vídeo | `.mov` / `.mp4` | [X] MB | `.mp4` | [X] MB | -[%] | `CC0-1.0` |
| Audio | `.wav` | [X] MB | `.mp3` | [X] KB | -[%] | `CC-BY-4.0` |