---
path: /documentation/
lang: en
template: doc-page
---
# General Transit Feed Specification Reference

**Revised January 17, 2019. See [Revision History](/reference/static/changes) for more details.**

This document defines the format and structure of the files that comprise a GTFS dataset.

<details > 
<summary>Term Definitions</summary>

This section defines terms that are used throughout this document.


* **Dataset** - A complete set of files defined by this specification reference. Altering the dataset creates a new version of the dataset. Datasets should be published at a public, permanent URL, including the zip file name. (e.g., https://www.agency.org/gtfs/gtfs.zip).
* **Record** - A basic data structure comprised of a number of different field values describing a single entity (e.g. transit agency, stop, route, etc.). Represented, in a table, as a row.
* **Field** - A property of an object or entity. Represented, in a table, as a column.
* **Field Value** - An individual entry in a field. Represented, in a table, as a single cell.
* **Required** - The field must be included in the dataset, and a value must be provided in that field for each record. Some required fields permit an empty string as a value (denoted in this specification as empty). To enter an empty string, just omit any text between the commas for that field.
* **Optional** - The field may be omitted from the dataset. If an optional column is included, some of the entries in that field may be empty strings. To enter an empty string, just omit any text between the commas for that field. Note that an omitted field is equivalent to a field that is entirely empty.
* **Conditionally required** - The field or file is required under certain conditions, which are outlined in the field or file description. Outside of these conditions, this field or file is optional.
* **Service day** - A service day is a time period used to indicate route scheduling. The exact definition of service day varies from agency to agency but service days often do not correspond with calendar days. A service day may exceed 24:00:00 if service begins on one day and ends on a following day. For example, service that runs from 08:00:00 on Friday to 02:00:00 on Saturday, could be denoted as running from 08:00:00 to 26:00:00 on a single service day.
 
</details>

<details > 
<summary>Field Types</summary>

- **Color** - A color encoded as a six-digit hexadecimal number. Refer to [https://htmlcolorcodes.com](https://htmlcolorcodes.com) to generate a valid value (the leading "#" is not included). <br> *Example: `FFFFFF` for white, `000000` for black or `0039A6` for the A,C,E lines in NYMTA.*
- **Currency Code** - An ISO 4217 alphabetical currency code. For the list of current currency, refer to [https://en.wikipedia.org/wiki/ISO_4217#Active\_codes](https://en.wikipedia.org/wiki/ISO_4217#Active_codes). <br> *Example: `CAD` for Canadian dollars, `EUR` for euros or `JPY` for Japanese yen.*
- **Date** - Service day in the YYYYMMDD format. Since time within a service day can be above 24:00:00, a service day often contains information for the subsequent day(s). <br> *Example: `20180913` for September 13th, 2018.*
- **Email** - An email address. <br> *Example: `example@example.com`*
- **Enum** - An option from a set of predefined constants defined in the "Description" column. <br> *Example: The `route_type` field contains a `0` for tram, a `1` for subway...*
- **ID** - An ID field value is an internal ID, not intended to be shown to riders, and is a sequence of any UTF-8 characters. Using only printable ASCII characters is recommended. IDs defined in one .txt file are often referenced in another .txt file. <br> *Example: The `stop_id` field in [stops.txt](#stopstxt) is a ID. The `stop_id` field in [stop_times.txt](#stop_timestxt) is an ID referencing `stops.stop_id`.*
- **Language Code** - An IETF BCP 47 language code. For an introduction to IETF BCP 47, refer to [http://www.rfc-editor.org/rfc/bcp/bcp47.txt](http://www.rfc-editor.org/rfc/bcp/bcp47.txt) and [http://www.w3.org/International/articles/language-tags/](http://www.w3.org/International/articles/language-tags/). <br> *Example: `en` for English, `en-US` for American English or `de` for German.*
- **Latitude** - WGS84 latitude in decimal degrees. The value must be greater than or equal to -90.0 and less than or equal to 90.0. *<br> Example: `41.890169` for the Colosseum in Rome.*
- **Longitude** - WGS84 longitude in decimal degrees. The value must be greater than or equal to -180.0 and less than or equal to 180.0. <br> *Example: `12.492269` for the Colosseum in Rome.*
- **Non-negative Float** - A floating point number greater than or equal to 0.
- **Non-negative Integer** - A integer greater than or equal to 0.
- **Phone number** - A phone number.
- **Time** - Time in the HH:MM:SS format (H:MM:SS is also accepted). The time is measured from "noon minus 12h" of the service day (effectively midnight except for days on which daylight savings time changes occur). For times occurring after midnight, enter the time as a value greater than 24:00:00 in HH:MM:SS local time for the day on which the trip schedule begins. <br> *Example: `14:30:00` for 2:30PM or `25:35:00` for 1:35AM on the next day.*
- **Text** - A string of UTF-8 characters, which is aimed to be displayed and which must therefore be human readable.
- **Timezone** - TZ timezone from the [https://www.iana.org/time-zones](https://www.iana.org/time-zones). Timezone names never contain the space character but may contain an underscore. Refer to [http://en.wikipedia.org/wiki/List\_of\_tz\_zones](http://en.wikipedia.org/wiki/List\_of\_tz\_zones) for a list of valid values. <br> *Example: `Asia/Tokyo`, `America/Los_Angeles` or `Africa/Cairo`.*
- **URL** - A fully qualified URL that includes http:// or https://, and any special characters in the URL must be correctly escaped. See the following [http://www.w3.org/Addressing/URL/4\_URI\_Recommentations.html](http://www.w3.org/Addressing/URL/4\_URI\_Recommentations.html) for a description of how to create fully qualified URL values.
 
</details>

<details > 
<summary>Dataset Files</summary>

This specification defines the following files:

|  Filename | Required | Defines |
|  ------ | ------ | ------ |
|  [agency.txt](#agencytxt) | **Required** | Transit agencies with service represented in this dataset. |
|  [routes.txt](#routestxt) | **Required** | Transit routes. A route is a group of trips that are displayed to riders as a single service. |
|  [stops.txt](#stopstxt) | **Required** | Stops where vehicles pick up or drop off riders. Also defines stations and station entrances.  |
|  [stop_times.txt](#stop_timestxt)  | **Required** | Times that a vehicle arrives at and departs from stops for each trip. |
|  [trips.txt](#tripstxt)  | **Required** | Trips for each route. A trip is a sequence of two or more stops that occur during a specific time period. |
|  [calendar.txt](#calendartxt)  | **Conditionally required** | Service dates specified using a weekly schedule with start and end dates. This file is required unless all dates of service are defined in [calendar_dates.txt](#calendar_datestxt). |
|  [calendar_dates.txt](#calendar_datestxt)  | **Conditionally required** | Exceptions for the services defined in the [calendar.txt](#calendartxt). If [calendar.txt](#calendartxt) is omitted, then [calendar_dates.txt](#calendar_datestxt) is required and must contain all dates of service. |
|  [fare_attributes.txt](#fare_attributestxt)  | Optional | Fare information for a transit agency's routes. |
|  [fare_rules.txt](#fare_rulestxt)  | Optional | Rules to apply fares for itineraries. |
|  [shapes.txt](#shapestxt)  | Optional | Rules for mapping vehicle travel paths, sometimes referred to as route alignments. |
|  [frequencies.txt](#frequenciestxt)  | Optional | Headway (time between trips) for headway-based service or a compressed representation of fixed-schedule service. |
|  [transfers.txt](#transferstxt)  | Optional | Rules for making connections at transfer points between routes. |
|  [pathways.txt](#pathwaystxt)  | Optional | Pathways linking together locations within stations. |
|  [levels.txt](#levelstxt)  | Optional | Levels within stations. |
|  [feed_info.txt](#feed_infotxt)  | Optional | Dataset metadata, including publisher, version, and expiration information. |

 
</details>

<details  > 
<summary>File Requirements</summary>


The following requirements apply to the format and contents of the dataset files:

* All files must be saved as comma-delimited text.
* The first line of each file must contain field names. Each subsection of the [Field Definitions](#field-definitions) section corresponds to one of the files in a GTFS dataset and lists the field names that may be used in that file.
* All field names are case-sensitive.
* Field values may not contain tabs, carriage returns or new lines.
* Field values that contain quotation marks or commas must be enclosed within quotation marks. In addition, each quotation mark in the field value must be preceded with a quotation mark. This is consistent with the manner in which Microsoft Excel outputs comma-delimited (CSV) files. For more information on the CSV file format, see [http://tools.ietf.org/html/rfc4180](http://tools.ietf.org/html/rfc4180).
The following example demonstrates how a field value would appear in a comma-delimited file:
  * **Original field value:** `Contains "quotes", commas and text`
  * **Field value in CSV file:** `"Contains ""quotes"", commas and text"`
* Field values must not contain HTML tags, comments or escape sequences.
* Remove any extra spaces between fields or field names. Many parsers consider the spaces to be part of the value, which may cause errors.
* Each line must end with a CRLF or LF linebreak character.
* Files should be encoded in UTF-8 to support all Unicode characters. Files that include the Unicode byte-order mark (BOM) character are acceptable. See [http://unicode.org/faq/utf_bom.html#BOM](http://unicode.org/faq/utf_bom.html#BOM) for more information on the BOM character and UTF-8.
* All dataset files must be zipped together.

 
</details>

<details open> 
<summary>Field Definitions</summary>

<selection></selection>

<agencyspec></agencyspec>
<agency></agency>

<br>

<stopsspec></stopsspec>
<stopsspeclevel></stopsspeclevels>
<stops></stops>

<br>

<routesspec></routesspec>
<routes> </routes>

<br>

<tripsspec></tripsspec>
<tripsspeccalendar></tripsspeccalendar>
<tripsspeccalendardates></tripsspeccalendardates>
<trips></trips>

<br>

<stoptimesspec></stoptimesspec>
<stoptimes></stoptimes>

<br>

<calendarspec></calendarspec>
<calendar></calendar>

<br>

<calendardatesspec></calendardatesspec>
<calendardates></calendardates>

<br>

<attributionsspec></attributionsspec>

<br>

<fareattributesspec></fareattributesspec>
<fareattributes> </fareattributes>

<br>

<farerulesspec></farerulesspec>
<farerules> </farerules>

<br>

<feedinfospec></feedinfospec>
<feedinfo></feedinfo>

<br>

<frequeciesspec></frequeciesspec>
<frequencies></frequencies>

<br>

<levelsspec></levelsspec>

<br>

<pathwaysspec></pathwaysspec>

<br>

<shapesspec></shapesspec>
<shapes></shapes>

<br>

<transfersspec></transfersspec>
<transfers></transfers>


<translationsspec></translationsspec>

</details>

<br>

# GTFS Realtime feed (GTFS-RT)

<details> 
<summary> Overview of GTFS Realtime feeds</summary>

GTFS Realtime is a feed specification that allows public transportation agencies to provide realtime updates about their fleet to application developers. It is an extension to [GTFS](https://developers.google.com/transit/gtfs/reference) (General Transit Feed Specification), an open data format for public transportation schedules and associated geographic information. GTFS Realtime was designed around ease of implementation, good GTFS interoperability and a focus on passenger information.

The specification was designed through a partnership of the initial [Live Transit Updates](https://developers.google.com/transit/google-transit#LiveTransitUpdates) partner agencies, a number of transit developers and Google. The specification is published under the [Apache 2.0 License](http://www.apache.org/licenses/LICENSE-2.0.html).

## How do I start?

1.  Continue reading the overview below.
2.  Decide which you will be providing.
3.  Create your own feeds using the [reference](/documentation/reference.md).
4.  Publish your feed.

The specification currently supports the following types of information:

*   **Trip updates** - delays, cancellations, changed routes
*   **Service alerts** - stop moved, unforeseen events affecting a station, route or the entire network
*   **Vehicle positions** - information about the vehicles including location and congestion level

A feed may, although not required to, combine entities of different types. Feeds are served via HTTP and updated frequently. The file itself is a regular binary file, so any type of webserver can host and serve the file (other transfer protocols might be used as well). Alternatively, web application servers could also be used which as a response to a valid HTTP GET request will return the feed. There are no constraints on how frequently nor on the exact method of how the feed should be updated or retrieved.

Because GTFS Realtime allows you to present the _actual_ status of your fleet, the feed needs to be updated regularly - preferably whenever new data comes in from your Automatic Vehicle Location system.

</details>

<details> 
<summary> Overview of GTFS Realtime feed entities</summary>

GTFS Realtime supports three distinct types of realtime data, that can be
combined witin a single realtime feed. Summaries are given below, with full
documentation given in the relevant section.


<details> 
<summary> Trip Updates: "Bus X is delayed by 5 minutes" </summary>

Trip updates represent fluctuations in the timetable. We would expect to receive
trip updates for all trips you have scheduled that are realtime-capable. These
updates would give a predicted arrival or departure for stops along the route.
Trip updates can also provide for more complex scenarios where trips are
canceled, added to the schedule, or even re-routed.

Trip updates represent fluctuations in the timetable. We would expect to receive trip updates for all trips you have scheduled that are realtime-capable. These updates would give a predicted arrival or departure time for stops along the route. Trip updates can also provide for more complex scenarios where trips are canceled or added to the schedule, or even re-routed.

**Reminder:** In GTFS, a trip is a sequence of two of more stops occurring at a specific time.

There should be **at most** one trip update for each scheduled trip. In case there is no trip update for a scheduled trip, it will be concluded that no realtime data is available for the trip. The data consumer should **not** assume that the trip is running on time.

## Stop Time Updates

A trip update consists of one or more updates to vehicle stop times, which are referred to as ```StopTimeUpdates```. These can be supplied for past and future stop times. You are allowed, but not required, to drop past stop times.  Producers should not drop a past `StopTimeUpdate` if it refers to a stop with a scheduled arrival time in the future for the given trip (i.e. the vehicle has passed the stop ahead of schedule), as otherwise it will be concluded that there is no update for this stop.  

For example, if the following data appears in the GTFS-rt feed:

* Stop 4 – Predicted at 10:18am (scheduled at 10:20am – 2 min early)
* Stop 5 – Predicted at 10:30am (scheduled at 10:30am – on time)

...the prediction for Stop 4 cannot be dropped from the feed until 10:21am, even if the bus actually passes the stop at 10:18am. If the `StopTimeUpdate` for Stop 4 was dropped from the feed at 10:18am or 10:19am, and the scheduled arrival time is 10:20am, then the consumer should assume that no real-time information exists for Stop 4 at that time, and schedule data from GTFS should be used.

Each `StopTimeUpdate` is linked to a stop. Ordinarily this can be done using either a GTFS stop_sequence or a GTFS stop_id. However, in the case you are providing an update for a trip without a GTFS trip_id, you must specify stop_id as stop_sequence has no value. The stop_id must still reference a stop_id in GTFS. If the same stop_id is visited more than once in a trip, then stop_sequence should be provided in all StopTimeUpdates for that stop_id on that trip.

The update can provide a exact timing for **arrival** and/or **departure** at a stop in `StopTimeUpdates` using `StopTimeEvent`. This should contain either an absolute **time** or a **delay** (i.e. an offset from the scheduled time in seconds). Delay can only be used in case the trip update refers to a scheduled GTFS trip, as opposed to a frequency-based trip. In this case, time should be equal to scheduled time + delay. You may also specify **uncertainty** of the prediction along with `StopTimeEvent`, which is discussed in more detail further down the page.

For each `StopTimeUpdate`, the default schedule relationship is **scheduled**. (Note that this is different from the schedule relationship for the trip). You may change this to **skipped** if the stop will not be stopped at, or **no data** if you only have realtime data for some of the trip.

**Updates should be sorted by stop_sequence** (or stop_ids in the order they occur in the trip).

If one or more stops are missing along the trip the update is propagated to all subsequent stops. This means that updating a stop time for a certain stop will change all subsequent stops in the absence of any other information.

**Example 1**

For a trip with 20 stops, a `StopTimeUpdate` with arrival delay and departure delay of 0 (`StopTimeEvents`) for stop_sequence of the current stop means that the trip is exactly on time.

**Example 2**

For the same trip instance, three `StopTimeUpdate` are provided:

*   delay of 300 seconds for stop_sequence 3
*   delay of 60 seconds for stop_sequence 8
*   delay of unspecified duration for stop_sequence 10

This will be interpreted as:

*   stop_sequences 1,2 have unknown delay.
*   stop_sequences 3,4,5,6,7 have delay of 300 seconds.
*   stop_sequences 8,9 have delay of 60 seconds.
*   stop_sequences 10,..,20 have unknown delay.

### Trip Descriptor

The information provided by the trip descriptor depends on the schedule relationship of trip you are updating. There are a number of options for you to set:

|_**Value**_|_**Comment**_|
|-----------|-------------|
| **Scheduled** | This trip is running according to a GTFS schedule, or is close enough to still be associated with it. |
| **Added** | This trip was not scheduled and has been added. For example, to cope with demand, or replace a broken down vehicle. |
| **Unscheduled** | This trip is running and is never associated with a schedule. For example, if there is no schedule and the buses run on a shuttle service. |
| **Canceled** | This trip was scheduled, but is now removed. |

In most cases, you should provide the trip_id of the scheduled trip in GTFS that this update relates to. 

#### Systems with repeated trip_ids

For systems using repeated trip_ids, for example trips modeled using frequencies.txt, that is frequency-based trips, the trip_id is not in itself a unique identifier of a single journey, as it lacks a
specific time component. In order to uniquely identify such trips within a
TripDescriptor, a triple of identifiers must be provided:

*    __trip_id__
*    __start_time__
*    __start_date__

start_time should be first published, and any subsequent feed updates should use
that same start_time when referring to the same journey. StopTimeUpdates
should be used to indicate adjustments; start_time does not have to be precisely
the departure time from the first station, although it should be pretty close to
that time.

For example, let’s say we decide at 10:00, May, 25th 2015, that a trip with
trip_id=T will start at start_time=10:10:00, and provide this information via
realtime feed at 10:01. By 10:05 we suddenly know that the trip will start not
at 10:10 but at 10:13. In our new realtime feed we can still identify this trip
as (T, 2015-05-25, 10:10:00) but provide a StopTimeUpdate with departure from
first stop at 10:13:00.

#### Alternative trip matching

Trips which are not frequency based may also be uniquely identified by a
TripDescriptor including the combination of:

*    __route_id__
*    __direction_id__
*    __start_time__
*    __start_date__

where start_time is the scheduled start time as defined in the static schedule, as long as the combination of ids provided resolves to a unique trip.


## Uncertainty

Uncertainty applies to both the time and the delay value of a `StopTimeUpdate`. The uncertainty roughly specifies the expected error in true delay as an integer in seconds (but note, the precise statistical meaning is not defined yet). It's possible for the uncertainty to be 0, for example for trains that are driven under computer timing control.

As an example a long-distance bus that has an estimated delay of 15 minutes arriving to its next stop within a 4 minute window of error (that is +2 / -2 minutes) will have an Uncertainty value of 240.

</details>

<details> 
<summary> Service Alerts : "Station Y is closed due to construction"</summary>


Service alerts represent higher level problems with a particular entity and are
generally in the form of a textual description of the disruption.

They could represent problems with:

*   Stations
*   Lines
*   The whole network
*   etc.

A service alert will usually consist of some text which will describe the
problem, and we also allow for URLs for more information as well as more
structured information to help us understand who this service alert affects.

Service alerts allow you to provide updates whenever there is disruption on the network. Delays and cancellations of individual trips should usually be communicated using `Trip updates`.

You have the option to provide the following:

*   URL - link to your site explaining more about the alert
*   Header text - a summary of the alert
*   Description - a full description of the alert, which will always be shown alongside the header (so should not repeat this information).

### Time Range

The alert will be displayed where appropriate within the given time range. This range should cover the entire time that the alert is useful for the passenger to see.

If no time is given, we will display the alert for as long as it is in the feed. If multiple ranges are given, we will display during all of them.

### Entity Selector

Entity selector allows you specify exactly which parts of the network this alert affects, so that we can display only the most appropriate alerts to the user. You may include multiple entity selectors for alerts which affect multiple entities.

Entities are selected using their GTFS identifiers, and you can select any of the following:

*   Agency - affects the whole network
*   Route - affects the whole route
*   Route type - affects any route of this type. e.g. all subways.
*   Trip - affects a particular trip
*   Stop - affects a particular stop

### Cause

What is the cause of this alert? You may specify one of the following:

*   Unknown cause
*   Other cause (not represented by any of these options)
*   Technical problem
*   Strike
*   Demonstration
*   Accident
*   Holiday
*   Weather
*   Maintenance
*   Construction
*   Police activity
*   Medical emergency


### Effect

What effect does this problem have on the specified entity? You may specify one of the following:

*   No service
*   Reduced service
*   Significant delays (insignificant delays should only be provided through `Trip updates`).
*   Detour
*   Additional service
*   Modified service
*   Stop moved
*   Other effect (not represented by any of these options)
*   Unknown effect


</details>

<details> 
<summary> Vehicle Position: "This bus is at position X at time Y"</summary>


Vehicle position represents a few basic pieces of information about a particular
vehicle on the network.

Most important are the latitude and longitude the vehicle is at, but we can also
use data on current speed and odometer readings from the vehicle.

Vehicle position is used to provide automatically generated information on the location of a vehicle, such as from a GPS device on board. A single vehicle position should be provided for every vehicle that is capable of providing it.

The trip that the vehicle is currently serving should be given through a `trip descriptor`. You can also provide a `vehicle descriptor`, which specifies a precise physical vehicle that you are providing updates about. Documentation is provided below.

A **timestamp** denoting the time when the position reading was taken can be provided. Note that this is different from the timestamp in the feed header, which is the time that this message was generated by the server.

**Current passage** can also be provided (either as a `stop_sequence` or `stop_id`). This is a reference to the stop that the vehicle is either on its way to, or already stopped at.

<details> 
<summary> Position</summary>

Position contains the location data within Vehicle Position. Latitude and longitude are required, the other fields are optional. These types of data are:

*   **Latitude** - degrees North, in the WGS-84 coordinate system
*   **Longitude** - degrees East, in the WGS-84 coordinate system
*   **Bearing** - direction that the vehicle is facing
*   **Odometer** - the distance that the vehicle has travelled
*   **Speed** - momentary speed measured by the vehicle, in meters per second

</details>

<details> 
<summary> Congestion Level </summary>

Vehicle position also allows the agency to specify the congestion level that the vehicle is currently experiencing. Congestion can be classed under the following categories:

*   Unknown congestion level
*   Running smoothly
*   Stop and go
*   Congestion
*   Severe congestion

It is up to the agency to classify what you class as each type of congestion. Our guidance is that severe congestion is only used in situations where the traffic is so congested that people are leaving their cars.

</details>

<details> 
<summary> Occupancy status </summary>

Vehicle position also allows the agency to specify the degree of passenger occupancy for the vehicle. Occupancy status can be classed under the following categories:

*   Empty
*   Many seats available
*   Few seats available
*   Standing room only
*   Crushed standing room only
*   Full
*   Not accepting passengers

This field is still **experimental**, and subject to change. It may be formally adopted in the future.

</details>

<details> 
<summary>  VehicleStopStatus </summary>

Vehicle stop status gives more meaning to the status of a vehicle in relation with a stop that it is currently approaching or is at. It can be set to any of these values.

*   **Incoming at** - the vehicle is about to arrive at the referenced stop
*   **Stopped at** - the vehicle is stopped at the referenced stop
*   **In transit to** - the referenced stop is the next stop for the vehicle - **default**

</details>

<details> 
<summary> Vehicle Descriptor </summary>

Vehicle descriptor describes a precise physical vehicle and can contain any of the following attributes:

*   **ID** - internal system of identification for the vehicle. Should be unique to the vehicle
*   **Label** - a user visible label - for example the name of a train
*   **License plate** - the actual license plate of the vehicle

</details>

</details>

<br>

</details>

<br>

# Extensions

GTFS has extensions that add specialized functionality to the core specification. Extensions that are currently in development can be found in this section.

##  Unofficial Extensions 

Some GTFS producers have added extensions to GTFS that have not been formally adopted into the specification. Some of the major unofficial extensions are listed below. 

* [Google](https://developers.google.com/transit/gtfs/reference/gtfs-extensions) - Provides translation support, extends route types, allows for more detailed transfer rules and adds a number of other functions. 
* [MTC GTFS+](https://www.transitwiki.org/TransitWiki/index.php/File:GTFS%2B_Additional_Files_Format_Ver_1.7.pdf) - Created by the San Francisco Bay Area Metropolitan Transportation Commission. Adds additional real time information, directions, rider categories and more.
* [MBTA](https://github.com/mbta/gtfs-documentation/) - Adds on-time performance tracking checkpoints, station and facility information and more. 


<br>

# Changing GTFS

GTFS is a community driven data format. Users can propose and vote on changes to the GTFS. For detailed information see the [GTFS-realtime](/reference/realtime/changes/) and [GTFS-static](/reference/static/changes) change processes. 

## Proposed extensions

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

