# Tabla de Contenidos

- [Selector de Atributos en CSS](#selector-de-atributos-en-css)
  - [Sintaxis de un Selector de Atributos](#sintaxis-de-un-selector-de-atributos)
  - [Ejemplos de Selector de Atributos](#ejemplos-de-selector-de-atributos)
- [Usos Comunes de Selectores de Atributos](#usos-comunes-de-selectores-de-atributos)
- [Ejemplos de Selector de Atributos](#ejemplos-de-selector-de-atributos)

# Selector de Atributos en CSS

Los selectores de atributos en CSS son una poderosa herramienta que te permite seleccionar elementos HTML basándote en los valores de sus atributos. Esto es especialmente útil cuando deseas aplicar estilos a elementos que cumplen ciertas condiciones o tienen atributos específicos.

## Sintaxis de un Selector de Atributos

La sintaxis básica de un selector de atributos es la siguiente:

```css
elemento[atributo="valor"] {
  /* Estilos a aplicar */
}
```

- `elemento`: Representa el elemento HTML que deseas seleccionar.
- `atributo`: El atributo que deseas utilizar como criterio de selección.
- `valor`: El valor específico del atributo que quieres seleccionar.

### Ejemplos de Selector de Atributos

A continuación, te presentamos algunos ejemplos de cómo puedes utilizar los selectores de atributos en CSS:

| Atributo           | Descripción                                                                  |
| ------------------ | ---------------------------------------------------------------------------- | 
| [href]             | El atributo href existe en la etiqueta.                                      |
| [href="#"]         | El atributo href existe y su valor es igual al texto #.                      |
| [href\*="eniun"]   | El atributo href existe y su valor contiene el texto eniun.                  |
| [href^="https://"] | El atributo href existe y su valor comienza por https://.                    |
| [href$=".pdf"]     | El atributo href existe y su valor termina por .pdf (es un enlace a un PDF). |
| [class="sample"]   | El atributo class contiene una lista de valores, que contiene sample.         |
| [lang="es"]        | El atributo lang contiene una lista de valores, donde alguno empieza por es-. |

## Usos Comunes de Selectores de Atributos

Los selectores de atributos son útiles en varios escenarios, como:

- Estilizar enlaces que abren en una nueva ventana o pestaña.
- Aplicar estilos a elementos que contienen ciertas palabras clave en sus atributos.
- Personalizar la apariencia de elementos de formulario con tipos específicos.
- Seleccionar elementos con atributos personalizados para agregarles estilos especiales.

Estos selectores te brindan un mayor control sobre la apariencia de tu sitio web al permitirte dirigirte a elementos específicos basados en sus atributos y valores. Utilízalos con moderación y de manera estratégica para mantener tu código CSS organizado y eficiente.

## Ejemplos de Selector de Atributos

A continuación, te presentamos algunos ejemplos de cómo puedes utilizar los selectores de atributos en CSS:

1. Seleccionar todos los enlaces que tengan un atributo target:

```css
a[target] {
  /* Estilos para enlaces con atributo target */
}
```

2. Seleccionar todos los elementos con el atributo href que contenga la palabra "ejemplo" en su valor:

```css
*[href*="ejemplo"] {
  /* Estilos para elementos con atributo href que contenga "ejemplo" */
}
```

3. Seleccionar todos los elementos input con el atributo type igual a "checkbox":

```css
input[type="checkbox"] {
  /* Estilos para inputs de tipo checkbox */
}
```

4. Seleccionar todos los elementos con atributo data- independientemente de su valor:

```css
*[data-] {
  /* Estilos para elementos con atributo data- */
}
```
