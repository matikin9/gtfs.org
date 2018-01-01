---
layout: homepage
permalink: /
lang: fr
---
<section id="gtfs-overview" class="jumbotron">
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <h1>General Transit Feed Specification</h1>
      </div>
      <div class="col-md-6">

        <p>La spécification GTFS (General Transit Feed Specification) définit un format standard ouvert pour l'échange d'horaires de transport en commun, d'informations géographiques et tarifaires. Les «feeds» de GTFS permettent aux organismes de transport public de publier des données dans un format qui peut être utilisé et utilisé dans des applications de manière interopérable.</p>

        <p>Le format GTFS (parfois appelé GTFS Static) décrit le service planifié. Son format GTFS Realtime est utilisé pour communiquer les prédictions d'arrivée, les positions des véhicules et les avis de service. Actuellement, ce site est principalement concerné par le format GTFS Static.</p>

      </div>
      <div class="col-md-6">

        <p>Les données GTFS sont disponibles pour plus de 1350 fournisseurs de transport public, et des centaines d'applications utilisent des données GTFS interopérables. Ce site contient la documentation GTFS, les meilleures pratiques et des liens vers des outils.</p>

        <small><a href="{{ "/gtfs-background" | prepend: site.baseurl }}">Plus de fond GTFS</a></small>

      </div>
    </div>
  </div>
</section>

{% include nav.html %}

<section id="how-do-i-start">
  <div class="container">
    <div class="col-xs-12 col-lg-6">
      <h2>Comment puis-je commencer?</h2>
      <ol>
        <li>Jetez un coup d'œil aux <a href="{{ "/examples" | prepend: site.baseurl }}">exemples de données GTFS</a>.</li>
        <li>Créez vos propres flux en utilisant la <a href="{{ "/reference" | prepend: site.baseurl }}">référence</a> et les <a href="{{ "/best-practices" | prepend: site.baseurl }}">meilleures pratiques</a> comme guide. Les <a href="{{ "/best-practices" | prepend: site.baseurl }}">meilleures pratiques GTFS</a> complètent la référence GTFS afin de fournir des instructions claires pour alimenter les éditeurs et améliorer la cohérence de la structure des données entre les flux.</li>
        <li>Testez votre flux à l'aide d'<a href="{{ "/testing" | prepend: site.baseurl }}">outils de validation</a>.</li>
        <li><a href="{{ "/getting-started/#making-a-transit-feed-publicly-available" | prepend: site.baseurl }}">Publiez votre flux</a>, comme décrit dans le centre d'aide.</li>
      </ol>
      <p>Voir <a href="{{ "/getting-started" | prepend: site.baseurl }}">Mise en route</a> pour un guide plus complet.</p>
    </div>
  </div>
</section>
