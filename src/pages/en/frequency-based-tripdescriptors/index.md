---
path: /frequency-based-tripdescriptors/
lang: en
---

# Frequency-based TripDescriptors

When ```trip_id``` and start_time are within ```exact_time=1``` interval, ```start_time``` must be later than the beginning of the interval by an exact multiple of ```headway_secs```. 
The triplet ```(trip_id, start_date, start_time)``` uniquely identifies a trip. If ```start_date``` isn’t specified, it’s set to the local day, corresponding to the feed timestamp. 
If the trip isn’t in service on the specified date, trip update or vehicle position is ignored. 

```start_time``` should be the scheduled start time. When included, start_time must stay the same in all ```TripDescriptors``` representing the same trip across all feeds. 

For example:

```
trip_update {
    trip {
      trip_id: "frequency-expanded-trip"
      start_time: "10:10:00"
      start_date: "20150525"
    }
```

```StopTimeUpdates``` should be used to indicate adjustments to the actual first departure time for the first stop. Do not adjust the ```start_time```.

For example:
We decide at 10 AM, May 25th 2015, that a trip with ```route_id=R``` and ```direction_id=0``` will start at ```start_time=10:10:00```. 
We provide this information via realtime feed at 10:01. At 10:05, we realize that the trip will start at 10:13 instead of 10:10. In our new realtime feed, we can still identify this trip as 
```(R, 0, 2015-05-25, 10:10:00)```, but provide a ```StopTimeUpdate``` with departure from the first stop at 10:13:00. 

Example code:
````
trip_update {
    trip {
         route_id: "R"
         direction_id: 0 
         start_date: "20150525"
         start_time: "10:10:00"
    }
    stop_time_update {
      stop_sequence: 1
      departure {
        delay: 180
      }
    }
}
```