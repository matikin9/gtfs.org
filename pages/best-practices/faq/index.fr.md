---
layout: default
permalink: /best-practices/faq/
lang: fr
---

{% assign document = site.best-practices | where: "lang", page.lang %}

{{ document | where: "slug", "faq" }}