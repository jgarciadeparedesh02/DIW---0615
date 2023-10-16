# Tabla de Contenidos

1. [Funciones Matemáticas en CSS](#funciones-matemáticas-en-css)
2. [Ejemplos útiles](#ejemplos-útiles)
   1. [Ejemplo 1: Calculando el ancho de un elemento en porcentaje](#ejemplo-1-calculando-el-ancho-de-un-elemento-en-porcentaje)
   2. [Ejemplo 2: Calculando el alto de un elemento en viewport units](#ejemplo-2-calculando-el-alto-de-un-elemento-en-viewport-units)
   3. [Ejemplo 3: Calculando el margen derecho en función de una variable](#ejemplo-3-calculando-el-margen-derecho-en-función-de-una-variable)
   5. [Ejemplo 4: Personalizando la barra de navegación con calc](#ejemplo-4-personalizando-la-barra-de-navegación-con-calc)

# Funciones Matemáticas en CSS

Las funciones matemáticas en CSS permiten realizar cálculos y operaciones matemáticas directamente en propiedades CSS. Esto es útil para crear diseños y estilos más flexibles y responsivos. A continuación, se presentan algunas de las funciones matemáticas más comunes en CSS:

## `abs()`

- **Descripción:** Devuelve el valor absoluto de un número.
- **Ejemplo:** `abs(-10)` = 10

## `sin()`

- **Descripción:** Devuelve el seno de un ángulo.
- **Ejemplo:** `sin(45deg)` ≈ 0.71

## `cos()`

- **Descripción:** Devuelve el coseno de un ángulo.
- **Ejemplo:** `cos(60deg)` = 0.5

## `tan()`

- **Descripción:** Devuelve la tangente de un ángulo.
- **Ejemplo:** `tan(30deg)` ≈ 0.58

## `sqrt()`

- **Descripción:** Devuelve la raíz cuadrada de un número.
- **Ejemplo:** `sqrt(16)` = 4

## `pow()`

- **Descripción:** Eleva un número a una potencia.
- **Ejemplo:** `pow(2, 3)` = 8

## `min()`

- **Descripción:** Devuelve el valor mínimo entre dos números.
- **Ejemplo:** `min(10, 5)` = 5

## `max()`

- **Descripción:** Devuelve el valor máximo entre dos números.
- **Ejemplo:** `max(10, 5)` = 10

## `random()`

- **Descripción:** Devuelve un número aleatorio entre 0 y 1.
- **Ejemplo:** `random()` ≈ 0.35

## `floor()`

- **Descripción:** Devuelve el valor entero menor o igual.
- **Ejemplo:** `floor(3.8)` = 3

## `ceil()`

- **Descripción:** Devuelve el valor entero mayor o igual.
- **Ejemplo:** `ceil(3.2)` = 4

## `round()`

- **Descripción:** Devuelve el valor redondeado al entero más cercano.
- **Ejemplo:** `round(3.7)` = 4

## `clamp()`

- **Descripción:** Limita un valor dentro de un rango.
- **Ejemplo:** `clamp(10, 5, 8)` = 8

## `calc()`

- **Descripción:** Realiza cálculos matemáticos en propiedades CSS.
- **Ejemplo:** `width: calc(100% - 20px)`

## `attr()`

- **Descripción:** Obtiene el valor de un atributo HTML y lo utiliza en CSS.

Estas funciones matemáticas son útiles para crear diseños y estilos más dinámicos y adaptativos en CSS, lo que permite un mayor control sobre el diseño de tu sitio web.

## Ejemplos útiles

### Ejemplo 1: Calculando el ancho de un elemento en porcentaje

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      .container {
        width: 300px;
        background-color: lightgray;
      }
      .box {
        width: calc(100% - 40px);
        background-color: lightblue;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="box">
        Este elemento tiene un ancho del 100% del contenedor menos 40px.
      </div>
    </div>
  </body>
</html>
```

#### Resultado de la ejecución

<!DOCTYPE html>
<html>
<head>
<style>
  .container {
    width: 300px;
    background-color: lightgray;
  }
  .box {
    width: calc(100% - 40px);
    background-color: lightblue;
  }
</style>

</head>
<body>
  <div class="container">
    <div class="box">Este elemento tiene un ancho del 100% del contenedor menos 40px.</div>
  </div>
</body>
</html>

### Ejemplo 2: Calculando el alto de un elemento en viewport units

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      .box-2 {
        height: calc(100vh - 100px);
        background-color: lightblue;
      }
    </style>
  </head>
  <body>
    <div class="box-2">
      Este elemento tiene un alto del 100% del viewport height menos 100px.
    </div>
  </body>
</html>
```

#### Resultado de la ejecución

<!DOCTYPE html>
<html>
<head>
<style>
  .box-2 {
    height: calc(100vh - 100px);
    background-color: lightblue;
  }
</style>
</head>
<body>
  <div class="box-2">Este elemento tiene un alto del 100% del viewport height menos 100px.</div>
</body>
</html>

### Ejemplo 3: Calculando el margen derecho en función de una variable

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      .box-3 {
        margin-right: calc(2 * var(--ancho) - 50px);
        background-color: lightblue;
      }
    </style>
  </head>
  <body>
    <div class="box-3" style="--ancho: 100px;">
      Este elemento tiene un margen derecho calculado en función de la variable
      --ancho.
    </div>
  </body>
</html>
```

#### Resultado de la ejecución

<!DOCTYPE html>
<html>
<head>
<style>
  .box-3 {
    margin-right: calc(2 * var(--ancho) - 50px);
    background-color: lightblue;
  }
</style>
</head>
<body>
  <div class="box-3" style="--ancho: 100px;">Este elemento tiene un margen derecho calculado en función de la variable --ancho.</div>
</body>
</html>

### Ejemplo 4: Personalizando la barra de navegación con calc

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      .navbar {
        background-color: #333;
        color: white;
        padding: 10px;
        width: calc(100% - 20px);
        display: flex;
      }

      .menu-item {
        margin: 0 10px;
      }
    </style>
  </head>
  <body>
    <div class="navbar">
      <div class="menu-item">Inicio</div>
      <div class="menu-item">Acerca de</div>
      <div class="menu-item">Servicios</div>
      <div class="menu-item">Contacto</div>
    </div>
  </body>
</html>
```

#### Resultado de la ejecución

<!DOCTYPE html>
<html>
<head>
<style>
  .navbar {
    background-color: #333;
    color: white;
    margin: 0 auto;
    width: calc(100% - 40px);
    display: flex;
  }
  .menu-item {
    margin: 0 10px;
  }
</style>
</head>
<body>
  <div class="navbar">
    <div class="menu-item">Inicio</div>
    <div class="menu-item">Acerca de</div>
    <div class="menu-item">Servicios</div>
    <div class="menu-item">Contacto</div>
  </div>
</body>
</html>
