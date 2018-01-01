---
layout: default
permalink: /testing/
lang: es
---
# Prueba de Feeds de GTFS

## GTFS

* Use la herramienta [FeedValidator](https://github.com/google/transitfeed/wiki/FeedValidator) para verificar que su archivo de datos de feed coincida con las especificaciones definidas en este documento.
* Use la aplicación [ScheduleViewer](https://github.com/google/transitfeed/wiki/ScheduleViewer) para ver los datos de su feed representados en un mapa. Esto no es representativo de cómo se verán sus datos en otras aplicaciones; es una herramienta básica para las pruebas. Examine las rutas y las programaciones para asegurarse de que la fuente de datos represente correctamente su sistema.
* Conveyal tiene un [validador GTFS](https://github.com/conveyal/gtfs-validator) basado en los módulos OneBusAway GTFS.
* [Especificación del paquete de datos GFTS](https://github.com/Stephen-Gates/GTFS): una [especificación de paquete de datos](https://frictionlessdata.io/specs/data-package/) con validación realizada con Good Tables. Incluye un paquete de datos, esquemas, pruebas y utiliza datos de GTFS de South East Queensland como ejemplo.

### Para desarrolladores de software:

* La biblioteca [gtfs-lib](https://github.com/conveyal/gtfs-lib) de Conveyal contiene funcionalidad de validación.
* El [proyecto Chouette](https://github.com/afimb/chouette) (gestionado por la Agencia Francesa de Información Multimodal y Ticketing) contiene funcionalidad de validación y puede traducir entre varios formatos.

## GTFS-realtime

* [GTFS-realtime Validator](https://github.com/CUTR-at-USF/gtfs-realtime-validator) - una herramienta creada por el Centro para el Transporte Urbano de la Universidad del Sur de Florida para verificar que sus datos de feeds en tiempo real coincidan correctamente con su conjunto de datos GTFS y que contengan toda la información requerida.  Puede ejecutar el [software](https://github.com/CUTR-at-USF/gtfs-realtime-validator#quick-start---run-it-yourself) usted mismo, o puede probar la versión [alojada por USF](http://transittools.forest.usf.edu/).

### Para desarrolladores de software:

* [gtfs-realtime-validator-lib](https://github.com/CUTR-at-USF/gtfs-realtime-validator/tree/master/gtfs-realtime-validator-lib) - biblioteca que puede usar para integrar las reglas de validación en tiempo real de GTFS en su propio software. Consulte el [transit-feed-quality-calculator](https://github.com/CUTR-at-USF/transit-feed-quality-calculator) para ver un ejemplo del uso de la biblioteca gtfs-realtime-validator-lib en otro proyecto.
* [transit-feed-quality-calculator](https://github.com/CUTR-at-USF/transit-feed-quality-calculator) - herramienta que puede ejecutar la validación en tiempo real de GTFS en un gran número de feeds en tiempo real de GTFS, utilizando el directorio de feeds públicos conocidos de [TransitFeeds.com](http://transitfeeds.com/).
