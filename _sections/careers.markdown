---
title: Careers
order: 6
date: 2019-11-06T12:00:00.000+00:00
highlight: Be a part of our mission
text: We’re growing and actively looking for ambitious and talented people who would
  like to join us in our mission. Check the open positions below or send us an unsolicited
  application.
apply_email: contact@harvest-mobile.com
positions:
- title: Account Manager - Performance Marketing (remote)
  text: "**Harvest** is a mobile performance marketing agency started by a team of
    industry experts who saw a need in the industry for a more strict approach to
    client services and traffic quality.\n\nWe currently focus our media buying efforts
    on providing user acquisition to mobile apps. However, we are expanding into new
    verticals within the mobile performance marketing industry and we're looking for
    additional, creative team members to create that future together.\n\n**Harvest**
    members work remotely from various locations in USA & UK/Germany based on flexible
    conditions and strong teamwork. If you're looking to grow a new startup while
    working from any location in the world on your own terms, this will be a great
    fit for you.\n\n  \n\\**Your tasks**\n\n* Identifying new leads and opportunities\n*
    Closing new advertising deals and maintaining a strong pipeline of accounts coming
    in\n* Maintaining existing business and relationships with your contacts\n* Representing
    **Harvest** at international industry trade shows and networking events\n* Supporting
    the team as a part of additional projects\n* Presenting our product's value to
    the clients and being able to provide them with technical feedback when requested\n\n
    \ \n\\**Your profile**\n\n* Relevant experience within the mobile marketing industry
    (minimum one year)\n* Ability to work independently just as well as a part of
    a bigger team\n* Basic knowledge of sales procedures and CRMs\n* Superior communication
    and great presentation skills\n* Strong personal network would be a big plus\n*
    Fluent English, additional languages are a plus\n* Well-travelled, open-minded
    and outgoing personality\n* On top of current industry trends\n\n  \n\\**What
    we offer**\n\n* Flexible working conditions - work from any location and manage
    your own time!\n* Flat and transparent hirarchy - you learn from everyone on the
    team and your tasks can be very varied\n* We cover any additional costs of travel,
    software and hardware needed\n* Competitive compensation and bonus structure\n*
    We grow with you - we're open to your suggestions and new business ideas"
  is_visible: true
- title: Mobile Media Buyer (remote)
  text: "**Harvest** is a mobile performance marketing agency started by a team of
    industry experts who saw a need in the industry for a more strict approach to
    client services and traffic quality.\n\nWe currently focus our media buying efforts
    on providing user acquisition to mobile apps. However, we are expanding into new
    verticals within the mobile performance marketing industry and we're looking for
    additional, creative team members to create that future together.\n\n**Harvest**
    members work remotely from various locations in USA & UK/Germany based on flexible
    conditions and strong teamwork. If you're looking to grow a new startup while
    working from any location in the world on your own terms, this will be a great
    fit for you.\n\n**  \nYour tasks**\n\n* Daily setup and management of media buying
    for various performance marketing campaigns\n* ROI oriented optimization of traffic,
    user retention and costs\n* Managing activity on several traffic sources and actively
    testing new ones on CPC/CPM model\n* Suggesting new traffic sources with good
    ROI potential and making sure it meets the demand of our clients\n* Actively testing
    new sources and verticals\n* Staying within designated budgets and optimizing
    our profit margin\n* Setting up S2S tracking between all of our platforms and
    ensuring that all data is gathered correctly\n\n**  \nYour profile**\n\n* Relevant
    experience in performance marketing (minimum one year)\n* Familiar with DSP/SSP
    ecosystem and RTB media buying\n* Experience with a wide range of traffic sources
    preferred with a focus on display, video, native and similar\n* Analytical and
    numbers-oriented\n* Able to quickly calculate and report ROI and overall daily
    performance. Well organized\n* You are cost-efficient and understand how to make
    your campaigns profitable\n* Team player and efficient at quickly reporting and
    communicating the status of each campaign\n* Expert in mobile tracking\n\n**What
    we offer**\n\n* Flexible working conditions - work from any location and manage
    your own time!\n* Flat and transparent hierarchy - you learn from everyone on
    the team and your tasks can be very varied\n* We cover any additional costs of
    travel, software and hardware needed\n* Competitive compensation and bonus structure\n*
    We grow with you - we're open to your suggestions and any new business ideas"
  is_visible: true
- title: Business Development Manager (remote)
  text: "**Harvest** is a mobile performance marketing agency started by a team of
    industry experts who saw a need in the industry for a more strict approach to
    client services and traffic quality.\n\nWe currently focus our media buying efforts
    on providing user acquisition to mobile apps. However, we are expanding into new
    verticals within the mobile performance marketing industry and we're looking for
    additional, creative team members to create that future together.\n\n**Harvest**
    members work remotely from various locations in USA & UK/Germany based on flexible
    conditions and strong teamwork. If you're looking to grow a new startup while
    working from any location in the world on your own terms, this will be a great
    fit for you.\n\n**  \nYour tasks**\n\n* Identifying new leads and opportunities\n*
    Closing new advertising deals and maintaining a strong pipeline of accounts coming
    in\n* Maintaining existing business and relationships with your contacts\n* Representing
    Harvest at international industry trade shows and networking events\n* Supporting
    the team as a part of additional projects\n* Presenting our product's value to
    the clients and being able to provide them with technical feedback when requested\n\n**
    \ \nYour profile**\n\n* Relevant experience within the mobile marketing industry
    (minimum one year)\n* Ability to work independently just as well as a part of
    a bigger team\n* Basic knowledge of sales procedures and CRMs\n* Superior communication
    and great presentation skills\n* Strong personal network would be a big plus\n*
    Fluent English, additional languages are a plus\n* Well-travelled, open-minded
    and outgoing personality\n* On top of current industry trends\n\n**  \nWhat we
    offer**\n\n* Flexible working conditions - work from any location and manage your
    own time!\n* Flat and transparent hierarchy - you learn from everyone on the team
    and your tasks can be very varied\n* We cover any additional costs of travel,
    software and hardware needed\n* Competitive compensation and bonus structure\n*
    We grow with you - we're open to your suggestions and new business ideas"
  is_visible: true

---
<div class="row">
  <div class="col-xs-12 col-sm-6">
    <blockquote><p>{{ page.highlight }}</p></blockquote>
  </div>
  <div class="col-xs-12 col-sm-6">
    {{ page.text | markdownify }}
  </div>
</div>

<div class="positions">
  {% for position in page.positions %}
    {% unless position.is_visible == false %}
      <article data-target="{{ position.title | slugify }}" class="position u-menu-paddding">
        <h4>{{ position.title }}</h4>
      </article>
    {% endunless %}
  {% endfor %}
</div>

<div class="dialog-wrapper">
  <button class="dialog-mask"></button>
  {% for position in page.positions %}
    {% unless position.is_visible == false %}
      <div id="{{ position.title | slugify }}" class="dialog">
        <img src="{{ site.url }}/images/logo-black.svg" alt="" class="logo" />
        <h4>{{ position.title }}</h4>
        <div class="content">
          {{ position.text | markdownify }}
          <br />
          <p>If you're interested in joining us and you think you would be a great fit, please send your resume and cover letter to <a href="mailto:{{ page.apply_email }}?subject=Application for {{ position.title }}" target="_blank">{{ page.apply_email }}</a></p>
          <a href="mailto:{{ page.apply_email }}?subject=Application for {{ position.title }}" class="button button--outline" target="_blank">Apply for this job</a>
        </div>
      </div>
    {% endunless %}
  {% endfor %}
  <button class="dialog-close"></button>
</div>