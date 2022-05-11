# Promesas en JavaScript 

## ¿Que es?

Una Promesa es un proxy para un valor no necesariamente conocido en el momento que es creada la promesa. Permite asociar manejadores que actuarán asincrónicamente sobre un eventual valor en caso de éxito, o la razón de falla en caso de una falla. Esto permite que métodos asíncronos devuelvan valores como si fueran síncronos: en vez de inmediatamente retornar el valor final, el método asíncrono devuelve una promesa de suministrar el valor en algún momento en el futuro.

> ## Tipos de estado
> - pendiente (pending): estado inicial, no cumplida o rechazada.
> - cumplida (fulfilled): significa que la operación se completó satisfactoriamente.
> - rechazada (rejected): significa que la operación falló.

![Error](https://media.prod.mdn.mozit.cloud/attachments/2014/09/18/8633/51a934a714e191f53e588bff719bc321/promises.png)