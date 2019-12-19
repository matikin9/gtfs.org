---
path: /recommendation4/
lang: en
---
# TripDescriptor and Alerts categorization````
<hr>

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

Example code:

```
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
```

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