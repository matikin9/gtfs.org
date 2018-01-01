---
layout: default
permalink: /testing/
lang: fr
---
# Test des flux GTFS

## GTFS

* Utilisez l'outil [FeedValidator](https://github.com/google/transitfeed/wiki/FeedValidator) pour vérifier que votre fichier de données de flux correspond à la spécification définie dans ce document.
* Utilisez l'application [ScheduleViewer](https://github.com/google/transitfeed/wiki/ScheduleViewer) pour voir vos données de flux représentées sur une carte. Ce n'est pas représentatif de la façon dont vos données apparaîtront dans d'autres applications; C'est un outil de base pour les tests. Examinez les itinéraires et les horaires pour vous assurer que le flux de données représente correctement votre système.
* Conveyal a un [validateur GTFS](https://github.com/conveyal/gtfs-validator) basé sur les modules OneBusAway GTFS.
* [Spécification du package de données GFTS](https://github.com/Stephen-Gates/GTFS) - [Spécification du package de données](https://frictionlessdata.io/specs/data-package/) avec validation effectuée avec Good Tables. Comprend un ensemble de données, des schémas, des tests et utilise les données GTFS du South East Queensland à titre d'exemple.

### Pour les développeurs de logiciels:

* La bibliothèque [gtfs-lib](https://github.com/conveyal/gtfs-lib) de Conveyal contient des fonctionnalités de validation.
* Le [projet Chouette](https://github.com/afimb/chouette) (géré par l'Agence française d'information et de billetterie multimodales) contient des fonctionnalités de validation et peut être traduit entre différents formats.

## GTFS-realtime

* [GTFS-realtime Validator](https://github.com/CUTR-at-USF/gtfs-realtime-validator) - Un outil créé par le Center for Urban Transportation de l'Université de Floride du Sud pour vérifier que vos données de flux en temps réel correspondent correctement à votre jeu de données GTFS et contient toutes les informations requises.  Vous pouvez [exécuter le logiciel](https://github.com/CUTR-at-USF/gtfs-realtime-validator#quick-start---run-it-yourself) vous - même , ou vous pouvez essayer la version [hébergée par USF](http://transittools.forest.usf.edu/).

### Pour les développeurs de logiciels:

* [gtfs-realtime-validator-lib](https://github.com/CUTR-at-USF/gtfs-realtime-validator/tree/master/gtfs-realtime-validator-lib) - Une bibliothèque que vous pouvez utiliser pour intégrer les règles de validation GTFS-realtime dans votre propre logiciel.  Voir le fichier [transit-feed-quality-calculator](https://github.com/CUTR-at-USF/transit-feed-quality-calculator) pour un exemple d'utilisation de la bibliothèque gtfs-realtime-validator-lib dans un autre projet.
* [transit-feed-quality-calculator](https://github.com/CUTR-at-USF/transit-feed-quality-calculator) - Un outil qui peut exécuter la validation GTFS-realtime sur un grand nombre de flux GTFS-realtime, en utilisant le répertoire des flux publics connus de [TransitFeeds.com](http://transitfeeds.com/).
