---
layout: default
permalink: /extensions/
lang: en
---
# Extensions

There are number of GTFS extensions that add additional and specialized functionality to the core specification. 

### MobilityData
<hr>

The MobilityData project has created a number of GTFS extensions that increase the functionality and accuracy of the data format. These extensions are described below

##### [Fares](https://bit.ly/gtfs-fares)
Many transit systems have complex fare structures. Fares may vary based on transit mode, time of day, origin-destination pair, fare product or some combination of these factors. In some systems, rules governing transfers further increase the complexity of the fare structure. This extension significantly expands the existing fares functionality to support many of these cases. 

##### [Demand responsive transit](https://bit.ly/gtfs-drt)
Many transit agencies provide “flexible” or “demand responsive” services that do not operate on fixed routes, schedules or stops. Instead these services alter service patterns based on demand. This extension allows GTFS to describe flexible or demand responsive services. 

##### Branding 
Lines, services and operators are all branding attributes used by a wide number of transit system. Consistent presentation of these branding attributes clearly differentiate components of a transit system, making the system easier to navigate. This extension adds support for a variety of branding attributes. 

##### [Service Changes](https://bit.ly/gtfs-servicechanges)
Navigating large transit stations can be difficult and stressful, especially for riders in wheelchairs. Furthermore, maintenance, equipment malfunctions and other scheduled and unscheduled closures sometimes alter routes that riders must take within a station. This extension allows transit apps to dynamically route riders through stations

##### [Pathways](https://bit.ly/gtfs-pathways)
Navigating large transit stations can be difficult and stressful, especially for riders in wheelchairs. Furthermore, maintenance, equipment malfunctions and other scheduled and unscheduled closures sometimes alter routes that riders must take within a station. This extension allows transit apps to dynamically route riders through stations.

##### Disallowed travel
Some intercity transit agencies have certain disallowed travel patterns in which an origin-destination pair is connected by the agency, but the agency will not sell tickets for that origin-destination pair. This extension allows these disallowed travel patterns to be specified. 

##### [Vehicles](https://bit.ly/gtfs-vehicles)
Vehicles are fundamental to any transit system and in some cases agencies may need to provide information about specific vehicles. Occupancy status, amenities, bike capacity and boarding restrictions and accessibility are all useful information that riders may need. This extension allows GTFS to describe many vehicle properties. 

### Unofficial Extensions 
<hr>

Some GTFS producers have added extensions to GTFS that have not been formally adopted into the specification. Some of the major unofficial extensions are listed below. 

* Google - Provides translation support, extends route types, allows for more detailed transfer rules and adds a number of other functions. 
* MTC GTFS+ - Created by the San Francisco Bay Area Metropolitan Transportation Commission. Adds additional real time information, directions, rider categories and more.
* MBTA - Adds on-time performance tracking checkpoints, station and facility information and more. 