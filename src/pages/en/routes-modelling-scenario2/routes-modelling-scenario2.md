---
path: /routes-modelling-scenario2/
lang: en
---

# Scenario 2


Using the same setup as the previous scenario, however, the trips that skip B, C, and E are 
communicated to users in schedules as a separate line (1 Express). This scenario requires 
that you model maps and signage as a separate route (1 Express) in the feed.

<hr> 


File ```stops.txt```

| stop_id | stop_name | stop_lat   | stop_lon    |
|---------|-----------|------------|-------------|
| stopA   | Stop A    | -21.213049 | -159.825975 |
| stopB   | Stop B    | -21.227892 | -159.828051 |
| stopC   | Stop C    | -21.252230 | -159.821118 |
| stopD   | Stop D    | -21.260588 | -159.800071 |
| stopE   | Stop E    | -21.271595 | -159.757365 |
| stopF   | Stop F    | -21.269228 | -159.739851 |


<br>

File ```routes.txt```:

| route_id | route_short_name | route_long_name | route_type |
|-----------------|------------------|-----------------|------------|
| BusLine1        | 1                |                 | 3          |
| BusLine1Express | 1 Express        |                 | 3          |

<br>

File ```trips.txt```:

| route_id        | service_id | trip_id    |
|-----------------|------------|------------|
| BusLine1        | 0          | tripABCDEF |
| BusLine1        | 0          | tripABCD   |
| BusLine1Express | 0          | tripADF    |

<br>

File ```stop_times.txt```

| trip_id    | arrival_time | departure_time | stop_id | stop_sequence |
|------------|--------------|----------------|---------|---------------|
| tripABCDEF | 06:00:00     | 06:00:00       | stopA   | 1             |
| tripABCDEF | 06:10:00     | 06:12:00       | stopB   | 2             |
| tripABCDEF | 06:20:00     | 06:22:00       | stopC   | 3             |
| tripABCDEF | 06:30:00     | 06:32:00       | stopD   | 4             |
| tripABCDEF | 06:40:00     | 06:42:00       | stopE   | 5             |
| tripABCDEF | 06:50:00     | 06:50:00       | stopF   | 6             |
| tripABCD   | 08:00:00     | 08:00:00       | stopA   | 1             |
| tripABCD   | 08:10:00     | 08:12:00       | stopB   | 2             |
| tripABCD   | 08:20:00     | 08:22:00       | stopC   | 3             |
| tripABCD   | 08:30:00     | 08:30:00       | stopD   | 4             |
| tripADF    | 10:00:00     | 10:00:00       | stopA   | 1             |
| tripADF    | 10:10:00     | 10:12:00       | stopD   | 2             |
| tripADF    | 10:20:00     | 10:20:00       | stopF   | 3             |

<br>

[Back to list of examples] (/guides/#examples)