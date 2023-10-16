# Tabla de Contenidos

- [Filtros en CSS para Aplicar Efectos en Imágenes](#filtros-en-css-para-aplicar-efectos-en-imágenes)
  - [Propiedades de Filtros en CSS](#propiedades-de-filtros-en-css)
  - [Combinación de Filtros](#combinación-de-filtros)
  - [Generadores de Efectos](#generadores-de-efectos)
- [Ejemplos de utilización](#ejemplos-de-utilización)
  - [Ejemplo 1: Aplicar Filtro de Desenfoque (Blur) en una Imagen](#ejemplo-1-aplicar-filtro-de-desenfoque-blur-en-una-imagen)
  - [Ejemplo 2: Ajustar el Brillo y Contraste de una Imagen](#ejemplo-2-ajustar-el-brillo-y-contraste-de-una-imagen)

# Filtros en CSS para Aplicar Efectos en Imágenes

Los filtros en CSS son una poderosa herramienta que te permite aplicar efectos visuales a las imágenes y elementos HTML en tu sitio web. Los filtros pueden cambiar la apariencia de una imagen, su color, brillo, contraste y otros aspectos visuales. En esta sección, exploraremos los diferentes filtros disponibles y cómo se pueden utilizar para crear efectos impactantes en tus imágenes.

## Propiedades de Filtros en CSS

### 1. filter: blur(valor);

La propiedad filter con el valor blur se utiliza para aplicar un efecto de desenfoque a una imagen. Puedes especificar el grado de desenfoque con un valor numérico. Cuanto mayor sea el valor, mayor será el desenfoque.

### 2. filter: brightness(valor);

La propiedad filter con el valor brightness se utiliza para ajustar el brillo de una imagen. Puedes especificar un valor numérico para aumentar o disminuir el brillo.

### 3. filter: contrast(valor);

La propiedad filter con el valor contrast se utiliza para ajustar el contraste de una imagen. Puedes especificar un valor numérico para aumentar o disminuir el contraste.

### 4. filter: grayscale(valor);

La propiedad filter con el valor grayscale se utiliza para convertir una imagen en escala de grises. Puedes especificar un valor numérico para controlar el grado de conversión a escala de grises.

### 5. filter: hue-rotate(valor);

La propiedad filter con el valor hue-rotate se utiliza para rotar los colores de una imagen. Puedes especificar un valor en grados para cambiar la tonalidad de la imagen.

### 6. filter: opacity(valor);

La propiedad filter con el valor opacity se utiliza para ajustar la opacidad de una imagen. Puedes especificar un valor numérico entre 0 (completamente transparente) y 1 (completamente opaco).

### 7. filter: saturate(valor);

La propiedad filter con el valor saturate se utiliza para ajustar la saturación de una imagen. Puedes especificar un valor numérico para aumentar o disminuir la saturación.

### 8. filter: sepia(valor);

La propiedad filter con el valor sepia se utiliza para aplicar un efecto sepia a una imagen. Puedes especificar un valor numérico para controlar la intensidad del efecto sepia.

## Combinación de Filtros

Puedes combinar múltiples filtros en una sola regla filter para crear efectos más complejos. Por ejemplo:

```css
.imagen-combinada {
  filter: blur(5px) brightness(150%) contrast(200%);
}
```

Este código aplicará un desenfoque, aumentará el brillo y el contraste a la imagen con la clase .imagen-combinada.

# Generadores de Efectos

Si deseas experimentar con diferentes efectos de filtro, existen generadores en línea que facilitan la creación de código CSS para tus imágenes. Algunos de los generadores populares incluyen:

- [FilterCssGenerator](https://cssgenerator.org/filter-css-generator.html)

Estos generadores te permiten ajustar fácilmente los valores de los filtros y obtener el código CSS correspondiente para aplicar a tus imágenes.

En esta sección, hemos explorado las propiedades de filtros en CSS y cómo se pueden utilizar para aplicar efectos visuales a tus imágenes. Los filtros ofrecen una forma creativa de personalizar la apariencia de tus elementos visuales y mejorar la experiencia del usuario en tu sitio web.

# Ejemplos de utilización

## Ejemplo 1: Aplicar Filtro de Desenfoque (Blur) en una Imagen

```html
<html>
  <head>
    <style>
      .imagen-desenfocada {
        filter: blur(5px);
      }
    </style>
  </head>
  <body>
    <img
      src="./svg/imgs/img1.jfif"
      alt="Imagen Desenfocada"
      class="imagen-desenfocada"
    />
  </body>
</html>
```

### Resultado de ejecución
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg fill="none" viewBox="0 0 400 400" width="400" height="400" xmlns="http://www.w3.org/2000/svg">
    <foreignObject width="100%" height="100%">
        <html>
  <head>
    <style>
      .imagen-desenfocada {
        filter: blur(5px);
      }
    </style>
  </head>
  <body>
    <img src="./svg/imgs/img1.jfif" alt="Imagen Desenfocada" class="imagen-desenfocada" />
  </body>
</html>
    </foreignObject>
</svg>

## Ejemplo 2: Ajustar el Brillo y Contraste de una Imagen
```html
<html>
  <head>
    <style>
      .imagen-ajustada {
        filter: brightness(150%) contrast(200%);
      }
    </style>
  </head>
  <body>
    <img
      src="./svg/imgs/img1.jfif"
      alt="Imagen Ajustada"
      class="imagen-ajustada"
    />
  </body>
</html>
```

### Resultado de ejecución
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">
<svg fill="none" viewBox="0 0 400 400" width="400" height="400" xmlns="http://www.w3.org/2000/svg">
    <foreignObject width="100%" height="100%">
        <html>
  <head>
    <style>
      .imagen-ajustada {
        filter: brightness(150%) contrast(200%);
      }
    </style>
  </head>
  <body>
    <img src="./svg/imgs/img1.jfif" alt="Imagen Ajustada" class="imagen-ajustada" />
  </body>
</html>
    </foreignObject>
</svg>
