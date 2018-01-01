---
layout: homepage
permalink: /
lang: de
---
<section id="gtfs-overview" class="jumbotron">
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <h1>General Transit Feed Specification</h1>
      </div>
      <div class="col-md-6">

        <p>Das General Transit Feed Specification (GTFS) definiert ein offenes Standardformat für den Austausch von Fahrplan-, geografischen und Tarifinformationen für den öffentlichen Verkehr. GTFS-Feeds ermöglichen es den öffentlichen Verkehrsunternehmen, Daten in einem Format zu veröffentlichen, das in Anwendungen interoperabel konsumiert und genutzt werden kann.</p>

        <p>Das GTFS-Format (manchmal als GTFS Static bezeichnet) beschreibt den geplanten Dienst. Sein begleitendes GTFS Realtime-Format wird verwendet, um Ankunftsvorhersagen, Fahrzeugpositionen und Diensthinweise zu kommunizieren. Derzeit befasst sich diese Seite hauptsächlich mit dem statischen Format von GTFS.</p>

      </div>
      <div class="col-md-6">

        <p>GTFS-Daten sind für mehr als 1350 ÖPNV-Anbieter verfügbar, und Hunderte von Anwendungen nutzen interoperable GTFS-Daten. Diese Website enthält GTFS-Dokumentation, Best Practices und Links zu Tools.</p>

        <small><a href="{{ "/gtfs-background" | prepend: site.baseurl }}">Mehr GTFS-Hintergrund</a></small>

      </div>
    </div>
  </div>
</section>

{% include nav.html %}

<section id="how-do-i-start">
  <div class="container">
    <div class="col-xs-12 col-lg-6">
      <h2>Wie beginne ich?</h2>
      <ol>
        <li>Sehen Sie sich die <a href="{{ "/examples" | prepend: site.baseurl }}">GTFS-Datenbeispiele</a> an.</li>
        <li>Erstellen Sie Ihre eigenen Feeds anhand der <a href="{{ "/reference" | prepend: site.baseurl }}">Reference</a> und der <a href="{{ "/best-practices" | prepend: site.baseurl }}">Best Practices</a> alt Leitfaden. <a href="{{ "/best-practices" | prepend: site.baseurl }}">GTFS Best Practices</a> ergänzen die GTFS Reference, um den Publishern klare Anweisungen zu geben und die Konsistenz der Datenstruktur in Feeds zu verbessern.</li>
        <li>Testen Sie Ihren Feed mithilfe von <a href="{{ "/testing" | prepend: site.baseurl }}">Validierungswerkzeugen</a>.</li>
        <li><a href="{{ "/getting-started/#making-a-transit-feed-publicly-available" | prepend: site.baseurl }}">Veröffentlichen Sie Ihren Feed</a> wie in der Hilfe beschrieben.</li>
      </ol>
      <p>Eine ausführliche Anleitung finden Sie unter <a href="{{ "/getting-started" | prepend: site.baseurl }}">Erste Schritte</a>.</p>
    </div>
  </div>
</section>
