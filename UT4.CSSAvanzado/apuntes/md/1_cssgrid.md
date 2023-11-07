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



## Ejemplo de Web
<p class="codepen" data-height="300" data-default-tab="css,result" data-slug-hash="jOdyXEz" data-editable="true" data-user="Justo-Garc-a-de-Paredes-Haba" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/Justo-Garc-a-de-Paredes-Haba/pen/jOdyXEz">
  Untitled</a> by Justo García de Paredes Haba (<a href="https://codepen.io/Justo-Garc-a-de-Paredes-Haba">@Justo-Garc-a-de-Paredes-Haba</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
<script async src="https://cpwebassets.codepen.io/assets/embed/ei.js"></script>