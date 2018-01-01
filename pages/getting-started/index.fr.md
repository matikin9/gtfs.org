---
layout: default
permalink: /getting-started/
lang: fr
---
# Commencer

## Aperçu

Un flux GTFS est composé d'une série de fichiers texte collectés dans un fichier ZIP. Chaque fichier modélise un aspect particulier des informations de transit: arrêts, routes, trajets et autres données de planification. Les détails de chaque fichier sont définis dans la référence GTFS.

Voir [Exemples GTFS]( {{ "/examples" | prepend: site.baseurl }} ) pour les flux de modèles qui illustrent l'utilisation de GTFS. Une agence de transport peut produire un flux GTFS pour partager ses informations de transport en commun avec les développeurs, qui écrivent des outils qui utilisent les flux GTFS pour intégrer les informations de transport public dans leurs applications. GTFS peut être utilisé dans une variété d'applications et de processus (voir [Applications GTFS](#gtfs-applications), ci-dessous).

## Rendre un flux de transit publiquement disponible

De nombreuses [applications](#gtfs-applications) sont compatibles avec les données au format GTFS. La façon la plus simple de créer un flux public est de l'héberger sur un serveur Web. Les développeurs et les applications consommatrices peuvent télécharger des données GTFS à partir de l'URL spécifiée.

La meilleure méthode pour partager rapidement un ensemble de données GTFS avec un grand nombre de développeurs consiste à enregistrer l'URL du fichier zip via des sites Web qui servent de répertoires globaux principaux des données GTFS accessibles au public:

* [TransitFeeds.com](https://transitfeeds.com/) ([envoyer un flux de données](https://github.com/TransitFeeds/TransitFeeds-Public/issues))
* [Registre de flux Transitland](https://transit.land/feed-registry/) ([envoyer un flux de données](https://transit.land/feed-registry/feeds/new))
* [TransitWiki.org](https://www.transitwiki.org/TransitWiki/index.php/Publicly-accessible_public_transportation_data) - “Publicly-accessible public transportation data”

## Applications GTFS

Un répertoire partiel des nombreuses applications qui consomment et utilisent les données GTFS est conservé sur [TransitWiki](https://www.transitwiki.org/TransitWiki/index.php/Category:GTFS-consuming_applications).

De nombreux types d'applications consomment des données GTFS, notamment:

* [Planification de voyage et cartes](https://www.transitwiki.org/TransitWiki/index.php/Category:Trip-planning_%26_navigation_applications) – applications qui facilitent la planification des trajets d'un endroit à un autre en utilisant les transports en commun et d'autres modes
* [Création d'horaires](https://www.transitwiki.org/TransitWiki/index.php/Category:Timetable_generation_software) – pour créer une liste imprimée de l'horaire de l'agence dans un format horaire
* [Accessibilité](https://www.transitwiki.org/TransitWiki/index.php/Category:Accessibility_devices_and_applications) – applications qui aident les usagers du transport en commun handicapés à utiliser les transports en commun
* [Planification et analyse](https://www.transitwiki.org/TransitWiki/index.php/Category:Network_planning_software) – applications qui aident les professionnels du transport en commun à évaluer le réseau de transport en commun actuel ou prévu, y compris la prévision de l'achalandage
* [Informations de transit en temps réel](https://www.transitwiki.org/TransitWiki/index.php/Category:Real-time_applications) – applications qui utilisent les données GTFS avec une source d'informations en temps réel pour fournir des informations d'arrivée estimées aux usagers du transport en commun
* [Affichages d'informations publiques](https://www.transitwiki.org/TransitWiki/index.php/Category:Public_information_displays) - Affichages électroniques pour afficher les informations d'horaire, les avis de service, les arrivées en temps réel et / ou d'autres informations

Voir aussi: [applications et services pour créer et gérer des données GTFS](https://www.transitwiki.org/TransitWiki/index.php/General_Transit_Feed_Specification#Creating_and_Maintaining_a_GTFS_Dataset).

## Obtenir de l'aide et de la communauté

### Listes de Diffusion

Il y a un certain nombre de listes de diffusion qui peuvent être de bonnes ressources lorsque vous avez des questions sur les données de transport en commun, les logiciels, les formats comme GTFS et GTFS-realtime, et d'autres questions:

* [Changements GTFS](https://groups.google.com/group/gtfs-changes): discussion de la proposition d'extension de la spécification GTFS.
* [GTFS Slack](https://gtfs.slack.com/): Slack "organisation" avec des canaux consacrés aux sujets GTFS. [Demander une invitation à gtfs.slack.com ici](https://gtfs.herokuapp.com/).
* [Transit Developers](https://groups.google.com/group/transit-developers): discussions générales avec les développeurs de transport en commun. De nombreuses agences de transport ont également leurs propres listes de diffusion pour les développeurs spécifiques à l'agence. Par exemple:
  * [NYC MTA](https://groups.google.com/group/mtadeveloperresources)
  * [Portland, OR](https://groups.google.com/group/transit-developers-pdx)
  * [BART - San Francisco, CA](https://groups.google.com/group/bart-developers)
  * [MassDOT](https://groups.google.com/group/massdotdevelopers)
  * [Région de Atlanta, GA](https://groups.google.com/forum/#!forum/atl-transit-developers)
  * [511 San Francisco Bay Area Ressources pour les développeurs](https://groups.google.com/forum/#!forum/511sfbaydeveloperresources)
* Vérifiez auprès de votre agence de transport locale pour voir si elles ont une liste de diffusion.
