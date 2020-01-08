---
path: /routes-example4/
lang: en
---


# Correct example
<hr> 

File ```routes.txt```:

| route_id | route_short_name | route_long_name       | route_type |
|----------|------------------|-----------------------|------------|
| R10      | 10               | Airport - Downtown    | 3          |
| R20      | 20               | University - Downtown | 3          |

<br>

File ```trips.txt```:

| route_id | service_id | trip_id | trip_headsign | direction_id |
|----------|------------|---------|---------------|--------------|
| R10      | WD         | T-10-1  | Airport       | 0            |
| R10      | WE         | T-10-2  | Downtown      | 1            |
| R20      | WD         | T-20-1  | University    | 0            |
| R20      | WE         | T20-2   | Downtown      | 1            |

<hr>

# Incorrect example

File ```routes.txt```
| route_id | route_short_name | route_long_name | route_type |
|----------|------------------|-----------------|------------|
| R10-in   | 10               | To Downtown     | 3          |
| R10-out  | 10               | To Airport      | 3          |
| R20-in   | 20               | To Downtown     | 3          |
| R20-out  | 20               | To University   | 3          |


[Back to list of examples] (/guides/#examples)