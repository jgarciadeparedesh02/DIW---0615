# Tabla de Contenidos

1. [Botones CSS](#botones-css)
2. [Cómo crear botones de tipo alert](#cómo-crear-botones-de-tipo-alert)
   1. [Ejemplo 1](#ejemplo-1)
3. [Cómo crear botones de tipo outline](#cómo-crear-botones-de-tipo-outline)
   1. [Ejemplo 1](#ejemplo-1-1)
4. [Cómo crear botones que ocupen el 100% del contenedor](#cómo-crear-botones-que-ocupen-el-100-del-contenedor)
   1. [Ejemplo 1](#ejemplo-1-2)
5. [Cómo crear un paginado con CSS](#cómo-crear-un-paginado-con-css)
   1. [Ejemplo 1](#ejemplo-1-3)
6. [Cómo crear migas de pan con CSS](#cómo-crear-migas-de-pan-con-css)
   1. [Ejemplo](#ejemplo-2)

# Botones CSS

Los botones son elementos clave en la interfaz de usuario de un sitio web. En este apartado, aprenderemos a crear botones atractivos y funcionales utilizando solo CSS. Exploraremos diferentes estilos y técnicas para diseñar botones de manera efectiva.

## Cómo crear botones de tipo alert

Los botones de tipo "alert" son ideales para resaltar acciones importantes o críticas en tu sitio web. Aquí hay un ejemplo de cómo crearlos:

### Ejemplo 1

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      .alert-button {
        background-color: #e74c3c;
        color: #fff;
        padding: 10px 20px;
        border: none;
        border-radius: 5px;
        cursor: pointer;
      }
      .alert-button:hover {
        background-color: #c0392b;
      }
    </style>
  </head>
  <body>
    <button class="alert-button"></button>
  </body>
</html>
```

#### Resultado de la ejecución

<!DOCTYPE html>
<html>
  <head>
    <style>
        .alert-button {
            background-color: #e74c3c;
            color: #fff;
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }
        .alert-button:hover {
          background-color: #c0392b;
        }
    </style>
  </head>
  <body>
    <button class="alert-button">Aceptar</button>
  </body>
</html>

En este ejemplo, hemos definido un estilo de botón alerta con un fondo rojo y texto blanco. Además, hemos aplicado cambios en el color de fondo cuando el cursor se sitúa sobre el botón para dar retroalimentación visual.

## Cómo crear botones de tipo outline

Los botones de tipo "outline" son ideales cuando deseas botones con bordes definidos y un aspecto limpio. Aquí hay un ejemplo de cómo crearlos:

### Ejemplo 1

```html
<!DOCTYPE html>
<html>
  <head>
    <style>
      .outline-button {
        background-color: transparent;
        border: 2px solid #c0392b;
        color: #c0392b;
        padding: 10px 20px;
        border-radius: 5px;
        cursor: pointer;
      }
      .outline-button:hover {
        background-color: #c0392b;
        color: #fff;
      }
    </style>
  </head>
  <body>
    <button class="outline-button">Aceptar</button>
  </body>
</html>
```

#### Resultado de la ejecución

<!DOCTYPE html>
<html>
  <head>
    <style>
      .outline-button {
        background-color: transparent;
        border: 2px solid #c0392b;
        color: #c0392b;
        padding: 10px 20px;
        border-radius: 5px;
        cursor: pointer;
      }
      .outline-button:hover {
        background-color: #c0392b;
        color: #fff;
      }
    </style>
  </head>
  <body>
    <button class="outline-button">Aceptar</button>
  </body>
</html>

Este estilo de botón tiene un fondo transparente con un borde sólido y texto rojo. El color cambia cuando el cursor se encuentra sobre el botón.

## Cómo crear botones que ocupen el 100% del contenedor

Los botones que ocupan el 100% del contenedor son útiles para crear botones de ancho completo. Aquí tienes un ejemplo:

### Ejemplo 1

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Botones al 100% del Contenedor</title>
    <style>
      .container {
        width: 100%;
        text-align: center;
      }

      .full-width-button {
        width: 100%;
        padding: 10px;
        background-color: #3498db;
        color: #fff;
        border: none;
        border-radius: 5px;
        cursor: pointer;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <button class="full-width-button">Botón de Ancho Completo</button>
    </div>
  </body>
</html>
```

#### Resultado de la ejecución

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Botones al 100% del Contenedor</title>
  <style>
    .container {
      width: 100%;
      text-align: center;
    }
    .full-width-button {
      width: 100%;
      padding: 10px;
      background-color: #3498db;
      color: #fff;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
  </style>
</head>
<body>
  <div class="container">
    <button class="full-width-button">Botón de Ancho Completo</button>
  </div>
</body>
</html>

En este ejemplo, hemos creado un botón que se extiende al 100% del ancho del contenedor padre. Hemos utilizado CSS para establecer el ancho del botón (width: 100%) y darle un fondo de color azul y texto blanco. El botón se centra en el contenedor padre con text-align: center. También hemos aplicado un cursor de tipo "mano" para indicar que es interactivo.

## Cómo crear un paginado con CSS

La creación de un sistema de paginación con CSS es esencial para organizar contenido extenso en múltiples páginas. A continuación, te mostramos cómo puedes hacerlo:

### Ejemplo 1

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <style>
      .pagination {
        display: inline-block;
      }
      .pagination a {
        color: #333;
        float: left;
        padding: 8px 16px;
        text-decoration: none;
      }
      .pagination a.active {
        background-color: #333;
        color: white;
      }
      .pagination a:hover {
        background-color: #ddd;
      }
      .pagination a:first-child {
        border-radius: 5px 0 0 5px;
      }
      .pagination a:last-child {
        border-radius: 0 5px 5px 0;
      }
    </style>
    <title>Paginado con CSS</title>
  </head>
  <body>
    <div class="pagination">
      <a href="#">&laquo;</a>
      <a href="#" class="active">1</a>
      <a href="#">2</a>
      <a href="#">3</a>
      <a href="#">4</a>
      <a href="#">&raquo;</a>
    </div>
  </body>
</html>
```

#### Resultado de la ejecución

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        .pagination {
            display: inline-block;
        }
        .pagination a {
            color: #333;
            float: left;
            padding: 8px 16px;
            text-decoration: none;
        }
        .pagination a.active {
            background-color: #333;
            color: white;
        }
        .pagination a:hover {
            background-color: #ddd;
        }
        .pagination a:first-child {
            border-radius: 5px 0 0 5px;
        }
        .pagination a:last-child {
            border-radius: 0 5px 5px 0;
        }
    </style>
    <title>Paginado con CSS</title>
</head>
<body>
    <div class="pagination">
        <a href="#">&laquo;</a>
        <a href="#" class="active">1</a>
        <a href="#">2</a>
        <a href="#">3</a>
        <a href="#">4</a>
        <a href="#">&raquo;</a>
    </div>
</body>
</html>

## Cómo crear migas de pan con CSS

Las migas de pan son útiles para indicar la ubicación de un usuario en un sitio web. Aquí tienes un ejemplo de cómo crearlas:

### Ejemplo

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Migas de pan con CSS</title>
    <style>
      .breadcrumb {
        font-size: 16px;
        margin: 20px 0;
      }

      .breadcrumb a {
        text-decoration: none;
        color: #333;
      }

      .breadcrumb a:hover {
        text-decoration: underline;
      }

      .breadcrumb span {
        color: #777;
        margin: 0 5px;
      }
    </style>
  </head>
  <body>
    <div class="breadcrumb">
      <a href="#">Inicio</a>
      <span> > </span>
      <a href="#">Categoría</a>
      <span> > </span>
      <span>Página Actual</span>
    </div>
  </body>
</html>
```

#### Resultado de la ejecución

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Migas de pan con CSS</title>
    <style>
        .breadcrumb {
            font-size: 16px;
            margin: 20px 0;
        }
        .breadcrumb a {
            text-decoration: none;
            color: #333;
        }
        .breadcrumb a:hover {
            text-decoration: underline;
        }
        .breadcrumb span {
            color: #777;
            margin: 0 5px;
        }
    </style>
</head>
<body>
    <div class="breadcrumb">
        <a href="#">Inicio</a>
        <span> > </span>
        <a href="#">Categoría</a>
        <span> > </span>
        <span>Página Actual</span>
    </div>
</body>
</html>
