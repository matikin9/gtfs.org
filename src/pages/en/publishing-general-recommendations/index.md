---
path: /publishing-general-recommendations/
lang: en
---

# General Recommendations for publishing your GFTS feed

<hr>


Datasets should be published at a public, permanent URL, including the zip file name. (e.g., www.agency.org/gtfs/gtfs.zip). Ideally, the URL should be directly downloadable without requiring login to access the file, to facilitate download by consuming software applications. While it is recommended (and the most common practice) to make a GTFS dataset openly downloadable, if a data provider does need to control access to GTFS for licensing or other reasons, it is recommended to control access to the GTFS dataset using API keys, which will facilitate automatic downloads.

<hr>
 
GTFS data is published in iterations so that a single file at a stable location always contains the latest official description of service for a transit agency (or agencies). 

<hr>

One GTFS dataset should contain current and upcoming service (sometimes called a “merged” dataset). Google transitfeed tool's [merge function](https://github.com/google/transitfeed/wiki/Merge) can be used to create a merged dataset from two different GTFS feeds. <ul><li>At any time, the published GTFS dataset should be valid for at least the next 7 days, and ideally for as long as the operator is confident that the schedule will continue to be operated.</li><li>If possible, the GTFS dataset should cover at least the next 30 days of service.</li></ul> 

<hr>

Remove old services (expired calendars) from the feed. 

<hr>

If a service modification will go into effect in 7 days or fewer, express this service change through a [GTFS-realtime](https://developers.google.com/transit/gtfs-realtime/) feed (service advisories or trip updates) rather than static GTFS dataset. 

<hr>

The web-server hosting GTFS data should be configured to correctly report the file modification date (see [HTTP/1.1 - Request for Comments 2616](https://tools.ietf.org/html/rfc2616#section-14.29), under Section 14.29). 
