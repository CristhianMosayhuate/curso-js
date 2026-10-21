# Prácticas de JavaScript y DOM

Repositorio con ejercicios de clase y actividades prácticas de JavaScript (manejo de cadenas, objetos, desestructuración) e interacción con el DOM usando HTML y CSS.

## Contenido de la carpeta

### Apuntes y ejemplos base
* `cadenas.js`: Pruebas con strings, uso de backticks (template literals), propiedad `.length` y métodos básicos (`concat`, `repeat`, `replace`, `replaceAll`, `toUpperCase`, `toLowerCase`, `split`, `trim`, `substring`).
* `objeto.js`: Creación de un objeto (`autoMovil`) con un arreglo de objetos anidado. Ejemplos de cómo modificar valores, acceder a elementos del arreglo y agregar nuevas propiedades.
* `desestructuracion.js`: Ejemplo corto extrayendo propiedades de un objeto (`persona`) a variables independientes.
* `web1.html`: Prueba de eventos en el navegador con `addEventListener` (`DOMContentLoaded`, `click` en botón y `focus` en un input).

### Actividades desarrolladas
* `actividad1.js`:
  * Función con bucle `for` para invertir el texto `"senati"` a `"itanes"`.
  * Validación simple de correo usando `.split("@")` para comprobar que solo tenga un arroba.
* `actividad2.js`: Creación del objeto `mascota` y extracción de sus datos en variables mediante desestructuración.
* `actividad3.html` / `actividad3.CSS`: Formulario de cotización de PC o portátil. Tiene validaciones en los inputs, estilos con Flexbox y un script que frena el envío (`preventDefault`) para mostrar los datos en una ventana `confirm()` antes de limpiar el formulario.
* `actividad4.html` / `actividad4.css`: Cuestionario de 5 preguntas de programación web. Carga las preguntas y opciones desde un arreglo de objetos en JS, guarda las respuestas marcadas al retroceder o avanzar y deshabilita los botones de navegación en los extremos.
