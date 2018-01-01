---
layout: default
permalink: /getting-started/
lang: es
---
# Empezando

## General

Un feed de GTFS se compone de una serie de archivos de texto recopilados en un archivo ZIP. Cada archivo modela un aspecto particular de la información de tránsito: paradas, rutas, viajes y otros datos de programación. Los detalles de cada archivo se definen en la referencia de GTFS.

Consulte [ejemplos de GTFS]( {{ "/examples" | prepend: site.baseurl }} ) para feeds de modelos que ilustran el uso de GTFS. Una agencia de tránsito puede producir un feed GTFS para compartir su información de transporte público con los desarrolladores, que escriben herramientas que consumen feeds GTFS para incorporar información de transporte público en sus aplicaciones. GTFS se puede utilizar en una variedad de aplicaciones y procesos (consulte [Aplicaciones GTFS](#gtfs-applications), a continuación).

## Hacer pública una fuente pública de tránsito

Muchas [aplicaciones](#gtfs-applications) son compatibles con los datos en el formato GTFS. La forma más sencilla de hacer público un feed es alojarlo en un servidor web. Los desarrolladores y las aplicaciones que consumen pueden descargar datos GTFS de la URL especificada.

El mejor método para compartir rápidamente un conjunto de datos de GTFS con un gran número de desarrolladores es registrar la URL del archivo zip a través de sitios web que sirven como los principales directorios globales de datos de GTFS de acceso público:

* [TransitFeeds.com](https://transitfeeds.com/) ([enviar alimentación de datos](https://github.com/TransitFeeds/TransitFeeds-Public/issues))
* [Registro de feed de Transitland](https://transit.land/feed-registry/) ([enviar feed de datos](https://transit.land/feed-registry/feeds/new))
* [TransitWiki.org](https://www.transitwiki.org/TransitWiki/index.php/Publicly-accessible_public_transportation_data) - “Publicly-accessible public transportation data”

## Aplicaciones GTFS

Un directorio parcial de las muchas aplicaciones que consumen y utilizan los datos de GTFS se mantiene en [TransitWiki](https://www.transitwiki.org/TransitWiki/index.php/Category:GTFS-consuming_applications).

Muchos tipos de aplicaciones consumen datos de GTFS, que incluyen:

* [Planificación de viajes y mapas](https://www.transitwiki.org/TransitWiki/index.php/Category:Trip-planning_%26_navigation_applications): aplicaciones que ayudan a planificar los viajes de un lugar a otro utilizando el transporte público y otros modos
* [Creación de horarios](https://www.transitwiki.org/TransitWiki/index.php/Category:Timetable_generation_software): para crear una lista impresa del cronograma de la agencia en un formato de calendario
* [Accesibilidad](https://www.transitwiki.org/TransitWiki/index.php/Category:Accessibility_devices_and_applications): aplicaciones que ayudan a los pasajeros en tránsito con discapacidades a usar el transporte público
* [Planificación y análisis](https://www.transitwiki.org/TransitWiki/index.php/Category:Network_planning_software): aplicaciones que ayudan a los profesionales de tránsito a evaluar la red de tránsito actual o planificada, incluida la previsión de pasajeros
* [Información de tránsito en tiempo real](https://www.transitwiki.org/TransitWiki/index.php/Category:Real-time_applications): aplicaciones que usan datos de GTFS junto con una fuente de información en tiempo real para proporcionar información de llegada estimada a los pasajeros de tránsito

* [Pantallas de información pública](https://www.transitwiki.org/TransitWiki/index.php/Category:Public_information_displays): pantallas electrónicas para mostrar información de horarios, avisos de servicio, llegadas en tiempo real y otra información

Ver también: [aplicaciones y servicios para crear y mantener datos de GTFS](https://www.transitwiki.org/TransitWiki/index.php/General_Transit_Feed_Specification#Creating_and_Maintaining_a_GTFS_Dataset).

## Obtener ayuda y comunidad

### Listas de Correo

Hay una serie de listas de correo que pueden ser buenos recursos cuando tiene preguntas sobre datos de transporte público, software, formatos como GTFS y GTFS, en tiempo real, y otros asuntos:

* [Cambios de GTFS](https://groups.google.com/group/gtfs-changes): discusión de la propuesta para extender la especificación de GTFS.
* [GTFS Slack](https://gtfs.slack.com/): Slack "organización" en con canales dedicados a temas GTFS. [Solicite una invitación a gtfs.slack.com aquí](https://gtfs.herokuapp.com/).
* [Desarrolladores de tránsito](https://groups.google.com/group/transit-developers): discusiones generales de desarrolladores de tránsito. Muchas agencias de tránsito también tienen sus propias listas de correo electrónico para desarrolladores específicas para la agencia. Por ejemplo:
  * [NYC MTA](https://groups.google.com/group/mtadeveloperresources)
  * [Portland, OR](https://groups.google.com/group/transit-developers-pdx)
  * [BART - San Francisco, CA](https://groups.google.com/group/bart-developers)
  * [MassDOT](https://groups.google.com/group/massdotdevelopers)
  * [Región de Atlanta, GA](https://groups.google.com/forum/#!forum/atl-transit-developers)
  * [511 Recursos para Desarrolladores de San Francisco Bay Area](https://groups.google.com/forum/#!forum/511sfbaydeveloperresources)
* Consulte con su agencia de tránsito local para ver si tienen una lista de correo propia.
