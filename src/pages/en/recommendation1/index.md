---
path: /recommendation1/
lang: en
---

# ````TripDescriptor```` semantics

<hr>

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
