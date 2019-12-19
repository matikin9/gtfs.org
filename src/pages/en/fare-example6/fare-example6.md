---
path: /fare-example6/
lang: en
---

# Example 6: Fare depends on stations pairs, how you get there doesn't matter

<hr> 

In this example only the entry and exit points from the system matter. 
To define this fare structure for the feed, each station must have its own unique zone ID 
defined in ```stops.txt```. Each station is considered a single zone.

* The ```fare_attributes.txt``` and fare_rules.txt files define one row for each pair of stations.
* In file ```fare_attributes.txt```, the origin_id and destination_id fields identify station pairs by zone ID.


File ```fare_attributes.txt```:

| fare_id    | price | currency_type | payment_method | transfers |
|------------|-------|---------------|----------------|-----------|
| !S1_to_S2  | 1.75  | USD           | 0              |           |
| !S1_to_S3  | 3.25  | USD           | 0              |           |
| !S1_to_S4  | 4.55  | USD           | 0              |           |
| ...        |       |               |                |           |
| !S10_to_S1 | 5.65  | USD           | 0              |           |

<br>

File ```fare_rules.txt```:

| fare_id    | origin_id | destination_id |
|------------|-----------|----------------|
| !S1_to_S2  | S1        | S2             |
| !S1_to_S3  | S1        | S3             |
| !S1_to_S4  | S1        | S4             |
| ...        |           |                |
| !S10_to_S1 | S10       | S1             |

<hr>

## Calculating an adult fare

The trip planner calculates an itinerary, and then looks up the fare rules until it finds a 
matching origin/destination station pair. The public feed from SF Bay Area BART provides a 
real-world illustration of this type of fare structure.



[Back to list of examples] (/guides/#examples)