---
path: /fare-example7/
lang: en
---

# Example 7: Fare depends on zones

<hr> 

Suppose Demo Transit Agency has a concentric three-zone system, where fares depend on which 
zones a rider passes through during an itinerary. To define this fare structure for the feed, 
files ```fare_attributes.txt``` and ```fare_rules.txt``` must contain a line for each possible combination of zones. 
For very complex cross-zone fare structures, it may be simpler to programmatically output ```fare_rules.txt``` using 
origin and destination to define fares.

File ```fare_attributes.txt```:

| fare_id | price | currency_type | payment_method | transfers |
|---------|-------|---------------|----------------|-----------|
| F1      | 4.15  | USD           | 0              |           |
| F2      | 2.20  | USD           | 0              |           |
| F3      | 2.20  | USD           | 0              |           |
| F4      | 2.95  | USD           | 0              |           |
| F5      | 1.25  | USD           | 0              |           |
| F6      | 1.95  | USD           | 0              |           |
| F7      | 1.95  | USD           | 0              |           |

<br>

File ```fare_rules.txt```:

| fare_id | contains_id |
|---------|-------------|
| F1      | 1           |
| F1      | 2           |
| F1      | 3           |
| F2      | 1           |
| F2      | 2           |
| F3      | 1           |
| F3      | 3           |
| F4      | 2           |
| F4      | 3           |
| F5      | 1           |
| F6      | 2           |
| F7      | 3           |

<hr>

## Calculating an adult fare

Let's look more closely at the definitions in ```fare_rules.txt```.

* F1 applies to any trip that passes through zones (1,2,3).
* F2 applies to any trip that passes through zones (1,2).
* F3 applies to any trip that passes through zones (1,3).
* F4 applies to any trip that passes through zones (2,3).
* F5 applies to any trip that passes through zone 1 only.
* F6 applies to any trip that passes through zone 2 only.
* F7 applies to any trip that passes through zone 3 only.

The trip planner calculates an itinerary, and then looks up the fare rules to determine the fares that apply 
based on zone. Since F1 also includes travel in zone 1, only F4 ($2.95) applies to a trip from zone 2 to zone 3. 
A fare rule only applies when the set of zones passed through in an itinerary exactly matches the set specified 
by the fare rule. For a trip between zones 2 and 3, the trip planner reports $2.95 as the adult fare.

[Back to list of examples] (/guides/#examples)