---
title: Services
order: 2
date: 2018-07-16 12:00:00 +0000
highlight: |-
  Highest quality of <span style="white-space: nowrap;">fraud-free</span> user acquisition made simple
text: |-
  We have created Harvest to meet your expectations and provide you the highest quality service when it comes to mobile user acquisition. 

  We are here to make a difference and change the face of our industry - we do not compromise when it comes to quality.
services:
- title: Media Buying and Direct Traffic
  text: |-
    Highest quality and transparent traffic from reliable sources + Directly integrated in-app sources
- title: Anti-Fraud Filters
  text: |-
    We detect and fight fraud before it ever reaches our clients
- title: Premium Services
  text: |-
    Impression tracking, video ads, native ads, full transparency - you name it, we do it for you


---

<div class="row">
  <div class="col-xs-12 col-sm-6">
    <blockquote><p>{{ page.highlight }}</p></blockquote>
  </div>
  <div class="col-xs-12 col-sm-6">
    {{ page.text | markdownify }}
  </div>
</div>

<div class="row u-menu-paddding" style="margin-top: 3rem;">

{% for service in page.services %}
<div class="col-xs-12 col-sm-4">
  <div class="item">
    <h4>{{ service.title }}</h4>
    {{ service.text | markdownify }}
  </div>
</div>
{% endfor %}

</div>