---
path: /non-frequency-based-tripdescriptors/
lang: en
---

# Non-frequency-based TripDescriptors

If no ```start_date``` is specified, then that trip update or vehicle position message defaults to the trip happening within [-12h, +12h] from the feed timestamp.

You can specify ```start_date``` if service runs on the specified day according to static GTFS. You can also specify start_time, but it must be the same as the corresponding static GTFS feed.
 If an invalid ```start_date``` or ```start_time``` is specified, the corresponding trip update or vehicle position is ignored.

For example:
````
trip_update {
    trip {
      trip_id: "non_frequency-expanded-trip"
      start_date: "20160203"
    }
  }
```` 

If ```trip_id``` is unavailable, use the following fields:

````
trip_update {
    trip {
      route_id: "route1"
      direction_id: 0
      start_time: "10:10:00"
      start_date: "20160203"
    }
}
````

Note: You must provide valid ```route_id```, ```direction_id```, and ```start_time```. Otherwise, the ```trip_update``` is discarded. 
Also, if the IDs resolve to a non-unique trip or a trip not in service, the vehicle position or trip update is discarded. 
For this matching method to work, the GTFS static feed must include ```direction_id```.