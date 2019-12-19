---
path: /splitting-trains/
lang: en
---

# Splitting trains

<hr>

Set each section of the split train to display a different destination trip_headsign.
 Specify that the departure boards for stops E, D, and C show two trips departing at the same 
 time (one in direction A and one in direction X).
 
__ Train section 1__

| **trip_id** | **stop_id** | **pickup_type** | **drop_off_type** | **trip_headsign** |
|---------------|---------------|-------------------|---------------------|---------------------|
| **trip_1**    | E             | 0                 | 0                   | A                   |
| **trip_1**    | D             | 0                 | 0                   | A                   |
| **trip_1**    | C             | 0                 | 0                   | A                   |
| **trip_1**    | B             | 0                 | 0                   | A                   |
| **trip_1**    | A             | 0                 | 0                   | A                   |

__ Train section 2__

| **trip_id** | **stop_id** | **pickup_type** | **drop_off_type** | **trip_headsign** |
|---------------|---------------|-------------------|---------------------|---------------------|
| **trip_1**    | E             | 0                 | 1                   | X                   |
| **trip_1**    | D             | 0                 | 1                   | X                   |
| **trip_1**    | C             | 0                 | 1                   | X                   |
| **trip_1**    | Y             | 0                 | 0                   | X                   |
| **trip_1**    | X             | 0                 | 0                   | X                   |


[Back to list of examples] (/guides/#examples)