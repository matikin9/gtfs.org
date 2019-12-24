---
path: /warning-trips/
lang: en
---

# Category: Trips

| Warning                                  | Description                                                                                                                                                                                                                                 |
|-------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| Block trips with inconsistent route types |<br> A block trip implies that passengers can remain on a vehicle to transfer from one route to the next. If the ```route_type``` changes, either the block or the ```route_type``` is incorrectly defined, this must be fixed.                          <br><br>    |
| Stop headsign duplicates stop name        | The ```stop_headsign``` describes the direction for trips departing from the specified stop. This prevents routing results directing you to take a route towards Central Terminal if you are departing from Central Terminal.                     |
| <br><br>Trip headsign contains ```route_long_name```    | <br> Since the ```trip_headsign``` may be displayed together with the ```route_long_name``` information should not be duplicated.                                                                                                                            |
| <br> Trip headsign contains ```route_short_name```   | <br> Since the system displays ```trip_headsign``` with the ```route_short_name``` field, this information should not be duplicated. This prevents routing results like “1 towards 1 Central Terminal”.        <br>                                              |
| <br> Trips with incorrect stop headsigns       |<br> The following trips have an incorrect ```stop_headsign```. Correct ```stop_headsign``` for loop trips is the next stop. Trips need to have at least one stop with the correct headsign.                                                                 |
| <br> Trip has duplicate stops                  | Stops within a trip should be distinct.                                                                                                                                                                                                     |
| Fast travel between stops                 | <br>Two stop times, belonging to the same trip in the ```stop_times.txt``` file, were found where the speed required for the transit vehicle to travel between the specified stops in the specified time seems suspiciously fast.                     |
| Fast travel between far stops             | <br> Two stops, which were far apart and belonging to the same trip in the ```stop_times.txt``` file, were found where the speed required for the transit vehicle to travel between the specified stops in the specified time seems suspiciously fast. |