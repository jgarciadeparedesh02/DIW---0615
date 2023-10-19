# Transiciones en CSS

Las transiciones en CSS nos permiten aplicar un cambio de estilo gradual a los elementos del documento HTML. Además, nos ofrecen la ventaja de poder especificar el tiempo para que se produzca la transformación entre estilos, de esta forma podríamos utilizarlas para dar un efecto de animación.

## Sintaxis de Transiciones

Todos los parámetros para aplicar las transiciones se pueden establecer en una sola línea y también mediante propiedades por separado. Veamos cómo se implementa en una sola línea.

**Formato:**
transition: [propiedad a modificar] [Duración] [Tipo de animación] [Retardo];

```css
.caja1 {
  background-color: #c0392b;
  transition: background-color 1s linear;
}
.caja1:hover {
  background-color: #3f51b5;
}
```

## Significado de las propiedades

**Propiedades a modificar:** Algunas de las propiedades que podemos modificar utilizando transiciones son las siguientes:

- all
- background-color
- border
- border-radius
- color
- top
- bottom
- left
- right
- box-shadow
- width
- height
- line-height
- margin
- opacity
- word-spacing
- letter-spacing
- fill
- padding
- stroke
- text-shadow
- vertical-align
- visibility
- z-index

**Duración en segundos:** Se debe especificar el número de segundos que va a durar la animación. Por ejemplo: 3s (3 segundos).

**Tipo de animación:** Esta propiedad es opcional y sirve para indicar la velocidad de la animación. Algunas de las posibilidades son las siguientes:

- linear: la velocidad de la animación es uniforme en todo el recorrido.
- ease: la velocidad se acelera al inicio, luego se retarda un poco y se acelera al final de nuevo.
- ease-in: la animación empieza lentamente y va aumentando progresivamente.
- ease-out: la animación empieza muy rápida y va descendiendo progresivamente.
- ease-in-out: la animación empieza y acaba lentamente, y es en la parte central del recorrido donde la velocidad es más rápida.

**Retardo:** Tiempo (en segundos) que el navegador esperará antes de poner en marcha la animación. Se especifica el número de segundos a esperar seguido de la "s" (ejemplo: 1s).

Recuerda utilizar la extensión que te facilita la tarea de crear los prefijos para navegadores.

## Ejemplo

Crea un contenedor de 180 píxeles de ancho y de alto, incluye un texto en su interior y aplícale un color de fondo. Realiza las siguientes transiciones cuando el usuario pase por encima del contenedor el puntero del ratón:

- Cambia el color de fondo del contenedor.
- Cambia el tamaño de las letras del contenedor.
- Cambia el color de las letras del contenedor.
- Cambia el valor del interlineado.
- Cambia el valor de la propiedad border-radius del contenedor.
- Cambia el valor de la sombra del contenedor.
- Cambia la opacidad del contenedor.
- Cambia tres propiedades más a tu elección.

```html
<style>
  .container {
    position: relative;
  }
  .caja {
    width: 180px;
    height: 180px;
    background-color: #30b037;
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
    -webkit-transition: background-color 1s linear;
    transition: background-color 1s linear;
  }
  .caja1:hover {
    background-color: #3f51b5;
  }
  .caja2 {
    background-color: #9b59b6;
    -webkit-transition: font-size 1s ease;
    transition: font-size 1s ease;
  }
  .caja2:hover {
    font-size: 28px;
  }
  .caja3 {
    background-color: #2980b9;
    -webkit-transition: color 1s linear;
    transition: color 1s linear;
  }
  .caja3:hover {
    color: yellow;
  }
  .caja4 {
    background-color: #3498db;
    -webkit-transition: 1s linear;
    transition: 1s linear;
  }
  .caja4:hover {
    line-height: 300px;
  }
  .caja5 {
    border-radius: 0px;
    background-color: #17a589;
    -webkit-transition: 1s linear;
    transition: 1s linear;
  }
  .caja5:hover {
    border-radius: 20px;
  }
  .caja6 {
    -webkit-transition: 1s linear;
    transition: 1s linear;
    background-color: #f1c40f;
  }
  .caja6:hover {
    -webkit-box-shadow: 10px 10px 14px 2px rgba(0, 0, 0, 0.47);
    box-shadow: 10px 10px 14px 2px rgba(0, 0, 0, 0.47);
  }
  .caja7 {
    -webkit-transition: 1s linear;
    transition: 1s linear;
    background-color: #e67e22;
  }
  .caja7:hover {
    opacity: 0.3;
  }
  .caja8 {
    -webkit-transition: 1s linear;
    transition: 1s linear;
    background-color: #95a5a6;
  }
  .caja8:hover {
    border-style: solid;
    border-color: #95a5a6;
    border-color: #000;
  }
  .caja9 {
    -webkit-transition: 1s linear;
    transition: 1s linear;
    background-color: #2c3e50;
  }
  .caja9:hover {
    margin: 80px;
  }
  .caja10 {
    -webkit-transition: 1s linear;
    transition: 1s linear;
    background-color: black;
  }
  .caja10:hover {
    padding: 30px;
  }
</style>
<div class="container">
  <div class="caja caja1">Background</div>
  <div class="caja caja2">Font-size</div>
  <div class="caja caja3">Color</div>
  <div class="caja caja4">Line-height</div>
  <div class="caja caja5">Border-radius</div>
  <div class="caja caja6">Box-shadow</div>
  <div class="caja caja7">Opacity</div>
  <div class="caja caja8">Border</div>
  <div class="caja caja9">Margin</div>
  <div class="caja caja10">Padding</div>
</div>
```

<style>
  .container{
    position: relative;
}
.caja{
  width: 180px;
  height: 180px;
  background-color: #30B037;
  color: #FFF;
  text-align: center;
  line-height: 180px;
  margin: 15px;
  float: left;
  font-size: 18px;
  font-family: Arial;
}
.caja1{
  background-color: #C0392B;
  -webkit-transition: background-color 1s linear;
  transition: background-color 1s linear;
}
.caja1:hover{
  background-color: #3F51B5;
}
.caja2{
  background-color: #9B59B6;
  -webkit-transition: font-size 1s ease;
  transition: font-size 1s ease;
}
.caja2:hover{
  font-size: 28px;
}
.caja3{
  background-color: #2980B9;
  -webkit-transition: color 1s linear;
  transition: color 1s linear;
}
.caja3:hover{
  color: yellow;
}
.caja4{
  background-color: #3498DB;
  -webkit-transition: 1s linear;
  transition: 1s linear;
}
.caja4:hover{
  line-height: 300px;
}
.caja5{
  border-radius: 0px;
  background-color: #17A589;
  -webkit-transition: 1s linear;
  transition: 1s linear
}
.caja5:hover{
  border-radius: 20px;
}
.caja6{
  -webkit-transition: 1s linear;
  transition: 1s linear;
  background-color: #F1C40F;
}
.caja6:hover{
  -webkit-box-shadow: 10px 10px 14px 2px rgba(0,0,0,0.47);
  box-shadow: 10px 10px 14px 2px rgba(0,0,0,0.47);
}
.caja7{
  -webkit-transition: 1s linear;
  transition: 1s linear;
  background-color: #E67E22;
}
.caja7:hover{
  opacity: 0.3;
}
.caja8{
  -webkit-transition: 1s linear;
  transition: 1s linear;
  background-color: #95A5A6;
}
.caja8:hover{
  border-style: solid;
  border-color: #95A5A6;
  border-color: #000;
}
.caja9{
  -webkit-transition: 1s linear;
  transition: 1s linear;
  background-color: #2C3E50;
}
.caja9:hover{
  margin: 80px;
}
.caja10{
  -webkit-transition: 1s linear;
  transition: 1s linear;
  background-color: black;
}
.caja10:hover{
  padding: 30px;
}
</style>
<div class="container">
  <div class="caja caja1">Background</div>
  <div class="caja caja2">Font-size</div>
  <div class="caja caja3">Color</div>
  <div class="caja caja4">Line-height</div>
  <div class="caja caja5">Border-radius</div>
  <div class="caja caja6">Box-shadow</div>
  <div class="caja caja7">Opacity</div>
  <div class="caja caja8">Border</div>
  <div class="caja caja9">Margin</div>
  <div class="caja caja10">Padding</div>
</div>
