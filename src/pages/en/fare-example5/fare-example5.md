---
path: /fare-example5/
lang: en
---

# Example 5: Buying a transfer increases a fare

<hr> 

Suppose Demo Transit Agency has the following fare structure:

* Riders pay $1.75 on boarding local buses
* Riders can pay an extra $0.25 on boarding to purchase a transfer
* Transfers purchased are valid for 90 minutes

Since these rules apply to all trips, Demo Transit can omit ```fare_rules.txt```

File ```fare_attributes.txt```:

| fare_id          | price | currency_type | payment_method | transfers | 
|------------------|-------|---------------|----------------|-----------|
| local_fare       | 1.75  | USD           | 0              |           |
| plustransfer_fare| 2.00  | USD           |                | 5400      |


<hr>

## Calculating an adult fare

Technically, both fares apply on itinerary that has no transfers.
However, the trip planner always chooses the least expensive applicable fare:

* For an itinerary with one transfer, ```simple_fare``` is $3.50 vs. $2.00 when a transfer
is purchased. So the trip planner will report $2.00 fare on all itineraries that require a 
change of vehicle.
* For an itinerary with no transfers, $1.75 fare is less than 
```plustransfer_fare``` of $2.00. So if an itinerary doesn't require a change of vehicle, 
the fare is $1.75

[Back to list of examples] (/guides/#examples)