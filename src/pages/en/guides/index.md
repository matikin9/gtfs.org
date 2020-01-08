---
path: /guides/
lang: en
template: doc-page
---
# Getting started
<hr>

<details>
<summary>How do I start ?</summary>

A GTFS feed, which contains static transit information, is composed of a number of text (.txt) files that are contained in a single ZIP file. Each file describes a particular aspect of transit information: stops, routes, trips, fares, etc. For more information about each file, consult the [GTFS reference](/reference/static/). 

In order to create a GTFS feed follow the steps below.

1. Create all the required files described in the [GTFS-Static](/reference/static/) reference. Create the optional files if their functionality is desired. 
1. Save all files in the .txt format. Field values should be comma delimited and each line should end with a line break. See the GTFS reference for detailed information on the file contents.
1. Zip all the text files together. The zipped file comprises a version of the feed.
1. Publish the feed by using one of the options described in the next section. 

</details>

<details>
<summary>Publish your GTFS feed data</summary>

To make your general transit feed specification (GTFS) feed publicly available, we recommend that you publish it
on the web. Consuming software applications periodically fetch your transit data from this web
location to ensure that they have your most up-to-date feed information.
You can also manually upload your feed data. 

There are several locations where you can publish your feed on the web. Choose from these options: 

<details>
<summary>Agency website (recommended)</summary>
Publish your feed to your own website. To password protect the URL, use HTTP Basic & Digest authentication. NTLM (IIS/Win32) authentication isn’t supported.
</details>

<details>
<summary>Agency FTP server</summary>
Host your feed on your FTP server. You may password protect the URL using the standard FTP authentication mechanism.
</details>

<details>
<summary>Rented hosting from an FTP provider</summary>
Host your feed through rented FTP space. To find a provider, do a web search for "FTP hosting service."
</details>

<details>
<summary>Google Drive</summary>
Publish your feed on Google Drive. Once you save the URL of your feed data ZIP file to the Transit partner dashboard, you will be emailed to request access permission.</details>

<details>
<summary>Manual upload via Transit partner dashboard</summary>
As a last resort, use the manual uploading option in the Transit partner dashboard. This option is not recommended since it often leads to stale data for users.</details>


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

 
</details>

<br>

# Examples

<hr>
<div hidden>

## Fare Examples
</div>
<details id="fare">
    <summary>Fare examples</summary>
  The following sections describe sample fares:
  

<details id="sub-example-details">
<summary id="sub-example=summary">Example 1: All trips have the same fare, unlimited transfers</summary>
  
Suppose Demo Transit Agency has the following fare structure:

* Riders pay $1.00 on boarding (```price```='1.00', ```currency```='USD', ```payment_method```='0')
* Ticket is good for all vehicles and doesn't expire (```transfers```='')
* Passengers can ride as long as they like because ```transfer_duration``` is omitted

Since all trips have the same fare, Demo Transit can omit ```fare_rules.txt```

File ```fare_attributes.txt```:

<p id="csv">
fare_id, price, currency_type, payment_method, transfers
<br>
only_fare, 1.00, USD, 0,,
</p>

<hr>

**Calculating an adult fare**


The trip planner calculates a fare of $1 for each leg of the itinerary that 
includes a change of vehicle. However, unlimited transfers are permitted, so 
the trip planner only displays the lowest charge, that is, the adult fare of $1.
</details> 

<details id="sub-example-details">
<summary>Example 2: All trips have the same fare, no transfers</summary>
 
Suppose Demo Transit Agency has the following fare structure:

* Riders pay $1.00 on boarding (```price```='1.00', ```currency```='USD', ```payment_method```='0')
* Passengers can ride as long as they like because ```transfer_duration``` is omitted
* Any change in vehicles requires a new fare (```transfers```='0')

Since all trips have the same fare, Demo Transit can omit ```fare_rules.txt```

File ```fare_attributes.txt```:

<p id="csv">
fare_id, price, currency_type, payment_method, transfers
<br>
only_fare, 1.00, USD, 0,,
</p>

**Calculating an adult fare**

The trip planner calculates a fare of $1 for each leg of the itinerary that 
includes a change of vehicle. So an itinerary that requires a change of buses
would be $2.

</details>
  
<details id="sub-example-details">
<summary>Example 3: All trips have the same fare, no transfers</summary>

Suppose Demo Transit Agency has the following fare structure:

* Riders pay $1.00 on boarding (```price```='1.00', ```currency```='USD', ```payment_method```='0')
* Unlimited transfers are allowed within 90 minutes ```transfer="```,```transfer_duration=5400```).

Since all trips have the same fare, Demo Transit can omit ```fare_rules.txt```

File ```fare_attributes.txt```:

<p id="csv">
fare_id, price, currency_type, payment_method, transfers, transfer_duration
<br>
only_fare, 1.00, USD, 0,, 5400
</p>


**Calculating an adult fare**

The trip planner calculates a fare of $1 for each leg of the itinerary that 
includes a change of vehicle. Then it calculates the time for the itinerary.
If the itinerary time is less than 90 minutes, the fare is $1.

</details>
  
<details id="sub-example-details">
  <summary>Example 4: Different pricing for local and express routes</summary>
  
Suppose Demo Transit Agency has the following fare structure:

Riders pay $1.75 on boarding local buses (route 1)
Riders pay $5 on boarding express buses (routes 2 and 3)
Transfers aren't allowed
Since some trips cost more than others, Demo Transit must include fare_rules.txt, and each route must have an entry to associate it with a fare.

File ```fare_attributes.txt```:

<p id="csv">
fare_id, price, currency_type, payment_method, transfers
<br>
local_fare, 1.75, USD, 0, 0
<br>
express_fare, 5.00, USD, 0, 0
</p>

File ```fare_rules.txt```:

<p id="csv">
fare_id, route_id <br> 
local_fare, Route_1<br>
express_fare, Route_2 <br>
express_fare, Route_3 <br>
</p>

</details>
  
<details id="sub-example-details">
<summary>Example 5: Buying a transfer increases a fare</summary>

Suppose Demo Transit Agency has the following fare structure:

* Riders pay $1.75 on boarding local buses
* Riders can pay an extra $0.25 on boarding to purchase a transfer
* Transfers purchased are valid for 90 minutes

Since these rules apply to all trips, Demo Transit can omit ```fare_rules.txt```

File ```fare_attributes.txt```:

<p id="csv">
fare_id, price, currency_type, payment_method, transfers<br>
local_fare, 1.75, USD, 0,, <br>
plustransfer_fare, 2.00, USD,, 5400     
</p>

<hr>

**Calculating an adult fare**

Technically, both fares apply on itinerary that has no transfers.
However, the trip planner always chooses the least expensive applicable fare:

* For an itinerary with one transfer, ```simple_fare``` is $3.50 vs. $2.00 when a transfer
is purchased. So the trip planner will report $2.00 fare on all itineraries that require a 
change of vehicle.
* For an itinerary with no transfers, $1.75 fare is less than 
```plustransfer_fare``` of $2.00. So if an itinerary doesn't require a change of vehicle, 
the fare is $1.75  
</details>

<p id="sub-example-details">
<details id="sub-example-details">
<summary>Example 6: Fare depends on stations pairs, how you get there doesn't matter</summary>

In this example only the entry and exit points from the system matter. 
To define this fare structure for the feed, each station must have its own unique zone ID 
defined in ```stops.txt```. Each station is considered a single zone.

* The ```fare_attributes.txt``` and fare_rules.txt files define one row for each pair of stations.
* In file ```fare_attributes.txt```, the origin_id and destination_id fields identify station pairs by zone ID.


File ```fare_attributes.txt```:

<p id="csv">
fare_id, price, currency_type, payment_method, transfers <br>
!S1_to_S2, 1.75, USD, 0, <br>
!S1_to_S3, 3.25, USD, 0, <br>
!S1_to_S4, 4.55, USD, 0, <br>
... <br>
!S10_to_S1, 5.65, USD, 0,<br>
</p>

<br>

File ```fare_rules.txt```:

<p id="csv">
fare_id, origin_id, destination_id <br>
!S1_to_S2, S1, S2<br>
!S1_to_S3, S1, S3 <br>
!S1_to_S4, S1, S4 <br>
... <br>
!S10_to_S1, S10, S1<br>
</p>

<hr>

**Calculating an adult fare**

The trip planner calculates an itinerary, and then looks up the fare rules until it finds a 
matching origin/destination station pair. The public feed from SF Bay Area BART provides a 
real-world illustration of this type of fare structure.

  
 
</details>
  
<details id="sub-example-details">
<summary>Example 7: Fare depends on zones</summary>
  
Suppose Demo Transit Agency has a concentric three-zone system, where fares depend on which 
zones a rider passes through during an itinerary. To define this fare structure for the feed, 
files ```fare_attributes.txt``` and ```fare_rules.txt``` must contain a line for each possible combination of zones. 
For very complex cross-zone fare structures, it may be simpler to programmatically output ```fare_rules.txt``` using 
origin and destination to define fares.

File ```fare_attributes.txt```:

<p id="csv">
fare_id	price,	currency_type,	payment_method,	transfers<br>
F1,	4.15,	USD,	0<br>	 
F2,	2.20,	USD,	0<br>	 
F3,	2.20,	USD,	0<br>	 
F4,	2.95,	USD,	0<br>	 
F5,	1.25,	USD,	0<br>	 
F6,	1.95,	USD,	0<br>	 
F7,	1.95,	USD,	0<br>
</p>
<br>

File ```fare_rules.txt```:

<p id="csv">
fare_id,	contains_id<br>
F1,	1<br>
F1,	2<br>
F1,	3<br>
F2,	1<br>
F2,	2<br>
F3,	1<br>
F3,	3<br>
F4,	2<br>
F4,	3<br>
F5,	1<br>
F6,	2<br>
F7,	3<br>
</p>
<hr>

**Calculating an adult fare**

Let's look more closely at the definitions in ```fare_rules.txt```.

* F1 applies to any trip that passes through zones (1,2,3).
* F2 applies to any trip that passes through zones (1,2).
* F3 applies to any trip that passes through zones (1,3).
* F4 applies to any trip that passes through zones (2,3).
* F5 applies to any trip that passes through zone 1 only.
* F6 applies to any trip that passes through zone 2 only.
* F7 applies to any trip that passes through zone 3 only.

The trip planner calculates an itinerary, and then looks up the fare rules to determine the fares that apply 
based on zone. Since F1 also includes travel in zone 1, only F4 ($2.95) applies to a trip from zone 2 to zone 3. 
A fare rule only applies when the set of zones passed through in an itinerary exactly matches the set specified 
by the fare rule. For a trip between zones 2 and 3, the trip planner reports $2.95 as the adult fare.

  
</details>
  
<details id="sub-example-details">
<summary>Example 8: Influence of transfers and transfer_duration</summary>

The following is an example of a transfer:

* Trip 1 departs at 10:00 and arrives at 11:00.
* Trip 2 departs at 11:15 and arrives at 12:00.
* To make the fare valid for the complete journey, you must allow for at least 1 transfer and 
a ```transfer_duration``` of at least 2 hours (from 10:00 to 12:00).
</details>
  
<details id="sub-example-details">
<summary>Example 9: Fare and blocks transfers</summary>



<hr> 

A block transfer combines two trips belonging to different routes, allowing passengers to 
remain on the same vehicle while transferring from one route to the next. For a trip that has 
a block transfer, the system selects a fare that can be used for all routes involved. 
Block transfers are not counted as transfers for fare modeling.

The following is an example model of a fare for block transfer:

* Assume that there are two routes, A and B.
* Any trip on route A or B costs $1, and any trip including A and B costs $2.

The values in ```fare_attributes.txt``` and ```fare_rules.txt``` should look as follows:

File ```fare_attributes.txt```:

<p id="csv">
fare_id,	price,	currency_type,	payment_method,	transfers,	transfer_duration<br>
fare_A,	1.00,	USD,	0,	0<br>	 
fare_B,	1.00,	USD,	0,	0<br>	 
fare_AB,	2.00,	USD,	0,	0<br>
</p>
<br>

File ```fare_rules.txt```:

<p id="csv">
fare_id,	route_id,	origin_id,	destination_id,	contains_id<br>
fare_A,	route_A<br>	 	 	 	 
fare_B,	route_B<br>	 	 	 	 
fare_AB,	route_A<br>	 	 	 	 
fare_AB,	route_B<br>	
</p>
</details>


</details>
<div hidden>

## Routes Examples
</div> 

<details id="routes"><summary id="sub-example-summary">Routes examples</summary>
  The following sections contain example route models. The first correctly models the routes with trip variations.
  

<details id="sub-example-details">
<summary>Correct example</summary>
  

File ```routes.txt```:

<p id="csv">
route_id,route_short_name,route_long_name,route_type <br
R10,10,Airport - Downtown,3<br>
R20,20,University - Downtown,3<br>
</p>


File ```trips.txt```:

<p id="csv">
route_id,service_id,trip_id,trip_headsign,direction_id<br>
R10,WD,T-10-1,Airport,0<br>
R10,WE,T-10-2,Downtown,1<br>
R20,WD,T-20-1,University,0<br>
R20,WE,T20-2,Downtown,1<br>
</p>

</details>

<details id="sub-example-details">
<summary id="sub-example-summary">Incorrect example</summary>

File ```routes.txt```:

<p id="csv">
route_id,route_short_name,route_long_name,route_type<br>
R10-in,10,To Downtown,3<br>
R10-out,10,To Airport,3<br>
R20-in,20,To Downtown,3<br>
R20-out,20,To University,3<br>
</p>

</details>
</details>

<div hidden>

##Modelling Scenarios
</div>

<details id="modelling">
<summary>Route modelling examples</summary>
  The following sections contain detailed modeling scenarios.
  

<details id="modelling">
<summary>Route modelling scenario 1</summary>
  
Bus line 1 operates between stops A - B - C - D - E - F. 
Some trips only operate between A and D, some trips skip B, C, and E. 
This route is modeled as one route “1” in the feed, including trips from A to F.

<hr> 


File ```stops.txt```

<p id="csv">
stop_id,stop_name,stop_lat,stop_lon<br>
stopA,Stop A,-21.213049,-159.825975<br>
stopB,Stop B,-21.227892,-159.828051<br>
stopC,Stop C,-21.252230,-159.821118<br>
stopD,Stop D,-21.260588,-159.800071<br>
stopE,Stop E,-21.271595,-159.757365<br>
stopF,Stop F,-21.269228,-159.739851<br>
</p>

File ```routes.txt```:

<p id="csv">
route_id,route_short_name,route_long_name,route_type<br>
BusLine1,1,,3<br>
</p>

File ```trips.txt```:
<p id="csv">
route_id,service_id,trip_id<br>
BusLine1,0,tripABCDEF<br>
BusLine1,0,tripABCD<br>
BusLine1,0,tripADF<br>
</p>

File ```stop_times.txt```
<p id="csv">
trip_id,arrival_time,departure_time,stop_id,stop_sequence<br> 
tripABCDEF,06:00:00,06:00:00,stopA,1<br> 
tripABCDEF,06:10:00,06:12:00,stopB,2<br> 
tripABCDEF,06:20:00,06:22:00,stopC,3<br> 
tripABCDEF,06:30:00,06:32:00,stopD,4<br> 
tripABCDEF,06:40:00,06:42:00,stopE,5<br> 
tripABCDEF,06:50:00,06:50:00,stopF,6<br> 
tripABCD,08:00:00,08:00:00,stopA,1<br> 
tripABCD,08:10:00,08:12:00,stopB,2<br> 
tripABCD,08:20:00,08:22:00,stopC,3<br> 
tripABCD,08:30:00,08:30:00,stopD,4<br> 
tripADF,10:00:00,10:00:00,stopA,1<br> 
tripADF,10:30:00,10:32:00,stopD,2<br> 
tripADF,10:50:00,10:50:00,stopF,3<br> 
</p>


</details>

<details id="modelling">
<summary>Route modelling scenario 2</summary>
  
Using the same setup as the previous scenario, however, the trips that skip B, C, and E are 
communicated to users in schedules as a separate line (1 Express). This scenario requires 
that you model maps and signage as a separate route (1 Express) in the feed.

<hr> 


File ```stops.txt```
<p id="csv">
stop_id,stop_name,stop_lat,stop_lon<br>
stopA,Stop A,-21.213049,-159.825975<br>
stopB,Stop B,-21.227892,-159.828051<br>
stopC,Stop C,-21.252230,-159.821118<br>
stopD,Stop D,-21.260588,-159.800071<br>
stopE,Stop E,-21.271595,-159.757365<br>
stopF,Stop F,-21.269228,-159.739851<br>
</p>

<br>

File ```routes.txt```:
<p id="csv">
route_id,route_short_name,route_long_name,route_type<br>
BusLine1,1,,3<br>
BusLine1Express,1 Express,,3<br>
</p>

File ```trips.txt```:
<p id="csv">
route_id,service_id,trip_id<br>
BusLine1,0,tripABCDEF<br>
BusLine1,0,tripABCD<br>
BusLine1Express,0,tripADF<br>
</p>
<br>

File ```stop_times.txt```
<p id="csv">
trip_id,arrival_time,departure_time,stop_id,stop_sequence<br>
tripABCDEF,06:00:00,06:00:00,stopA,1<br>
tripABCDEF,06:10:00,06:12:00,stopB,2<br>
tripABCDEF,06:20:00,06:22:00,stopC,3<br>
tripABCDEF,06:30:00,06:32:00,stopD,4<br>
tripABCDEF,06:40:00,06:42:00,stopE,5<br>
tripABCDEF,06:50:00,06:50:00,stopF,6<br>
tripABCD,08:00:00,08:00:00,stopA,1<br>
tripABCD,08:10:00,08:12:00,stopB,2<br>
tripABCD,08:20:00,08:22:00,stopC,3<br>
tripABCD,08:30:00,08:30:00,stopD,4<br>
tripADF,10:00:00,10:00:00,stopA,1<br>
tripADF,10:10:00,10:12:00,stopD,2<br>
tripADF,10:20:00,10:20:00,stopF,3<br>
</p>
</details>


</details>

<div hidden>

## Joining and splitting trains
</div>

<details id="trains">
<summary> Joining and splitting trains</summary>

Common train operations involve two trains that are joined at a station and then continue 
the journey as one train, or one train that is split at a station into two trains headed in 
different directions. Model joining and splitting in GTFS with two separate trips, one for each 
lineup of vehicles. Use pickup and drop off restrictions to prevent routing results that show
duplicated trips for the shared part of the trip.

<details id="trains">
<summary>Joining trains</summary>

Set each section of a joined train to display the same destination on the trip_headsign.
Specify that the departure board for stops C and D show only one trip direction.

__ Train section 1__

| **trip_id** | **stop_id** | **pickup_type** | **drop_off_type** | **trip_headsign** |
|---------------|---------------|-------------------|---------------------|---------------------|
| **trip_1**    | A             | 0                 | 0                   | E                   |
| **trip_1**    | B             | 0                 | 0                   | E                   |
| **trip_1**    | C             | 0                 | 0                   | E                   |
| **trip_1**    | D             | 0                 | 0                   | E                   |
| **trip_1**    | E             | 0                 | 0                   | E                   |

__ Train section 2__

| **trip_id** | **stop_id** | **pickup_type** | **drop_off_type** | **trip_headsign** |
|-------------|-------------|-----------------|-------------------|-------------------|
| **trip_2**  | X           | 0               | 0                 | E                 |
| **trip_2**  | Y           | 0               | 0                 | E                 |
| **trip_2**  | C           | 1               | 0                 | E                 |
| **trip_2**  | D           | 1               | 0                 | E                 |
| **trip_2**  | E           | 1               | 0                 | E                 |

</details>

  <details id="trains">
    <summary>Splitting trains</summary>
    

Set each section of the split train to display a different destination trip_headsign.
 Specify that the departure boards for stops E, D, and C show two trips departing at the same 
 time (one in direction A and one in direction X).
 
__ Train section 1__

| **trip_id** | **stop_id** | **pickup_type** | **drop_off_type** | **trip_headsign** |
|---------------|---------------|-------------------|---------------------|---------------------|
| **trip_1**    | E             | 0                 | 0                   | A                   |
| **trip_1**    | D             | 0                 | 0                   | A                   |
| **trip_1**    | C             | 0                 | 0                   | A                   |
| **trip_1**    | B             | 0                 | 0                   | A                   |
| **trip_1**    | A             | 0                 | 0                   | A                   |

__ Train section 2__

| **trip_id** | **stop_id** | **pickup_type** | **drop_off_type** | **trip_headsign** |
|---------------|---------------|-------------------|---------------------|---------------------|
| **trip_1**    | E             | 0                 | 1                   | X                   |
| **trip_1**    | D             | 0                 | 1                   | X                   |
| **trip_1**    | C             | 0                 | 1                   | X                   |
| **trip_1**    | Y             | 0                 | 0                   | X                   |
| **trip_1**    | X             | 0                 | 0                   | X                   |

  </details>
  
 <details><summary>Alternative solution</summary>
 <p>
Using three trips or two trips with one long and one short trip will not work properly because the transfer information cannot be described correctly. In routing results, users would be asked to transfer although passengers can stay on board.
 
 </p>
 </details>
</details>

<br>

# Frequently Asked Questions

<hr>

<details>
 <summary>Why are these GTFS Best Practices important?</summary>
<p>
The objectives of GTFS Best Practices are:

* To improve end-user customer experience in public transportation apps
* Support broad data interoperability to make it easier for software developers to deploy and scale applications, products, and services
* Facilitate the use of GTFS in various application categories (beyond its original focus on trip planning)

Without coordinated GTFS Best Practices, various GTFS-consuming applications may establish requirements and expectations in an uncoordinated way, which leads to diverging requirements and application-specific datasets and less interoperability. Prior to the release of the Best Practices, there was greater ambiguity and disagreement in what constitutes correctly-formed GTFS data.

</details>

<details>
 <summary>How were they developed? Who developed them?</summary>
<p>

These Best Practices were developed by a working group of 17 organizations involved in GTFS, including app providers & data consumers, transit providers, and consultants with extensive involvement in GTFS. The working group was convened and facilitated by [Rocky Mountain Institute](http://www.rmi.org/mobility).

Working Group members voted on each Best Practice. Most Best Practices were approved by a unanimous vote. In a minority of cases, Best Practices were approved a large majority of organizations.

</details>

<details>
 <summary>Why not just change the GTFS reference?</summary>
<p>

Good question! The process of examining the Specification, data usage and needs did indeed trigger some changes to the Specification (see [closed pull requests in GitHub](https://github.com/google/transit/pulls?q=is%3Apr+is%3Aclosed)). Specification reference amendments are subject to a higher bar of scrutiny and comment than the Best Practices. However, there was still need to agree on a clear set of Best Practice recommendations.

The working group anticipates that some GTFS Best Practices will eventually become part of the core GTFS reference.

</details>

<details>
 <summary>Do GTFS validator tools check for conformance with these Best Practices?</summary>
<p>
No validator tool currently checks for conformance with all Best Practices. 

Various validator tools check for conformance with some of these best practices. For a list of GTFS validator tools, see [Testing Feeds](http://gtfs.org/testing/). 

If you write a GTFS validator tool that references these Best Practices, please email [hello@mobilitydata.org](mailto:hello@mobilitydata.org).

</details>

<br>
<hr>

## Recommendations

<hr>

1. [```TripDescriptor``` semantics] (/recommendation1/)
1. [Trip matching in special cases] (/recommendation2/)
1. [How to cancel a trip ?] (/recommendation3/)
1. [```TripDescriptor``` and Alerts categorization] (/recommendation4/)
1. [```TripDescriptor``` for ```TripUpdate``` and ```VehiclePosition```] (/recommendation5/)
1. [Vehicle position feeds minimum specification] (/recommendation6/)


# Support

<hr>

* Do you need help with the specification ? You can find places of discussion on Google groups:

    * [Google Group discussion on realtime GTFS feeds](https://groups.google.com/forum/#!forum/gtfs-realtime)
    * [Slack channel for realtime GTFS feeds](https://mobilitydata-io.slack.com/archives/C3D321CKB)
    * [Slack channel for GTFS best practices](https://mobilitydata-io.slack.com/archives/C3NH9A9TQ)
 
* If you think that the community could benefit from your expertise on the specifications, you are more than welcome to participate to these [discussions](https://github.com/google/transit/issues/).


# Tools

<hr>
<div hidden>

##Libraries & Tutorials
</div>

<details>
<summary>Libraries & Tutorials</summary>

The following tutorials provided by [OneBusAway](https://onebusaway.org/) cover a variety of aspects in working with GTFS-realtime data, for both agencies and developers. 

- [Intro to GTFS-realtime and how to produce a GTFS-realtime alerts feed](https://github.com/OneBusAway/onebusaway-gtfs-realtime-alerts-producer-demo/wiki)
- How to produce GTFS-realtime feeds
- [Minimum fields required for vehicle positions] (/tutorial-003/)
- [How to consume a GTFS-realtime feed, with a simple visualization of vehicle positions](https://github.com/OneBusAway/onebusaway-gtfs-realtime-visualizer/wiki)
- GTFS-realtime's place in the API ecosystem and using GTFS-realtime to power OneBusAway
- [Other GTFS-realtime resources, including various adapters and plugins that work with the spec](https://github.com/OneBusAway/onebusaway/wiki/GTFS-Realtime-Resources)

</details>

<div hidden>

##Validators
</div>

<details>
<summary>Validators</summary>
<p>
Before publishing, GTFS feeds should be validated in order to catch errors. 
A number of different validation tools exist. 
Some tools check individual feeds while others are made to be integrated into software. 

More details [here, link to validator documentation] (/validator/)
</details>
 

