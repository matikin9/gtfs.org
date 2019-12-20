---
path: /joining-trains/
lang: en
---

# Joining trains

<hr>

Set each section of a joined train to display the same destination on the trip_headsign.
 Specify that the departure board for stops C and D show only one trip direction.

__ Train section 1__

| **trip_id** | **stop_id** | **pickup_type** | **drop_off_type** | **trip_headsign** |
|---------------|---------------|-------------------|---------------------|---------------------|
| **trip_1**    | A             | 0                 | 0                   | E                   |
| **trip_1**    | B             | 0                 | 0                   | E                   |
| **trip_1**    | C             | 0                 | 0                   | E                   |
| **trip_1**    | D             | 0                 | 0                   | E                   |
| **trip_1**    | E             | 0                 | 0                   | E                   |

__ Train section 2__

| **trip_id** | **stop_id** | **pickup_type** | **drop_off_type** | **trip_headsign** |
|-------------|-------------|-----------------|-------------------|-------------------|
| **trip_2**  | X           | 0               | 0                 | E                 |
| **trip_2**  | Y           | 0               | 0                 | E                 |
| **trip_2**  | C           | 1               | 0                 | E                 |
| **trip_2**  | D           | 1               | 0                 | E                 |
| **trip_2**  | E           | 1               | 0                 | E                 |


[Back to list of examples] (/guides/#examples)