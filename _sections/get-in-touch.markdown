---
title: Get in touch
order: 5
date: 2018-07-16 12:00:00 +0000
highlight: |-
  We’d love to hear your story
email: contact@harvest-mobile.com
address: |-
  Harvest Media LLC<br>
  19C Trolley Square<br>
  Wilmington, DE 19806<br>
  United States
linkedin_url: https://www.linkedin.com/company/harvest-mobile/
---

<div class="row">
  <div class="col-xs-12 col-sm-7">
    <blockquote><p>{{ page.highlight }}</p></blockquote>
    <a href="mailto:{{ page.email }}?subject=Inquiry" target="_blank" class="button">Say hi</a>
  </div>
  <div class="col-xs-12 col-sm-5">
    <p><strong>
      {{ page.address | markdownify }}
    </strong>
    <br>
    <p>{{ page.email }}</p>
    <a href="{{ page.linkedin_url }}" target="_blank">LinkedIn</a>
    </p>
  </div>
</div>
<div class="colophon">
  <div class="row">
    <div class="col-xs-12 col-sm-7">&copy; {{ "now" | date: "%Y" }} Harvest media LLC</div>
    <div class="col-xs-12 col-sm-5">Design & Website by MAFFIN Design / <a href="https://ldaniel.eu" target="_blank">ldaniel.eu</a></div>
  </div>
</div>
