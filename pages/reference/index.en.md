---
layout: reference
permalink: /reference/
lang: en
---

{% assign document = site.reference | where: "lang", page.lang %}

{{ document | where: "slug", "introduction" }}

## Field Definitions

### agency.txt {#agency}
{{ document | where: "slug", "agency" }}

### stops.txt {#stops}
{{ document | where: "slug", "stops" }}

### routes.txt {#routes}
{{ document | where: "slug", "routes" }}

### trips.txt {#trips}
{{ document | where: "slug", "trips" }}

### stop_times.txt {#stop_times}
{{ document | where: "slug", "stop_times" }}

### calendar.txt {#calendar}
{{ document | where: "slug", "calendar" }}

### calendar_dates.txt {#calendar_dates}
{{ document | where: "slug", "calendar_dates" }}

### fare_attributes.txt {#fare_attributes}
{{ document | where: "slug", "fare_attributes" }}

### fare_rules.txt {#fare_rules}
{{ document | where: "slug", "fare_rules" }}

### shapes.txt {#shapes}
{{ document | where: "slug", "shapes" }}

### frequencies.txt {#frequencies}
{{ document | where: "slug", "frequencies" }}

### transfers.txt {#transfers}
{{ document | where: "slug", "transfers" }}

### feed_info.txt {#feed_info}
{{ document | where: "slug", "feed_info" }}
