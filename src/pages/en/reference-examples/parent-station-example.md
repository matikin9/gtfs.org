| This stop ID represents... | This entry's location type... | This entry's parent_station field contains... |
| --- | --- | --- |
| A stop located inside a station | 0 or blank | The stop ID of the station where this stop is located. The stop referenced by parent_station must have location_type=1. |
| A stop located outside a station | 0 or blank | A blank value. The parent_station field doesn’t apply to this stop. |
| A station | 1 | A blank value. Stations can’t contain other stations. |
