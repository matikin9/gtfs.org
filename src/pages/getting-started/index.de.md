---
layout: default
permalink: /getting-started/
lang: de
---
# Anfangen

## Überblick

Ein GTFS-Feed besteht aus einer Reihe von Textdateien, die in einer ZIP-Datei gesammelt werden. Jede Datei modelliert einen bestimmten Aspekt der Transit-Informationen: Stopps, Routen, Fahrten und andere Zeitplan-Daten. Die Details jeder Datei sind in der GTFS-Referenz definiert.

[GTFS-Beispiele]( {{ "/examples" | prepend: site.baseurl }} ) für Modell-Feeds, die die GTFS-Verwendung veranschaulichen. Eine Transitagentur kann einen GTFS-Feed erstellen, um ihre Informationen zu öffentlichen Verkehrsmitteln mit Entwicklern zu teilen, die Tools schreiben, die GTFS-Feeds verwenden, um Informationen zu öffentlichen Verkehrsmitteln in ihre Anwendungen zu integrieren. GTFS kann in einer Vielzahl von Anwendungen und Prozessen verwendet werden (siehe unten [GTFS-Anwendungen](#gtfs-applications)).

## Einen Transit-Feed öffentlich verfügbar machen

Viele [Anwendungen](#gtfs-applications) sind mit Daten im GTFS-Format kompatibel. Die einfachste Möglichkeit, einen Feed öffentlich zu machen, besteht darin, ihn auf einem Webserver zu hosten. Entwickler und konsumierende Anwendungen können GTFS-Daten von der angegebenen URL herunterladen.

Die beste Methode, um ein GTFS-Dataset schnell mit einer großen Anzahl von Entwicklern zu teilen, besteht darin, die ZIP-Datei-URL über Websites zu registrieren, die als primäre globale Verzeichnisse öffentlich zugänglicher GTFS-Daten dienen:

* [TransitFeeds.com](https://transitfeeds.com/) ([Datenfeed übermitteln](https://github.com/TransitFeeds/TransitFeeds-Public/issues))
* [Transitland-Feed-Register](https://transit.land/feed-registry/) ([Datenfeed übermitteln](https://transit.land/feed-registry/feeds/new))
* [TransitWiki.org](https://www.transitwiki.org/TransitWiki/index.php/Publicly-accessible_public_transportation_data) - “Publicly-accessible public transportation data”

## GTFS-Anwendungen

Ein Teilverzeichnis der vielen Anwendungen, die GTFS-Daten nutzen und nutzen, wird bei [TransitWiki](https://www.transitwiki.org/TransitWiki/index.php/Category:GTFS-consuming_applications) gepflegt.

Viele Arten von Anwendungen verwenden GTFS-Daten, einschließlich:

* [Reiseplanung und Karten](https://www.transitwiki.org/TransitWiki/index.php/Category:Trip-planning_%26_navigation_applications) – Anwendungen, die die Planung von Fahrten von einem Ort zum anderen mit öffentlichen Verkehrsmitteln und anderen Verkehrsmitteln erleichtern
* [Zeitplan erstellen](https://www.transitwiki.org/TransitWiki/index.php/Category:Timetable_generation_software) – um eine gedruckte Liste des Zeitplans der Agentur in einem Stundenplanformat zu erstellen
* [Barrierefreiheit](https://www.transitwiki.org/TransitWiki/index.php/Category:Accessibility_devices_and_applications) – Anwendungen, die Transitfahrer mit Behinderungen bei der Nutzung öffentlicher Verkehrsmittel unterstützen
* [Planung und Analyse](https://www.transitwiki.org/TransitWiki/index.php/Category:Network_planning_software) – Anwendungen, die Transitprofis bei der Bewertung des aktuellen oder geplanten Transitnetzes, einschließlich der Fahrgastzahlen, unterstützen
* [Echtzeit-Transit-Informationen](https://www.transitwiki.org/TransitWiki/index.php/Category:Real-time_applications) – Anwendungen, die GTFS-Daten zusammen mit einer Echtzeit-Informationsquelle verwenden, um Transitfahrern geschätzte Ankunftsinformationen bereitzustellen
* [Public Information Displays](https://www.transitwiki.org/TransitWiki/index.php/Category:Public_information_displays) - elektronische Displays, um Zeitplaninformationen, Service-Advisories, Echtzeit-Ankünfte und / oder andere Informationen anzuzeigen

Siehe auch: [Anwendungen und Dienste für die Erstellung und Pflege von GTFS-Daten](https://www.transitwiki.org/TransitWiki/index.php/General_Transit_Feed_Specification#Creating_and_Maintaining_a_GTFS_Dataset).

## Hilfe und Community erhalten

### Mailinglisten

Es gibt eine Reihe von Mailinglisten, die bei Fragen zu Daten zu öffentlichen Verkehrsmitteln, Software, Formaten wie GTFS und GTFS-realtime und anderen Problemen hilfreich sein können:

* [GTFS-Änderungen](https://groups.google.com/group/gtfs-changes): Diskussion des Vorschlags zur Erweiterung der GTFS-Spezifikation.
* [GTFS Slack](https://gtfs.slack.com/): Slack "Organisation" bei Kanälen für GTFS-Themen gewidmet. [Fordern Sie hier eine Einladung zu gtfs.slack.com an](https://gtfs.herokuapp.com/).
* [Transit Entwickler](https://groups.google.com/group/transit-developers): allgemeine Transit Entwickler Diskussionen. Viele Versandagenturen haben auch eigene Entwickler-Mailinglisten speziell für die Agentur. Beispielsweise:
  * [NYC MTA](https://groups.google.com/group/mtadeveloperresources)
  * [Portland, OR](https://groups.google.com/group/transit-developers-pdx)
  * [BART - San Francisco, CA](https://groups.google.com/group/bart-developers)
  * [MassDOT](https://groups.google.com/group/massdotdevelopers)
  * [Atlanta, GA Region](https://groups.google.com/forum/#!forum/atl-transit-developers)
  * [511 San Francisco Bay Area Entwickler-Ressourcen](https://groups.google.com/forum/#!forum/511sfbaydeveloperresources)
* Erkundigen Sie sich bei Ihrer örtlichen Versandagentur, ob sie eine eigene Mailingliste haben.
