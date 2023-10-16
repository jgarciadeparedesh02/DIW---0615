# Propiedad CSS `overflow` - Manejo del Excedente de Contenido

La propiedad `overflow` en CSS se utiliza para controlar el manejo del contenido que se desborda o excede el espacio asignado a un elemento. Esta propiedad es especialmente útil cuando deseas controlar cómo se visualiza o se oculta el contenido que no cabe dentro de un contenedor.

## Valores de la Propiedad `overflow`

La propiedad `overflow` puede tomar uno de varios valores:

1. `visible` (valor predeterminado): El contenido que se desborda del contenedor se muestra y se superpone a otros elementos en la página. Esto puede resultar en contenido superpuesto y puede no ser deseado en algunos casos.

2. `hidden`: El contenido que se desborda se oculta y no se muestra en el contenedor. Esto puede cortar el contenido y hacerlo no visible, pero es útil para evitar la superposición no deseada.

3. `scroll`: Se agrega una barra de desplazamiento al contenedor, permitiendo al usuario desplazarse para ver el contenido que se desborda. Esto es útil cuando deseas mantener visible todo el contenido.

4. `auto`: Similar a `scroll`, agrega una barra de desplazamiento solo si el contenido se desborda. Si no hay desbordamiento, no se muestra la barra de desplazamiento.

## Casos de Uso Comunes

La propiedad `overflow` se utiliza comúnmente en varias situaciones, incluyendo:

- Contenedores con contenido desbordado, como cajas de comentarios o secciones de chat, donde es importante que el usuario pueda ver todo el contenido aunque no quepa en la pantalla.

- Cuadros de diálogo emergentes o ventanas modales que deben mantener todo el contenido visible incluso si no cabe en la ventana actual.

- Menús desplegables o submenús que pueden tener muchas opciones y necesitan una barra de desplazamiento para facilitar la navegación.

- Áreas de contenido en una página web que deben limitar la altura o el ancho, asegurando que el diseño no se rompa y permitiendo que el usuario vea más contenido desplazándose.

## Ejemplo de Uso

A continuación, se muestra un ejemplo de cómo utilizar la propiedad `overflow`:

```css
.container {
  width: 200px;
  height: 100px;
  border: 1px solid #ccc;
  overflow: scroll;
}
```

En este ejemplo, hemos aplicado la propiedad overflow al contenedor con clase .container. Se ha establecido el valor a scroll, lo que significa que si el contenido dentro del contenedor se desborda, se mostrará una barra de desplazamiento para que el usuario pueda desplazarse y ver el contenido oculto.

### Ejemplo 1: Contenedor de Comentarios

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      .comentarios {
        width: 300px;
        height: 200px;
        overflow-y: auto;
      }
    </style>
  </head>
  <body>
    <div class="comentarios">
      <p>Comentario 1</p>
      <p>Comentario 2</p>
      <!-- Agrega más comentarios si es necesario -->
    </div>
  </body>
</html>
```

<!DOCTYPE html>
<html>
<head>
  <style>
    .comentarios {
      width: 300px;
      height: 200px;
      overflow-y: auto;
    }
  </style>
</head>
<body>
  <div class="comentarios">
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
  </div>
</body>
</html>
