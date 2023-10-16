# Tabla de contenidos

- [Gradientes en CSS: gradiente lineal y radial](#gradientes-en-css-gradiente-lineal-y-radial)
  - [1. Gradiente Lineal](#1-gradiente-lineal)
  - [2. Gradiente Radial](#2-gradiente-radial)
  - [3. Generadores de Gradientes](#3-generadores-de-gradientes)
  - [4. Patrones de Gradientes](#4-patrones-de-gradientes)

# Gradientes en CSS: gradiente lineal y radial

En CSS, los gradientes son una forma de aplicar transiciones de color suaves en elementos HTML. Los gradientes son útiles para darle estilo y profundidad a tus diseños web. En esta sección, exploraremos dos tipos comunes de gradientes en CSS: el gradiente lineal y el gradiente radial.

## 1. Gradiente Lineal

El gradiente lineal crea una transición de color en línea recta desde un punto de inicio hasta un punto de finalización en un elemento HTML. La sintaxis básica para aplicar un gradiente lineal es la siguiente:

```css
selector {
  background: linear-gradient(dirección, color1, color2, ...);
}
```

- `selector`: El elemento HTML al que deseas aplicar el gradiente.
- `dirección`: La dirección del gradiente (por ejemplo, `to top`, `to bottom`, `to left`, `to right`).
- `color1`, `color2`, ...: Los colores que compondrán el gradiente.

### Ejemplo de Gradiente Lineal

```css
#gradiente-lineal {
  background: linear-gradient(to right, red, blue);
}
```

En este ejemplo, se crea un gradiente lineal que va desde rojo (a la izquierda) hasta azul (a la derecha) en un elemento con el id "gradiente-lineal."

## 2. Gradiente Radial

El gradiente radial crea una transición de color que irradia desde un punto central hacia los bordes de un elemento HTML. La sintaxis para aplicar un gradiente radial es la siguiente:

```css
selector {
  background: radial-gradient(forma, posición, radio, color1, color2, ...);
}
```

- `selector`: El elemento HTML al que deseas aplicar el gradiente.
- `forma`: La forma del gradiente (por ejemplo, `circle`, `ellipse`).
- `posición`: La posición central del gradiente (por ejemplo, `center`, `top left`).
- `radio`: El radio o tamaño del gradiente.
- `color1`, `color2`, ...: Los colores que compondrán el gradiente.

### Ejemplo de Gradiente Radial

```css
#gradiente-radial {
  background: radial-gradient(circle, red, yellow);
}
```

En este ejemplo, se crea un gradiente radial de forma circular que va desde rojo (en el centro) hasta amarillo (en los bordes) en un elemento con el id "gradiente-radial."

## 3. Generadores de Gradientes

Si deseas experimentar con diferentes gradientes, existen generadores de gradientes en línea que facilitan la creación de código CSS para tus elementos. Algunos de los generadores populares incluyen:

- [CSS Gradient Generator](https://cssgradient.io/)
- [Ultimate CSS Gradient Generator](https://www.colorzilla.com/gradient-editor/)
- [ColorSpace Gradient Generator](https://mycolor.space/gradient)

Estos generadores te permiten personalizar fácilmente los gradientes y obtener el código CSS correspondiente.

## 4. Patrones de Gradientes

Los gradientes también pueden ser utilizados para crear patrones y texturas interesantes. Al superponer gradientes y ajustar los colores y direcciones, puedes lograr efectos visuales llamativos en tus elementos HTML.

Algunas herramientas populares son las siguientes:

- [CSS3Patterns](https://projects.verou.me/css3patterns/)
