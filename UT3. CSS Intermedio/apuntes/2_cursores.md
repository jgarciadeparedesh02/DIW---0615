# Tabla de Contenidos

1. [Cursores en CSS](#cursores-en-css)
2. [Propiedad cursor](#propiedad-cursor)
   1. [Valores predefinidos](#valores-predefinidos)
   2. [Valores personalizados](#valores-personalizados)
3. [Listado de cursores](#listado-de-cursores)
4. [Ejemplos de uso](#ejemplos-de-uso)
   1. [Cambio del cursor al pasar el mouse sobre un enlace](#cambio-del-cursor-al-pasar-el-mouse-sobre-un-enlace)
   2. [Cambio del cursor en una barra de desplazamiento personalizada](#cambio-del-cursor-en-una-barra-de-desplazamiento-personalizada)
   3. [Indicación de acción no permitida](#indicación-de-acción-no-permitida)

# Cursores en CSS

Los cursores en CSS permiten personalizar la apariencia del cursor del mouse cuando se coloca sobre un elemento interactivo, como un enlace o un botón. Esto es útil para proporcionar indicaciones visuales a los usuarios sobre la interactividad de los elementos. Los cursores se pueden definir utilizando la propiedad `cursor` en CSS.

## Propiedad `cursor`

La propiedad `cursor` se utiliza para especificar el tipo de cursor que se mostrará cuando el mouse se sitúe sobre un elemento. Puede tomar varios valores predefinidos o se puede personalizar con imágenes.

### Valores predefinidos

- `auto`: El navegador selecciona el cursor adecuado según el contexto.
- `default`: El cursor predeterminado del sistema (flecha).
- `pointer`: Un dedo apuntando, indicando que el elemento es interactivo.
- `crosshair`: Un cursor en forma de cruz.
- `move`: Indica que el elemento se puede arrastrar.
- `text`: Un cursor de I-bar, indicando que el texto se puede seleccionar.
- `wait`: Un reloj de arena, indicando que el usuario debe esperar.
- `help`: Un cursor de signo de interrogación, indicando ayuda disponible.
- `not-allowed`: Un círculo con una barra diagonal, indicando que la acción no está permitida.

### Valores personalizados

La propiedad `cursor` también puede tomar valores personalizados, como URLs de imágenes. Esto permite utilizar imágenes personalizadas como cursores. Por ejemplo:

```css
.custom-cursor {
  cursor: url("custom-cursor.png"), auto;
}
```

En este caso, se utiliza la imagen 'custom-cursor.png' como cursor personalizado y se establece 'auto' como un valor de respaldo si la imagen no se puede cargar.

## Listado de cursores

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      .container {
        position: relative;
      }
      .caja {
        width: 180px;
        height: 180px;
        color: #fff;
        text-align: center;
        line-height: 180px;
        margin: 15px;
        float: left;
        font-size: 18px;
        font-family: Arial;
      }
      .caja1 {
        background-color: #c0392b;
        cursor: crosshair;
      }
      .caja2 {
        background-color: #9b59b6;
        cursor: help;
      }
      .caja3 {
        background-color: #2980b9;
        cursor: move;
      }
      .caja4 {
        background-color: #3498db;
        cursor: pointer;
      }
      .caja5 {
        background-color: #17a589;
        cursor: progress;
      }
      .caja6 {
        background-color: #f1c40f;
        cursor: text;
      }
      .caja7 {
        background-color: #e67e22;
        cursor: wait;
      }
      .caja8 {
        background-color: #95a5a6;
        cursor: vertical-text;
      }
      .caja9 {
        background-color: #2c3e50;
        cursor: alias;
      }
      .caja10 {
        background-color: grey;
        cursor: no-drop;
      }
      .caja11 {
        background-color: black;
        cursor: grab;
      }
      .caja12 {
        background-color: #c0392b;
        cursor: grabbing;
      }
      .caja13 {
        background-color: #9b59b6;
        cursor: zoom-in;
      }
      .caja14 {
        background-color: #2980b9;
        cursor: zoom-out;
      }
      .caja15 {
        background-color: #3498db;
        cursor: not-allowed;
      }
      .caja16 {
        background-color: #17a589;
        cursor: progress;
      }
      .caja17 {
        background-color: #f1c40f;
        cursor: copy;
      }
      .caja18 {
        background-color: #e67e22;
        cursor: ew-resize;
      }
      .caja19 {
        background-color: #95a5a6;
        cursor: ns-resize;
      }
      .caja20 {
        background-color: #2c3e50;
        cursor: nwse-resize;
      }
      .caja21 {
        background-color: grey;
        cursor: nesw-resize;
      }
      .caja21 {
        background-color: black;
        cursor: nesw-resize;
      }
      .caja26 {
        background-color: #c0392b;
        cursor: url(https://cdn-icons-png.flaticon.com/128/2662/2662839.png),
          pointer;
      }
      .caja21 {
        background-color: #9b59b6;
        cursor: nesw-resize;
      }
      .caja22 {
        background-color: #2980b9;
        cursor: col-resize;
      }
      .caja23 {
        background-color: #3498db;
        cursor: row-resize;
      }
      .caja24 {
        background-color: #17a589;
        cursor: context-menu;
      }
      .caja25 {
        background-color: #e67e22;
        cursor: none;
      }
      .caja26 {
        background-color: #95a5a6;
        cursor: url(https://cdn-icons-png.flaticon.com/128/2662/2662839.png),
          pointer;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="caja caja1">crosshair</div>
      <div class="caja caja2">help</div>
      <div class="caja caja3">move</div>
      <div class="caja caja4">pointer</div>
      <div class="caja caja5">progress</div>
      <div class="caja caja6">text</div>
      <div class="caja caja7">wait</div>
      <div class="caja caja8">vertical-text</div>
      <div class="caja caja9">alias</div>
      <div class="caja caja10">no-drop</div>
      <div class="caja caja11">grab</div>
      <div class="caja caja12">grabbing</div>
      <div class="caja caja13">zoom-in</div>
      <div class="caja caja14">zoom-out</div>
      <div class="caja caja15">not-allowed</div>
      <div class="caja caja16">no-drop</div>
      <div class="caja caja17">copy</div>
      <div class="caja caja18">ew-resize</div>
      <div class="caja caja19">ns-resize</div>
      <div class="caja caja20">nwse-resize</div>
      <div class="caja caja21">nesw-resize</div>
      <div class="caja caja22">col-resize</div>
      <div class="caja caja23">row-resize</div>
      <div class="caja caja24">context-menu</div>
      <div class="caja caja25">none</div>
      <div class="caja caja26">Personalized</div>
    </div>
  </body>
</html>
```

### Resultado de la ejecución

<!DOCTYPE html>
<html>
  <head>
    <style>
      .container {
       display: flex;
    flex-flow: row wrap;
      }
      .caja {
        width: 180px;
        height: 180px;
        color: #fff;
        text-align: center;
        line-height: 180px;
        margin: 15px;
        float: left;
        font-size: 18px;
        font-family: Arial;
      }
      .caja1 {
        background-color: #c0392b;
        cursor: crosshair;
      }
      .caja2 {
        background-color: #9b59b6;
        cursor: help;
      }
      .caja3 {
        background-color: #2980b9;
        cursor: move;
      }
      .caja4 {
        background-color: #3498db;
        cursor: pointer;
      }
      .caja5 {
        background-color: #17a589;
        cursor: progress;
      }
      .caja6 {
        background-color: #f1c40f;
        cursor: text;
      }
      .caja7 {
        background-color: #e67e22;
        cursor: wait;
      }
      .caja8 {
        background-color: #95a5a6;
        cursor: vertical-text;
      }
      .caja9 {
        background-color: #2c3e50;
        cursor: alias;
      }
      .caja10 {
        background-color: grey;
        cursor: no-drop;
      }
      .caja11 {
        background-color: black;
        cursor: grab;
      }
      .caja12 {
        background-color: #c0392b;
        cursor: grabbing;
      }
      .caja13 {
        background-color: #9b59b6;
        cursor: zoom-in;
      }
      .caja14 {
        background-color: #2980b9;
        cursor: zoom-out;
      }
      .caja15 {
        background-color: #3498db;
        cursor: not-allowed;
      }
      .caja16 {
        background-color: #17a589;
        cursor: progress;
      }
      .caja17 {
        background-color: #f1c40f;
        cursor: copy;
      }
      .caja18 {
        background-color: #e67e22;
        cursor: ew-resize;
      }
      .caja19 {
        background-color: #95a5a6;
        cursor: ns-resize;
      }
      .caja20 {
        background-color: #2c3e50;
        cursor: nwse-resize;
      }
      .caja21 {
        background-color: grey;
        cursor: nesw-resize;
      }
      .caja21 {
        background-color: black;
        cursor: nesw-resize;
      }
      .caja26 {
        background-color: #c0392b;
        cursor: url(https://cdn-icons-png.flaticon.com/128/2662/2662839.png),
          pointer;
      }
      .caja21 {
        background-color: #9b59b6;
        cursor: nesw-resize;
      }
      .caja22 {
        background-color: #2980b9;
        cursor: col-resize;
      }
      .caja23 {
        background-color: #3498db;
        cursor: row-resize;
      }
      .caja24 {
        background-color: #17a589;
        cursor: context-menu;
      }
      .caja25 {
        background-color: #e67e22;
        cursor: none;
      }
      .caja26 {
        background-color: #95a5a6;
        cursor: url(https://cdn-icons-png.flaticon.com/128/2662/2662839.png),
          pointer;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="caja caja1">crosshair</div>
      <div class="caja caja2">help</div>
      <div class="caja caja3">move</div>
      <div class="caja caja4">pointer</div>
      <div class="caja caja5">progress</div>
      <div class="caja caja6">text</div>
      <div class="caja caja7">wait</div>
      <div class="caja caja8">vertical-text</div>
      <div class="caja caja9">alias</div>
      <div class="caja caja10">no-drop</div>
      <div class="caja caja11">grab</div>
      <div class="caja caja12">grabbing</div>
      <div class="caja caja13">zoom-in</div>
      <div class="caja caja14">zoom-out</div>
      <div class="caja caja15">not-allowed</div>
      <div class="caja caja16">no-drop</div>
      <div class="caja caja17">copy</div>
      <div class="caja caja18">ew-resize</div>
      <div class="caja caja19">ns-resize</div>
      <div class="caja caja20">nwse-resize</div>
      <div class="caja caja21">nesw-resize</div>
      <div class="caja caja22">col-resize</div>
      <div class="caja caja23">row-resize</div>
      <div class="caja caja24">context-menu</div>
      <div class="caja caja25">none</div>
      <div class="caja caja26">Personalized</div>
    </div>
  </body>
</html>

## Ejemplos de uso

### Cambio del cursor al pasar el mouse sobre un enlace
```css
a:hover {
  cursor: pointer;
}
```
Este CSS cambia el cursor a un dedo apuntando cuando el mouse se coloca sobre un enlace (a).

### Cambio del cursor en una barra de desplazamiento personalizada
```css
.scrollable {
  cursor: url("custom-scroll-cursor.png"), pointer;
}
```
Este CSS cambia el cursor a una imagen personalizada cuando el mouse se coloca sobre un elemento con la clase .scrollable, como una barra de desplazamiento.

### Indicación de acción no permitida
```css
.disabled-button {
  cursor: not-allowed;
}
```
Este CSS cambia el cursor a un círculo con una barra diagonal cuando el mouse se coloca sobre un botón deshabilitado con la clase .disabled-button, indicando que la acción no está permitida.
