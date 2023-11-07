# Animaciones y Keyframes

En el diseño web, las animaciones son una poderosa herramienta para mejorar la experiencia del usuario y hacer que tu sitio sea más interactivo. CSS permite crear animaciones utilizando propiedades como `animation` y `keyframes`.

## Propiedad `animation`

La propiedad `animation` se utiliza para definir una animación. Puedes configurar varios aspectos de una animación con esta propiedad, incluyendo su duración, dirección, retraso, y más. Un ejemplo de uso de la propiedad `animation`:

```css
.my-animation {
  animation: nombre-de-animacion 2s ease-in-out 1s infinite alternate;
}
```

Donde:

- `nombre-de-animacion` se refiere al nombre de la animación definido en `@keyframes`.
- `2s` es la duración de la animación.
- `ease-in-out` es la función de temporización que define cómo cambia la velocidad de la animación.
- `1s` es el retraso antes de que comience la animación.
- `infinite` indica que la animación se repetirá infinitamente.
- `alternate` hace que la animación se invierta en cada iteración.

## Reglas `@keyframes`

La regla `@keyframes` se utiliza para definir los pasos de una animación. Puedes definir varios puntos clave en una animación para crear efectos complejos. Por ejemplo:

```css
@keyframes nombre-de-animacion {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 1;
    transform: scale(1.2);
  }
  100% {
    opacity: 0;
  }
}
```

En este ejemplo, `nombre-de-animacion` se utiliza en la propiedad `animation` y se define una animación que cambia la opacidad y el tamaño de un elemento a lo largo del tiempo.

## Ejemplos Prácticos

### Animación de Carga

Una animación de carga es un ejemplo común de uso de animaciones en diseño web. Puedes crear una animación que haga que un indicador gire continuamente mientras se carga el contenido de una página.

```css
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.loading-spinner {
  width: 50px;
  height: 50px;
  border: 5px solid #3498db;
  border-top: 5px solid transparent;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}
```
<style>
@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.loading-spinner {
width: 50px;
height: 50px;
border: 5px solid #3498db;
border-top: 5px solid transparent;
border-radius: 50%;
animation: spin 1s linear infinite;
}
</style>
<div class="loading-spinner"></div>


Este es un ejemplo sencillo de una animación que hace que un spinner gire infinitamente.
## Recursos y herramientas

- [Animate.css](https://animate.style)
- [Animista](https://animista.net)
- [Magic.css](https://www.minimamente.com/project/magic/)

## Otros ejemplos

### Animación de Rotación

```html
<div class="animated-element"></div>
```

```css
@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.animated-element {
  width: 100px;
  height: 100px;
  background-color: #3498db;
  animation: rotate 2s linear infinite;
}
```

<div class="animated-element"></div>
<style>
@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.animated-element {
  width: 100px;
  height: 100px;
  background-color: #3498db;
  animation: rotate 2s linear infinite;
}
<style>
