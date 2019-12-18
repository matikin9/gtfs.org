---
path: /guides/
lang: en
template: doc-page
---
# Getting started
<hr>

## "How do I start ?"   

<hr>

A GTFS feed, which contains static transit information, is composed of a number of text (.txt) files that are contained in a single ZIP file. Each file describes a particular aspect of transit information: stops, routes, trips, fares, etc. For more information about each file, consult the GTFS reference. 

In order to create a GTFS feed follow the steps below.

1. Create all the required files described in the [GTFS-Static](/reference/) reference. Create the optional files if their functionality is desired. 
1. Save all files in the .txt format. Field values should be comma delimited and each line should end with a line break. See the GTFS reference for detailed information on the file contents.
1. Zip all the text files together. The zipped file comprises a version of the feed.
1. Publish the feed by using one of the options described in the next section. 

<hr>

## Publish your GTFS feed data

<hr>

To make your general transit feed specification (GTFS) feed publicly available, we recommend that you publish it on the web. GTFS file users periodically. Consuming software applications fetch your transit data from this web location to ensure that they have your most up-to-date feed information. You can also manually upload your feed data. 

There are several locations where you can publish your feed on the web. Choose from these options: 

- __Agency website (recommended)__: Publish your feed to your own website. To password protect the URL, use HTTP Basic & Digest authentication. NTLM (IIS/Win32) authentication isn’t supported.
- __Agency FTP server__: Host your feed on your FTP server. You may password protect the URL using the standard FTP authentication mechanism.
- __Rented hosting from an FTP provider__: Host your feed through rented FTP space. To find a provider, do a Google search for "FTP hosting service."
- __Google Drive__: Publish your feed on Google Drive. Once you save the URL of your feed data ZIP file to the Transit partner dashboard, we email you to request access permission.
- __Manual upload via Transit partner dashboard__: As a last resort, use the manual uploading option in the Transit partner dashboard. We don’t recommend this option, as it often leads to stale data for users.

<hr>

# Examples
<hr>

## Fare examples

<hr>

* [Example 1: All trips have the same fare unlimited transfers] (/fare-example1)
* Example 2: All trips have the same fare, no transfers
* Example 3: All trips have the same fare, transfers allowed
* Example 4: Different pricing for local and express routes
* Example 5: Buying a transfer increases a fare
* Example 6: Fare depends on station pairs, how you get there doesn't matter
* Example 7: Fare depends on zone
* Example 8: Influence of transfers and transfer_duration
* Example 9: Fares ad block transfers 

## Route examples 
<hr>

The following sections contain example route models. The first correctly models the routes with trip variations.


* Example 1 - Correct
* Example 2 - Incorrect 

## Modeling scenarios
<hr>

The following sections contain detailed modeling scenarios.


* Example 1 - Correct
* Example 2 - Incorrect 

<hr>

## Joining and splitting trains
 
Common train operations involve two trains that are joined at a station and then continue 
the journey as one train, or one train that is split at a station into two trains headed in 
different directions. Model joining and splitting in GTFS with two separate trips, one for each 
lineup of vehicles. Use pickup and drop off restrictions to prevent routing results that show
 duplicated trips for the shared part of the trip.


### Joining trains

<hr>


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


### Splitting trains



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

Set each section of the split train to display a different destination trip_headsign.
 Specify that the departure boards for stops E, D, and C show two trips departing at the same 
 time (one in direction A and one in direction X).

### Alternative solutions
Using three trips or two trips with one long and one short trip will not work properly because 
the transfer information cannot be described correctly. In routing results, users would be asked 
to transfer although passengers can stay on board.

<hr>

# Frequently Asked Questions

<hr>

## Why are these GTFS Best Practices important?

The objectives of GTFS Best Practices are:

* To improve end-user customer experience in public transportation apps
* Support broad data interoperability to make it easier for software developers to deploy and scale applications, products, and services
* Facilitate the use of GTFS in various application categories (beyond its original focus on trip planning)

Without coordinated GTFS Best Practices, various GTFS-consuming applications may establish requirements and expectations in an uncoordinated way, which leads to diverging requirements and application-specific datasets and less interoperability. Prior to the release of the Best Practices, there was greater ambiguity and disagreement in what constitutes correctly-formed GTFS data.

## How were they developed? Who developed them?

These Best Practices were developed by a working group of 17 organizations involved in GTFS, including app providers & data consumers, transit providers, and consultants with extensive involvement in GTFS. The working group was convened and facilitated by [Rocky Mountain Institute](http://www.rmi.org/mobility).

Working Group members voted on each Best Practice. Most Best Practices were approved by a unanimous vote. In a minority of cases, Best Practices were approved a large majority of organizations.

## Why not just change the GTFS reference?

Good question! The process of examining the Specification, data usage and needs did indeed trigger some changes to the Specification (see [closed pull requests in GitHub](https://github.com/google/transit/pulls?q=is%3Apr+is%3Aclosed)). Specification reference amendments are subject to a higher bar of scrutiny and comment than the Best Practices. However, there was still need to agree on a clear set of Best Practice recommendations.

The working group anticipates that some GTFS Best Practices will eventually become part of the core GTFS reference.

## Do GTFS validator tools check for conformance with these Best Practices?

No validator tool currently checks for conformance with all Best Practices. 

Various validator tools check for conformance with some of these best practices. For a list of GTFS validator tools, see [Testing Feeds](http://gtfs.org/testing/). 

If you write a GTFS validator tool that references these Best Practices, please email [gtfs@rmi.org](mailto:gtfs@rmi.org).

<hr>

## Recommendations

<hr>

1. ```TripDescriptor``` semantics
1. Trip matching in special cases
1. How to cancel a trip ?
1. ```TripDescriptor``` and Alerts categorization
1. ```TripDescriptor``` for ```TripUpdate``` and ```VehiclePosition```
1. Vehicle position feeds minimum specification

<hr>

# Support

<hr>

* Do you need help with the specification ? You can find places of discussion on Google groups:[missing links to be added ](), and [GTFS Slack]().

* If you think that the community could benefit from your expertise on the specifications, please participate to this [discussions, links to be added] ().

<hr>


# Tools

<hr>

## Libraries & Tutorials
This [tutorial, tba](/tutorial) covers a variety of aspects in working with GTFS-realtime data,
for both agencies and developers. 
 
This content has been provided by [OneBusAway](https://onebusaway.org/).

## Validators


Before publishing, GTFS feeds should be validated in order to catch errors. 
A number of different validation tools exist. 
Some tools check individual feeds while others are made to be integrated into software. 

More details [here, link to validator documentation] (/validator)
