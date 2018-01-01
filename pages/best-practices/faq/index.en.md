---
layout: default
permalink: /best-practices/faq/
lang: en
---

{% assign document = site.best-practices | where: "lang", page.lang %}

{{ document | where: "slug", "faq" }}