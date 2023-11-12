# Contenidos
- [Contenidos](#contenidos)
- [Media Queries en CSS](#media-queries-en-css)
  - [Sintaxis Básica](#sintaxis-básica)
    - [`tipo_de_medio`](#tipo_de_medio)
      - [1. `all`](#1-all)
      - [2. `screen`](#2-screen)
      - [3. `print`](#3-print)
  - [Ejemplos básicos](#ejemplos-básicos)
    - [Cambiar estilos para pantallas pequeñas](#cambiar-estilos-para-pantallas-pequeñas)
    - [Estilos específicos para impresión](#estilos-específicos-para-impresión)
    - [Orientación del dispositivo](#orientación-del-dispositivo)
  - [Breakpoints](#breakpoints)
    - [Ejemplos de Breakpoints en Media Queries](#ejemplos-de-breakpoints-en-media-queries)
    - [Breakpoints populares](#breakpoints-populares)
  - [Otros ejemplos de media queries menos utilizados](#otros-ejemplos-de-media-queries-menos-utilizados)
- [Ejemplos de la utilización de media queries](#ejemplos-de-la-utilización-de-media-queries)
  - [Ejemplo de navbar que muestra menú hamburguesa o menú completo](#ejemplo-de-navbar-que-muestra-menú-hamburguesa-o-menú-completo)
  - [Ejemplo de cambio de animación con resolución](#ejemplo-de-cambio-de-animación-con-resolución)
  - [Ejemplo de cambio de organización en la página](#ejemplo-de-cambio-de-organización-en-la-página)
  - [Ejemplo de cambio de estructura de producto](#ejemplo-de-cambio-de-estructura-de-producto)
  - [Ejemplo de cambio en página de restaurante](#ejemplo-de-cambio-en-página-de-restaurante)


# Media Queries en CSS

Las media queries son una herramienta esencial en el diseño web `responsive`, permitiendo adaptar estilos según las características del dispositivo. Estas consultas condicionales se aplican mediante reglas de estilo CSS y son cruciales para crear experiencias de usuario coherentes en diversos dispositivos.

## Sintaxis Básica

Las media queries se incorporan en bloques de código CSS y siguen la siguiente sintaxis:

```css
@media tipo_de_medio y (condición) {
  /* Estilos a aplicar si se cumple la condición */
}
```

- **`tipo_de_medio`**: Puede ser `all` (todos los dispositivos), `screen` (pantallas), `print` (impresoras), entre otros.

- **`condición`**: Define las características del dispositivo, como el ancho de la pantalla, la resolución, la orientación, etc.

### `tipo_de_medio`

Las consultas de medios son un aspecto crucial del diseño web receptivo, permitiendo a los desarrolladores aplicar estilos según las características del dispositivo o medio que muestra el contenido. Hay varios tipos de medios que se pueden seleccionar mediante consultas de medios, siendo tres de los principales `all`, `screen` y `print`.

#### 1. `all`

El tipo de medio `all` es el valor predeterminado para las consultas de medios. Los estilos definidos dentro de las consultas de medios `all` se aplican a todos los dispositivos y medios, independientemente de sus características. Este tipo se utiliza comúnmente cuando se desea aplicar un estilo de manera universal, sin importar el medio de salida.

Ejemplo:

```css
@media all and (max-width: 600px) {
  /* Estilos para dispositivos con un ancho máximo de 600 píxeles */
  body {
    font-size: 14px;
  }
}
```

#### 2. `screen`

El tipo de medio `screen` se utiliza para dirigirse a dispositivos con pantalla, como computadoras, tabletas y teléfonos inteligentes. Los estilos especificados dentro de las consultas de medios `screen` se aplican cuando el contenido se muestra en una pantalla.

Ejemplo:

```css
@media screen and (min-width: 768px) {
  /* Estilos para pantallas con un ancho mínimo de 768 píxeles */
  .container {
    width: 80%;
  }
}
```

#### 3. `print`

El tipo de medio `print` está diseñado para estilos que deben aplicarse cuando el contenido se está imprimiendo. Esto es particularmente útil para crear versiones amigables para imprimir de páginas web, ajustando diseños, colores y otros aspectos para una impresión óptima.

Ejemplo:

```css
@media print {
  /* Estilos para cuando el contenido se está imprimiendo */
  .hide-on-print {
    display: none;
  }

  /* Ajustes para documentos impresos */
  body {
    font-size: 12pt;
    interlineado: 1.5;
  }
}
```

En resumen, las consultas de medios proporcionan una forma poderosa de ajustar estilos según las características del medio de salida, y comprender las diferencias entre los tipos de medios `all`, `screen` y `print` es esencial para un diseño web receptivo efectivo.


## Ejemplos básicos

### Cambiar estilos para pantallas pequeñas

```css
@media screen and (max-width: 768px) {
  body {
    font-size: 16px;
  }
}
```

En este ejemplo, se cambia el tamaño de fuente del cuerpo cuando la pantalla es de 768 píxeles o menos de ancho.

### Estilos específicos para impresión

```css
@media print {
  body {
    color: black;
  }
}
```

Aquí, se especifican estilos específicos para cuando la página se imprime.

### Orientación del dispositivo

```css
@media screen and (orientation: landscape) {
  /* Estilos para pantallas en orientación horizontal */
}

@media screen and (orientation: portrait) {
  /* Estilos para pantallas en orientación vertical */
}
```

Se pueden aplicar estilos diferentes según la orientación del dispositivo.

## Breakpoints

En el contexto de las CSS media queries, los `breakpoints` se refieren a los puntos específicos o rangos de ancho de pantalla en los que se aplican cambios en el diseño o estilos de un sitio web para adaptarse a diferentes tamaños de dispositivos. Estos puntos de ruptura son esenciales para crear un diseño web receptivo y garantizar que la experiencia del usuario sea óptima en una variedad de dispositivos, desde teléfonos móviles hasta computadoras de escritorio.

### Ejemplos de Breakpoints en Media Queries

1. **Cambio de estilos para pantallas pequeñas:**

   En este ejemplo, se utiliza un breakpoint para cambiar el tamaño de fuente del cuerpo cuando la pantalla es de 768 píxeles o menos de ancho.

   ```css
   @media screen and (max-width: 768px) {
     body {
       font-size: 16px;
     }
   }
   ```

2. **Ajuste de diseño para tabletas:**

   Aquí, se usa un breakpoint para ajustar el ancho de un contenedor cuando la pantalla es de al menos 768 píxeles de ancho, lo que podría ser típico de tabletas.

   ```css
   @media screen and (min-width: 768px) {
     .container {
       width: 80%;
     }
   }
   ```

3. **Estilos específicos para impresión en dispositivos grandes:**

   En este caso, se aplica un estilo específico para la impresión cuando la pantalla es lo suficientemente grande (por ejemplo, una impresora de escritorio).

   ```css
   @media print and (min-width: 1200px) {
     body {
       color: black;
     }
   }
   ```

Estos son solo ejemplos básicos. Los breakpoints pueden variar según los requisitos del diseño y la estructura del sitio web. Se eligen puntos de ruptura estratégicos para garantizar una transición fluida y una experiencia de usuario óptima en diferentes dispositivos.

### Breakpoints populares
Aquí tienes una explicación de los breakpoints más populares utilizados por la mayoría de frameworks de css y adaptados a los tamaños más populares:

1. **`sm` (Small):**
   - `@media screen and (min-width: 568px)`: Este breakpoint se activa cuando el ancho de la pantalla es igual o superior a 568 píxeles. Es comúnmente utilizado para aplicar estilos específicos a pantallas pequeñas, como las de dispositivos móviles.

2. **`md` (Medium):**
   - `@media screen and (min-width: 768px)`: Este breakpoint se activa cuando el ancho de la pantalla es igual o superior a 768 píxeles. Suele ser utilizado para estilos destinados a tabletas y dispositivos con pantallas de tamaño mediano.

3. **`lg` (Large):**
   - `@media screen and (min-width: 1024px)`: Este breakpoint se activa cuando el ancho de la pantalla es igual o superior a 1024 píxeles. Se utiliza para aplicar estilos a pantallas de tamaño grande, como las de laptops y monitores de escritorio.

4. **`xl` (Extra Large):**
   - `@media screen and (min-width: 1280px)`: Se activa cuando el ancho de la pantalla es igual o superior a 1280 píxeles. Este breakpoint es ideal para adaptar el diseño a pantallas más grandes, como monitores de escritorio de alta resolución.

5. **`xxl` (Double Extra Large):**
   - `@media screen and (min-width: 1920px)`: Se activa cuando el ancho de la pantalla es igual o superior a 1920 píxeles. Este breakpoint se centra en pantallas de gran tamaño, como monitores de alta definición.

6. **`xxxl` (Triple Extra Large):**
   - `@media screen and (min-width: 2560px)`: Se activa cuando el ancho de la pantalla es igual o superior a 2560 píxeles. Este breakpoint se utiliza para pantallas de muy alta resolución.

7. **`x4k` (4K):**
   - `@media screen and (min-width: 3840px)`: Se activa cuando el ancho de la pantalla es igual o superior a 3840 píxeles. Este breakpoint está diseñado para adaptarse a pantallas 4K de ultra alta definición.

Estos breakpoints proporcionan puntos clave para adaptar el diseño y mejorar la experiencia del usuario en una variedad de dispositivos con diferentes tamaños de pantalla, expresados ahora en unidades de píxeles.

## Otros ejemplos de media queries menos utilizados
Aquí tienes una lista de algunas media features comunes que puedes utilizar en consultas de medios CSS. Ten en cuenta que la compatibilidad puede variar según el navegador y la versión, así que es importante verificar la compatibilidad antes de utilizar algunas de estas características más avanzadas:

1. **Ancho de la Pantalla (`width`):**
   - Ejemplo: `@media screen and (min-width: 768px) { ... }`
   - Explicación: Se activa cuando el ancho de la pantalla es igual o superior a 768 píxeles.

2. **Altura de la Pantalla (`height`):**
   - Ejemplo: `@media screen and (max-height: 600px) { ... }`
   - Explicación: Se activa cuando la altura de la pantalla es igual o inferior a 600 píxeles.

3. **Orientación (`orientation`):**
   - Ejemplo: `@media screen and (orientation: landscape) { ... }`
   - Explicación: Se activa cuando la pantalla está en orientación horizontal.

4. **Resolución de Pantalla (`resolution`):**
   - Ejemplo: `@media screen and (min-resolution: 300dpi) { ... }`
   - Explicación: Se activa cuando la resolución de la pantalla es igual o superior a 300 píxeles por pulgada (dpi).

5. **Relación de Aspecto (`aspect-ratio`):**
   - Ejemplo: `@media screen and (aspect-ratio: 16/9) { ... }`
   - Explicación: Se activa cuando la relación de aspecto de la pantalla es de 16:9.

6. **Relación de Píxeles (`device-pixel-ratio`):**
   - Ejemplo: `@media screen and (min--moz-device-pixel-ratio: 2) { ... }`
   - Explicación: Se activa cuando la relación de píxeles del dispositivo es igual o superior a 2. Útil para pantallas de alta densidad de píxeles (Retina, por ejemplo).

7. **Tipo de Dispositivo (`device-type`):**
   - Ejemplo: `@media screen and (device-type: handheld) { ... }`
   - Explicación: Se activa cuando el dispositivo es de mano (handheld), indicando generalmente un dispositivo móvil como un teléfono o una tableta.

8. **Pantallas en Color (`color`):**
   - Ejemplo: `@media screen and (min-color: 256) { ... }`
   - Explicación: Se activa cuando la pantalla es capaz de mostrar al menos 256 colores.

9. **Pantallas en Blanco y Negro (`color-index`):**
   - Ejemplo: `@media screen and (min-color-index: 256) { ... }`
   - Explicación: Se activa cuando la pantalla puede mostrar al menos 256 niveles de escala de grises.

10. **Grid (`grid`):**
    - Ejemplo: `@media (display: grid) { ... }`
    - Explicación: Se activa cuando el navegador admite el modelo de diseño de cuadrícula.

11. **Nivel de Gris (`monochrome`):**
    - Ejemplo: `@media screen and (min-monochrome: 2) { ... }`
    - Explicación: Se activa cuando la pantalla es capaz de mostrar al menos 2 niveles de grises.

Estas son solo algunas de las características que puedes utilizar en consultas de medios. La variedad de media features permite una adaptación fina y precisa del diseño de la página según las capacidades y características del dispositivo o del entorno de visualización.

# Ejemplos de la utilización de media queries
## Ejemplo de navbar que muestra menú hamburguesa o menú completo
<p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="qBgjmPZ" data-user="Justo-Garc-a-de-Paredes-Haba" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/Justo-Garc-a-de-Paredes-Haba/pen/qBgjmPZ">
  UT4.9</a> by Justo García de Paredes Haba (<a href="https://codepen.io/Justo-Garc-a-de-Paredes-Haba">@Justo-Garc-a-de-Paredes-Haba</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

## Ejemplo de cambio de animación con resolución
<p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="LYqLyQR" data-user="Justo-Garc-a-de-Paredes-Haba" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/Justo-Garc-a-de-Paredes-Haba/pen/LYqLyQR">
  UT4.10</a> by Justo García de Paredes Haba (<a href="https://codepen.io/Justo-Garc-a-de-Paredes-Haba">@Justo-Garc-a-de-Paredes-Haba</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

## Ejemplo de cambio de organización en la página
<p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="pJjjKj" data-user="SitePoint" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/SitePoint/pen/pJjjKj">
  Typical Media Query example</a> by SitePoint (<a href="https://codepen.io/SitePoint">@SitePoint</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

## Ejemplo de cambio de estructura de producto
<p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="KKxbrMw" data-user="augusto404" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/augusto404/pen/KKxbrMw">
  página de produto (mobile first + media queries)</a> by alpaca (<a href="https://codepen.io/augusto404">@augusto404</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

## Ejemplo de cambio en página de restaurante
<p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="bGvVXep" data-user="cabosmanuel" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/cabosmanuel/pen/bGvVXep">
  Grid Food</a> by Manuel Cabos (<a href="https://codepen.io/cabosmanuel">@cabosmanuel</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>