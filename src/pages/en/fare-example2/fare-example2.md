---
path: /fare-example2/
lang: en
---

# Example 2: All trips have the same fare, no transfers

<hr> 

Suppose Demo Transit Agency has the following fare structure:

* Riders pay $1.00 on boarding (```price```='1.00', ```currency```='USD', ```payment_method```='0')
* Passengers can ride as long as they like because ```transfer_duration``` is omitted
* Any change in vehicles requires a new fare. (```transfers```='0')

Since all trips have the same fare, Demo Transit can omit ```fare_rules.txt```

File ```fare_attributes.txt```:

| fare_id   | price | currency_type | payment_method | transfers |
|-----------|-------|---------------|----------------|-----------|
| only_fare | 1.00  | USD           | 0              |           |

<hr>

## Calculating an adult fare

The trip planner calculates a fare of $1 for each leg of the itinerary that 
includes a change of vehicle. So an itinerary that requires a change of buses
would be $2.

[Back to list of examples] (/guides/#examples)