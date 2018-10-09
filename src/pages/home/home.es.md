---
layout: homepage
permalink: /
lang: es
---
<section id="gtfs-overview" class="jumbotron">
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <h1>General Transit Feed Specification</h1>
      </div>
      <div class="col-md-6">

        <p>El General Transit Feed Specification (GTFS) define un formato estándar abierto para intercambiar el horario de transporte público, la información geográfica y la tarifa. Los "feeds" de GTFS permiten a las agencias de transporte público publicar datos en un formato que se puede consumir y utilizar en las aplicaciones de forma interoperable.</p>

        <p>El formato GTFS (a veces denominado Static GTFS) describe el servicio programado. Su formato compañero GTFS Realtime se utiliza para comunicar predicciones de llegada, posiciones de vehículos y avisos de servicios. En la actualidad, este sitio está principalmente relacionado con el formato estático de GTFS.</p>

      </div>
      <div class="col-md-6">

        <p>Los datos de GTFS están disponibles para más de 1350 proveedores de transporte público, y cientos de aplicaciones utilizan datos GTFS interoperables. Este sitio contiene documentación de GTFS, mejores prácticas y enlaces a herramientas.</p>

        <small><a href="{{ "/gtfs-background" | prepend: site.baseurl }}">Más antecedentes de GTFS</a></small>

      </div>
    </div>
  </div>
</section>

{% include nav.html %}

<section id="how-do-i-start">
  <div class="container">
    <div class="col-xs-12 col-lg-6">
      <h2>Empezar</h2>
      <ol>
        <li>Eche un vistazo a los <a href="{{ "/examples" | prepend: site.baseurl }}">ejemplos de datos de GTFS</a>.</li>
        <li>Cree sus propios feeds utilizando la <a href="{{ "/reference" | prepend: site.baseurl }}">Reference</a> y los <a href="{{ "/best-practices" | prepend: site.baseurl }}">Best Practices</a> como guía. Los <a href="{{ "/best-practices" | prepend: site.baseurl }}">Best Practices</a> de GTFS complementan la referencia de GTFS para proporcionar instrucciones claras para alimentar a los editores y mejorar la coherencia de la estructura de datos en los feeds.</li>
        <li>Pruebe su feed utilizando <a href="{{ "/testing" | prepend: site.baseurl }}">herramientas de validación</a>.</li>
        <li><a href="{{ "/getting-started/#making-a-transit-feed-publicly-available" | prepend: site.baseurl }}">Publique su feed</a>, como se describe en el Centro de ayuda.</li>
      </ol>
      <p>Consulte <a href="{{ "/getting-started" | prepend: site.baseurl }}">la Guía de inicio</a> para obtener una guía más completa</p>
    </div>
  </div>
</section>
