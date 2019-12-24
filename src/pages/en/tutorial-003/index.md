---
path: /tutorial-003/
lang: en
---
# Vehicle position feeds minimum specification

<hr>

Vehicle position provides Transit users with updates on the location of a vehicle, allowing users to plan their trips more efficiently. 
This article lists the minimum requirements for a working feed of vehicle positions.

## How it works

Before you create a GTFS-realtime feed, you need to have a working GTFS static feed. After you’ve created a working GTFS static feed, you can sign up to share your 
RT feed to show users your vehicle positions. 

In order for vehicle positions to show accurate arrival and departure estimates, we require, at minimum, the list of fields shown below:

| Field name            | Required? | Description                                                                    |
|-----------------------|-----------|--------------------------------------------------------------------------------|
| entity                | Yes       | (maps_transit.FeedEntity)                                                      |
| entity_id             | Yes       | Keep this stable until trip is updated                                         |
| vehicle (position)    | Yes       | (maps_transit.VehiclePosition)                                                 |
| trip                  | Yes       | (maps_transit.TripDescriptor)                                                  |
| trip_id               | Yes       | Uniquely identifies a trip from the static                                     |
| start_time            | Yes       | Required for frequency-based trips                                             |
| start_date            | Yes       | Required for frequency-based trips                                             |
| schedule_relationship | Yes       | SCHEDULED or other appropriate                                                 |
| position              | Yes       | (maps_transit.Position)                                                        |
| latitude              | Yes       | Degrees north in the WGS-84 coordinate system                                  |
| longitude             | Yes       | Degrees east in the WGS-84 coordinate system                                   |
| bearing               | Optional  | Might be used in the future                                                    |
| speed                 | Optional  | Might be used in the future                                                    |
| timestamp             | Yes       | Epoch timestamp of when the position of the vehicle was obtained in seconds    |
| vehicle (descriptor)  | Yes       | (maps_transit.VehicleDescriptor)                                               |
| id                    | Yes       | This must uniquely and stably identify a vehicle over the entire trip duration |

Example code:

<hr>

````
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
````