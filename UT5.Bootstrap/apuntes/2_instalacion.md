# Instalación de Bootstrap en tu Proyecto

## Opciones de Instalación

### 1. Descarga Directa desde el Sitio Oficial:

- Accede al [sitio web oficial de Bootstrap](https://getbootstrap.com/).
- Haz clic en el botón de descarga para obtener el archivo ZIP con los recursos de Bootstrap.
- Extrae los archivos y copia la carpeta "dist" en la estructura de tu proyecto.

### 2. Uso a través de CDN (Content Delivery Network):

- Enlaza los archivos de Bootstrap directamente desde un CDN. Agrega los siguientes enlaces en la sección `<head>` de tu archivo HTML:

```html
<!-- CSS de Bootstrap -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">

<!-- Scripts de Bootstrap (jQuery y Popper.js incluidos) -->
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js" integrity="sha384-BBtl+eGJRgqQAUMxJ7pMwbEyER4l1g+O15P+16Ep7Q9Q+zqX6gSbd85u4mG4QzX+" crossorigin="anonymous"></script>
```

- Puedes cambiar las versiones de los enlaces según tus necesidades.

### 3. Instalación a través de Gestor de Paquetes (npm):

- Si estás utilizando un entorno de desarrollo basado en Node.js y npm, puedes instalar Bootstrap como un paquete.

```bash
npm install bootstrap
```

- Posteriormente, puedes importar los archivos de Bootstrap en tu código, ya sea en tu archivo JavaScript o CSS principal.

```javascript
// En tu archivo JavaScript
import 'bootstrap';

// En tu archivo CSS
import 'bootstrap/dist/css/bootstrap.min.css';
```

## Uso Básico en HTML

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Bootstrap demo</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
  </head>

  <body>
    <h1>Hello, world!</h1>


    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-C6RzsynM9kWDrMNeT87bh95OGNyZPhcTNXj1NW7RuBCsyN/o0jlpcV8Qyq46cDfL" crossorigin="anonymous"></script>
  </body>

</html>
```

Estos pasos te permitirán comenzar a utilizar Bootstrap en tu proyecto y aprovechar sus potentes características para el diseño y desarrollo web.