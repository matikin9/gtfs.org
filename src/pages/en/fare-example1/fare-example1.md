---
path: /fare-example1/
lang: en
---

# Example 1: All trips have the same fare, unlimited transfers

<hr> 

Suppose Demo Transit Agency has the following fare structure:

* Riders pay $1.00 on boarding (```price```='1.00', ```currency```='USD', ```payment_method```='0')
* Ticket is good for all vehicles and doesn't expire (```transfers```='')
* Passengers can ride as long as they like because ```transfer_duration``` is omitted

Since all trips have the same fare, Demo Transit can omit ```fare_rules.txt```

File ```fare_attributes.txt```:

| fare_id   | price | currency_type | payment_method | transfers |
|-----------|-------|---------------|----------------|-----------|
| only_fare | 1.00  | USD           | 0              |           |

<hr>

## Calculating an adult fare


The trip planner calculates a fare of $1 for each leg of the itinerary that 
includes a change of vehicle. However, unlimited transfers are permitted, so 
the trip planner only displays the lowest charge, hat is, the Adult fare of $1.

[Back to list of examples] (/guides/)