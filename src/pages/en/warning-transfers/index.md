---
path: /warning-transfers/
lang: en
---

# Category: transfers
 
| Warning                           | Description                                                                                                                                                                                   |
|------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| ```Min_transfer_time``` is missing       | <br>This warning indicates that a transfer was defined as timed transfer but no ```min_transfer_time``` was defined. Either the wrong transfer_type was defined or the ```min_transfer_time``` was not set.   <br><br>|
| Transfer distance is very large    | This warning indicates that a transfer was defined between two stops that are very far away from each other at a distance that passengers wouldn’t normally walk (> 2km), this must be fixed. <br><br>|
| Transfer walking speed is too fast | This warning indicates that a transfer was defined between two stops with a ```min_transfer_time``` that requires very fast walking (> 2m/s), this must be fixed.                                   |