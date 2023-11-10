- [CSS Grid](#css-grid)
  - [Propiedad `display: [grid | inline-grid]`](#propiedad-display-grid--inline-grid)
    - [Ejemplo `display: grid`](#ejemplo-display-grid)
    - [Ejemplo `display: inline-grid`](#ejemplo-display-inline-grid)
  - [Propiedades `grid-template-columns` y `grid-template-rows`](#propiedades-grid-template-columns-y-grid-template-rows)
    - [`grid-template-columns`](#grid-template-columns)
    - [`grid-template-rows`](#grid-template-rows)
  - [Propiedades `row-gap` y `column-gap`](#propiedades-row-gap-y-column-gap)
    - [`row-gap`](#row-gap)
    - [`column-gap`](#column-gap)
  - [Propiedad `grid-template-areas`](#propiedad-grid-template-areas)
    - [Sintaxis:](#sintaxis)
    - [Ejemplo:](#ejemplo)
    - [Uso:](#uso)
    - [Ejemplo de Web](#ejemplo-de-web)
  - [Uso de Filas y Columnas Repetitivas en CSS Grid](#uso-de-filas-y-columnas-repetitivas-en-css-grid)
  - [Creación de la Cuadrícula](#creación-de-la-cuadrícula)
    - [Ejemplo](#ejemplo-1)
  - [Función `minmax()`](#función-minmax)
    - [Ejemplo de Uso](#ejemplo-de-uso)
    - [Otro ejemplo](#otro-ejemplo)
  - [Propiedades `grid-row` y `grid-column`](#propiedades-grid-row-y-grid-column)
    - [`grid-row`](#grid-row)
    - [`grid-column`](#grid-column)
    - [Uso Combinado](#uso-combinado)

# CSS Grid

Las propiedades de CSS Grid nos permiten ajustar el contenido de la web a una cuadrícula o rejilla configurable por el desarrollador.

## Propiedad `display: [grid | inline-grid]`

Para crear una cuadrícula (`grid`), es necesario definir la propiedad `display` en el elemento contenedor y especificar el valor `grid` o `inline-grid`.

**Valores:**

- `inline-grid`: Cuadrícula en línea con respecto al contenido exterior.
- `grid`: Cuadrícula en bloque con respecto al contenido exterior.

### Ejemplo `display: grid`

<p class="codepen" data-height="300" data-default-tab="css,result" data-slug-hash="KKJabyG" data-editable="true" data-user="Justo-Garc-a-de-Paredes-Haba" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/Justo-Garc-a-de-Paredes-Haba/pen/KKJabyG">
  Untitled</a> by Justo García de Paredes Haba (<a href="https://codepen.io/Justo-Garc-a-de-Paredes-Haba">@Justo-Garc-a-de-Paredes-Haba</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

### Ejemplo `display: inline-grid`

<p class="codepen" data-height="300" data-default-tab="css,result" data-slug-hash="PoVWXEO" data-editable="true" data-user="Justo-Garc-a-de-Paredes-Haba" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/Justo-Garc-a-de-Paredes-Haba/pen/PoVWXEO">
  UT4.3</a> by Justo García de Paredes Haba (<a href="https://codepen.io/Justo-Garc-a-de-Paredes-Haba">@Justo-Garc-a-de-Paredes-Haba</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

<br>Los valores `inline-grid` y `grid` indican cómo se comporta el contenedor con respecto al contenido exterior. Con el valor `inline-grid`, el contenedor aparece en línea con respecto al contenido exterior. Con el valor `grid`, el contenedor aparece en bloque con respecto al contenido exterior.

## Propiedades `grid-template-columns` y `grid-template-rows`

Las propiedades `grid-template-columns` y `grid-template-rows` se utilizan para definir el tamaño y la disposición de las columnas y filas en una cuadrícula.

<p class="codepen" data-height="300" data-default-tab="css,result" data-slug-hash="vYbgvdx" data-editable="true" data-user="Justo-Garc-a-de-Paredes-Haba" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/Justo-Garc-a-de-Paredes-Haba/pen/vYbgvdx">
  UT4.4</a> by Justo García de Paredes Haba (<a href="https://codepen.io/Justo-Garc-a-de-Paredes-Haba">@Justo-Garc-a-de-Paredes-Haba</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

<br>En el ejemplo anterior, se define una cuadrícula con tres columnas. La primera columna tendrá un tamaño igual a 1 fracción, la segunda columna tendrá un tamaño igual a 2 fracciones y la tercera columna tendrá un tamaño igual a 1 fracción. Además, se definen dos filas, una con una altura de 100 píxeles y la otra con una altura de 200 píxeles.

Estas propiedades permiten crear diseños de cuadrícula flexibles y personalizados en CSS.

**Nota:** El valor `fr` representa una fracción del espacio disponible en la cuadrícula y se utiliza para distribuir el espacio de manera equitativa entre las columnas o filas.

### `grid-template-columns`

La propiedad `grid-template-columns` se utiliza para definir el tamaño y la disposición de las columnas en una cuadrícula CSS. Esta propiedad te permite especificar cómo se distribuirá el espacio horizontal en una cuadrícula.

- Puedes definir el tamaño de las columnas de varias maneras, incluyendo píxeles, porcentajes o fracciones (`fr`).

- Las fracciones (`fr`) son especialmente útiles para crear diseños flexibles, ya que distribuyen el espacio restante en la cuadrícula de manera proporcional. Por ejemplo, si defines tres columnas con `1fr 2fr 1fr`, la segunda columna tendrá el doble de ancho que las otras dos.

- Puedes utilizar palabras clave como `auto` para dejar que una columna tome su tamaño automáticamente en función de su contenido.

- También es posible combinar diferentes unidades y valores en una sola declaración, por ejemplo, `100px 1fr auto`.

```css
.contenedor {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
}
```

### `grid-template-rows`

La propiedad `grid-template-rows` se utiliza de manera similar a `grid-template-columns`, pero para definir el tamaño y la disposición de las filas en una cuadrícula CSS. Te permite especificar cómo se distribuirá el espacio vertical en la cuadrícula.

- Al igual que en `grid-template-columns`, puedes definir el tamaño de las filas utilizando píxeles, porcentajes o fracciones (`fr`).

- Las fracciones (`fr`) son útiles para crear diseños flexibles en el eje vertical, al igual que en el eje horizontal.

- Puedes usar palabras clave como `auto` para que una fila tome su tamaño automáticamente según su contenido.

- También puedes combinar diferentes unidades y valores en una sola declaración, como `100px 1fr auto`.

Ejemplo de uso:

```css
.contenedor {
  display: grid;
  grid-template-rows: 100px 2fr 1fr;
}
```

## Propiedades `row-gap` y `column-gap`

Las propiedades `row-gap` y `column-gap` son propiedades relacionadas con la disposición de elementos en una cuadrícula CSS. Estas propiedades permiten controlar el espacio vertical (entre filas) y horizontal (entre columnas) en una cuadrícula, respectivamente.

### `row-gap`

La propiedad `row-gap` se utiliza para especificar la distancia entre las filas en una cuadrícula. Puedes definir el valor de `row-gap` en píxeles, porcentajes u otras unidades de longitud. Esta propiedad es especialmente útil para crear un espaciado uniforme entre filas en un diseño de cuadrícula.

Ejemplo de uso:

<p class="codepen" data-height="300" data-default-tab="css,result" data-slug-hash="rNPjoJE" data-editable="true" data-user="Justo-Garc-a-de-Paredes-Haba" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/Justo-Garc-a-de-Paredes-Haba/pen/rNPjoJE">
  UT4.5</a> by Justo García de Paredes Haba (<a href="https://codepen.io/Justo-Garc-a-de-Paredes-Haba">@Justo-Garc-a-de-Paredes-Haba</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

### `column-gap`

La propiedad `column-gap` se utiliza para especificar la distancia entre las columnas en una cuadrícula. Al igual que `row-gap`, puedes definir el valor de `column-gap` en píxeles, porcentajes u otras unidades de longitud. Esta propiedad te permite controlar el espacio horizontal entre las columnas en una cuadrícula.

Ejemplo de uso:

<p class="codepen" data-height="300" data-default-tab="css,result" data-slug-hash="YzBNdaN" data-editable="true" data-user="Justo-Garc-a-de-Paredes-Haba" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/Justo-Garc-a-de-Paredes-Haba/pen/YzBNdaN">
  UT4.6</a> by Justo García de Paredes Haba (<a href="https://codepen.io/Justo-Garc-a-de-Paredes-Haba">@Justo-Garc-a-de-Paredes-Haba</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

<br>Estas propiedades son útiles para ajustar el espaciado entre filas y columnas en una cuadrícula CSS, lo que te permite crear diseños de cuadrícula más flexibles y personalizados.

## Propiedad `grid-template-areas`

La propiedad `grid-template-areas` es una característica poderosa de CSS Grid que permite definir un diseño de cuadrícula de manera visual y estructurada. Con `grid-template-areas`, puedes asignar nombres a áreas específicas de una cuadrícula y organizar tu diseño de una manera más legible y mantenible.

### Sintaxis:

La propiedad `grid-template-areas` se define dentro del selector del contenedor de la cuadrícula y utiliza comillas dobles o simples para especificar un nombre para cada área. Las áreas se describen como una cuadrícula de filas y columnas, donde cada celda contiene un nombre correspondiente a un área específica.

### Ejemplo:

```css
.contenedor {
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-template-rows: 100px 1fr;
  grid-template-areas:
    "header header"
    "sidebar main";
}
```

En el ejemplo anterior, hemos definido una cuadrícula con dos columnas y dos filas. La propiedad `grid-template-areas` asigna nombres a cuatro áreas diferentes: "header", "sidebar", "main", y el área vacía entre ellas. Estas áreas se organizan de manera legible, lo que facilita la comprensión del diseño de la cuadrícula.

### Uso:

- Puedes asignar el mismo nombre a múltiples celdas si deseas que compartan el mismo área.
- Los puntos (.) se utilizan para indicar áreas vacías o sin nombre.
- Puedes cambiar el diseño de la cuadrícula simplemente reorganizando los nombres de las áreas en la propiedad `grid-template-areas`.

La propiedad `grid-template-areas` es especialmente útil para diseñar páginas web complejas con una estructura clara y organizada. Permite una representación visual de la cuadrícula que es fácil de mantener y modificar.

### Ejemplo de Web

<p class="codepen" data-height="300" data-default-tab="css,result" data-slug-hash="jOdyXEz" data-editable="true" data-user="Justo-Garc-a-de-Paredes-Haba" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/Justo-Garc-a-de-Paredes-Haba/pen/jOdyXEz">
  Untitled</a> by Justo García de Paredes Haba (<a href="https://codepen.io/Justo-Garc-a-de-Paredes-Haba">@Justo-Garc-a-de-Paredes-Haba</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

## Uso de Filas y Columnas Repetitivas en CSS Grid

En CSS Grid, puedes crear fácilmente una disposición de filas y columnas repetitivas para simplificar la estructura de tu diseño. Esto es especialmente útil cuando tienes un patrón que se repite a lo largo de tu cuadrícula.

## Creación de la Cuadrícula

Primero, definimos nuestra cuadrícula utilizando las propiedades `grid-template-rows` y `grid-template-columns`. Para filas o columnas repetitivas, utilizamos la función `repeat()`.

### Ejemplo

```css
.container {
  display: grid;
  grid-template-rows: repeat(3, 100px); 
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
}
```

En este ejemplo, creamos una cuadrícula con tres filas, cada una de 100px de altura, y cuatro columnas, cada una con un tamaño fraccional igual. El `gap` especifica el espacio entre las celdas de la cuadrícula.

## Función `minmax()`

La función `minmax` es una función CSS que se utiliza en el contexto de `display: grid` para establecer un rango permitido para el tamaño de una pista (fila o columna) en una cuadrícula. La sintaxis básica de la función es la siguiente:

```css
grid-template-rows: minmax(min, max);
grid-template-columns: minmax(min, max);
```

Donde `min` es la longitud mínima permitida para la pista y `max` es la longitud máxima permitida. Esta función es especialmente útil cuando se desea crear un diseño fluido y adaptable.

### Ejemplo de Uso

Supongamos que queremos crear una cuadrícula donde las columnas tienen un ancho mínimo de 100px pero pueden crecer para ocupar el espacio disponible, con un ancho máximo de 1fr (una fracción del espacio disponible). Podríamos usar la función `minmax` de la siguiente manera:

```css
.grid-container {
  display: grid;
  grid-template-columns: minmax(100px, 1fr) minmax(100px, 1fr) minmax(100px, 1fr);
}
```

En este ejemplo, cada columna de la cuadrícula tiene un ancho mínimo de 100px y un ancho máximo de 1fr. Esto significa que, si hay suficiente espacio disponible, las columnas pueden crecer para ocupar el espacio restante después de que se hayan asignado los 100px mínimos.

La función `minmax` es valiosa para crear diseños flexibles y responsivos, ya que permite establecer restricciones en el tamaño de las pistas de la cuadrícula, garantizando al mismo tiempo un diseño que se adapte a diferentes tamaños de pantalla.

### Otro ejemplo

<p class="codepen" data-height="300" data-default-tab="css,result" data-slug-hash="bGzWaxo" data-editable="true" data-user="Justo-Garc-a-de-Paredes-Haba" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/Justo-Garc-a-de-Paredes-Haba/pen/bGzWaxo">
  UT4.8</a> by Justo García de Paredes Haba (<a href="https://codepen.io/Justo-Garc-a-de-Paredes-Haba">@Justo-Garc-a-de-Paredes-Haba</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>

<br>`grid-template-columns: repeat(2, minmax(400px, 600px))` Define dos columnas en la cuadrícula, cada una con un ancho mínimo de 400px y un ancho máximo de 600px. Esto significa que las columnas pueden crecer hasta 600px, pero nunca serán más estrechas que 400px.

## Propiedades `grid-row` y `grid-column`

Las propiedades `grid-row` y `grid-column` son parte del modelo de diseño de cuadrícula (`display: grid`) en CSS y se utilizan para controlar la ubicación de los elementos hijos dentro de la cuadrícula. Estas propiedades permiten especificar en qué filas y columnas de la cuadrícula debería colocarse un elemento particular.

### `grid-row`

La propiedad `grid-row` se utiliza para especificar en qué filas debe ubicarse un elemento en la cuadrícula. Puedes utilizar valores como números, nombres de líneas, números negativos y la palabra clave `span` para definir la ubicación. Algunos ejemplos:

- `grid-row: 2`: Coloca el elemento en la fila 2.
- `grid-row: span 3`: Hace que el elemento ocupe 3 filas contiguas.
- `grid-row: 1 / 4`: Coloca el elemento desde la fila 1 hasta la fila 4.

### `grid-column`

La propiedad `grid-column` es similar a `grid-row`, pero se aplica a las columnas en lugar de las filas. Al igual que `grid-row`, puede utilizar números, nombres de líneas, números negativos y la palabra clave `span`. Ejemplos:

- `grid-column: 2`: Coloca el elemento en la columna 2.
- `grid-column: span 3`: Hace que el elemento ocupe 3 columnas contiguas.
- `grid-column: 1 / 4`: Coloca el elemento desde la columna 1 hasta la columna 4.

### Uso Combinado

Ambas propiedades pueden ser utilizadas de manera combinada para especificar tanto filas como columnas simultáneamente. Por ejemplo:

```css
.item {
  grid-row: 1 / 3;
  grid-column: 2 / 4;
}
```

En este ejemplo, el elemento con la clase `.item` se ubicaría desde la fila 1 hasta la fila 3 y desde la columna 2 hasta la columna 4 en la cuadrícula.

Estas propiedades son fundamentales para posicionar elementos en una cuadrícula de manera precisa y controlada. Permiten crear diseños complejos y flexibles, ya que ofrecen una forma precisa de especificar la ubicación de los elementos dentro de la cuadrícula, lo que facilita la creación de interfaces de usuario más eficientes y atractivas.

<p class="codepen" data-height="300" data-default-tab="css,result" data-slug-hash="MWLmrEX" data-editable="true" data-user="Justo-Garc-a-de-Paredes-Haba" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/Justo-Garc-a-de-Paredes-Haba/pen/MWLmrEX">
  UT4.7</a> by Justo García de Paredes Haba (<a href="https://codepen.io/Justo-Garc-a-de-Paredes-Haba">@Justo-Garc-a-de-Paredes-Haba</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>
