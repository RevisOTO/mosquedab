# EVENTOS DE PROPAGACION Y CAPTURA

## Propagacion
> Cuando un evento ocurre en un elemento, este primero ejecuta los manejadores que tiene asignados, luego los manejadores de su padre, y así hasta otros ancestros. Una de las intenciones de JavaScript con la creación del patrón de propagación de eventos era facilitar la captura de eventos de una fuente, el elemento padre, en lugar de configurar un controlador de eventos en cada elemento secundario interno.


## Captura
> Antes de que el objeto del evento alcance el objetivo del evento, el objeto del evento debe propagarse desde la ventana a través del nodo ancestro del objetivo hasta el objetivo del evento. Esta fase es lo que llamamos la fase de captura. Los oyentes de eventos registrados en esta etapa deben procesar los eventos antes de llegar a su destino.

> - Fase de captura
> - Fase de objetivo
> - Fase de propagacion

![Error](https://i.imgur.com/0FlPrgk.png)

## Propagacion
> Cuando un evento ocurre en un elemento, este primero ejecuta los manejadores que tiene asignados, luego los manejadores de su padre, y así hasta otros ancestros. 

![Error](https://i.imgur.com/GIQctQT.png)

> Este proceso se conoce como “propagación” porque los eventos “se propagan” desde el elemento más al interior, a través de los padres, como una burbuja en el agua.

> ## Como detener la propagacion
> Una propagación de evento empieza desde el elemento objetivo hacia arriba. Normalmente este continúa hasta <html> y luego hacia el objeto document, algunos eventos incluso
> alcanzan window, llamando a todos los manejadores en el camino.
>
>Pero cualquier manejador podría decidir que el evento se ha procesado por completo y detener su propagación.
>
>El método para esto es event.stopPropagation().

![Error](https://i.imgur.com/if0OgEX.png)