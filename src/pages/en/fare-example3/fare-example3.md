---
path: /fare-example3/
lang: en
---

# Example 3: All trips have the same fare, no transfers

<hr> 

Suppose Demo Transit Agency has the following fare structure:

* Riders pay $1.00 on boarding (```price```='1.00', ```currency```='USD', ```payment_method```='0')
* Unlimited transfers are allowed within 90 minutes ```transfer="```,```transfer_duration=5400```).

Since all trips have the same fare, Demo Transit can omit ```fare_rules.txt```

File ```fare_attributes.txt```:

| fare_id   | price | currency_type | payment_method | transfers | transfer_duration |
|-----------|-------|---------------|----------------|-----------|------------------|
| only_fare | 1.00  | USD           | 0              |           | 5400             |

<hr>

## Calculating an adult fare

The trip planner calculates a fare of $1 for each leg of the itinerary that 
includes a change of vehicle. Then it calculates the time for the itinerary.
If the itinerary time is less than 90 minutes, the fare is $1.

[Back to list of examples] (/guides/#examples)