---
title: Latest
order: 2
date: 2018-07-16 12:00:00 +0000
updates:
- title: Harvest speaking at Digital Summit Chicago!
  text: After a few days of negotiating, Harvest is proud to announce that they will
    be giving a talk at Digital Summit, taking place in Chicago on Sept 26 and 27!
    Come and find us and say hello. Find out more on the conference here.
  date: 2018-07-18 12:00:00 +0000
published: false

---
{% for update in page.updates %}

<div class="row u-menu-paddding update-item">
  <div class="col-xs-12 col-sm-6">
    <h4>{{ update.title }}</h4>
    <p style="opacity: 0.25;"><small>{{ update.date | date_to_string }}</small></p>
  </div>
  <div class="col-xs-12 col-sm-6">
    {{ update.text | markdownify }}
  </div>
</div>

{% endfor %}