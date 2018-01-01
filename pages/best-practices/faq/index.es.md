---
layout: default
permalink: /best-practices/faq/
lang: es
---

{% assign document = site.best-practices | where: "lang", page.lang %}

{{ document | where: "slug", "faq" }}