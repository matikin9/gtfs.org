---
path: /documentation/
lang: en
template: doc-page

---
# 

<summary>GTFS-Static</summary>

<button> Generate Specification with selected extensions</button>


<select id="documentation" multiple searchable="Search here..">
    <option value="" disabled selected>Choose extensions (hold cmd or ctrl for multiple selection)</option>
    <option value="attributions">Attributions.txt</option>
    <option value="calendar">Calendar.txt</option>
    <option value="calendar_d">Calendar_dates.txt</option>
    <option value="fare_a">Fare_attributes.txt</option>
    <option value="fare_r">Fare_rules.txt</option>
    <option value="levels">Levels.txt</option>
    <option value="pathways">Pathways.txt</option>
    <option value="shapes">Shapes.txt</option>
    <option value="transfers">Transfers.txt</option>
</select>

<div id="ref"></div>

<div id="attributions">1</div>

<div id="calendar"> 2</div>
<div id="calendar_d"> 3</div>
<div id="fare_a"> 4</div>
<div id="fare_r"> 5</div>
<div id="levels"> 6</div>
<div id="pathways"> 7</div>
<div id="shapes"> 8</div>
<div id="transfers"> 9</div>


</details>



#  

<details>
<summary>GTFS-RT</summary>

Content to be added
</details>

#
 
<details>
<summary>Extensions</summary>

GTFS has extensions that add specialized functionality to the core specification. Extensions that are currently in development can be found in the next section.

##### Unofficial Extensions 
<hr>

Some GTFS producers have added extensions to GTFS that have not been formally adopted into the specification. Some of the major unofficial extensions are listed below. 

* [Google](https://developers.google.com/transit/gtfs/reference/gtfs-extensions) - Provides translation support, extends route types, allows for more detailed transfer rules and adds a number of other functions. 
* [MTC GTFS+](https://www.transitwiki.org/TransitWiki/index.php/File:GTFS%2B_Additional_Files_Format_Ver_1.7.pdf) - Created by the San Francisco Bay Area Metropolitan Transportation Commission. Adds additional real time information, directions, rider categories and more.
* [MBTA](https://github.com/mbta/gtfs-documentation/) - Adds on-time performance tracking checkpoints, station and facility information and more. 

</details>

# 

<details>
<summary>Changing GTFS</summary>

GTFS is a community driven data format. Users can propse and vote on changes to the GTFS. For detailed information see the [GTFS-realtime](/reference/realtime/changes/) and [GTFS-static](/reference/static/changes) change processes. 


## Proposed Extensions
<hr>

##### MobilityData

The MobilityData project has proposed GTFS extensions so that transit service features can be more completely represented. The specifications below are candidates for adoption into the official GTFS. 

##### [Fares](https://bit.ly/gtfs-fares)
Many transit systems have complex fare structures. Fares may vary based on transit mode, time of day, origin-destination pair, transfers, fare product or some combination of these factors. This extension expands the existing fares functionality to support many of these cases.

##### [Demand responsive transit](https://bit.ly/gtfs-drt)
Many transit agencies provide “flexible” or “demand responsive” services that do not operate on fixed routes, schedules or stops. This extension allows GTFS to describe these services.

##### Branding 
Consistent presentation of line, service, and operator branding attributes clearly differentiate components of a transit system, making the system easier to navigate. This extension would add support for a variety of branding attributes.

##### [Service Changes](https://bit.ly/gtfs-service-changes-v3_1)
GTFS currently has no way to represent service changes planned between one and seven days in advance. This extension allows these service changes to be reflected in GTFS-realtime.

##### [Pathways](https://bit.ly/gtfs-pathways)
Navigating large transit stations can be difficult and stressful, especially for riders in wheelchairs. Furthermore, maintenance, equipment malfunctions and other scheduled and unscheduled closures sometimes alter routes that riders must take within a station. This extension allows transit apps to dynamically route riders through stations.

##### Disallowed travel
Some intercity transit agencies have certain disallowed travel patterns in which an origin-destination pair is connected by the agency, but the agency will not sell tickets for that origin-destination pair. This extension allows these disallowed travel patterns to be specified.

##### [Vehicles](https://bit.ly/gtfs-vehicles)
Vehicles are fundamental to any transit system and in some cases agencies may need to provide information about specific vehicles. Occupancy status, amenities, bike capacity and boarding restrictions and accessibility are all useful information that riders may need. This extension allows GTFS to describe many vehicle properties.

</details>


