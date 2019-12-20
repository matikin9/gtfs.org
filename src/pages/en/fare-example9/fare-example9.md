---
path: /fare-example9/
lang: en
---

# Example 9: Fare and blocks transfers

<hr> 

A block transfer combines two trips belonging to different routes, allowing passengers to 
remain on the same vehicle while transferring from one route to the next. For a trip that has 
a block transfer, the system selects a fare that can be used for all routes involved. 
Block transfers are not counted as transfers for fare modeling.

The following is an example model of a fare for block transfer:

* Assume that there are two routes, A and B.
* Any trip on route A or B costs $1, and any trip including A and B costs $2.

The values in ```fare_attributes.txt``` and ```fare_rules.txt``` should look as follows:

File ```fare_attributes.txt```:

| fare_id  | price | currency_type | payment_method | transfers | transfer_duration |
|----------|-------|---------------|----------------|-----------|-------------------|
| fare_A   | 1.00  | USD           | 0              | 0         |                   |
| fare_B   | 1.00  | USD           | 0              | 0         |                   |
| fare_AB  | 2.00  | USD           | 0              | 0         |                   |

<br>

File ```fare_rules.txt```:

| fare_id | route_id | origin_id | destination_id | contains_id |
|---------|----------|-----------|----------------|-------------|
| fare_A  | route_A  |           |                |             |
| fare_B  | route_B  |           |                |             |
| fare_AB | route_A  |           |                |             |
| fare_AB | route_B  |           |                |             |


[Back to list of examples] (/guides/#examples)