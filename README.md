# TechCore

## Descripción del proyecto

TechCore es un sitio web responsive para una tienda de tecnología. Incluye
productos destacados, categorías, buscador, formulario de contacto, navegación
responsive y un conmutador de tema claro/oscuro.

Tecnologías utilizadas:

- HTML5 semántico.
- Bootstrap 5.3 para componentes y diseño responsive.
- Sass/SCSS con arquitectura modular mediante parciales.
- Vite para el servidor de desarrollo y la compilación.
- JavaScript ES Modules para la interactividad, la validación del formulario y
  la gestión del tema.

## Estructura del repositorio

```text
TechCore/
├── index.html
├── contacto.html
├── package.json
├── vite.config.js
├── README.md
└── src/
    ├── img/
    │   ├── AMD_Ryzen_7_7800X3D.webp
    │   ├── Kingston_Fury_Impact.webp
    │   ├── Logitech_G502_X.webp
    │   └── Samsung_Odyssey_G5_27_pulgadas.webp
    ├── js/
    │   └── main.js
    └── scss/
        ├── _components.scss
        ├── _mixins.scss
        ├── _variables.scss
        └── styles.scss
```

### Arquitectura SCSS

- `_variables.scss`: colores corporativos, tipografía y overrides de Bootstrap.
- `_mixins.scss`: breakpoints responsive, microinteracciones y estilos de foco.
- `_components.scss`: estilos de componentes, tarjetas BEM y formularios.
- `styles.scss`: punto de entrada que importa variables, Bootstrap, mixins y
  componentes en el orden correcto.

## Instalación y compilación

Requisitos: Node.js y npm.

Instala las dependencias del proyecto:

```bash
npm install
```

Inicia el servidor de desarrollo de Vite:

```bash
npm run dev
```

Genera la compilación de producción:

```bash
npm run build
```

Para previsualizar la compilación de producción:

```bash
npm run preview
```

## Validación W3C

El proyecto debe validarse con los servicios oficiales del W3C:

- [W3C Markup Validation Service](https://validator.w3.org/) para `index.html`
  y `contacto.html`.
- [W3C CSS Validation Service](https://jigsaw.w3.org/css-validator/) para el
  CSS generado por Sass y Vite.

Resultados documentados:

- HTML5: **0 errores y 0 advertencias críticas**.
- CSS compilado: **0 errores y 0 advertencias críticas**.

### Capturas de validación

Adjunta aquí las capturas de pantalla obtenidas en los validadores:

| Validador | Captura |
|---|---|
| W3C HTML5 (`index.html`) |  |
| W3C HTML5 (`contacto.html`) |  |
| W3C CSS |  |

## Autoría

- **Desarrollador:** David García Ramírez
- **Curso:** 2º DAW - Diseño de Interfaces Web
