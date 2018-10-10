# GTFS Data Best Practices

## Introduction

These are recommended practices for describing public transportation services in the [General Transit Feed Specification (GTFS)](http://gtfs.org). These practices have been synthesized from the experience of the [GTFS Best Practices working group](#working-group) members and [application-specific GTFS practice recommendations](http://www.transitwiki.org/TransitWiki/index.php/Best_practices_for_creating_GTFS). For further background, see the [Frequently Asked Questions](/best-practices/faq).

### Linking to This Document {#linking}

Please link here in order to provide feed producers with guidance for correct formation of GTFS data. Each individual recommendation has an anchor link. Click the recommendation to get the URL for the in-page anchor link.

If a GTFS-consuming application makes requirements or recommendations for GTFS data practices that are not described here, it is recommended to publish a document with those requirements or recommendations to supplement these common best practices.

### Document Structure

Recommended practices are organized into three primary sections

* __[Dataset Publishing & General Practices](#publishing):__ These practices relate to the overall structure of the GTFS dataset and to the manner in which GTFS datasets are published.
* __[Practice Recommendations Organized by File](#by-file):__ Recommendations are organized by file and field in the GTFS to facilitate mapping practices back to the official GTFS reference.
* __[Practice Recommendations Organized by Case](#by-case):__ With particular cases, such as loop routes, practices may need to be applied across several files and fields. Such recommendations are consolidated in this section.

### System Tags

The System Tags menu includes four different tags, each corresponding to a description below. Selecting one of these tags will highlight all applicable recommendations.

<hr/>

<button class="system-tag-button trip-planners" data-target="trip-planners">Trip Planners</button>

These practices improve customer experience in applications like Google Maps that are used for trip planning.

<hr/>

<button class="system-tag-button human-readability" data-target="human-readability">Human Readability</button>

These practices help maintain the ability for a human reader to unzip and examine GTFS files.

<hr/>

<button class="system-tag-button arrival-predictions" data-target="arrival-predictions">Arrival Predictions</button>

These practices allow arrival prediction software to create real-time arrival estimates related to the schedules in [`trips.txt`](#trips) and [`stop_times.txt`](#stop_times).

<hr/>

<button class="system-tag-button timetables" data-target="timetables">Timetables</button>

These practices support the creation of HTML timetables based on GTFS, such as with the GTFS-to-HTML software.


## Dataset Publishing & General Practices {#publishing}

* Datasets should be published at a public, permanent URL, including the zip file name. (e.g., www.agency.org/gtfs/gtfs.zip). Ideally, the URL should be directly downloadable without requiring login to access the file, to facilitate download by consuming software applications. While it is recommended (and the most common practice) to make a GTFS dataset openly downloadable, if a data provider does need to control access to GTFS for licensing or other reasons, it is recommended to control access to the GTFS dataset using API keys, which will facilitate automatic downloads.

* GTFS data is published in iterations so that a single file at a stable location always contains the latest official description of service for a transit agency (or agencies).

* Maintain persistent identifiers (id fields) for `stop_id`, `route_id`, and `agency_id` across data iterations whenever possible.

* One GTFS dataset should contain current and upcoming service (sometimes called a “merged” dataset). Google transitfeed tool's [merge function](https://github.com/google/transitfeed/wiki/Merge) can be used to create a merged dataset from two different GTFS feeds.

    * At any time, the published GTFS dataset should be valid for at least the next 7 days, and ideally for as long as the operator is confident that the schedule will continue to be operated.
    * If possible, the GTFS dataset should cover at least the next 30 days of service.

* Remove old services (expired calendars) from the feed.

* If a service modification will go into effect in 7 days or fewer, express this service change through a [GTFS-realtime](https://developers.google.com/transit/gtfs-realtime/) feed (service advisories or trip updates) rather than static GTFS dataset.

* The web-server hosting GTFS data should be configured to correctly report the file modification date (see [HTTP/1.1 - Request for Comments 2616](https://tools.ietf.org/html/rfc2616#section-14.29), under Section 14.29).


## Practice Recommendations Organized by File

This section shows practices organized by file and field, aligning with the [GTFS reference](https://github.com/google/transit/blob/master/gtfs/spec/en/reference.md).

### All Files
| | |
| --- | --- |
| Mixed Case | All customer-facing text strings (including stop names, route names, and headsigns) should use Mixed Case (not ALL CAPS), following local conventions for capitalization of place names on displays capable of displaying lower case characters, such as: <table class="example"><thead><tr><th>Examples</th></tr></thead><tbody><tr><td>Brighton Churchill Square</td></tr><tr><td>Villiers-sur-Marne</td></tr><tr><td>Market Street</td></tr></tbody></table>
| Abbreviations | Avoid use of abbreviations throughout the feed for names and other text (e.g. St. for Street) unless a location is called by its abbreviated name (e.g. “JFK Airport”). Abbreviations may be problematic for accessibility by screen reader software and voice user interfaces. Consuming software can be engineered to reliably convert full words to abbreviations for display, but converting from abbreviations to full words is prone to more risk of error.
