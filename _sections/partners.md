---
title: Partners
order: 6
date: '2018-07-16 12:00:00 +0000'
highlight: 'We know the industry, inside out'
text: >-
  <span style="color: lightgrey;">Pilot and photographer Tim Whittaker captured
  this majestic yet soothing aerial footage of working sheepdogs doing what they
  do best in Rangitikei, New Zealand. Mesmerizing Video of Dogs Herding
  Thousands of Sheep Is the Most Soothing Eye Candy Ever Made.</span>
industries:
  - title: Fashion
    text: Working with brands from A to Z
  - title: Automotive
    text: Reinventing the wheel together
  - title: eCommerce
    text: From 1 to 1M customers
published: false
_template: partners
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
