---
path: /recommendation2/
lang: en
---

# Trip matching in special cases

<hr>

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