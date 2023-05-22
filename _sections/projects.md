---
title: Projects
order: 4
date: '2023-05-17T22:00:00.000Z'
highlight: A live test.
text: Live! Testing.
projects:
  - image: /images/project-hbo-max.png
    title: HBO Max
    text: >-
      Thousands of new subscribers and hundreds of thousands of new installs
      generated within 6 months in LATAM markets through Harvest’s managed media
      buying
  - image: /images/project-raid.png
    title: 'RAID: Shadow Legends'
    text: >-
      Thousands of new and active users acquired in US, UK and DE through
      optimized display traffic and influencers.
  - image: /images/project-jaxon.png
    title: 'Jaxon - eSports News & Videos '
    text: >-
      100k new users in one month achieved through a mix of native traffic,
      Google app promotion and influencer marketing on Twitch
published: true
footer_text: 'For more information, download our Media Kit:'
button_text: Download Media Kit
button_target: ''
_template: projects
---








{% if page.highlight != null and page.text != null %}
<div class="row">
  <div class="col-xs-12 col-sm-6">
    <blockquote><p>{{ page.highlight }}</p></blockquote>
  </div>
  <div class="col-xs-12 col-sm-6">
    {{ page.text | markdownify }}
  </div>
</div>
{% endif %}

<div class="row u-menu-paddding" style="margin-top: 3rem;">

{% for project in page.projects %}

<div class="col-xs-12 col-sm-6 col-md-4">
  <div class="project">
  <img src="{{ site.baseurl }}{{ project.image }}" alt="" style="height: 4.5rem;" title="{{ project.title }}" />
    <h4>{{ project.title }}</h4>
    {{ project.text | markdownify }}
  </div>
</div>
{% endfor %}

</div>

{% if page.button_target != '' and page.button_text != '' %}
<div class="row u-menu-paddding">
  <div class="col-xs-12 projects-footer">
    <p>For more information, download our Media Kit:</p>
    <a class="button" href="{{ site.baseURL }}{{ page.button_target }}" download title="{{ page.button_text }}">
      {{ page.button_text }}
      <img src="{{ site.baseURL }}/images/icon-download.svg" style="height: 1.75rem;" />
    </a>
  </div>
</div>
{% endif %}
