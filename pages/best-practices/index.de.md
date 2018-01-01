---
layout: best-practices
permalink: /best-practices/
lang: de
---

{% assign document = site.best-practices | where: "lang", page.lang %}

{{ document | where: "slug", "introduction" }}

{{ document | where: "slug", "publishing" }}

{{ document | where: "slug", "all-files" }}

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

{{ document | where: "slug", "loop-routes" }}

{{ document | where: "slug", "lasso-routes" }}

{{ document | where: "slug", "branches" }}

{{ document | where: "slug", "about" }}
