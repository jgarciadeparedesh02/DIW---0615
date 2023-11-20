# Contenidos 
- [Contenidos](#contenidos)
    - [Grid de Bootstrap](#grid-de-bootstrap)
      - [¿Qué es la Grid en Bootstrap?](#qué-es-la-grid-en-bootstrap)
      - [Componentes Principales de la Grid:](#componentes-principales-de-la-grid)
      - [Uso Básico de la Grid:](#uso-básico-de-la-grid)
      - [Sistema de 12 Columnas:](#sistema-de-12-columnas)
      - [Diseño Responsivo:](#diseño-responsivo)
      - [Offset y Order:](#offset-y-order)
      - [Ejemplo Completo:](#ejemplo-completo)
- [Alineando columnas verticalmente](#alineando-columnas-verticalmente)
- [Espaciados entre Columnas (Gutters) en Bootstrap](#espaciados-entre-columnas-gutters-en-bootstrap)
- [Agregar Gutters a una Fila](#agregar-gutters-a-una-fila)
  - [Gutters Responsive](#gutters-responsive)
  - [Eliminar Gutters](#eliminar-gutters)

### Grid de Bootstrap

#### ¿Qué es la Grid en Bootstrap?

La **grid de Bootstrap** es un sistema de diseño flexible y receptivo que organiza el contenido en filas y columnas. Esta estructura se basa en una división de 12 columnas que facilita la creación de diseños adaptables a diferentes dispositivos y tamaños de pantalla.

#### Componentes Principales de la Grid:

1. **Row (Fila):** La fila es el contenedor principal en la grid de Bootstrap. Dentro de una fila, se pueden colocar varias columnas.

2. **Column (Columna):** Cada fila puede contener hasta 12 columnas. Las columnas se utilizan para distribuir y organizar el contenido. Pueden variar en ancho según la necesidad del diseño.

#### Uso Básico de la Grid:

```html
<div class="container">
  <!-- Inicio de la fila -->
  <div class="row">
    <!-- Columna 1 -->
    <div class="col-md-4">
      Contenido de la columna 1
    </div>
    <!-- Columna 2 -->
    <div class="col-md-4">
      Contenido de la columna 2
    </div>
    <!-- Columna 3 -->
    <div class="col-md-4">
      Contenido de la columna 3
    </div>
  </div>
  <!-- Fin de la fila -->
</div>
```

#### Sistema de 12 Columnas:

- La grid se divide en 12 columnas, lo que permite una distribución flexible del contenido.
- Ejemplo: `col-md-4` indica que una columna ocupará 4 de las 12 columnas disponibles en dispositivos medianos (`md`).

#### Diseño Responsivo:

- Bootstrap ofrece clases específicas para controlar el comportamiento de las columnas en diferentes tamaños de pantalla.
- Ejemplo: `col-sm-6` indica que la columna ocupará 6 de las 12 columnas en dispositivos pequeños (`sm`).

#### Offset y Order:

- **Offset:** Puedes usar clases como `offset-md-2` para desplazar una columna hacia la derecha.
  
  ```html
  <div class="col-md-4 offset-md-2">
    Contenido desplazado hacia la derecha
  </div>
  ```

- **Order:** La clase `order-md-2` altera el orden de las columnas en dispositivos medianos.

  ```html
  <div class="col-md-4 order-md-2">
    Este contenido aparecerá segundo en dispositivos medianos
  </div>
  ```

#### Ejemplo Completo:

```html
<div class="container">
  <div class="row">
    <div class="col-md-6 col-lg-4">
      Contenido 1
    </div>
    <div class="col-md-6 col-lg-4">
      Contenido 2
    </div>
    <div class="col-md-6 col-lg-4">
      Contenido 3
    </div>
  </div>
</div>
```

Estos conceptos básicos de la grid de Bootstrap te permitirán comenzar a construir diseños flexibles y receptivos para tus páginas web. Recuerda que Bootstrap ofrece muchas más funcionalidades y opciones avanzadas que puedes explorar según tus necesidades específicas.

# Alineando columnas verticalmente # 

Para alinear las columnas verticalmente, podemos usar la clase `align-items`. El valor de la clase `align-items` indica cómo se alinearán las columnas.

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Ejemplo de grid de Bootstrap</title>
</head>
<body class="container">
  <div class="row">
    <div class="col-6 align-items-start">
      </div>
    <div class="col-6 align-items-center">
      </div>
    <div class="col-6 align-items-end">
      </div>
  </div>
</body>
</html>
```

# Espaciados entre Columnas (Gutters) en Bootstrap

En Bootstrap, los **gutters** se refieren al espacio entre las columnas en una fila. Estos espacios son cruciales para mejorar la legibilidad y el diseño general de la página web. A continuación, se explica cómo trabajar con gutters en Bootstrap.

# Agregar Gutters a una Fila

Para agregar espaciados entre las columnas, simplemente utiliza la clase `.gutter` en tu fila. Bootstrap proporciona clases específicas para diferentes tamaños de gutters, como `g-2`, `g-3`, etc.

Ejemplo:

```html
<div class="row g-3">
  <div class="col-md-4">
    Contenido de la columna 1
  </div>
  <div class="col-md-4">
    Contenido de la columna 2
  </div>
  <div class="col-md-4">
    Contenido de la columna 3
  </div>
</div>
```

En este ejemplo, `g-3` establece un gutter de tamaño 3 entre las columnas de la fila.

## Gutters Responsive

Puedes hacer que los gutters sean responsivos utilizando clases específicas para diferentes tamaños de pantalla, como `g-md-2`, `g-lg-4`, etc.

Ejemplo:

```html
<div class="row g-2 g-md-3 g-lg-4">
  <div class="col-md-4">
    Contenido de la columna 1
  </div>
  <div class="col-md-4">
    Contenido de la columna 2
  </div>
  <div class="col-md-4">
    Contenido de la columna 3
  </div>
</div>
```

En este caso, el gutter será de tamaño 2 por defecto, de tamaño 3 en dispositivos medianos (`md`), y de tamaño 4 en dispositivos grandes (`lg`).

## Eliminar Gutters

Si deseas eliminar los gutters y tener las columnas sin espacio entre ellas, puedes usar la clase `.g-0`.

Ejemplo:

```html
<div class="row g-0">
  <div class="col-md-4">
    Contenido de la columna 1
  </div>
  <div class="col-md-4">
    Contenido de la columna 2
  </div>
  <div class="col-md-4">
    Contenido de la columna 3
  </div>
</div>
```

Estos son los conceptos básicos para trabajar con gutters en Bootstrap. Ajusta los tamaños según las necesidades de tu diseño y la apariencia visual que desees lograr.