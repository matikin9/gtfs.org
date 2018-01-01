---
layout: default
permalink: /testing/
lang: de
---
# GTFS-Feeds testen

## GTFS

* Verwenden Sie das [FeedValidator](https://github.com/google/transitfeed/wiki/FeedValidator), um zu überprüfen, ob Ihre Feed- Datendatei mit der in diesem Dokument definierten Spezifikation übereinstimmt.
* Verwenden Sie das [ScheduleViewer](https://github.com/google/transitfeed/wiki/ScheduleViewer), um Ihre Feeddaten auf einer Karte darzustellen. Dies ist nicht repräsentativ dafür, wie Ihre Daten in anderen Anwendungen aussehen werden. Es ist ein grundlegendes Werkzeug zum Testen. Untersuchen Sie Routen und Zeitpläne, um sicherzustellen, dass der Datenfeed Ihr System korrekt darstellt.
* Conveyal verfügt über einen [GTFS validator](https://github.com/conveyal/gtfs-validator) auf Basis der OneBusAway GTFS-Module.
* [GFTS-Datenpaketspezifikation](https://github.com/Stephen-Gates/GTFS) - Eine [Datenpaketspezifikation](https://frictionlessdata.io/specs/data-package/) mit Validierung, die mit guten Tabellen durchgeführt wurde. Enthält ein Datenpaket, Schemata, Tests und verwendet South East Queensland GTFS-Daten als Beispiel.

### Für Softwareentwickler:

* Die [gtfs-lib](https://github.com/conveyal/gtfs-lib) Bibliothek von Conveyal enthält Validierungsfunktionen.
* Das [Chouette-Projekt](https://github.com/afimb/chouette) (verwaltet von der französischen Agentur für multimodale Information und Ticketing) enthält Validierungsfunktionen und kann zwischen verschiedenen Formaten übersetzen.

## GTFS-realtime

* [GTFS-realtime Validator](https://github.com/CUTR-at-USF/gtfs-realtime-validator) - Ein Tool, das vom Center for Urban Transportation der University of South Florida erstellt wurde, um zu überprüfen, ob Ihre Echtzeit-Feed-Daten korrekt mit Ihrem GTFS-Datensatz übereinstimmen und alle erforderlichen Informationen enthalten.  Sie können die [Software](https://github.com/CUTR-at-USF/gtfs-realtime-validator#quick-start---run-it-yourself) selbst ausführen , oder Sie können die von USF [gehostete Version](http://transittools.forest.usf.edu/) ausprobieren.

### Für Softwareentwickler:

* [gtfs-realtime-validator-lib](https://github.com/CUTR-at-USF/gtfs-realtime-validator/tree/master/gtfs-realtime-validator-lib) - Eine Bibliothek, mit der Sie GTFS-Echtzeit-Validierungsregeln in Ihre eigene Software integrieren können.  Ein Beispiel für die Verwendung der Bibliothek gtfs-realtime-validator-lib in einem anderen Projekt finden Sie im [transit-feed-quality-calculator](https://github.com/CUTR-at-USF/transit-feed-quality-calculator).
* [transit-feed-quality-calculator](https://github.com/CUTR-at-USF/transit-feed-quality-calculator) - Ein Tool, das eine GTFS-Echtzeit-Validierung für eine große Anzahl von GTFS-Echtzeit-Feeds unter Verwendung des Verzeichnisses bekannter öffentlicher Feeds von [TransitFeeds.com](http://transitfeeds.com/) durchführen kann.
