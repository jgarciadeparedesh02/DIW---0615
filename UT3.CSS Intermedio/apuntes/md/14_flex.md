# Propiedad `flex` en CSS

La propiedad `flex` es una propiedad de CSS que se utiliza en el contexto de Flexbox para controlar cómo se distribuyen y ajustan los elementos dentro de un contenedor flexible. Flexbox es un modelo de diseño que permite la alineación y distribución eficiente de elementos en un diseño, especialmente en un solo eje (horizontal o vertical). A continuación, se detallan más aspectos sobre la propiedad `flex`:

## Introducción a Flexbox y la Propiedad `flex`

Flexbox es un modelo de diseño en CSS que permite la creación de diseños flexibles y adaptativos. La propiedad `flex` es fundamental en Flexbox para controlar cómo se distribuyen y ajustan los elementos dentro de un contenedor flexible.

### Habilitando Flexbox en un Contenedor

Para utilizar Flexbox en un contenedor, debes establecerlo como un "flex container" mediante la propiedad `display: flex;`. Esto crea un contexto flexible para sus hijos directos.

#### Ejemplo: Habilitando Flexbox en un Contenedor

```css
.container {
  display: flex;
  /* Opcional: Puedes usar 'display: inline-flex;' para inline-level containers. */
}
```

## La Propiedad `flex` y sus Valores

La propiedad `flex` se aplica a los elementos dentro del contenedor flexible y puede tomar uno, dos o tres valores:

- `flex: flex-grow;`: Controla la capacidad de crecimiento del elemento.
- `flex: flex-grow flex-shrink;`: Controla tanto la capacidad de crecimiento como la de contracción.
- `flex: flex-grow flex-shrink flex-basis;`: Establece el tamaño base del elemento.

#### Ejemplo: Uso de la propiedad `flex`

```css
.flex-item {
  flex: 1; /* Igualmente, 'flex: 1 1 0;' */
}
```

## Valor por Defecto

Por defecto, los elementos tienen un valor de `flex: 0 1 auto;`, lo que significa que no crecerán, pero sí se contraerán para ajustarse al contenedor y se basarán en su tamaño intrínseco.

## Aplicación de la Propiedad `flex`

La propiedad `flex` se utiliza en combinación con otras propiedades de Flexbox, como `flex-direction`, `justify-content`, `align-items`, y más, para crear diseños flexibles y personalizados.

#### Ejemplo: Aplicación de `flex` en un Contenedor

```css
.container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
```

## Uso Común de `flex`

La propiedad `flex` se utiliza en una variedad de casos, como sistemas de cuadrículas flexibles, diseños de navegación, distribución de elementos en menús y barras laterales, y para crear diseños adaptables a diferentes tamaños de pantalla.

### Creación de un Menú Flexible

```css
.menu {
  display: flex;
  justify-content: space-around;
}
```

## Ejemplos de uso

### Ejemplo 1: Contenedor de 2 elementos con flex: 1;

En este ejemplo, tenemos un contenedor con dos elementos. Ambos elementos tienen flex: 1;, lo que significa que se distribuirán de manera equitativa en el contenedor.

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      .container {
        display: flex;
      }
      .item {
        flex: 1;
        background-color: lightblue;
        padding: 10px;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="item">Elemento 1</div>
      <div class="item" style="background-color: lightcoral">Elemento 2</div>
    </div>
  </body>
</html>
```

<!DOCTYPE html>
<html>
<head>
  <style>
    .container {
      display: flex;
    }
    .itemej1 {
      flex: 1;
      background-color: lightblue;
      padding: 10px;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="itemej1">Elemento 1</div>
    <div class="itemej1" style="background-color: lightcoral">Elemento 2</div>
  </div>
</body>
</html>

### Ejemplo 2: Contenedor con elementos de diferentes flexibilidades

En este ejemplo, tenemos un contenedor con tres elementos. El primer elemento tiene flex: 2;, lo que significa que ocupará el doble de espacio que los otros dos elementos.

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      .container {
        display: flex;
      }
      .item {
        padding: 10px;
      }
      .item:nth-child(1) {
        flex: 2;
        background-color: lightblue;
      }
      .item:nth-child(2),
      .item:nth-child(3) {
        flex: 1;
        background-color: lightcoral;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="item">Elemento 1 (flex: 2)</div>
      <div class="item">Elemento 2 (flex: 1)</div>
      <div class="item">Elemento 3 (flex: 1)</div>
    </div>
  </body>
</html>
```

<!DOCTYPE html>
<html>
<head>
  <style>
    .container {
      display: flex;
    }
    .item {
      padding: 10px;
    }
    .item:nth-child(1) {
      flex: 2;
      background-color: lightblue;
    }
    .item:nth-child(2), .item:nth-child(3) {
      flex: 1;
      background-color: lightcoral;
    }
  </style>
</head>
<body>
  <div class="container">
    <div class="item">Elemento 1 (flex: 2)</div>
    <div class="item">Elemento 2 (flex: 1)</div>
    <div class="item">Elemento 3 (flex: 1)</div>
  </div>
</body>
</html>
