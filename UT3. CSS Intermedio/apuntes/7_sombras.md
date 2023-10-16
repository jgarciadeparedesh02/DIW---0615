# Tabla de Contenidos

1. [Propiedades text-shadow y box-shadow](#propiedades-text-shadow-y-box-shadow)
2. [Propiedad text-shadow](#propiedad-text-shadow)
3. [Propiedad box-shadow](#propiedad-box-shadow)
4. [Generadores de sombras](#generadores-de-sombras)
5. [Ejemplos del uso de text-shadow y box-shadow](#ejemplos-del-uso-de-text-shadow-y-box-shadow)

# Propiedades text-shadow y box-shadow

Las sombras son un recurso popular en diseño web para dar profundidad y realce a elementos de tu página. En CSS, puedes aplicar sombras a texto y contenedores mediante las propiedades text-shadow y box-shadow.

## Propiedad text-shadow

La propiedad text-shadow se utiliza para aplicar sombras a texto dentro de elementos HTML. Su sintaxis es la siguiente:

```css
selector {
  text-shadow: h-shadow v-shadow blur color;
}
```

- `h-shadow`: La posición horizontal de la sombra.
- `v-shadow`: La posición vertical de la sombra.
- `blur`: La difuminación de la sombra.
- `color`: El color de la sombra.

### Ejemplo

```css
h1 {
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}
```

## Propiedad box-shadow

La propiedad box-shadow se utiliza para aplicar sombras a contenedores o cajas (como divs). Su sintaxis es la siguiente:

```css
selector {
  box-shadow: h-shadow v-shadow blur spread color inset;
}
```

- `h-shadow`: La posición horizontal de la sombra.
- `v-shadow`: La posición vertical de la sombra.
- `blur`: La difuminación de la sombra.
- `color`: El color de la sombra.
- `spread`: La expansión de la sombra.
- `inset` (opcional): Indica una sombra interna en lugar de una externa.

### Ejemplo

```css
div {
  box-shadow: 4px 4px 8px 2px rgba(0, 0, 0, 0.3);
}
```

## Generadores de sombras

Si deseas experimentar con diferentes efectos de sombra, existen generadores de sombra en línea que facilitan la creación de código CSS para tus elementos. Algunos de los generadores populares incluyen:

- [CSSmatic Box Shadow Generator](https://www.cssmatic.com/box-shadow)
- [CSS3Gen Box Shadow Generator](https://www.css3gen.com/box-shadow)
- [Box Shadow CSS Generator by CSSPortal](https://www.cssportal.com/css3-box-shadow-generator/)

Estos generadores te permiten ajustar fácilmente los valores de las propiedades box-shadow y text-shadow para lograr el efecto deseado en tus elementos HTML sin necesidad de escribir código manualmente.

En esta sección, exploraremos cómo usar estas propiedades para aplicar sombras a texto y contenedores, y también te presentaremos algunos generadores de sombras en línea que pueden facilitar tu trabajo de diseño web.

# Ejemplos del uso de text-shadow y box-shadow~

## Ejemplo 1

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      .title {
        font-size: 48px;
        text-shadow: 3px 3px 5px #333;
      }
    </style>
  </head>
  <body>
    <h1 class="title">Efecto de sombra en texto</h1>
  </body>
</html>
```

### Resultado de la ejecución

<!DOCTYPE html>
<html>
<head>
  <style>
    .title {
      font-size: 48px;
      text-shadow: 3px 3px 5px #333;
    }
  </style>
</head>
<body>
  <h1 class="title">Efecto de sombra en texto</h1>
</body>
</html>

## Ejemplo 2

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      .box {
        width: 200px;
        height: 200px;
        background-color: #3498db;
        box-shadow: 5px 5px 10px #888888;
      }
    </style>
  </head>
  <body>
    <div class="box"></div>
  </body>
</html>
```

### Resultado de la ejecución

<!DOCTYPE html>
<html>
<head>
  <style>
    .box {
      width: 200px;
      height: 200px;
      background-color: #3498db;
      box-shadow: 5px 5px 10px #888888;
    }
  </style>
</head>
<body>
  <div class="box"></div>
</body>
</html>
