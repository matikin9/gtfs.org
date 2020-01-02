---
path: /guides/
lang: en
template: doc-page
---
# Getting started
<hr>

## How do I start ?   

<hr>

A GTFS feed, which contains static transit information, is composed of a number of text (.txt) files that are contained in a single ZIP file. Each file describes a particular aspect of transit information: stops, routes, trips, fares, etc. For more information about each file, consult the [GTFS reference](/reference/static/). 

In order to create a GTFS feed follow the steps below.

1. Create all the required files described in the [GTFS-Static](/reference/static/) reference. Create the optional files if their functionality is desired. 
1. Save all files in the .txt format. Field values should be comma delimited and each line should end with a line break. See the GTFS reference for detailed information on the file contents.
1. Zip all the text files together. The zipped file comprises a version of the feed.
1. Publish the feed by using one of the options described in the next section. 

<hr>

## Publish your GTFS feed data

<hr>

To make your general transit feed specification (GTFS) feed publicly available, we recommend that you publish it
on the web. Consuming software applications periodically fetch your transit data from this web
location to ensure that they have your most up-to-date feed information.
You can also manually upload your feed data. 

There are several locations where you can publish your feed on the web. Choose from these options: 

- __Agency website (recommended)__: Publish your feed to your own website. To password protect the URL, use HTTP Basic & Digest authentication. NTLM (IIS/Win32) authentication isn’t supported.
- __Agency FTP server__: Host your feed on your FTP server. You may password protect the URL using the standard FTP authentication mechanism.
- __Rented hosting from an FTP provider__: Host your feed through rented FTP space. To find a provider, do a web search for "FTP hosting service."
- __Google Drive__: Publish your feed on Google Drive. Once you save the URL of your feed data ZIP file to the Transit partner dashboard, you will be emailed to request access permission.
- __Manual upload via Transit partner dashboard__: As a last resort, use the manual uploading option in the Transit partner dashboard. This option is not recommended since it often leads to stale data for users.

##### General Recommendations for publishing your GFTS feed can be found [here] (/publishing-general-recommendations/) 

<hr>


# Examples

<details><summary>Fare examples</summary>
<p id="fare-examples">

<details><summary>Example 1: All trips have the same fare unlimited transfers</summary>

<p id="fare-example1">

Suppose Demo Transit Agency has the following fare structure:

* Riders pay $1.00 on boarding (```price```='1.00', ```currency```='USD', ```payment_method```='0')
* Ticket is good for all vehicles and doesn't expire (```transfers```='')
* Passengers can ride as long as they like because ```transfer_duration``` is omitted

Since all trips have the same fare, Demo Transit can omit ```fare_rules.txt```

File ```fare_attributes.txt```:

| fare_id   | price | currency_type | payment_method | transfers |
|-----------|-------|---------------|----------------|-----------|
| only_fare | 1.00  | USD           | 0              |           |

<hr>

## Calculating an adult fare


The trip planner calculates a fare of $1 for each leg of the itinerary that 
includes a change of vehicle. However, unlimited transfers are permitted, so 
the trip planner only displays the lowest charge, that is, the adult fare of $1.

</p>

<p id="example2">
# Example 2: All trips have the same fare, no transfers

<hr> 

Suppose Demo Transit Agency has the following fare structure:

* Riders pay $1.00 on boarding (```price```='1.00', ```currency```='USD', ```payment_method```='0')
* Passengers can ride as long as they like because ```transfer_duration``` is omitted
* Any change in vehicles requires a new fare. (```transfers```='0')

Since all trips have the same fare, Demo Transit can omit ```fare_rules.txt```

File ```fare_attributes.txt```:

| fare_id   | price | currency_type | payment_method | transfers |
|-----------|-------|---------------|----------------|-----------|
| only_fare | 1.00  | USD           | 0              |           |

<hr>

## Calculating an adult fare

The trip planner calculates a fare of $1 for each leg of the itinerary that 
includes a change of vehicle. So an itinerary that requires a change of buses
would be $2.</p>

<p>
Contenu 3

</p>

<p>

Contenu 4

</p>
<p>

Contenu 4

</p>
<p>

Contenu 4

</p>
<p>

Contenu 4

</p>
<p>

Contenu 4

</p>
<p>

Contenu 4

</p>



<summary>Routes examples</summary>
</details>

The following sections describe sample fares:

* [Example 1: All trips have the same fare unlimited transfers] (/fare-example1)
* [Example 2: All trips have the same fare, no transfers] (/fare-example2)
* [Example 3: All trips have the same fare, transfers allowed] (/fare-example3)
* [Example 4: Different pricing for local and express routes] (/fare-example4)
* [Example 5: Buying a transfer increases a fare] (/fare-example5)
* [Example 6: Fare depends on station pairs, how you get there doesn't matter] (/fare-example6)
* [Example 7: Fare depends on zone] (/fare-example7)
* [Example 8: Influence of transfers and transfer_duration] (/fare-example8)
* [Example 9: Fares ad block transfers] (/fare-example9)

## Routes Examples 

The following sections contain example route models. The first correctly models the routes with trip variations.

* [Examples] (/routes-example/)

## Modelling scenarios

The following sections contain detailed modeling scenarios.


* [Scenario 1] (/routes-modelling-scenario1/)
* [Scenario 2] (/routes-modelling-scenario2/)

<hr>

## Joining and splitting trains
 
Common train operations involve two trains that are joined at a station and then continue 
the journey as one train, or one train that is split at a station into two trains headed in 
different directions. Model joining and splitting in GTFS with two separate trips, one for each 
lineup of vehicles. Use pickup and drop off restrictions to prevent routing results that show
 duplicated trips for the shared part of the trip.


* [Joining trains] (/joining-trains/)


* [Splitting trains] (/splitting-trains/)


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

1. [```TripDescriptor``` semantics] (/recommendation1/)
1. [Trip matching in special cases] (/recommendation2/)
1. [How to cancel a trip ?] (/recommendation3/)
1. [```TripDescriptor``` and Alerts categorization] (/recommendation4/)
1. [```TripDescriptor``` for ```TripUpdate``` and ```VehiclePosition```] (/recommendation5/)
1. [Vehicle position feeds minimum specification] (/recommendation6/)

<hr>

# Support

<hr>

* Do you need help with the specification ? You can find places of discussion on Google groups:

    * [Google Group discussion on realtime GTFS feeds](https://groups.google.com/forum/#!forum/gtfs-realtime)
    * [Slack channel for realtime GTFS feeds](https://mobilitydata-io.slack.com/archives/C3D321CKB)
    * [Slack channel for GTFS best practices](https://mobilitydata-io.slack.com/archives/C3NH9A9TQ)
 
* If you think that the community could benefit from your expertise on the specifications, you are more than welcome to participate to these [discussions](https://github.com/google/transit/issues/).

<hr>

# Tools

<hr>

## Libraries & Tutorials
The following tutorial provided by [OneBusAway](https://onebusaway.org/) covers a variety of aspects in working with GTFS-realtime data, for both agencies and developers. 
 
- Intro to GTFS-realtime and how to produce a GTFS-realtime alerts feed
- How to produce GTFS-realtime feeds
- [Minimum fields required for vehicle positions] (/tutorial-003/)
- How to consume a GTFS-realtime feed, with a simple visualization of vehicle positions
- GTFS-realtime's place in the API ecosystem and using GTFS-realtime to power OneBusAway
- Other GTFS-realtime resources, including various adapters and plugins that work with the spec

## Validators


Before publishing, GTFS feeds should be validated in order to catch errors. 
A number of different validation tools exist. 
Some tools check individual feeds while others are made to be integrated into software. 

More details [here, link to validator documentation] (/validator/)