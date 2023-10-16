# Tabla de Contenidos

- [Fuentes en CSS](#fuentes-en-css)
  - [Formatos de fuentes](#formatos-de-fuentes)
  - [La regla @font-face en CSS](#la-regla-font-face-en-css)
  - [Repositorios de fuentes](#repositorios-de-fuentes)
    - [Cómo se usa Google Fonts](#cómo-se-usa-google-fonts)
  - [Herramientas](#herramientas)
    - [Fuentes web online](#fuentes-web-online)
    - [Convertidores de fuentes online](#convertidores-de-fuentes-online)
    - [Repositorios de iconos en código markdown](#repositorios-de-iconos-en-código-markdown)
      - [Ejemplo](#ejemplo)

# Fuentes en CSS
## Formatos de fuentes
No existe un único formato de fuente, son varios los más populares.
| Formato | Descripción                                   |
| ------- | --------------------------------------------- |
| EOT     | Embedded OpenType, Explorer                   |
| TTF     | TrueType Font, IOS                            |
| WOFF    | Web Open Font Format, Chrome                  |
| WOFF2   | Mejora de WOFF                                |
| SVG     | Scalar Vector Graphics                        |

## La regla @font-face en CSS
La regla @font-face en CSS es una poderosa herramienta que permite a los desarrolladores web utilizar fuentes personalizadas en sus sitios. En lugar de depender de las fuentes preinstaladas en los sistemas de los usuarios, puedes incorporar tus propias fuentes, lo que brinda mayor flexibilidad en el diseño de tu sitio web. La regla @font-face se utiliza para definir una fuente personalizada y cargarla desde el servidor web.

A continuación, un ejemplo de cómo utilizar @font-face:

```css
@font-face {
    font-family: 'MiFuentePersonalizada';
    src: url('ruta/a/mifuentepersonalizada.woff2') format('woff2'),
         url('ruta/a/mifuentepersonalizada.woff') format('woff');
    font-weight: 400; /* Peso de la fuente */
    font-style: normal; /* Estilo de la fuente */
}
```

Luego, puedes aplicar esta fuente personalizada a elementos HTML, como párrafos o encabezados, usando font-family:

```css
body {
    font-family: 'MiFuentePersonalizada', Arial, sans-serif;
}
```

## Repositorios de fuentes
Los repositorios de fuentes son recursos donde puedes encontrar fuentes personalizadas para tu sitio web. Algunos de los más populares incluyen Google Fonts, Adobe Fonts y Font Squirrel. A continuación, nos centraremos en cómo usar Google Fonts:

### Cómo se usa Google Fonts
Google Fonts es una biblioteca gratuita y ampliamente utilizada que ofrece una gran variedad de fuentes web para tu sitio. Para usar Google Fonts, sigue estos pasos:

1. Visita Google Fonts.
2. Navega y selecciona las fuentes que desees utilizar.
3. En el panel de la derecha, verás una opción para personalizar la selección y obtener el código necesario para incrustar las fuentes en tu sitio.
4. Copia y pega el código en tu hoja de estilo CSS.
5. Aplica las fuentes a tus elementos HTML mediante font-family.

## Herramientas
Además de los repositorios de fuentes, existen herramientas útiles para trabajar con tipografía en la web. Aquí te presentamos algunas de ellas:

### Fuentes web online
Estas herramientas te permiten explorar, combinar y previsualizar fuentes antes de integrarlas en tu sitio. Algunos ejemplos son Fontjoy y Adobe Typekit.

### Convertidores de fuentes online
Puedes utilizar convertidores de fuentes en línea para transformar fuentes en diferentes formatos, como WOFF, WOFF2, TTF, y EOT. Esto es útil cuando necesitas utilizar fuentes en varios navegadores. Algunas herramientas populares incluyen Font Squirrel y Transfonter.

### Repositorios de iconos en código markdown
Los repositorios de iconos en formato markdown son útiles para insertar iconos en tu sitio web directamente desde un CDN. Puedes utilizar repositorios como FontAwesome para acceder a una amplia variedad de iconos y agregarlos a tus páginas web con facilidad.

#### Ejemplo
```html
<html>
  <head>
    <script src="https://kit.fontawesome.com/509deda241.js" crossorigin="anonymous"></script>
  </head>
  <body>
    <span style="font-size: 3em; color: Tomato;">
      <i class="fas fa-camera"></i>
    </span>
    <span style="font-size: 48px; color: Dodgerblue;">
      <i class="fas fa-camera"></i>
    </span>
    <span style="font-size: 3rem;">
      <span style="color: Mediumslateblue;">
        <i class="fas fa-camera"></i>
      </span>
    </span>
  </body>
</html>
```
##### Resultado de la ejecución
<html>
  <head>
    <script src="https://kit.fontawesome.com/509deda241.js" crossorigin="anonymous"></script>
  </head>
  <body>
    <span style="font-size: 3em; color: Tomato;">
      <i class="fas fa-camera"></i>
    </span>
    <span style="font-size: 48px; color: Dodgerblue;">
      <i class="fas fa-camera"></i>
    </span>
    <span style="font-size: 3rem;">
      <span style="color: Mediumslateblue;">
        <i class="fas fa-camera"></i>
      </span>
    </span>
  </body>
</html>

Estas herramientas y recursos te ayudarán a aprovechar al máximo la tipografía en tu diseño web, permitiéndote crear sitios atractivos y únicos.