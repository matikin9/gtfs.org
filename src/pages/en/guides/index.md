---
path: /guides/
lang: en
template: doc-page
---
# Getting started
<hr>

## How do I start ?

A GTFS feed, which contains static transit information, is composed of a number of text (.txt) files that are contained in a single ZIP file. Each file describes a particular aspect of transit information: stops, routes, trips, fares, etc. For more information about each file, consult the [GTFS reference](/reference/static/). 

In order to create a GTFS feed follow the steps below.

1. Create all the required files described in the [GTFS-Static](/reference/static/) reference. Create the optional files if their functionality is desired. 
1. Save all files in the .txt format. Field values should be comma delimited and each line should end with a line break. See the GTFS reference for detailed information on the file contents.
1. Zip all the text files together. The zipped file comprises a version of the feed.
1. Publish the feed by using one of the options described in the next section. 


## Publish your GTFS feed data

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

<br>

## General recommendations for publishing

Datasets should be published at a public, permanent URL, including the zip file name. (e.g., www.agency.org/gtfs/gtfs.zip). Ideally, the URL should be directly downloadable without requiring login to access the file, to facilitate download by consuming software applications. While it is recommended (and the most common practice) to make a GTFS dataset openly downloadable, if a data provider does need to control access to GTFS for licensing or other reasons, it is recommended to control access to the GTFS dataset using API keys, which will facilitate automatic downloads.
 
GTFS data is published in iterations so that a single file at a stable location always contains the latest official description of service for a transit agency (or agencies). 


One GTFS dataset should contain current and upcoming service (sometimes called a “merged” dataset). Google transitfeed tool's [merge function](https://github.com/google/transitfeed/wiki/Merge) can be used to create a merged dataset from two different GTFS feeds. 
- At any time, the published GTFS dataset should be valid for at least the next 7 days, and ideally for as long as the operator is confident that the schedule will continue to be operated.
- If possible, the GTFS dataset should cover at least the next 30 days of service.


- Remove old services (expired calendars) from the feed. 

- If a service modification will go into effect in 7 days or fewer, express this service change through a [GTFS-realtime](https://developers.google.com/transit/gtfs-realtime/) feed (service advisories or trip updates) rather than static GTFS dataset. 


- The web-server hosting GTFS data should be configured to correctly report the file modification date (see [HTTP/1.1 - Request for Comments 2616](https://tools.ietf.org/html/rfc2616#section-14.29), under Section 14.29). 

 

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

## Why are these GTFS Best Practices important?
<p>
The objectives of GTFS Best Practices are:

* To improve end-user customer experience in public transportation apps
* Support broad data interoperability to make it easier for software developers to deploy and scale applications, products, and services
* Facilitate the use of GTFS in various application categories (beyond its original focus on trip planning)

Without coordinated GTFS Best Practices, various GTFS-consuming applications may establish requirements and expectations in an uncoordinated way, which leads to diverging requirements and application-specific datasets and less interoperability. Prior to the release of the Best Practices, there was greater ambiguity and disagreement in what constitutes correctly-formed GTFS data.

## How were they developed? Who developed them?

<p>

These Best Practices were developed by a working group of 17 organizations involved in GTFS, including app providers & data consumers, transit providers, and consultants with extensive involvement in GTFS. The working group was convened and facilitated by [Rocky Mountain Institute](http://www.rmi.org/mobility).

Working Group members voted on each Best Practice. Most Best Practices were approved by a unanimous vote. In a minority of cases, Best Practices were approved a large majority of organizations.

## Why not just change the GTFS reference?
<p>

Good question! The process of examining the Specification, data usage and needs did indeed trigger some changes to the Specification (see [closed pull requests in GitHub](https://github.com/google/transit/pulls?q=is%3Apr+is%3Aclosed)). Specification reference amendments are subject to a higher bar of scrutiny and comment than the Best Practices. However, there was still need to agree on a clear set of Best Practice recommendations.

The working group anticipates that some GTFS Best Practices will eventually become part of the core GTFS reference.

## Do GTFS validator tools check for conformance with these Best Practices?

<p>
No validator tool currently checks for conformance with all Best Practices. 

Various validator tools check for conformance with some of these best practices. For a list of GTFS validator tools, see [Testing Feeds](http://gtfs.org/testing/). 

If you write a GTFS validator tool that references these Best Practices, please email [hello@mobilitydata.org](mailto:hello@mobilitydata.org).


<br>
<hr>

## Recommendations

<hr>

<details>
<summary> Static feeds</summary>

<details>
<summary> Trip matching in special cases </summary>

## How to uniquely model trips in a frequency based system 

For trips modeled using frequencies.txt, that is frequency-based trips, the ```trip_id``` is not in itself a unique identifier of a single journey, as it lacks a specific time component. 
In order to uniquely identify such trips within a TripDescriptor, a triple of identifiers must be provided:

* ```trip_id```
* ```start_time```
* ```start_date```
* ```start_time``` should be first published, and any subsequent feed updates should use that same ```start_time``` when referring to the same journey. StopTimeUpdates should be used to 
indicate adjustments; ```start_time``` does not have to be precisely the departure time from the first station, although it should be pretty close to that time.

For example, let’s say we decide at 10:00, May, 25th 2015, that a trip with ```trip_id=T``` will start at ```start_time=10:10:00```, and provide this information via realtime feed at 10:01. 
By 10:05 we suddenly know that the trip will start not at 10:10 but at 10:13. In our new realtime feed we can still identify this trip as (T, 2015-05-25, 10:10:00) but provide a 
StopTimeUpdate with departure from first stop at 10:13:00. If a ```start_time``` is not specified, the trip update or vehicle position is ignored.

The trip update or vehicle position is ignored if the trip is not in service at the specified ```start_date```.

## How to uniquely model trips when ```trip_id``` are not available 

If ```trip_ids``` are not stable or unavailable and the GTFS includes ```direction_ids```, trips which are not frequency based can be uniquely identified by a TripDescriptor including the 
combination of:

* ```route_id```
* ```direction_id```
* ```start_time```
* ```start_date```

```start_time``` should be the scheduled start time. Once it appears, ```start_time``` must stay the same in all TripDescriptors representing the same trip instance across all feed versions. 
StopTimeUpdates should be used to indicate adjustments to ```start_time```. For example, let’s say we decide at 10:00, May, 25th 2015, that a trip with ```route_id=R``` and 
```direction_id```=0 will start at ```start_time=10:10:00```, and provide this information via realtime feed at 10:01. By 10:05 we suddenly know that the trip will start not at 10:10 but 
at 10:13. In our new realtime feed we can still identify this trip as (R, 0, 2015-05-25, 10:10:00) but provide a StopTimeUpdate with departure from first stop at 10:13:00.

Unless ```route_id```, ```direction_id``` and ```start_time``` are all provided and valid, the trip_update or vehicle position is discarded. Also, if the ids resolve to a trip not 
in service at the specified date or do not resolve to a unique trip, the vehicle positions or trip update is discarded.

For this matching method to work, the GTFS static feed should include ```direction_ids```.

</details>

<details>
<summary>  How to cancel a trip ?</summary>


A trip can be cancelled by either:

* providing a service alert message with a TripDescriptor matching the affected trip and effect "NO_SERVICE"
* providing a trip_update whose TripDescriptor has a ScheduleRelationship "CANCELED"

</details>

</details>

<details>
<summary> Realtime feeds</summary>

<details>
<summary> TripDescriptor semantics </summary>

This document describes the existing practice of interpreting TripDescriptor sub-message in all kinds of realtime feed messages.

The ```TripDescriptor``` message is used to link a realtime trip entity to its static GTFS prototype. The very bare minimum expected from a feed provider is tripid. 
When the tripid is missing, the realtime alert, vehicle position, or trip update message is ignored.

## Trip update and vehicle positions

If a trip update or vehicle position has:

* ```TripDescriptor```
* a ```trip_id``` corresponding to a non-frequency based trip
* no additional fields

then that trip update or vehicle position message relates to the trip happening within [-12h, +12h] from feed timestamp.

It is valid to explicitly specify ```start_date```, if service runs on the specified day according to static GTFS. It is also valid to specify start_time in this case, 
but it should be the same as in the corresponding static GTFS feed. If an invalid  ```start_date```, or  ```start_time``` is specified, corresponding trip update, or vehicle position is ignored.

If trip update or vehicle position has:

* ```TripDescriptor```
* a ```trip_id``` correspond to a frequency based trip
then at least ```start_time``` should be specified, otherwise such trip update or vehicle position is ignored. When ```trip_id``` and ```start_time``` are 
within ```exact_time```=1 interval, ```start_time``` must be several integers (possibly zero) ```headway_secs``` later than the beginning of the interval. 
Ideally, it is expected that ```start_date``` is specified as well, but if not, it is set to the local day, corresponding to the feed’s timestamp. Independent of whether ```start_date``` 
is explicitly specified, or heuristically determined, trip update or vehicle position is ignored if trip is not in service at specified date. The triple 
(tripid, ```start_date```, ```start_time```) identifies a trip uniquely.

```start_time``` should either be the GTFS-static time of the original trip, or in the frequency based case, become immutable once first published. 
```StopTimeUpdates``` should be used to indicate adjustments; ```start_time``` is not expected to be equal to departure time from the first station, although it should be pretty close.

For example, let’s say we decide at 10:00, May, 25th 2015, that a trip with ```trip_id=T``` will start at ```start_time=10:10:00```, and provide this information via realtime feed at 10:01. 
By 10:05 we suddenly know that the trip will start not at 10:10 but at 10:13. In our new realtime feed we can still identify this trip as ```(T, 2015-05-25, 10:10:00)``` but provide ```stoptimeupdate``` 
with departure from first stop at 10:13:00.

## Alerts

### ```start_date``` and ```start_time```

Alerts follow a different logic. If ```TripDescriptor``` does not specify ```start_date``` and/or ```start_time```, then all trips with the corresponding tripid are affected. 
Specifically, if the trip is frequency based, and ```start_time``` is unspecified, then all routing results involving this trip expose the alert. 
If ```start_date``` is specified, it should be within the service dates of the trip, otherwise the alert is ignored. 
If ```start_time``` is specified, it should correspond to the static GTFS feed for non-frequency based trips.

Specifying ```start_time``` for frequency based trips does not define a trip instance on its own, but allows you to attach alerts to the corresponding trip defined in trip updates, 
even if these trip updates reside in a separate feed. Such cross-feed reference is another strong reason to choose an immutable ```start_time``` in trip updates, 
since fetch times of alerts, and trip update feeds are never perfectly aligned.

### ```active_period```

When no ```active_period``` message is present, the TripDescriptor applies to every matching trip. For example, when only tripid is specified for a non-frequency based trip, 
the alert will be applied indefinitely for all known service dates. If ```active_period``` messages are defined, then only trips within these periods are affected by the alert. 
We strongly advise against using a trip descriptor to represent multiple trips where possible, advising instead to use multiple ```informed_entity``` to represent the desired
 specific trip instances (with ```start_date```) if multiple are affected.

### ```effect: NO_SERVICE```
One important type of alerts is ```effect: NO_SERVICE```. The recommended way of cancelling a non-frequency based trip via alert is to provide a descriptor with both tripid, and ```start_date```.
 It is strongly discouraged to provide a tripid without ```start_date```, which would then rely on the ```active_period```. 
 In cases where a trip takes longer than 24 hours, providing ```start_date``` is strongly advised to avoid ambiguities.


</details>

<details>

<summary> TripDescriptor and Alerts categorization </summary>

It’s important to understand how ```TripDescriptor``` works in your feed. This article provides guidelines for ```TripDescriptor``` entities and alerts categorization.

## How it works

Alerts differ from the ```TripUpdates``` and ```VehiclePosition``` feeds in a few ways. Alerts use ```TripDescriptor``` entities to specify the type of alert that informs users of any changes in their trip.
 Here are a few things you need to know about ```TripDescriptor```:

* If a ```TripDescriptor``` is specified in an alert, the informed_entities must provide a ```trip_id```. 
* When a ```TripDescriptor``` doesn’t specify ```start_date``` or ```start_time```, all trips with the corresponding ```trip_id``` are affected. 
* Specifying ```start_time``` for frequency-based trips doesn’t define a trip instance. However, it allows you to attach alerts to the corresponding trip defined in trip updates, even if these trip updates are in a separate feed. 
* Frequency-based trips with unspecified ```start_time``` show the alert for all route results involving the trip.

Since fetch times of alerts and TripUpdate feeds are not perfectly aligned, use an immutable ```start_time``` in ```TripUpdate```. 

## ```TripDescriptor``` alert guidelines

When working with a ```TripDescriptor``` for an alert, follow the guidelines below:

* When ```trip_id``` and start_time are within ```exact_time=1``` interval, ```start_time``` must be later than the beginning of the interval by an exact multiple of ```headway_secs```. 
* If ```start_time``` is specified, it must correspond to the static GTFS feed for non-frequency based trips.
* If ```start_date``` is specified, it must be within the service dates of the trip. Otherwise, the alert is ignored.
    * If ```start_date``` isn’t specified, it’s set to the local day, corresponding to the feed timestamp.
* Do not use a ```TripDescriptor``` to represent multiple trips. Use multiple instances of ```informed_entity``` to represent the desired specific trips (with ```start_date```) that are affected.

#### Example code:

````

alert {
      informed_entity {
        trip_id: "T"
    }    
        informed_entity {
      start_date: "16230"
      start_time: "07:00:00"
 }
  ```active_period``` {
      start: 1284457468
      end: 1284468072
    }
} 
````

Important: An ```active_period``` must be defined for trips within a specific time. When no ```active_period``` is present, the ```TripDescriptor``` applies to every matching trip. For example, when only ```trip_id``` 
is specified for a non-frequency-based trip, the alert is applied indefinitely for all known service dates.


## Alerts categorization guidelines

There are 3 types of alerts: critical, warning, and informational. To ensure accurate and consistent alert categorization when you create alerts, follow the guidelines below:

### Critical

Your journey is significantly impacted and probably not running.

* ***NO_SERVICE***: There’s no service on the line or at certain stops, or a specific trip has been canceled. This will trigger Trip Planner to re-route users around the disruption.
* ***SIGNIFICANT_DELAYS***: There are significant delays and irregular service occurring on the line (e.g. recovering after a power failure or severe weather). All users should be aware of this.


### Warning


There's disruption you should know about, but your journey might still be ok.

* ***DETOUR***: A trip runs a different route than the normal route.
* ***STOP_MOVED***: A stop has been temporarily moved.
* ***REDUCED_SERVICE***: Fewer trips are running at the moment due to some form of disruption.
* ***MODIFIED_SERVICE***: The timetable is not being followed due to some form of disruption.

### Informational

Interesting information about the journey. Informational alerts might be skipped from some UIs depending on space.

* ***ADDITIONAL_SERVICE***: More trips are running than normal, for example due to a sporting event.
* ***OTHER_EFFECT***: Information about the trip that does not fall into the above categories. This is the category where any miscellaneous messages can be placed. For example, “This service has no guard,” “Ticket machines broken: 
please buy ticket onboard,” or “No catering on this train.”
* ***UNKNOWN_EFFECT***: See OTHER_EFFECT. Will be treated the same in the UI.
* ***(None specified)***: See OTHER_EFFECT. Will be treated the same in the UI.

</details>

<details> <summary>
TripDescriptor for TripUpdate and VehiclePosition </summary>

To help users have successful trips, review and use Google Transit guidelines. When working with ```TripDescriptors``` for the ```TripUpdate``` and ```VehiclePosition``` entities, follow the guidelines below:

<hr>

## TripUpdate

<hr>

* [Frequency-based TripDescriptors] (/frequency-based-tripdescriptors/)
* [Non-frequency-based TripDescriptors] (/non-frequency-based-tripdescriptors/)

### Create a simple TripUpdate

If it's not feasible for your system to generate predictions for entire trips, ensure the accuracy of your GTFS-realtime feed by providing a simple ```TripUpdate``` feed.

You must follow a few basic requirements:

The ```TripUpdates``` feed should include the best-available prediction of the next upcoming ```StopTimeUpdate```.
If possible, the feed should continue to include any previously visited stops. Use StopTimeUpdates to represent stops, with values indicating the final times of when the vehicle arrived or departed the stop.
Include a ```TripUpdate.timestamp``` of when the latest measurement of the associated vehicle was taken, if available.

### What happens next 

When you successfully create a ```TripUpdate```, we support re-routing based on the realtime departure and arrival times provided through GTFS-realtime ```TripUpdate``` feeds.

For example:
Trip T is scheduled to depart at 7 PM today from station S. The GTFS-realtime ```TripUpdate``` feed indicates that the trip has a delay of 5 minutes at station S. 
Now, when you search for connections from station S at 7:03 PM, trip T will show as one of the possible connections. This is because the realtime ```TripUpdate``` updated the departure time of trip T as being after the scheduled 
departure time.

#### Example code:

```

trip_update {
    trip {
      trip_id: "T"
      start_time: "07:00:00"
    }
    stop_time_update {
      stop_id: "S"
      departure {
        delay: 300
      }
    }
}

```

<hr>

## VehiclePosition

<hr>

* Frequency-based TripDesriptors

Trip descriptors for ```VehiclePositions``` are flexible for both frequency and non-frequency-based trips. We request that you provide as much information as possible to identify the trip. At minimum, 
we request that you provide the ```route_id``` and the ```direction_id```.

* Non-frequency-based ```TripDesriptors```

```VehicleDescriptor``` is necessary to track a trip’s vehicle over time. It should be unique for each feed, and stable during the trip duration. To ensure that the vehicle is trackable, provide the vehicle descriptor ```id```.



### Position and trip matching

Provide a timestamped ```VehiclePositions``` feed with a well-matched ```TripDescriptor``` and accurate position information. Only report vehicles that are in service (i.e. assigned to a block). 
Trip matching occurs when you provide the vehicle’s most updated position with the timestamp of the reading, the trip descriptor, and the vehicle descriptor.

#### Examples of valid VehiclePosition messages

* ***Example 1*** shows a basic ```route_id``` informed for trip descriptor:

```
vehicle_position {
    trip {
      route_id: "route1"
    }
    vehicle {
      id: "route1-v1"
    }
    position {
      latitude: 4066265190
      longitude: 3862204692
    }
    timestamp: 1458508943
  }
}
```

* ***Example 2*** shows the previous example with additional trip information provided:

```
vehicle_position {
    trip {
      route_id: "route1"
      direction_id: "0"
      start_time: "10:10:00"
      start_date: "20160203"
 
    }
    vehicle {
      id: "route1-v1"
    }
    position {
      latitude: 4066265190
      longitude: 3862204692
    }
    timestamp: 1458508943
  }
}
```
 
</details>

<details>
<summary>
Vehicle position feeds minimum specification </summary>

It is possible to use realtime (RT) data over General Transit Feed Specification (GTFS) static by adding vehicle positions data in your feed. Vehicle position provides Transit users with updates on the 
location of a vehicle, allowing users to plan their trips more efficiently. This article lists the minimum requirements for a working feed of vehicle positions.


<hr>

## How it works    

Before you create a GTFS-realtime feed, you need to have a working GTFS static feed. After you’ve created a working GTFS static feed, you can sign up to share your RT feed to show users your vehicle positions. 

In order for vehicle positions to show accurate arrival and departure estimates, we require, at minimum, the list of fields shown below:

A GTFS feed, which contains static transit information, is composed of a number of text (.txt) files that are contained in a single ZIP file. Each file describes a particular aspect of transit information: stops, routes, 
trips, fares, etc. For more information about each file, consult the [GTFS reference](/documentation//). 

In order to create a GTFS feed follow the steps below.

| Field name                  | Required? | Description                                                                    |
|-----------------------------|-----------|--------------------------------------------------------------------------------|
| ```entity```                | Yes       | (maps_transit.FeedEntity)                                                      |
| ```entity_id```             | Yes       | Keep this stable until trip is updated                                         |
| ```vehicle (position)```    | Yes       | (maps_transit.VehiclePosition)                                                 |
| ```trip```                  | Yes       | (maps_transit.TripDescriptor)                                                  |
| ```trip_id```               | Yes       | Uniquely identifies a trip from the static                                     |
| ```start_time```            | Yes       | Required for frequency-based trips                                             |
| ```start_date```            | Yes       | Required for frequency-based trips                                             |
| ```schedule_relationship``` | Yes       | SCHEDULED or other appropriate                                                 |
| ```position```              | Yes       | (maps_transit.Position)                                                        |
| ```latitude```              | Yes       | Degrees north in the WGS-84 coordinate system                                  |
| ```longitude```             | Yes       | Degrees east in the WGS-84 coordinate system                                   |
| ```bearing```               | Optional  | Might be used in the future                                                    |
| ```speed```                 | Optional  | Might be used in the future                                                    |
| ```timestamp```             | Yes       | Epoch timestamp of when the position of the vehicle was obtained in seconds    |
| ```vehicle (descriptor)```  | Yes       | (maps_transit.VehicleDescriptor)                                               |
| ```id```                    | Yes       | This must uniquely and stably identify a vehicle over the entire trip duration |

<br>

## Example code

<br>

```
entity {   
  id: "entity_id"        

  vehicle: {     
   
     trip: {       
        trip_id: "270856"
        start_time: "09:42:00"        
        start_date: "20170313"
        schedule_relationship: SCHEDULED  
     }

     position: {   
        latitude : -32.92627
        longitude: 151.78036
        bearing  : 91.0   
        speed    : 9.8     
     }
     timestamp: 1527621931  
     vehicle: {    
        id   : "bus-234"  
     }
  }
}
```

For more details on trip descriptors, check out the [TripDescriptors for TripUpdate and VehiclePosition section] 

</details>
</details>
<br>

# Support

<hr>

* Do you need help with the specification ? You can find places of discussion on Google groups:

    * [Google Group discussion on realtime GTFS feeds](https://groups.google.com/forum/#!forum/gtfs-realtime)
    * [Slack channel for realtime GTFS feeds](https://mobilitydata-io.slack.com/archives/C3D321CKB)
    * [Slack channel for GTFS best practices](https://mobilitydata-io.slack.com/archives/C3NH9A9TQ)
 
* If you think that the community could benefit from your expertise on the specifications, you are more than welcome to participate to these [discussions](https://github.com/google/transit/issues/).


# Tools

<hr>

## Libraries & Tutorials

The following tutorials provided by [OneBusAway](https://onebusaway.org/) cover a variety of aspects in working with GTFS-realtime data, for both agencies and developers. 

- [Intro to GTFS-realtime and how to produce a GTFS-realtime alerts feed](https://github.com/OneBusAway/onebusaway-gtfs-realtime-alerts-producer-demo/wiki)
- How to produce GTFS-realtime feeds
- [Minimum fields required for vehicle positions] (/tutorial-003/)
- [How to consume a GTFS-realtime feed, with a simple visualization of vehicle positions](https://github.com/OneBusAway/onebusaway-gtfs-realtime-visualizer/wiki)
- GTFS-realtime's place in the API ecosystem and using GTFS-realtime to power OneBusAway
- [Other GTFS-realtime resources, including various adapters and plugins that work with the spec](https://github.com/OneBusAway/onebusaway/wiki/GTFS-Realtime-Resources)


## Validators

Before publishing, GTFS feeds should be validated in order to catch errors. 
A number of different validation tools exist. 
Some tools check individual feeds while others are made to be integrated into software. 

### Feed Issues

<details> <summary>Issues that can arise in your data feed</summary>

| Issue Type          | Description                                                                                                                                                                                      | Example                                                                                                                                                                                                                                                                                                                                                            |
|---------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Fetch errors      <br><br>  | <br>Issues that prevent Google from retrieving your feed, usually due to a data fetch setup issue. You must fix these errors before Google can create a preview feed or provide a validation report. | The FTP URL you submitted is inaccurate, causing a 404 when Google tries to fetch your feed.                                                                                                                                                                                                                                                                       |
| Validation errors   | Critical, blocking issues that must be fixed in order for your feed to work.                                                                                                                     | <br>Missing referenced valueThe service_id referenced in trips.txt is not defined in calendar.txt.                                                                                                                                                                                                                                                                     |
|<br><br><br><br><br><br><br><br><br><br><br><br>Validation warnings | <br><br><br><br><br><br><br><br><br><br><br><br>Potential feed problems to review so you can be sure your feed accurately describes transit routes and schedules.                                                                                | __Example 1__ <br> A stop that your feed indicates is located in the middle of the ocean. <br> <br> Update your feed to properly locate the stop. <br><br>  __Example 2__  <br> A warning is returned because a route schedule appears too tight based on the distance between stops. <br><br> Check your information and confirm it is accurate; if it is, no further action is needed on your part. |




</details>

<br>

### Validation Warnings


Validation warnings are informational messages that indicate potential problems with your feed, some of which could prevent your transit data from being displayed to transit data consumers. 
Review warnings to ensure that your feed data is accurate and correctly coded. Where warnings indicate problems, update and then re-validate the feed.

<details> <summary> Warning organised by category</summary>

<details> <summary> Fares </summary> 

| Warning                                                     | Description                                                                                                                                                                                  |
|-------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Multiple fares without rules / fares with and without rules <br> <br> <br> <br> | Fares defined without rules are valid for all itineraries that meet their transfer limitations. <br><br> Review the corresponding fares to make sure that correct fare information is shown to users. |

</details>

<details> <summary> Frequencies </summary> 


| Warning                                | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      |
|----------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Frequency headway longer than interval | <br><br>An entry in the ```frequencies.txt``` file was found where the ```headway_secs``` value is much greater than the difference between end_time and start_time. <br><br>Do not set ```headway_secs``` greater than the frequency interval. <br>We recommend you fix entries that cause this warning.                                                                                                                                                                                                                                               |
| Overlapping frequency-based trips <br><br><br><br><br>      | <br>This warning indicates that two trips with overlapping frequency intervals and the same sequence of stops and times were found operating on the same day. <br>This may indicate duplicate trips in the feed or misconfigured calendar entries that cause trips to activate on the wrong day. <br><br>Verify that you correctly defined the service periods and exceptions; for example, weekend service enabled on a weekday (because it is a holiday) but without disabling the weekday service may create duplicate trips. |


</details>

<details> <summary> Routes </summary> 


| Warning                                      | Description                                                                                                                                                                                                                                                                             |
|-----------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Route name reused      <br><br><br>                       | <br> This warning indicates that routes are unnecessarily subdivided. Review each warning instance. This warning is not necessarily a problem, usually it shows routes named by type or operator and can be ignored in that case.                                                          <br><br>  |
| <br>```route_short_name``` contained in ```route_long_name``` | Fields ```route_long_name``` and```route_short_name``` should exclude each other, that is, neither should contain the other name.   <br>                                                                                                                                                               |
|<br>```route_short_name``` equals ```route_long_name``` <br>      | <br> Fields```route_short_name``` and ```route_long_name``` must not be the same. If they are, specify the data in only one of the two fields.    <br><br>                                                                                                                                                      |
|```route_short_name``` is too long <br><br><br>                | <br>The ```route_short_name``` should be a short identifier. <br> This warning reports any ```route_short_name``` field longer than 6 characters, however this is not a hard limit. <br> If the ```route_short_name``` contains  a proper name, and there is also a route_long_name, then you can ignore these warnings. |                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       

</details>

<details> <summary> Service date and times </summary> 

| Warning        | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
|-----------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Trip duplicates <br><br><br><br><br><br>| This warning indicates that two trips were found operating on the same day that have the same sequence of stops and arrival or departure times. This may indicate duplicate trips in the feed or misconfigured calendar entries that cause trips to activate on the wrong day. <br><br> Verify correct definition of service periods and exceptions; for example, weekend service enabled on a weekday (because it is a holiday) but without disabling the weekday service may create duplicate trips. |


</details>


<details> <summary> Shapes </summary> 

| Warning                                      | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
|-----------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Stop does not match ```shape_dist_traveled``` value <br><br><br><br><br>| This warning is caused by an incorrect ```shape_dist_traveled``` value that does not match the location of the stop along the shape. In some cases, the system can ignore the shape_dist_traveled value and match the stop to the shape; review the problem instances nevertheless. <br><br> It may be a good idea to completely remove the ```shape_dist_traveled``` values.              <br><br>                                                                                                                                                                                                    |
| Stop too far from shape     <br><br><br><br><br><br><br><br>                  | This warning can be caused by wrong shapes or wrong stop locations. The problem instances should be reviewed to verify that the shape matches the course of the corresponding trip.A stop was found in the ```stop_times.txt``` file that was more than 150 meters away from the trip path of travel as defined by the shape entry in the ```shapes.txt``` file. This warning can be caused by wrong shape definition or wrong stop locations. <br><br>Review problem instances to verify that the shape matches the course of the corresponding trip and that all stop locations are correct. |


</details>

<details> <summary>Stop and stations</summary> 


| Warning                                 | Description                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  |
|------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| <br> Point location too close to origin ```(0,0)``` <br> | A stop with a coordinate pair ```“0,0”``` or close to it is definitely incorrectly located or missing coordinates completely, this must be fixed.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  <br><br><br>|
| Stops too close / Stations too close <br><br>    | <br><br>Ideally, a real-world stop should be represented by only one stop in the GTFS feed. However, in some schedule and routing systems, the same real-world stop is handled with different internal codes and defined in the feed multiple times. <br>Review these warnings to make sure they are not caused by bad stop locations or bad stop or station modeling. Stops with different names that are too close together can also indicate a problem.  <br><br>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              |
| Stops too close together <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>                | The system returns this message when it finds two stops in file stops.txt that are very close to each other. This warning often implies that the stops are duplicates. <br> - When two stops are very close, there is a good chance they actually represent the same stop. <br> - Stops with different names that are too close to one another can also indicate a problem. <br> - Stops which are close but on different levels may also trigger this warning. <br> <br>Although this warning is common, it does not necessarily block the launch. The trip planner uses stop location in determining where to place a stop icon marker on the map. The marker represents the physical location where a passenger boards. <br> Schedule and routing systems sometimes use different internal codes (defined multiple times in the GTFS feed) for the same stop. We recommend that you consolidate internal codes into a single stop location code for each unique geolocation to allow placement of a single map marker on that point. <br><br>However, ideally a real-world stop should be represented by only one stop inside the GTFS feed. <br> Review these warnings to make sure they are not caused by bad stop locations or incorrect stop modeling.    <br><br>                                                                                                                                                                                                                                                                                                                                                               |
| Stop too close to station     <br><br><br>           | <br><br>Validation found a stop in the stops.txt file that is more than 100 meters but less than 1000 meters from its parent station, as linked through the parent_station column. The stop may not actually be part of the parent station complex. Subway entrances can be far away from the center of the corresponding station. In this case, you can ignore the warning. <br><br>Review these warnings to make sure they are not caused by bad stop locations or by bad stop or station modeling.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| <br>Stops match shape in wrong order         | This warning can be caused by an incorrect shape, wrong stop sequences, or wrong stop location. <br>Review the problem instances to verify that all stop locations are correct and that the shape matches the course of the corresponding trip.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| <br><br>Stops with same name and description     | If a stop_desc value is provided, it should add information and not just duplicate the stop_name.                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            |
| Stop unused / station unused  <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>           | <br>Stops that are not used by any trip in the feed won’t be processed further. We recommend that you check that unused stop or station entities are intended and not caused by a problem in the feed. <br>A validation warning about unused stops or stations in a GTFS feed indicates that there are entries in the ```stops.txt``` file that are not used by any entries in the ```stop_times.txt``` file. That means that no transit vehicles are scheduled to use that stop or station. While there is no restriction about including in your GTFS feed stops or stations that are not served by any transit vehicles, GTFS providers are encouraged to leave these entities out of their feeds since such entries might confuse riders if, for example, they are shown on a map or included in search results. <br>Here are some things to check when resolving "Unused stop" or "Unused station" validation warnings: <br> - If transit vehicles should be scheduled to use that stop or station, it may indicate a problem with entries in the ```stop_times.txt``` file, such as the stop being incorrectly excluded from the trip or stop pattern of a route.<br> - If the stop or station is no longer in service, it may be best to remove it from the feed. <br> - If using stop-station hierarchy in a GTFS feed, then station entries (stops with a ```location_type``` of 1) typically do not have corresponding entries in the ```stop_times.txt``` file. <br> - If a station entry is not correctly annotated with the proper ```location_type``` value, the feed validator considers it a regular stop and warns that it is unused. |
| <br>Un-merged stop warnings <br><br><br>                 | <br><br>Un-merged stop warnings occur when stops should have been merged. Duplicate stops are confusing for users. <br> The easiest way to fix this is: <br>  __1.__ Review the warning output to identify which stops need to be merged ("problem stop"). <br> __2.__ Find the geocodes of all problem stops in the new feed. <br>__3.__ Update the geocodes of problem stops in the old feed to match the new feed. <br>Assuming there are few stops with this problem, you can manually perform these updates.|

</details>
<details> <summary> Time </summary> 

 
| Warning      | Description                                           |
|---------------|-------------------------------------------------------|
| Time warnings | See `agency_timezone` for information on time warnings. |

</details>

<details> <summary> Transfers </summary> 


| Warning                           | Description                                                                                                                                                                                   |
|------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| ```Min_transfer_time``` is missing    <br><br>   | <br>This warning indicates that a transfer was defined as timed transfer but no ```min_transfer_time``` was defined. Either the wrong transfer_type was defined or the ```min_transfer_time``` was not set.   <br><br>|
| Transfer distance is very large <br><br><br>   | This warning indicates that a transfer was defined between two stops that are very far away from each other at a distance that passengers wouldn’t normally walk <br>(> 2km), this must be fixed. <br><br>|
| Transfer walking speed is too fast | This warning indicates that a transfer was defined between two stops with a ```min_transfer_time``` that requires very fast walking (> 2m/s), this must be fixed.                                   |

</details>
<details> <summary> Trips </summary> 


| Warning                                  | Description                                                                                                                                                                                                                                 |
|-------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Block trips with inconsistent route types |<br> A block trip implies that passengers can remain on a vehicle to transfer from one route to the next. If the ```route_type``` changes, either the block or the ```route_type``` is incorrectly defined, this must be fixed.                          <br><br>    |
| Stop headsign duplicates stop name        | The ```stop_headsign``` describes the direction for trips departing from the specified stop. This prevents routing results directing you to take a route towards Central Terminal if you are departing from Central Terminal.                     |
| <br><br>Trip headsign contains ```route_long_name```    | <br> Since the ```trip_headsign``` may be displayed together with the ```route_long_name``` information should not be duplicated.                                                                                                                            |
| <br> Trip headsign contains ```route_short_name```   | <br> Since the system displays ```trip_headsign``` with the ```route_short_name``` field, this information should not be duplicated. This prevents routing results like “1 towards 1 Central Terminal”.        <br>                                              |
| <br> Trips with incorrect stop headsigns       |<br> The following trips have an incorrect ```stop_headsign```. Correct ```stop_headsign``` for loop trips is the next stop. Trips need to have at least one stop with the correct headsign.                                                                 |
| <br> Trip has duplicate stops                  | Stops within a trip should be distinct.                                                                                                                                                                                                     |
| Fast travel between stops                 | <br>Two stop times, belonging to the same trip in the ```stop_times.txt``` file, were found where the speed required for the transit vehicle to travel between the specified stops in the specified time seems suspiciously fast.                     |
| Fast travel between far stops             | <br> Two stops, which were far apart and belonging to the same trip in the ```stop_times.txt``` file, were found where the speed required for the transit vehicle to travel between the specified stops in the specified time seems suspiciously fast. |

</details>

</details>

<br>


### Validation Errors

Validation errors are critical, blocking issues that prevent your feed to be correctly processed until you fix them.

<details> <summary>Examples of validation errors </summary>


# Duplicate column name

This error can result from an incorrectly formatted files being uploaded. Each line must end with a CRLF or LF line break character.

Ending with CR will be displayed correctly in most text viewers, but will not be processed correctly by our systems.

# Duplicate identifier

An identifier was found with duplicate values when that value must be unique across the entire dataset. For example, if the ```trips.txt``` file contains more than 
one``` trip ```with the same ```trip_id```, you will get this error.

# Feed has no language specified

The feed has not specified a language, which makes it difficult to present the feed to users who speak different languages. 
Add an ```agency_lang``` field in the ```agency.txt``` file or alternatively, add a ```feed_info.txt``` file.

# Long Departure-Arrival Intervals

Due to underlying restrictions in the transit routing engine, time intervals between ```stop``` times of 24 hours or longer are not supported. 
As an example, consider a transit``` trip ```that leaves ```stop``` A at 9 AM and then arrives at the next stop, B, at 10 AM the following day. 
Because the total travel time between the two stops is 25 hours, the Google GTFS validation and import tools report an error.

Sometimes these errors can be subtle. Consider a ```trip``` that leaves ```stop``` A at 9 AM. Over the next 24 hours, the``` trip ```might make a series of stops 
until finally terminating the ```trip``` at ```stop``` B at 10 AM the following day. If those intermediate stops have a ```drop_off_type``` value of 1 
(set in file ```stop_times.txt```), indicating that passengers cannot exit the transit vehicle at those stops, then we still consider the time interval to be 25 hours. 
That is, we measure the maximum interval from where the passenger boards to where they are next allowed to get off. In our example, that interval is greater than 24 
hours and results in an error.

In another example, consider a ```trip``` that starts at ```stop``` A at 9 AM. Over the next 24 hours, the ```trip``` might make a series of stops until finally 
terminating the``` trip ```at ```stop``` B at 10 AM the following day. If the arrival or departure times have not been specified for the intermediate stops, 
we again consider the time interval to be 25 hours. Here, the best solution is to specify arrival and departure times for the intermediate stops.

In practice, very few transit systems have trips where a full 24 hours passes between two stops, so these situations should be rare.

# Missing referenced value

A referenced value is missing. This is a fatal error and prevents the feed from being used.

When values in a column in one file make reference to values from a column in another file, each value in the first column must match a value from the second column. If a value in the first column does not match a value from the second column, the feed validator returns a "Missing Referenced Value" error.

For example, if your fare_rules.txt file makes reference to a route_id that does not exist in the routes.txt file, the feed validator returns the missing referenced value error.

Consider the following example:

```routes.txt

route_id,route_short_name,route_type 
r1,S1,3
r2,S2,3
```

```
trips.txt
route_id,trip_id,service_id 

r3,t0,weekly
```

This feed fails to parse and validate. GTFS requires that a value in the ```route_id``` column of the ```trips.txt``` file matches a value in the ```route_id``` 
column of the ```routes.txt``` file. In the example, the ```trips.txt``` ```route_id``` value of r3 does not match any of the ```route_id``` values from the ```routes.txt``` 
file, resulting in a verification error.

There are many such value-reference constraints defined in the GTFS specification. Be sure that values are properly matched between different GTFS files.

# Missing required file

A required file is missing from the feed.

This error message often occurs if Google can not read the feed file as you have provided it. The error is commonly caused by encoding problems, or if the files are grouped under a directory within the zip file. The zip file must contain individual files all on one level with no sub-directory structure.

# Overlapping Stop Times for Block Trips

In a GTFS feed, two trips in the ```trips.txt``` file can be linked using the ```block_id``` field. Use this feature to link two or more trips that are served by 
the same vehicle, especially in cases where a transit passenger might stay on the vehicle across trips. However, take care when modeling these trips: 
two trips in the same block must not have overlapping ```stop``` times.

__NOTE:__ You must fix this situation as two trips cannot belong to the same block if their ```stop``` times overlap.

Consider an example of two trips linked with the same ```block_id```:

```
trip_id,route_id,service_id,block_id
t0,r0,weekday,block0
t1,r0,weekday,block0
```

Now consider the ```stop_times.txt``` file entries for these two trips:

```
trip_id,stop_id,stop_sequence,arrival_time,departure_time
t0,stop0,0,09:00:00,09:00:00
t0,stop1,1,09:30:00,09:30:00
t1,stop2,0,09:25:00,09:25:00
t1,stop3,1,10:00:00,10:00:00
```

The``` trip ```named ```t0``` starts at 9:00 AM and the``` trip ```named t1 finishes up at 10:00 AM, putting``` trip ``` ```t0``` before t1. However, 
notice how``` trip ``` ```t0``` visits ```stop1``` at 9:30 AM and then``` trip ```t1 visits```stop2``` at 9:25 AM. This creates a problem, since if both trips are in the same 
block and are served by the same vehicle, that vehicle would have to travel backward in time between ```stop1``` and ```stop2```.

If you have two trips in the same block, both active on the same service date, they cannot have overlapping ```stop``` times and be considered valid. Specifically, 
if two trips have overlapping ```stop``` times, there is no way to order the trips such that the last ```stop``` of one``` trip ```comes before the first ```stop``` 
time of the other trip. It is acceptable for the last ```stop``` time of the first``` trip ```to have the same time as the first ```stop``` time in the second trip.

Here are some things to check for "Overlapping stop times for block trips" warnings:

- Are the ```stop``` times correct for the two overlapping trips?
- Are the two overlapping trips actually in the same ```block```, that is, are they actually served by the same transit vehicle?
- Are the ```service_ids``` for the two trips correct? Two trips can have the same ```block_id``` and overlapping ```stop``` times if they are never active on the same 
service date (as determined by having different ```service_id``` values for each```and different service dates in the ```calendar.txt``` file).

# Stop too far from parent Station

Validation found a ```stop``` that is more than 100 meters but less than 1000 meters from its parent station, as linked through the ```parent_station``` column 
in the stops.txt file.

Generally, a ```stop``` that is part of a station complex is not far from the parent station. A subway entrance might be far from the center of the corresponding 
station; in this case, you can ignore the warning. However, the ```stop``` may not actually be part of the parent station complex. If a ```stop``` is found to be a 
large distance from its parent station, it may indicate a problem with the GTFS feed.

Here are some things to check when resolving "Stop too far from parent station" warnings:

*  The ```stop``` location could be wrong.
* The parent station location could be wrong.
* The ```stop``` might not actually belong to the specified station.

__NOTE:__
- A ```stop``` more than 1000 meters from its parent station triggers a validation error.
- A ```stop``` more than 100 meters but less than 1000 meters from its parent station triggers a warning.

</details>
