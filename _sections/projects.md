---
title: Projects
order: 4
date: 2023-05-17T22:00:00.000Z
highlight: null
text: null
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
_template: projects
published: true
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

<div class="row u-menu-paddding" style="margin-top: 6rem;">

{% for project in page.projects %}

<div class="col-xs-12 col-sm-4">
  <div class="project">
  <img src="{{ site.url }}{{ project.image }}" alt="" style="height: 4.5rem;" title="{{ project.title }}" />
    <h4>{{ project.title }}</h4>
    {{ project.text | markdownify }}
  </div>
</div>
{% endfor %}

</div>
