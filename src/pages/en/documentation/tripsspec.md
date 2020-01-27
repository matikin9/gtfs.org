---
path: /tripsspec/
lang: en
---
### Trips.txt (required file)

|  Field Name | Type | Required | Description |
|  ------ | ------ | ------ | ------ |
|  `route_id` | ID referencing `routes.route_id` | **Required** | Identifies a route. |
|  `trip_id` | ID | **Required** | Identifies a trip. |
|  `service_id` | ID referencing `calendar.service_id` or `calendar_dates.service_id` | **Required** | Identifies a set of dates when service is available for one or more routes. |
|  `trip_headsign` | Text | Optional | Text that appears on signage identifying the trip's destination to riders. Use this field to distinguish between different patterns of service on the same route. If the headsign changes during a trip, `trip_headsign` can be overridden by specifying values for the `stop_times.stop_headsign`. |
|  `trip_short_name` | Text | Optional | Public facing text used to identify the trip to riders, for instance, to identify train numbers for commuter rail trips. If riders do not commonly rely on trip names, leave this field empty.  A `trip_short_name` value, if provided, should uniquely identify a trip within a service day; it should not be used for destination names or limited/express designations. |
|  `direction_id` | Enum | Optional | Indicates the direction of travel for a trip. This field is not used in routing; it provides a way to separate trips by direction when publishing time tables. Valid options are: <br><br>`0` - Travel in one direction (e.g. outbound travel).<br>`1` - Travel in the opposite direction (e.g. inbound travel).<hr>*Example: The `trip_headsign` and `direction_id` fields could be used together to assign a name to travel in each direction for a set of trips. A [trips.txt](#tripstxt) file could contain these records for use in time tables:* <br> `trip_id,...,trip_headsign,direction_id` <br> `1234,...,Airport,0` <br> `1505,...,Downtown,1` |
|  `block_id` | ID | Optional | Identifies the block to which the trip belongs. A block consists of a single trip or many sequential trips made using the same vehicle, defined by shared service days and `block_id`. A `block_id` can have trips with different service days, making distinct blocks. See the [example below](#example-blocks-and-service-day) |
|  `shape_id` | ID referencing `shapes.shape_id` | Optional | Identifies a geospatial shape describing the vehicle travel path for a trip. |
|  `wheelchair_accessible` | Enum | Optional | Indicates wheelchair accessibility. Valid options are:<br><br>`0` or empty - No accessibility information for the trip.<br>`1` - Vehicle being used on this particular trip can accommodate at least one rider in a wheelchair.<br>`2` - No riders in wheelchairs can be accommodated on this trip. |
|  `bikes_allowed` | Enum | Optional | Indicates whether bikes are allowed. Valid options are:<br><br>`0` or empty - No bike information for the trip.<br>`1` - Vehicle being used on this particular trip can accommodate at least one bicycle.<br>`2` - No bicycles are allowed on this trip. |

### Example: Blocks and service day

The example below is valid, with distinct blocks every day of the week.

| route_id | trip_id | service_id                     | block_id | <span style="font-weight:normal">*(first stop time)*</span> | <span style="font-weight:normal">*(last stop time)*</span> |
|----------|---------|--------------------------------|----------|-----------------------------------------|-------------------------|
| red      | trip_1  | mon-tues-wed-thurs-fri-sat-sun | red_loop | 22:00:00                                | 22:55:00                |
| red      | trip_2  | fri-sat-sun                    | red_loop | 23:00:00                                | 23:55:00                |
| red      | trip_3  | fri-sat                        | red_loop | 24:00:00                                | 24:55:00                |
| red      | trip_4  | mon-tues-wed-thurs             | red_loop | 20:00:00                                | 20:50:00                |
| red      | trip_5  | mon-tues-wed-thurs             | red_loop | 21:00:00                                | 21:50:00                |

Notes on above table:

* On Friday into Saturday morning, for example, a single vehicle operates `trip_1`, `trip_2`, and `trip_3` (10:00 PM through 12:55 AM). Note that the last trip occurs on Saturday, 12:00 AM to 12:55 AM, but is part of the Friday “service day” because the times are 24:00:00 to 24:55:00.
* On Monday, Tuesday, Wednesday, and Thursday, a single vehicle operates `trip_1`, `trip_4`, and `trip_5` in a block from 8:00 PM to 10:55 PM.
