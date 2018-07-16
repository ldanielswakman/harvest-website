---
title: Partners
order: 4
date: 2018-07-16 12:00:00 +0000
hidden: 1
highlight: |-
  <span style="color: lightgrey;">We know the industry, inside out</span>
text: |-
  <span style="color: lightgrey;">Pilot and photographer Tim Whittaker captured this majestic yet soothing aerial footage of working sheepdogs doing what they do best in Rangitikei, New Zealand. Mesmerizing Video of Dogs Herding Thousands of Sheep Is the Most Soothing Eye Candy Ever Made.</span>
industries:
- title: '<span style="color: lightgrey;">Fashion</span>'
  text: |-
    <span style="color: lightgrey;">Working with brands from A to Z</span>
- title: '<span style="color: lightgrey;">Automotive</span>'
  text: |-
    <span style="color: lightgrey;">Reinventing the wheel together</span>
- title: '<span style="color: lightgrey;">eCommerce</span>'
  text: |-
    <span style="color: lightgrey;">From 1 to 1M customers</span>
---

<div class="row u-menu-paddding" style="margin-top: 4rem;">
  <div class="col-xs-12 col-sm-6">
    <blockquote><p>{{ page.highlight }}</p></blockquote>
    <br>

{% for industry in page.industries %}
  <h4>{{ industry.title }}</h4>
  <p>{{ industry.text }}</p>
  <br>
{% endfor %}

  </div>
  <div class="col-xs-12 col-sm-4">
    {{ page.text | markdownify }}
  </div>
</div>
