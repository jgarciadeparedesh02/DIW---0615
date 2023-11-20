Los `containers` son el elemento de diseño más básico en Bootstrap. Los containers se utilizan para contener, rellenar y, en ocasiones, centrar el contenido dentro de ellos. Aunque los containers pueden anidarse, la mayoría de los diseños no requieren un container anidado.

Bootstrap cuenta con tres tipos diferentes de containers:

- `.container`, que establece un ancho máximo en cada punto de quiebre receptivo.
- `.container-{breakpoint}`, que tiene un ancho del 100% hasta el punto de quiebre especificado.
- `.container-fluid`, que tiene un ancho del 100% en todos los puntos de quiebre.

La tabla a continuación ilustra cómo se compara el ancho máximo de cada container con respecto a los originales `.container` y `.container-fluid` en cada punto de quiebre.

| Tamaño                  | Extra Pequeño | Pequeño | Mediano | Grande | Extra Grande | Extra Extra Grande |
|-------------------------|---------------|---------|---------|--------|--------------|--------------------|
| `.container`            | 100%          | 540px   | 720px   | 960px  | 1140px       | 1320px             |
| `.container-sm`         | 100%          | 540px   | 720px   | 960px  | 1140px       | 1320px             |
| `.container-md`         | 100%          | 100%    | 720px   | 960px  | 1140px       | 1320px             |
| `.container-lg`         | 100%          | 100%    | 100%    | 960px  | 1140px       | 1320px             |
| `.container-xl`         | 100%          | 100%    | 100%    | 100%   | 1140px       | 1320px             |
| `.container-xxl`        | 100%          | 100%    | 100%    | 100%   | 100%         | 1320px             |
| `.container-fluid`      | 100%          | 100%    | 100%    | 100%   | 100%         | 100%               |

Estos containers son esenciales para crear estructuras de página flexibles y receptivas en Bootstrap. Al entender cómo funcionan y cómo se comportan en diferentes tamaños de pantalla, puedes diseñar de manera efectiva interfaces web que se adapten a una variedad de dispositivos.