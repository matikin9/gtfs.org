---
lang: en

---

<nested-table content="with some content"></nested-table>

# General Transit Feed Specification Reference

**Revised August 4, 2016. See [Revision History](https://github.com/google/transit/blob/master/gtfs/CHANGES.md) for more details.**

This document explains the types of files that comprise a GTFS transit feed and defines the fields used in all of those files.

## Term Definitions

This section defines terms that are used throughout this document.

* **Field required** - The field column must be included in your feed, and a value must be provided for each record. Some required fields permit an empty string as a value. To enter an empty string, just omit any text between the commas for that field. Note that 0 is interpreted as "a string of value 0", and is not an empty string. Please see the field definition for details.
* **Field optional** - The field column may be omitted from your feed. If you choose to include an optional column, each record in your feed must have a value for that column. You may include an empty string as a value for records that do not have values for the column. Some optional fields permit an empty string as a value. To enter an empty string, just omit any text between the commas for that field. Note that 0 is interpreted as "a string of value 0", and is not an empty string.
* **Dataset unique** - The field contains a value that maps to a single distinct entity within the column. For example, if a route is assigned the ID **1A**, then no other route may use that route ID. However, you may assign the ID **1A** to a location because locations are a different type of entity than routes.

## Feed Files

This specification defines the following files along with their associated content:

|  Filename | Required | Defines |
|  ------ | ------ | ------ |
|  [agency.txt](#agency) | **Required** | One or more transit agencies that provide the data in this feed. |
|  [stops.txt](#stops) | **Required** | Individual locations where vehicles pick up or drop off passengers. |
|  [routes.txt](#routes) | **Required** | Transit routes. A route is a group of trips that are displayed to riders as a single service. |
|  [trips.txt](#trips)  | **Required** | Trips for each route. A trip is a sequence of two or more stops that occurs at specific time. |
|  [stop_times.txt](#stop_times)  | **Required** | Times that a vehicle arrives at and departs from individual stops for each trip. |
|  [calendar.txt](#calendar)  | **Required** | Dates for service IDs using a weekly schedule. Specify when service starts and ends, as well as days of the week where service is available. |
|  [calendar_dates.txt](#calendar_dates)  | Optional | Exceptions for the service IDs defined in the [calendar.txt](#calendar) file. If [calendar.txt](#calendar) includes ALL dates of service, this file may be specified instead of [calendar.txt](#calendar). |
|  [fare_attributes.txt](#fare_attributes)  | Optional | Fare information for a transit organization's routes. |
|  [fare_rules.txt](#fare_rules)  | Optional | Rules for applying fare information for a transit organization's routes. |
|  [shapes.txt](#shapes)  | Optional | Rules for drawing lines on a map to represent a transit organization's routes. |
|  [frequencies.txt](#frequencies)  | Optional | Headway (time between trips) for routes with variable frequency of service. |
|  [transfers.txt](#transfers)  | Optional | Rules for making connections at transfer points between routes. |
|  [feed_info.txt](#feed_info)  | Optional | Additional information about the feed itself, including publisher, version, and expiration information. |

## File Requirements

The following requirements apply to the format and contents of your files:

* All files in a General Transit Feed Spec (GTFS) feed must be saved as comma-delimited text.
* The first line of each file must contain field names. Each subsection of the [Field Definitions](#Field-Definitions) section corresponds to one of the files in a transit feed and lists the field names you may use in that file.
* All field names are case-sensitive.
* Field values may not contain tabs, carriage returns or new lines.
* Field values that contain quotation marks or commas must be enclosed within quotation marks. In addition, each quotation mark in the field value must be preceded with a quotation mark. This is consistent with the manner in which Microsoft Excel outputs comma-delimited (CSV) files. For more information on the CSV file format, see http://tools.ietf.org/html/rfc4180.
The following example demonstrates how a field value would appear in a comma-delimited file:
  * **Original field value:** `Contains "quotes", commas and text`
  * **Field value in CSV file:** `"Contains ""quotes"", commas and text"`
* Field values must not contain HTML tags, comments or escape sequences.
* Remove any extra spaces between fields or field names. Many parsers consider the spaces to be part of the value, which may cause errors.
* Each line must end with a CRLF or LF linebreak character.
* Files should be encoded in UTF-8 to support all Unicode characters. Files that include the Unicode byte-order mark (BOM) character are acceptable. Please see the [Unicode FAQ](http://unicode.org/faq/utf_bom.html#BOM) for more information on the BOM character and UTF-8.
* Zip the files in your feed.

## Field Definitions
### agency.txt (Required)

| Field Name | Required | Details |
| ------ | ------ | ------ |
  | agency_id | Optional | The **agency_id** field is an ID that uniquely identifies a transit agency. A transit feed may represent data from more than one agency. The **agency_id** is dataset unique. This field is optional for transit feeds that only contain data for a single agency. |
  | agency_name | Required | The **agency_name** field contains the full name of the transit agency. Google Maps will display this name. |
  | agency_url | Required | The **agency_url** field contains the URL of the transit agency. The value must be a fully qualified URL that includes **http**:// or **https**://, and any special characters in the URL must be correctly escaped. See http://www.w3.org/Addressing/URL/4_URI_Recommentations.html for a description of how to create fully qualified URL values. |
  | agency_timezone | Required | The **agency_timezone** field contains the timezone where the transit agency is located. Timezone names never contain the space character but may contain an underscore. Please refer to http://en.wikipedia.org/wiki/List_of_tz_zones for a list of valid values. If multiple agencies are specified in the feed, each must have the same agency_timezone. |
  | agency_lang | Optional | The **agency_lang field** contains a two-letter ISO 639-1 code for the primary language used by this transit agency. The language code is case-insensitive (both en and EN are accepted). This setting defines capitalization rules and other language-specific settings for all text contained in this transit agency's feed. Please refer to http://www.loc.gov/standards/iso639-2/php/code_list.php for a list of valid values. |
  | agency_phone | Optional | The **agency_phone field** contains a single voice telephone number for the specified agency. This field is a string value that presents the telephone number as typical for the agency's service area. It can and should contain punctuation marks to group the digits of the number. Dialable text (for example, TriMet's "503-238-RIDE") is permitted, but the field must not contain any other descriptive text. |
  | agency_fare_url | Optional | The **agency_fare_url** specifies the URL of a web page that allows a rider to purchase tickets or other fare instruments for that agency online. The value must be a fully qualified URL that includes **http**:// or **https**://, and any special characters in the URL must be correctly escaped. See http://www.w3.org/Addressing/URL/4_URI_Recommentations.html for a description of how to create fully qualified URL values. |
  | agency_email | Optional | Contains a single valid email address actively monitored by the agency’s customer service department. This email address will be considered a direct contact point where transit riders can reach a customer service representative at the agency. |

### stops.txt (needs reformatting)
---
lang: en

table_data:
  - field_name: stop_id
    details:
      - ID: 1
        required: true
        tags: []
        text: |
          The **stop_id** field contains an ID that uniquely identifies a stop, station, or station entrance. Multiple routes may use the same stop. The **stop_id** is used by systems as an internal identifier of this record (e.g., primary key in database), and therefore the **stop_id** must be dataset unique.
  - field_name: stop_code
    details:
      - ID: 2
        required: false
        tags: []
        text: |
          The **stop_code** field contains short text or a number that uniquely identifies the stop for passengers. Stop codes are often used in phone-based transit information systems or printed on stop signage to make it easier for riders to get a stop schedule or real-time arrival information for a particular stop.  The **stop_code** field contains short text or a number that uniquely identifies the stop for passengers. The **stop_code** can be the same as **stop_id** if it is passenger-facing. This field should be left blank for stops without a code presented to passengers.
  - field_name: stop_name
    details:
      - ID: 3
        required: true
        tags: []
        text: |
          The **stop_name** field contains the name of a stop, station, or station entrance. Please use a name that people will understand in the local and tourist vernacular.
  - field_name: stop_desc
    details:
      - ID: 4
        required: false
        tags: []
        text: |
          The **stop_desc** field contains a description of a stop. Please provide useful, quality information. Do not simply duplicate the name of the stop.
  - field_name: stop_lat
    details:
      - ID: 5
        required: true
        tags: []
        text: |
          The **stop_lat** field contains the latitude of a stop, station, or station entrance. The field value must be a valid WGS 84 latitude.
  - field_name: stop_lon
    details:
      - ID: 6
        required: true
        tags: []
        text: |
          The **stop_lon** field contains the longitude of a stop, station, or station entrance. The field value must be a valid WGS 84 longitude value from -180 to 180.
  - field_name: zone_id
    details:
      - ID: 7
        required: false
        tags: []
        text: |
          The **zone_id** field defines the fare zone for a stop ID. Zone IDs are required if you want to provide fare information using [fare_rules.txt](#fare_rules). If this stop ID represents a station, the zone ID is ignored.
  - field_name: stop_url
    details:
      - ID: 8
        required: false
        tags: []
        text: |
          The **stop_url** field contains the URL of a web page about a particular stop. This should be different from the agency_url and the route_url fields.  The value must be a fully qualified URL that includes **http**:// or **https**://, and any special characters in the URL must be correctly escaped. See http://www.w3.org/Addressing/URL/4_URI_Recommentations.html for a description of how to create fully qualified URL values.
  - field_name: location_type
    details:
      - ID: 9
        required: false
        tags: []
        text: |
          The **location_type** field identifies whether this stop ID represents a stop, station, or station entrance. If no location type is specified, or the location_type is blank, stop IDs are treated as stops. Stations may have different properties from stops when they are represented on a map or used in trip planning.  The location type field can have the following values:

          * **0** or blank - Stop. A location where passengers board or disembark from a transit vehicle.
          * **1** - Station. A physical structure or area that contains one or more stop.
          * **2** - Station Entrance/Exit. A location where passengers can enter or exit a station from the street. The stop entry must also specify a parent_station value referencing the stop ID of the parent station for the entrance.
  - field_name: parent_station
    details:
      - ID: 10
        required: false
        tags: []
        text: |
          For stops that are physically located inside stations, the **parent_station** field identifies the station associated with the stop. To use this field, stops.txt must also contain a row where this stop ID is assigned location type=1.
        example_table: |
          <table>
            <thead>
              <tr>
                <th>This stop ID represents...</th>
                <th>This entry's location type...</th>
                <th>This entry's parent_station field contains...</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>A stop located inside a station</td>
                <td>0 or blank</td>
                <td>The stop ID of the station where this stop is located. The stop referenced by parent_station must have location_type=1.</td>
              </tr>
              <tr>
                <td>A stop located outside a station</td>
                <td>0 or blank</td>
                <td>A blank value. The parent_station field doesn’t apply to this stop.</td>
              </tr>
              <tr>
                <td>A station</td>
                <td>1</td>
                <td>A blank value. Stations can’t contain other stations.</td>
              </tr>
            </tbody>
          </table>
  - field_name: stop_timezone
    details:
      - ID: 11
        required: false
        tags: []
        text: |
          The **stop_timezone** field contains the timezone in which this stop, station, or station entrance is located. Please refer to [Wikipedia List of Timezones](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) for a list of valid values. If omitted, the stop should be assumed to be located in the timezone specified by **agency_timezone** in [agency.txt](#agency).   When a stop has a parent station, the stop is considered to be in the timezone specified by the parent station's **stop_timezone** value. If the parent has no stop_timezone value, the stops that belong to that station are assumed to be in the timezone specified by **agency_timezone**, even if the stops have their own **stop_timezone** values. In other words, if a given stop has a **parent_station** value, any **stop_timezone** value specified for that stop must be ignored.  Even if **stop_timezone** values are provided in stops.txt, the times in [stop_times.txt](#stop_times) should continue to be specified as time since midnight in the timezone specified by **agency_timezone** in agency.txt. This ensures that the time values in a trip always increase over the course of a trip, regardless of which timezones the trip crosses.
  - field_name: wheelchair_boarding
    details:
      - ID: 12
        required: false
        tags: []
        text: |
          The **wheelchair_boarding field** identifies whether wheelchair boardings are possible from the specified stop, station, or station entrance. The field can have the following values:

          * **0** (or empty) - indicates that there is no accessibility information for the stop
          * **1** - indicates that at least some vehicles at this stop can be boarded by a rider in a wheelchair
          * **2** - wheelchair boarding is not possible at this stop

          When a stop is part of a larger station complex, as indicated by a stop with a **parent_station** value, the stop's **wheelchair_boarding** field has the following additional semantics:

          * **0** (or empty) - the stop will inherit its **wheelchair_boarding** value from the parent station, if specified in the parent
          * **1** - there exists some accessible path from outside the station to the specific stop / platform
          * **2** - there exists no accessible path from outside the station to the specific stop / platform

          For station entrances, the **wheelchair_boarding** field has the following additional semantics:

          * **0** (or empty) - the station entrance will inherit its **wheelchair_boarding** value from the parent station, if specified in the parent
          * **1** - the station entrance is wheelchair accessible (e.g. an elevator is available to platforms if they are not at-grade)
          * **2** - there exists no accessible path from the entrance to station platforms
---
File: **Required**

<div class="table-wrapper">
  <table class="recommendation">
    <thead>
      <tr>
        <th>Field Name</th>
        <th>Required</th>
        <th>Details</th>
      </tr>
    </thead>
    <tbody>
    {% for field in page.table_data %}
      {% for detail in field.details %}
      <tr id="{{ page.slug }}_{{ detail.ID }}" class="anchor-row{% if forloop.first %} field-row{% endif %}{% for tag in detail.tags %} {{ tag }}{% endfor %}">
        <td>{% if forloop.first %}<code>{{ field.field_name }}</code>{% endif %}</td>
        <td>{% if detail.required %}Required{% else %}Optional{% endif %}</td>
        <td>{{ detail.text | markdownify }}{% if detail.example_table %}<div class="table-wrapper">{{ detail.example_table }}</div>{% endif %}</td>
      </tr>
      {% endfor %}
    {% endfor %}
    </tbody>
  </table>
</div>

### routes.txt (needs reformatting)

---
lang: en

table_data:
  - field_name: route_id
    details:
      - ID: 1
        required: true
        tags: []
        text: |
          The **route_id** field contains an ID that uniquely identifies a route. The route_id is dataset unique.
  - field_name: agency_id
    details:
      - ID: 2
        required: false
        tags: []
        text: |
          The **agency_id** field defines an agency for the specified route. This value is referenced from the [agency.txt](#agency) file. Use this field when you are providing data for routes from more than one agency.
  - field_name: route_short_name
    details:
      - ID: 3
        required: true
        tags: []
        text: |
          The **route_short_name** contains the short name of a route. This will often be a short, abstract identifier like "32", "100X", or "Green" that riders use to identify a route, but which doesn't give any indication of what places the route serves. At least one of *route_short_name* or *route_long_name* must be specified, or potentially both if appropriate. If the route does not have a short name, please specify a *route_long_name* and use an empty string as the value for this field.
  - field_name: route_long_name
    details:
      - ID: 4
        required: true
        tags: []
        text: |
          The **route_long_name** contains the full name of a route. This name is generally more descriptive than the *route_short_name* and will often include the route's destination or stop. At least one of *route_short_name* or *route_long_name* must be specified, or potentially both if appropriate. If the route does not have a long name, please specify a *route_short_nam*e and use an empty string as the value for this field.
  - field_name: route_desc
    details:
      - ID: 5
        required: false
        tags: []
        text: |
          The **route_desc** field contains a description of a route. Please provide useful, quality information. Do not simply duplicate the name of the route. For example, "**A** trains operate between Inwood-207 St, Manhattan and Far Rockaway-Mott Avenue, Queens at all times. Also from about 6AM until about midnight, additional **A** trains operate between Inwood-207 St and Lefferts Boulevard (trains typically alternate between Lefferts Blvd and Far Rockaway)."
  - field_name: route_type
    details:
      - ID: 6
        required: true
        tags: []
        text: |
          The **route_type** field describes the type of transportation used on a route. Valid values for this field are:

          * **0** - Tram, Streetcar, Light rail. Any light rail or street level system within a metropolitan area.
          * **1** - Subway, Metro. Any underground rail system within a metropolitan area.
          * **2** - Rail. Used for intercity or long-distance travel.
          * **3** - Bus. Used for short- and long-distance bus routes.
          * **4** - Ferry. Used for short- and long-distance boat service.
          * **5** - Cable car. Used for street-level cable cars where the cable runs beneath the car.
          * **6** - Gondola, Suspended cable car. Typically used for aerial cable cars where the car is suspended from the cable.
          * **7** - Funicular. Any rail system designed for steep inclines.
  - field_name: route_url
    details:
      - ID: 7
        required: false
        tags: []
        text: |
          The **route_url** field contains the URL of a web page about that particular route. This should be different from the agency_url.  The value must be a fully qualified URL that includes **http**:// or **https**://, and any special characters in the URL must be correctly escaped. See http://www.w3.org/Addressing/URL/4_URI_Recommentations.html for a description of how to create fully qualified URL values.
  - field_name: route_color
    details:
      - ID: 8
        required: false
        tags: []
        text: |
          In systems that have colors assigned to routes, the **route_color** field defines a color that corresponds to a route. The color must be provided as a six-character hexadecimal number, for example, 00FFFF. If no color is specified, the default route color is white (FFFFFF).  The color difference between **route_color** and **route_text_color** should provide sufficient contrast when viewed on a black and white screen. The [W3C Techniques for Accessibility Evaluation And Repair Tools document](https://www.w3.org/TR/AERT#color-contrast) offers a useful algorithm for evaluating color contrast. There are also helpful online tools for choosing contrasting colors, including the [snook.ca Color Contrast Check application](http://snook.ca/technical/colour_contrast/colour.html#fg=33FF33,bg=333333).
  - field_name: route_text_color
    details:
      - ID: 9
        required: false
        tags: []
        text: |
          The route_text_color field can be used to specify a legible color to use for text drawn against a background of route_color. The color must be provided as a six-character hexadecimal number, for example, FFD700. If no color is specified, the default text color is black (000000).  The color difference between **route_color** and **route_text_color** should provide sufficient contrast when viewed on a black and white screen.
  - field_name: route_sort_order
    details:
      - ID: 10
        required: false
        tags: []
        text: |
          The **route_sort_order** field can be used to order the routes in a way which is ideal for presentation to customers. It must be a non-negative integer. Routes with smaller **route_sort_order** values should be displayed before routes with larger route_sort_order values.
---
File: **Required**

<div class="table-wrapper">
  <table class="recommendation">
    <thead>
      <tr>
        <th>Field Name</th>
        <th>Required</th>
        <th>Details</th>
      </tr>
    </thead>
    <tbody>
    {% for field in page.table_data %}
      {% for detail in field.details %}
      <tr id="{{ page.slug }}_{{ detail.ID }}" class="anchor-row{% if forloop.first %} field-row{% endif %}{% for tag in detail.tags %} {{ tag }}{% endfor %}">
        <td>{% if forloop.first %}<code>{{ field.field_name }}</code>{% endif %}</td>
        <td>{% if detail.required %}Required{% else %}Optional{% endif %}</td>
        <td>{{ detail.text | markdownify }}{% if detail.example_table %}<div class="table-wrapper">{{ detail.example_table }}</div>{% endif %}</td>
      </tr>
      {% endfor %}
    {% endfor %}
    </tbody>
  </table>
</div>


### trips.txt (needs reformatting)
---
lang: en

table_data:
  - field_name: route_id
    details:
      - ID: 1
        required: true
        tags: []
        text: |
          The **route_id** field contains an ID that uniquely identifies a route. This value is referenced from the [routes.txt](#routes) file.
  - field_name: service_id
    details:
      - ID: 2
        required: true
        tags: []
        text: |
          The **service_id** contains an ID that uniquely identifies a set of dates when service is available for one or more routes. This value is referenced from the [calendar.txt](#calendar) or [calendar_dates.txt](#calendar_dates) file.
  - field_name: trip_id
    details:
      - ID: 3
        required: true
        tags: []
        text: |
          The **trip_id** field contains an ID that identifies a trip. The **trip_id** is dataset unique.
  - field_name: trip_headsign
    details:
      - ID: 4
        required: false
        tags: []
        text: |
          The **trip_headsign** field contains the text that appears on a sign that identifies the trip's destination to passengers. Use this field to distinguish between different patterns of service in the same route. If the headsign changes during a trip, you can override the **trip_headsign** by specifying values for the **stop_headsign** field in [stop_times.txt](#stop_times).
  - field_name: trip_short_name
    details:
      - ID: 5
        required: false
        tags: []
        text: |
          The **trip_short_name** field contains the text that appears in schedules and sign boards to identify the trip to passengers, for example, to identify train numbers for commuter rail trips. If riders do not commonly rely on trip names, please leave this field blank.  A **trip_short_name** value, if provided, should uniquely identify a trip within a service day; it should not be used for destination names or limited/express designations.
  - field_name: direction_id
    details:
      - ID: 6
        required: false
        tags: []
        text: |
          The **direction_id** field contains a binary value that indicates the direction of travel for a trip. Use this field to distinguish between bi-directional trips with the same **route_id**. This field is not used in routing; it provides a way to separate trips by direction when publishing time tables. You can specify names for each direction with the **trip_headsign** field.

          * 0 - travel in one direction (e.g. outbound travel)
          * 1 - travel in the opposite direction (e.g. inbound travel)

          For example, you could use the *trip_headsign* and *direction_id* fields together to assign a name to travel in each direction for a set of trips. A [trips.txt](#trips) file could contain these rows for use in time tables:

          * `trip_id,...,trip_headsign,direction_id`
          * `1234,...,Airport,0`
          * `1505,...,Downtown,1`
  - field_name: block_id
    details:
      - ID: 7
        required: false
        tags: []
        text: |
          The **block_id** field identifies the block to which the trip belongs. A block consists of a single trip or many sequential trips made using the same vehicle, defined by shared service day and block_id. A block_id can have trips with different service days, making distinct blocks. (See [example below](#example-showing-blocks-and-service-day))
  - field_name: shape_id
    details:
      - ID: 8
        required: false
        tags: []
        text: |
          The **shape_id** field contains an ID that defines a shape for the trip. This value is referenced from the [shapes.txt](#shapes) file. The shapes.txt file allows you to define how a line should be drawn on the map to represent a trip.
  - field_name: wheelchair_accessible
    details:
      - ID: 9
        required: false
        tags: []
        text: |
          * **0** (or empty) - indicates that there is no accessibility information for the trip
          * **1** - indicates that the vehicle being used on this particular trip can accommodate at least one rider in a wheelchair
          * **2** - indicates that no riders in wheelchairs can be accommodated on this trip
  - field_name: bikes_allowed
    details:
      - ID: 10
        required: false
        tags: []
        text: |
          * 0 (or empty) - indicates that there is no bike information for the trip
          * **1** - indicates that the vehicle being used on this particular trip can accommodate at least one bicycle
          * **2** - indicates that no bicycles are allowed on this trip
---
File: **Required**

<div class="table-wrapper">
  <table class="recommendation">
    <thead>
      <tr>
        <th>Field Name</th>
        <th>Required</th>
        <th>Details</th>
      </tr>
    </thead>
    <tbody>
    {% for field in page.table_data %}
      {% for detail in field.details %}
      <tr id="{{ page.slug }}_{{ detail.ID }}" class="anchor-row{% if forloop.first %} field-row{% endif %}{% for tag in detail.tags %} {{ tag }}{% endfor %}">
        <td>{% if forloop.first %}<code>{{ field.field_name }}</code>{% endif %}</td>
        <td>{% if detail.required %}Required{% else %}Optional{% endif %}</td>
        <td>{{ detail.text | markdownify }}{% if detail.example_table %}<div class="table-wrapper">{{ detail.example_table }}</div>{% endif %}</td>
      </tr>
      {% endfor %}
    {% endfor %}
    </tbody>
  </table>
</div>

#### Example showing blocks and service day

The example below is valid, with distinct blocks every day of the week.

| route_id | trip_id | service_id                     | block_id | <span style="font-weight:normal">*(first stop time)*</span> | <span style="font-weight:normal">*(last stop time)*</span> |
|----------|---------|--------------------------------|----------|-----------------------------------------|-------------------------|
| red      | trip_1  | mon-tues-wed-thurs-fri-sat-sun | red_loop | 22:00:00                                | 22:55:00                |
| red      | trip_2  | fri-sat-sun                    | red_loop | 23:00:00                                | 23:55:00                |
| red      | trip_3  | fri-sat                        | red_loop | 24:00:00                                | 24:55:00                |
| red      | trip_4  | mon-tues-wed-thurs             | red_loop | 20:00:00                                | 20:50:00                |
| red      | trip_5  | mon-tues-wed-thurs             | red_loop | 21:00:00                                | 21:50:00                |

Notes on above table:
* On Friday into Saturday morning, for example, a single vehicle operates trip_1, trip_2, and trip_3 (10:00 PM through 12:55 AM). Note that the last trip occurs on Saturday, 12:00 AM to 12:55 AM, but is part of the Friday “service day” because the times are 24:00:00 to 24:55:00.
* On Monday, Tuesday, Wednesday, and Thursday, a single vehicle operates trip_1, trip_4, and trip_5 in a block from 8:00 PM to 10:55 PM.


### stop_times.txt
---
lang: en

table_data:
  - field_name: trip_id
    details:
      - ID: 1
        required: true
        tags: []
        text: |
          The **trip_id** field contains an ID that identifies a trip. This value is referenced from the [trips.txt](#trips) file.
  - field_name: arrival_time
    details:
      - ID: 2
        required: true
        tags: []
        text: |
          The **arrival_time** specifies the arrival time at a specific stop for a specific trip on a route. The time is measured from "noon minus 12h" (effectively midnight, except for days on which daylight savings time changes occur) at the beginning of the service day. For times occurring after midnight on the service day, enter the time as a value greater than 24:00:00 in HH:MM:SS local time for the day on which the trip schedule begins. If you don't have separate times for arrival and departure at a stop, enter the same value for **arrival_time** and **departure_time**.

          Scheduled stops where the vehicle strictly adheres to the specified arrival and departure times are timepoints. For example, if a transit vehicle arrives at a stop before the scheduled departure time, it will hold until the departure time. If this stop is not a timepoint, use either an empty string value for the **arrival_time** field or provide an interpolated time. Further, indicate that interpolated times are provided via the **timepoint** field with a value of zero. If interpolated times are indicated with **timepoint**=0, then time points must be indicated with a value of 1 for the **timepoint** field. Provide arrival times for all stops that are time points.

          An arrival time must be specified for the first and the last stop in a trip. Times must be eight digits in HH:MM:SS format (H:MM:SS is also accepted, if the hour begins with 0). Do not pad times with spaces. The following columns list stop times for a trip and the proper way to express those times in the **arrival_time** field:

          | **Time** | **arrival_time value** |
          | 08:10:00 A.M. | 08:10:00 or 8:10:00 |
          | 01:05:00 P.M. | 13:05:00 |
          | 07:40:00 P.M. | 19:40:00 |
          | 01:55:00 A.M. | 25:55:00 |

          **Note:** Trips that span multiple dates will have stop times greater than 24:00:00. For example, if a trip begins at 10:30:00 p.m. and ends at 2:15:00 a.m. on the following day, the stop times would be 22:30:00 and 26:15:00. Entering those stop times as 22:30:00 and 02:15:00 would not produce the desired results.
  - field_name: departure_time
    details:
      - ID: 3
        required: true
        tags: []
        text: |
          The **departure_time** specifies the departure time from a specific stop for a specific trip on a route. The time is measured from "noon minus 12h" (effectively midnight, except for days on which daylight savings time changes occur) at the beginning of the service day. For times occurring after midnight on the service day, enter the time as a value greater than 24:00:00 in HH:MM:SS local time for the day on which the trip schedule begins. If you don't have separate times for arrival and departure at a stop, enter the same value for **arrival_time** and **departure_time**.

          Scheduled stops where the vehicle strictly adheres to the specified arrival and departure times are timepoints. For example, if a transit vehicle arrives at a stop before the scheduled departure time, it will hold until the departure time. If this stop is not a timepoint, use either an empty string value for the **departure_time** field or provide an interpolated time (further, indicate that interpolated times are provided via the **timepoint** field with a value of zero). If interpolated times are indicated with **timepoint**=0, then time points must be indicated with a value of 1 for the **timepoint** field. Provide departure times for all stops that are time points.

          A departure time must be specified for the first and the last stop in a trip even if the vehicle does not allow boarding at the last stop.  Times must be eight digits in HH:MM:SS format (H:MM:SS is also accepted, if the hour begins with 0). Do not pad times with spaces. The following columns list stop times for a trip and the proper way to express those times in the **departure_time** field:

          | Time | departure_time value |
          | 08:10:00 A.M. | 08:10:00 or 8:10:00 |
          | 01:05:00 P.M. | 13:05:00 |
          | 07:40:00 P.M. | 19:40:00 |
          | 01:55:00 A.M. | 25:55:00 |

          **Note:** Trips that span multiple dates will have stop times greater than 24:00:00. For example, if a trip begins at 10:30:00 p.m. and ends at 2:15:00 a.m. on the following day, the stop times would be 22:30:00 and 26:15:00. Entering those stop times as 22:30:00 and 02:15:00 would not produce the desired results.
  - field_name: stop_id
    details:
      - ID: 4
        required: true
        tags: []
        text: |
          The **stop_id** field contains an ID that uniquely identifies a stop. Multiple routes may use the same stop. The **stop_id** is referenced from the [stops.txt](#stops) file. If **location_type** is used in [stops.txt](#stops), all stops referenced in [stop_times.txt](#stop_times) must have **location_type** of 0.  Where possible, **stop_id** values should remain consistent between feed updates. In other words, stop A with **stop_id 1** should have **stop_id 1** in all subsequent data updates. If a stop is not a time point, enter blank values for **arrival_time** and **departure_time**.
  - field_name: stop_sequence
    details:
      - ID: 5
        required: true
        tags: []
        text: |
          The **stop_sequence** field identifies the order of the stops for a particular trip. The values for **stop_sequence** must be non-negative integers, and they must increase along the trip.  For example, the first stop on the trip could have a **stop_sequence** of 1, the second stop on the trip could have a **stop_sequence** of 23, the third stop could have a **stop_sequence** of 40, and so on.
  - field_name: stop_headsign
    details:
      - ID: 6
        required: false
        tags: []
        text: |
          The **stop_headsign** field contains the text that appears on a sign that identifies the trip's destination to passengers. Use this field to override the default **trip_headsign** when the headsign changes between stops. If this headsign is associated with an entire trip, use **trip_headsign** instead.
  - field_name: pickup_type
    details:
      - ID: 7
        required: false
        tags: []
        text: |
          The **pickup_type** field indicates whether passengers are picked up at a stop as part of the normal schedule or whether a pickup at the stop is not available. This field also allows the transit agency to indicate that passengers must call the agency or notify the driver to arrange a pickup at a particular stop. Valid values for this field are:

          * **0** - Regularly scheduled pickup
          * **1** - No pickup available
          * **2** - Must phone agency to arrange pickup
          * **3** - Must coordinate with driver to arrange pickup

          The default value for this field is **0**.
  - field_name: drop_off_type
    details:
      - ID: 8
        required: false
        tags: []
        text: |
          The **drop_off_type** field indicates whether passengers are dropped off at a stop as part of the normal schedule or whether a drop off at the stop is not available. This field also allows the transit agency to indicate that passengers must call the agency or notify the driver to arrange a drop off at a particular stop. Valid values for this field are:

          * **0** - Regularly scheduled drop off
          * **1** - No drop off available
          * **2** - Must phone agency to arrange drop off
          * **3** - Must coordinate with driver to arrange drop off

          The default value for this field is **0**.
  - field_name: shape_dist_traveled
    details:
      - ID: 9
        required: false
        tags: []
        text: |
          When used in the [stop_times.txt](#stop_times) file, the **shape_dist_traveled** field positions a stop as a distance from the first shape point. The **shape_dist_traveled** field represents a real distance traveled along the route in units such as feet or kilometers. For example, if a bus travels a distance of 5.25 kilometers from the start of the shape to the stop, the **shape_dist_traveled** for the stop ID would be entered as "5.25". This information allows the trip planner to determine how much of the shape to draw when showing part of a trip on the map. The values used for **shape_dist_traveled** must increase along with **stop_sequence**: they cannot be used to show reverse travel along a route.  The units used for **shape_dist_traveled** in the [stop_times.txt](#stop_times) file must match the units that are used for this field in the shapes.txt file.
  - field_name: timepoint
    details:
      - ID: 10
        required: false
        tags: []
        text: |
          The timepoint field can be used to indicate if the specified arrival and departure times for a stop are strictly adhered to by the transit vehicle or if they are instead approximate and/or interpolated times. The field allows a GTFS producer to provide interpolated stop times that potentially incorporate local knowledge, but still indicate if the times are approximate. For stop-time entries with specified arrival and departure times, valid values for this field are:

          * **empty** - Times are considered exact.
          * **0** - Times are considered approximate.
          * **1** - Times are considered exact.

          For stop-time entries without specified arrival and departure times, feed consumers must interpolate arrival and departure times. Feed producers may optionally indicate that such an entry is not a timepoint (value=0) but it is an error to mark a entry as a timepoint (value=1) without specifying arrival and departure times.
---
File: **Required**

<div class="table-wrapper">
  <table class="recommendation">
    <thead>
      <tr>
        <th>Field Name</th>
        <th>Required</th>
        <th>Details</th>
      </tr>
    </thead>
    <tbody>
    {% for field in page.table_data %}
      {% for detail in field.details %}
      <tr id="{{ page.slug }}_{{ detail.ID }}" class="anchor-row{% if forloop.first %} field-row{% endif %}{% for tag in detail.tags %} {{ tag }}{% endfor %}">
        <td>{% if forloop.first %}<code>{{ field.field_name }}</code>{% endif %}</td>
        <td>{% if detail.required %}Required{% else %}Optional{% endif %}</td>
        <td>{{ detail.text | markdownify }}{% if detail.example_table %}<div class="table-wrapper">{{ detail.example_table }}</div>{% endif %}</td>
      </tr>
      {% endfor %}
    {% endfor %}
    </tbody>
  </table>
</div>

### calendar.txt

### calendar_dates.txt

### fare_attributes.txt

### fare_rules.txt

### shapes.txt

### frequencies.txt

### transfers.txt

### feed_info.txt
