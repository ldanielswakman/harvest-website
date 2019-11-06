---
title: Careers
order: 6
date: 2019-11-06 12:00:00 +0000
highlight: Be part of our mission
text: "We’re looking for passionate people to join us. We value flat hierarchies, clear communication, and full ownership and responsibility. This text is directly stolen from Pitch.com."
positions:
- title: Business Development Manager (remote)
  text: We currently focus our media buying efforts on providing user acqusition to mobile apps. However, we are expanding into new verticals within the mobile performance marketing industry and we're looking for additional, creative team members to create that future together.
- title: Mobile Media Buyer (remote)
  text: Harvest members work remotely from various locations in USA & UK/Germany based on flexible conditions and strong teamwork. If you're looking to grow a new startup while working from any location in the world on your own terms, this will be a great fit for you.

---
<div class="row">
  <div class="col-xs-12 col-sm-6">
    <blockquote><p>{{ page.highlight }}</p></blockquote>
  </div>
  <div class="col-xs-12 col-sm-6">
    {{ page.text | markdownify }}
  </div>
</div>

<div class="row u-menu-paddding" style="margin-top: 6rem;">

{% for service in page.positions %}
<div class="col-xs-12 col-sm-4">
  <div class="item">
    <h4>{{ service.title }}</h4>
    {{ service.text | markdownify }}
  </div>
</div>
{% endfor %}

</div>