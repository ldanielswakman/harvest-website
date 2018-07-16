---
title: Services
order: 2
date: 2018-07-16 12:00:00 +0000
highlight: |-
  Highest quality of <span style="white-space: nowrap;">fraud-free</span> user acquisition made simple
text: |-
  <p style="color: lightgrey;">Mesmerizing Video of Dogs Herding Thousands of Sheep Is the Most Soothing Eye Candy Ever Made Looking for something truly mind-boggling? This incredible video is just the thing, and has the added bonus of showing us just why herding dogs are so good at their jobs. Pilot and photographer Tim Whittaker captured this majestic yet soothing aerial footage of working sheepdogs doing what they do best in Rangitikei, New Zealand.</p>
services:
- title: Media buying
  text: |-
    <p style="color: lightgrey;">This incredible video is just the thing, and has the added bonus of showing us just why herding dogs are so good at their jobs.</p>
- title: Direct Traffic
  text: |-
    <p style="color: lightgrey;">Pilot and photographer Tim Whittaker captured this majestic yet soothing aerial footage of working sheepdogs doing what they do best in Rangitikei, New Zealand.</p>
- title: Premium Services
  text: |-
    <p style="color: lightgrey;">Impression tracking, video ads, native ads, full transparency - you name it, we do it for you.</p>

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
    {{ service.text }}
  </div>
</div>
{% endfor %}

</div>