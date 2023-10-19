# Transformaciones en CSS

Las transformaciones CSS nos permiten rotar, torcer, escalar o desplazar los elementos de nuestra p\ágina web. Este tipo de propiedades de CSS3 son muy interesantes para convertir el lenguaje de hojas de estilo en un sistema capaz de realizar todo tipo de efectos visuales. Las dos propiedades que nos sirven para definir las transformaciones son `transform` y `transform-origin`.

## Tipos de transformaciones

### transform-origin

La posición de origen que se utilizará para la transformación es por defecto el lado superior izquierdo del elemento.

### transform

La posición de origen para realizar la transformación es el eje central del elemento.

## Tipos de transformaciones

Las transformaciones que podemos aplicar son las siguientes:

- **Scale**: modifica el tamaño de los elementos. La función `scale()` se establece con uno o dos valores, que representan la cantidad de escala que se aplica en cada dirección: `scale(x)` o `scale(x,y)`. Se define mediante un valor numérico de manera que cuando un valor de coordenadas está fuera del rango [-1, 1], el elemento crece a lo largo de esa dimensión. Cuando está dentro del rango el elemento se encoge.

  Ejemplo:

  ```css
  transform: scale(0.5); /* Escala el elemento a la mitad */
  ```

- **Translate**: cambia la posición del elemento hacia la izquierda, derecha, arriba o abajo. La función `translate()` se establece con uno o dos valores: `translate(x)` o `translate(x,y)`. Los valores `x` e `y` son los vectores de translación en las coordenadas `x` e `y`. Sus valores pueden estar definidos en píxeles, porcentajes, etc.

  Ejemplo:

  ```css
  transform: translate(10px); /* Traslada el elemento 10px hacia la derecha */
  ```

- **Rotate**: gira o rota los elementos en grados: `rotate(v)`.

  Ejemplo:

  ```css
  transform: rotate(45deg); /* Rota el elemento 45 grados */
  ```

- **Skew**: distorsiona los elementos según el ángulo en grados. La función `skew()` se establece con uno o dos valores: `skew(x)` o `skew(x,y)`.

  Ejemplo:

  ```css
  transform: skew(45deg); /* Distorsiona el elemento 45 grados en el eje x */
  ```

- **Matrix**: mueve o transforma los elementos con precisión de píxel. La función `matrix()` se establece con seis valores numéricos: `matrix(a,b,c,d,x,y)`. Los dos últimos valores representan la translación y los primeros la transformación lineal.

  Ejemplo:

  ```css
  transform: matrix(0.5, 0.1, 0.5, 1, 10, -2);
  ```

La propiedad `transform` se usa junto con la propiedad `transition` vista en la sección anterior para que la transformación pueda tener una transición espaciada en el tiempo:

```html
<style>
  .caja1 {
    -webkit-transition: 1s linear;
    transition: 1s linear;
    background-color: gray;
    width: 300px;
    height: 300px;
    color: white;
  }
  .caja1:hover {
    -webkit-transform: scale(0.5);
    transform: scale(0.5);
  }
</style>

<div class="caja1">Caja 1</div>
```

<style>
  .caja1 {
   -webkit-transition: 1s linear;
   transition: 1s linear;
   background-color: gray;
   width: 300px;
   height: 300px;
   color: white;
 }

.caja1:hover {
   -webkit-transform: scale(.5);
   transform: scale(.5);
 }
</style>
<div class="caja1">Caja 1</div>

# Ejemplo

```html
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
    -webkit-transition: 1s linear;
    transition: 1s linear;
  }
  .caja1:hover {
    -webkit-transform: scale(0.5);
    transform: scale(0.5);
  }
  .caja2 {
    background-color: #9b59b6;
    -webkit-transition: 1s linear;
    transition: 1s linear;
  }
  .caja2:hover {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
  .caja3 {
    -webkit-transition: 1s linear;
    transition: 1s linear;
    background-color: #2980b9;
  }
  .caja3:hover {
    -webkit-transform: translate(10%);
    transform: translate(10%);
  }
  .caja4 {
    background-color: #3498db;
    -webkit-transition: 1s linear;
    transition: 1s linear;
  }
  .caja4:hover {
    -webkit-transform: skew(10deg);
    transform: skew(10deg);
  }
  .caja5 {
    background-color: #17a589;
    -webkit-transition: 1s linear;
    transition: 1s linear;
  }
  .caja5:hover {
    -webkit-transform: skewY(10deg);
    transform: skewY(10deg);
  }
  .caja6 {
    background-color: #f1c40f;
    -webkit-transition: 1s linear;
    transition: 1s linear;
  }
  .caja6:hover {
    -webkit-transform: skewX(-5deg);
    transform: skewX(-5deg);
  }
  .caja7 {
    -webkit-transition: 1s linear;
    transition: 1s linear;
    background-color: #e67e22;
  }
  .caja7:hover {
    -webkit-transform: translateX(20px);
    transform: translateX(20px);
  }
  .caja8 {
    -webkit-transition: 1s linear;

    transition: 1s linear;
    background-color: #95a5a6;
  }
  .caja8:hover {
    -webkit-transform: translateY(20px);
    transform: translateY(20px);
  }
  .caja9 {
    -webkit-transition: 1s linear;
    transition: 1s linear;
    background-color: #2c3e50;
  }
  .caja9:hover {
    -webkit-transform: perspective(150px) rotateX(45deg);
    transform: perspective(150px) rotateX(45deg);
  }
  .caja10 {
    -webkit-transition: 1s linear;
    transition: 1s linear;
    background-color: grey;
  }
  .caja10:hover {
    -webkit-transform: perspective(150px) rotateY(45deg);
    transform: perspective(150px) rotateY(45deg);
  }
  .caja11 {
    -webkit-transition: 1s linear;
    transition: 1s linear;
    background-color: black;
  }
  .caja11:hover {
    -webkit-transform: matrix(0.5, 0.1, 0.5, 1, 10, -2);
    transform: matrix(0.5, 0.1, 0.5, 1, 10, -2);
  }
</style>
<div class="container">
  <div class="caja caja1">Scale</div>
  <div class="caja caja2">Rotate</div>
  <div class="caja caja3">Translate</div>
  <div class="caja caja4">Skew</div>
  <div class="caja caja5">SkewY</div>
  <div class="caja caja6">SkewX</div>
  <div class="caja caja7">TranslateX</div>
  <div class="caja caja8">TranslateY</div>
  <div class="caja caja9">Perspective rotate</div>
  <div class="caja caja10">Perspective rotate</div>
  <div class="caja caja11">Matrix</div>
</div>
```

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
    -webkit-transition: 1s linear;
    transition: 1s linear;
  }
  .caja1:hover {
    -webkit-transform: scale(0.5);
    transform: scale(0.5);
  }
  .caja2 {
    background-color: #9b59b6;
    -webkit-transition: 1s linear;
    transition: 1s linear;
  }
  .caja2:hover {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
  .caja3 {
    -webkit-transition: 1s linear;
    transition: 1s linear;
    background-color: #2980b9;
  }
  .caja3:hover {
    -webkit-transform: translate(10%);
    transform: translate(10%);
  }
  .caja4 {
    background-color: #3498db;
    -webkit-transition: 1s linear;
    transition: 1s linear;
  }
  .caja4:hover {
    -webkit-transform: skew(10deg);
    transform: skew(10deg);
  }
  .caja5 {
    background-color: #17a589;
    -webkit-transition: 1s linear;
    transition: 1s linear;
  }
  .caja5:hover {
    -webkit-transform: skewY(10deg);
    transform: skewY(10deg);
  }
  .caja6 {
    background-color: #f1c40f;
    -webkit-transition: 1s linear;
    transition: 1s linear;
  }
  .caja6:hover {
    -webkit-transform: skewX(-5deg);
    transform: skewX(-5deg);
  }
  .caja7 {
    -webkit-transition: 1s linear;
    transition: 1s linear;
    background-color: #e67e22;
  }
  .caja7:hover {
    -webkit-transform: translateX(20px);
    transform: translateX(20px);
  }
  .caja8 {
    -webkit-transition: 1s linear;

    transition: 1s linear;
    background-color: #95a5a6;
  }
  .caja8:hover {
    -webkit-transform: translateY(20px);
    transform: translateY(20px);
  }
  .caja9 {
    -webkit-transition: 1s linear;
    transition: 1s linear;
    background-color: #2c3e50;
  }
  .caja9:hover {
    -webkit-transform: perspective(150px) rotateX(45deg);
    transform: perspective(150px) rotateX(45deg);
  }
  .caja10 {
    -webkit-transition: 1s linear;
    transition: 1s linear;
    background-color: grey;
  }
  .caja10:hover {
    -webkit-transform: perspective(150px) rotateY(45deg);
    transform: perspective(150px) rotateY(45deg);
  }
  .caja11 {
    -webkit-transition: 1s linear;
    transition: 1s linear;
    background-color: black;
  }
  .caja11:hover {
    -webkit-transform: matrix(0.5, 0.1, 0.5, 1, 10, -2);
    transform: matrix(0.5, 0.1, 0.5, 1, 10, -2);
  }
</style>
<div class="container">
  <div class="caja caja1">Scale</div>
  <div class="caja caja2">Rotate</div>
  <div class="caja caja3">Translate</div>
  <div class="caja caja4">Skew</div>
  <div class="caja caja5">SkewY</div>
  <div class="caja caja6">SkewX</div>
  <div class="caja caja7">TranslateX</div>
  <div class="caja caja8">TranslateY</div>
  <div class="caja caja9">Perspective rotate</div>
  <div class="caja caja10">Perspective rotate</div>
  <div class="caja caja11">Matrix</div>
</div>
````
