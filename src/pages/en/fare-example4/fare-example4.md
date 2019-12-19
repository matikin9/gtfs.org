---
path: /fare-example4/
lang: en
---

# Example 4: Different pricing for local and express routes

<hr> 

Suppose Demo Transit Agency has the following fare structure:

* Riders pay $1.75 on boarding local buses (route 1)
* Riders pay $5 on boarding express buses (route 2 and 3)
* Transfers are not allowed


Since some trips cost more than others, Demo Transit must include ```fare_rules.txt```
and each route must have an entry to associate it with a fare.

File ```fare_attributes.txt```:

| fare_id      | price | currency_type | payment_method | transfers | 
|--------------|-------|---------------|----------------|-----------|
| local_fare   | 1.75  | USD           | 0              |           |
| express_fare | 5.00  | USD           | 0              |           |

<br>

File ```fare_rules.txt```:

| fare_id      | route_id | 
|--------------|----------|
| local_fare   | Route_1  |
| express_fare | Route_2  |
| express_fare | Route_3  |

<hr>

## Calculating an adult fare

The $5.00 fare is only applicable if you ride routes 2 or 3.
The $1.75 fare only applies on route 1. If an itinerary uses routes 1 and 2, 
the fare is $6.75.

[Back to list of examples] (/guides/#examples)