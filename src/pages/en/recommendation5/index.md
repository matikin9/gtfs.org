---
path: /recommendation5/
lang: en
---
# TripDescriptors for TripUpdate and VehiclePosition

To help users have successful trips, review and use Google Transit guidelines. When working with ```TripDescriptors``` for the ```TripUpdate``` and ```VehiclePosition``` entities, follow the guidelines below:

<hr>

## TripUpdate

<hr>

* [Frequency-based TripDes riptors] (/frequency-based-tripdescriptors/)
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
 
