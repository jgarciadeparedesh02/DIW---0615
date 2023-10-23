# Propiedad @property en CSS

La propiedad `@property` en CSS se utiliza para definir propiedades personalizadas que pueden ser utilizadas para crear valores personalizados en las hojas de estilo. Esto permite a los desarrolladores definir sus propias propiedades CSS con comportamientos y tipos de datos específicos. A continuación, se detallan los aspectos clave de la propiedad `@property`:

## Sintaxis

```css
@property --nombre-de-propiedad {
    syntax: <tipo-de-dato>;
    inherits: [true | false];
    initial-value: <valor-inicial>;
}
```

- `--nombre-de-propiedad`: El nombre de la propiedad personalizada que deseas definir. Debe comenzar con dos guiones (--).

- `syntax`: Define el tipo de datos esperado para el valor de la propiedad. Puedes utilizar tipos de datos como `<length>`, `<color>`, `<string>`, `<angle>`, etc.

- `inherits`: Especifica si la propiedad hereda valores de su elemento padre. Puede ser `true` o `false`. Si se establece en `true`, la propiedad hereda el valor del elemento padre si no se define en el elemento actual.

- `initial-value`: Establece el valor inicial de la propiedad personalizada. Puedes proporcionar un valor específico, como `0`, `auto`, `#ff0000`, `10px`, etc.

## Ejemplo de Uso

Supongamos que deseamos crear una propiedad personalizada llamada `--fondo-principal` que permita establecer el color de fondo principal de un sitio web y que herede el valor del elemento padre. Podría verse de la siguiente manera:

```css
@property --fondo-principal {
    syntax: <color>;
    inherits: true;
    initial-value: #ffffff; /* Valor inicial: blanco */
}
```

Luego, en otro lugar de la hoja de estilo, podemos utilizar esta propiedad personalizada:

```css
body {
    --fondo-principal: #3498db; /* Establece el fondo principal como azul */
    background-color: var(--fondo-principal); /* Usando la propiedad personalizada */
}
```

En este ejemplo, hemos definido la propiedad personalizada `--fondo-principal` para controlar el color de fondo principal del sitio web. La propiedad `inherits` permite que la propiedad se herede del elemento padre, y `initial-value` proporciona un valor predeterminado en caso de que no se especifique uno.

La propiedad personalizada se utiliza más tarde en el selector `body` para establecer el color de fondo del elemento `body` utilizando la función `var()` para acceder al valor de la propiedad personalizada.

La propiedad `@property` ofrece una manera flexible de personalizar y reutilizar valores en hojas de estilo CSS, lo que puede ser útil para mantener un código más limpio y legible.

