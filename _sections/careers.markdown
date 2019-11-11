---
title: Careers
order: 6
date: 2019-11-06T12:00:00.000+00:00
highlight: Be part of our mission
text: We’re looking for passionate people to join us. We value flat hierarchies, clear
  communication, and full ownership and responsibility. This text is directly stolen
  from Pitch.com.
positions:
- title: Business Development Manager (remote)
  text: |-
    **Harvest** is a mobile performance marketing agency started by a team of industry experts who saw a need in the industry for a more strict approach to client services and traffic quality.

    We currently focus our media buying efforts on providing user acqusition to mobile apps. However, we are expanding into new verticals within the mobile performance marketing industry and we're looking for additional, creative team members to create that future together.

    **Harvest** members work remotely from various locations in USA & UK/Germany based on flexible conditions and strong teamwork. If you're looking to grow a new startup while working from any location in the world on your own terms, this will be a great fit for you.

    **Your tasks**

    * Identifying new leads and opportunities
    * Closing new advertising deals and maintaining a strong pipeline of accounts coming in
    * Maintaining existing business and relationships with your contacts
    * Representing **Harvest** at international industry trade shows and networking events
    * Supporting the team as a part of additional projects
    * Presenting our product's value to the clients and being able to provide them with technical feedback when requested

    **Your profile**

    * Relevant experience within the mobile marketing industry (minimum one year)
    * Ability to work independently just as well as a part of a bigger team
    * Basic knowledge of sales procedures and CRMs
    * Superior communication and great presentation skills
    * Strong personal network would be a big plus
    * Fluent English, additional languages are a plus
    * Well-traveled, open minded and outgoing personality
    * On top of current industry trends

    **What we offer**

    * Flexible working conditions - work from any location and manage your own time!
    * Flat and transparent hirarchy - you learn from everyone on the team and your tasks can be very varied
    * We cover any additional costs of travel, software and hardware needed
    * Competitive compensation and bonus structure
    * We grow with you - we're open to your suggestions and new business ideas
  is_visible: true
- title: Mobile Media Buyer (remote)
  text: Harvest members work remotely from various locations in USA & UK/Germany based
    on flexible conditions and strong teamwork. If you're looking to grow a new startup
    while working from any location in the world on your own terms, this will be a
    great fit for you.
  is_visible: true
published: false

---
<div class="row">
  <div class="col-xs-12 col-sm-6">
    <blockquote><p>{{ page.highlight }}</p></blockquote>
  </div>
  <div class="col-xs-12 col-sm-6">
    {{ page.text | markdownify }}
  </div>
</div>

{% for position in page.positions %}
  {% if position.is_visible != false %}
<article id="{{ position.title | slugify }}" class="position u-menu-paddding">
  <div class="title"><h4>{{ position.title }}</h4></div>
  <div class="content">{{ position.text | markdownify }}</div>
</article>

  {% endif %}
{% endfor %}