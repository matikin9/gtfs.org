---
path: /feed-issues/
lang: en
---

# Duplicate column name

This error can result from an incorrectly formatted files being uploaded. Each line must end with a CRLF or LF line break character.

Ending with CR will be displayed correctly in most text viewers, but will not be processed correctly by our systems.

# Duplicate identifier

An identifier was found with duplicate values when that value must be unique across the entire dataset. For example, if the ```trips.txt``` file contains more than 
one``` trip ```with the same ```trip_id```, you will get this error.

# Feed has no language specified

The feed has not specified a language, which makes it difficult to present the feed to users who speak different languages. 
Add an ```agency_lang``` field in the ```agency.txt``` file or alternatively, add a ```feed_info.txt``` file.

# Long Departure-Arrival Intervals

Due to underlying restrictions in the transit routing engine, time intervals between ```stop``` times of 24 hours or longer are not supported. 
As an example, consider a transit``` trip ```that leaves ```stop``` A at 9 AM and then arrives at the next stop, B, at 10 AM the following day. 
Because the total travel time between the two stops is 25 hours, the Google GTFS validation and import tools report an error.

Sometimes these errors can be subtle. Consider a ```trip``` that leaves ```stop``` A at 9 AM. Over the next 24 hours, the``` trip ```might make a series of stops 
until finally terminating the ```trip``` at ```stop``` B at 10 AM the following day. If those intermediate stops have a ```drop_off_type``` value of 1 
(set in file ```stop_times.txt```), indicating that passengers cannot exit the transit vehicle at those stops, then we still consider the time interval to be 25 hours. 
That is, we measure the maximum interval from where the passenger boards to where they are next allowed to get off. In our example, that interval is greater than 24 
hours and results in an error.

In another example, consider a ```trip``` that starts at ```stop``` A at 9 AM. Over the next 24 hours, the ```trip``` might make a series of stops until finally 
terminating the``` trip ```at ```stop``` B at 10 AM the following day. If the arrival or departure times have not been specified for the intermediate stops, 
we again consider the time interval to be 25 hours. Here, the best solution is to specify arrival and departure times for the intermediate stops.

In practice, very few transit systems have trips where a full 24 hours passes between two stops, so these situations should be rare.

# Missing referenced value

A referenced value is missing. This is a fatal error and prevents the feed from being used.

When values in a column in one file make reference to values from a column in another file, each value in the first column must match a value from the second column. If a value in the first column does not match a value from the second column, the feed validator returns a "Missing Referenced Value" error.

For example, if your fare_rules.txt file makes reference to a route_id that does not exist in the routes.txt file, the feed validator returns the missing referenced value error.

Consider the following example:

```routes.txt

route_id,route_short_name,route_type 
r1,S1,3
r2,S2,3
```

```
trips.txt
route_id,trip_id,service_id 

r3,t0,weekly
```

This feed fails to parse and validate. GTFS requires that a value in the ```route_id``` column of the ```trips.txt``` file matches a value in the ```route_id``` 
column of the ```routes.txt``` file. In the example, the ```trips.txt``` ```route_id``` value of r3 does not match any of the ```route_id``` values from the ```routes.txt``` 
file, resulting in a verification error.

There are many such value-reference constraints defined in the GTFS specification. Be sure that values are properly matched between different GTFS files.

# Missing required file

A required file is missing from the feed.

This error message often occurs if Google can not read the feed file as you have provided it. The error is commonly caused by encoding problems, or if the files are grouped under a directory within the zip file. The zip file must contain individual files all on one level with no sub-directory structure.

# Overlapping Stop Times for Block Trips

In a GTFS feed, two trips in the ```trips.txt``` file can be linked using the ```block_id``` field. Use this feature to link two or more trips that are served by 
the same vehicle, especially in cases where a transit passenger might stay on the vehicle across trips. However, take care when modeling these trips: 
two trips in the same block must not have overlapping ```stop``` times.

__NOTE:__ You must fix this situation as two trips cannot belong to the same block if their ```stop``` times overlap.

Consider an example of two trips linked with the same ```block_id```:

```
trip_id,route_id,service_id,block_id
t0,r0,weekday,block0
t1,r0,weekday,block0
```

Now consider the ```stop_times.txt``` file entries for these two trips:

```
trip_id,stop_id,stop_sequence,arrival_time,departure_time
t0,stop0,0,09:00:00,09:00:00
t0,stop1,1,09:30:00,09:30:00
t1,stop2,0,09:25:00,09:25:00
t1,stop3,1,10:00:00,10:00:00
```

The``` trip ```named ```t0``` starts at 9:00 AM and the``` trip ```named t1 finishes up at 10:00 AM, putting``` trip ``` ```t0``` before t1. However, 
notice how``` trip ``` ```t0``` visits ```stop1``` at 9:30 AM and then``` trip ```t1 visits```stop2``` at 9:25 AM. This creates a problem, since if both trips are in the same 
block and are served by the same vehicle, that vehicle would have to travel backward in time between ```stop1``` and ```stop2```.

If you have two trips in the same block, both active on the same service date, they cannot have overlapping ```stop``` times and be considered valid. Specifically, 
if two trips have overlapping ```stop``` times, there is no way to order the trips such that the last ```stop``` of one``` trip ```comes before the first ```stop``` 
time of the other trip. It is acceptable for the last ```stop``` time of the first``` trip ```to have the same time as the first ```stop``` time in the second trip.

Here are some things to check for "Overlapping stop times for block trips" warnings:

- Are the ```stop``` times correct for the two overlapping trips?
- Are the two overlapping trips actually in the same ```block```, that is, are they actually served by the same transit vehicle?
- Are the ```service_ids``` for the two trips correct? Two trips can have the same ```block_id``` and overlapping ```stop``` times if they are never active on the same 
service date (as determined by having different ```service_id``` values for each```and different service dates in the ```calendar.txt``` file).

# Stop too far from parent Station

Validation found a ```stop``` that is more than 100 meters but less than 1000 meters from its parent station, as linked through the ```parent_station``` column 
in the stops.txt file.

Generally, a ```stop``` that is part of a station complex is not far from the parent station. A subway entrance might be far from the center of the corresponding 
station; in this case, you can ignore the warning. However, the ```stop``` may not actually be part of the parent station complex. If a ```stop``` is found to be a 
large distance from its parent station, it may indicate a problem with the GTFS feed.

Here are some things to check when resolving "Stop too far from parent station" warnings:

*  The ```stop``` location could be wrong.
* The parent station location could be wrong.
* The ```stop``` might not actually belong to the specified station.

__NOTE:__
- A ```stop``` more than 1000 meters from its parent station triggers a validation error.
- A ```stop``` more than 100 meters but less than 1000 meters from its parent station triggers a warning.