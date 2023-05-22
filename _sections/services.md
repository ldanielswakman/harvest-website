---
title: Services
order: 3
date: '2018-07-16 12:00:00 +0000'
chapters:
  - title: Our Core
    highlight: Highest quality of fraud-free user acquisition made simple
    text: >-
      We have created Harvest to meet your expectations and provide you the
      highest quality service when it comes to mobile user acquisition. 

      We are here to make a difference and change the face of our industry - we
      do not compromise when it comes to quality.
    services:
      - title: Full 360 package
        image: /images/rich-icon-360.svg
        text: >-
          Harvest can become your entire marketing team, taking care of your
          paid media, optimizations, external partnerships and overall strategy.
      - title: Managed Media Buying
        image: /images/rich-icon-adverts.svg
        text: >-
          You can use us to delegate all your paid media services or to support
          your existing team. We use all the major platforms available on the
          market.
      - title: Performance models
        image: /images/rich-icon-performance.svg
        text: >-
          We specialize in pure performance marketing and can work on any CPA
          model that suits your product best, making it risk-free for your brand
          and very budget friendly.
      - title: Video Advertising
        image: /images/rich-icon-video.svg
        text: >-
          We use Snapchat, TikTok and selected DSPs for campaigns suitable for
          video advertising.
      - title: Influencer & Affiliate Marketing
        image: /images/rich-icon-influencer.svg
        text: >-
          We can set up a new influencer and affiliate marketing program for you
          using the best available technology and most suitable solutions for
          you, hassle-free.
      - title: App Store Marketing
        image: /images/rich-icon-appstore.svg
        text: >-
          Depending on your goals we can advertise your app directly in the
          Apple Store through Apple Search Ads, or in Google Play through Google
          Ads.
  - title: Gaming
    highlight: We help you up your game
    text: >-
      We love working with games and gaming-related products! Based on our
      experience and available targeting whitelists we can help you grow your
      game through multiple services.
    services:
      - title: Rewarded Traffic
        image: /images/rich-icon-rewards.svg
        text: >-
          Risk-free way of growing your user base is promoting your game on a
          Cost Per Event based with rewarded traffic. You get exactly what you
          need and never pay for anything not hitting your KPI.
      - title: Influencers and Affiliates
        image: /images/rich-icon-influencer.svg
        text: >-
          Have your product advertised on Twitch and YouTube with fully
          transparent reporting that shows each mention, numbers of interactions
          and comments and performance tracking.
      - title: Managed Media Buying
        image: /images/rich-icon-adverts.svg
        text: >-
          Non-incentivized display traffic can provide additional active users
          to your game on a CPA basis, while our highly targeted CPM campaigns
          can improve your product awareness on the market.
  - title: Consulting
    highlight: Let us grow you further
    text: >-
      Looking to improve your Growth Marketing strategy and tactics? Get in
      touch with us - our first consultation call is free of charge.
    services:
      - title: Building a new foundation
        image: /images/rich-icon-building.svg
        text: >-
          Looking to create your own marketing team? We can help you set up the
          right strategy, procedures and train your team, while making sure your
          budget is spent efficiently.
      - title: Expansion and improvement
        image: /images/rich-icon-expand.svg
        text: >-
          Are you already active with your own marketing campaigns, but looking
          for ways to get more out of them? Our team can help you find ways to
          expand, improve and maximize the efficiency of your activities.
      - title: General consulting
        image: /images/rich-icon-consulting.svg
        text: >-
          In need of a brainstorming partner for your general strategy, market
          positioning and next moves in growth marketing? Planning changes
          within your team, or perhaps looking for the best way to find your
          next investor?

          Contact us to find out how we can help you with all of that.
published: true
_template: services
---

<div class="row">
  <div class="col-xs-12 col-sm-4 u-relative">
    <div class="services-menu">
      {% for chapter in page.chapters %}
        <div class="menu-item {% if forloop.index == 1 %}isActive{% endif %}" data-target="chapter-{{ forloop.index}}">
          <h4>{{ chapter.title }}</h4>
          <p>{{ chapter.highlight }}</p>
        </div>
      {% endfor %}
    </div>
  </div>
  <div class="col-xs-12 col-sm-8 u-relative">
    <div class="content-background"></div>
      {% for chapter in page.chapters %}
        <div id="chapter-{{ forloop.index }}" class="chapter {% if forloop.index == 1 %}isActive{% endif %}">
          {{ chapter.text | markdownify }}
          <div class="row services">
            {% assign value = chapter.services.size | modulo:2 %}
            {% for service in chapter.services %}
              <div class="col-xs-12 {% if value == 0 %}col-sm-6{% endif %}">
                <div class="item">
                  <img class="item-icon" src="{{ site.baseurl }}{{ service.image }}" alt="" style="height: 3rem;" title="{{ service.title }}" />
                  <h4>{{ service.title }}</h4>
                  {{ service.text | markdownify }}
                </div>
              </div>
            {% endfor %}
          </div>
        </div>
      {% endfor %}

  </div>
</div>

<div class="row u-menu-paddding" style="margin-top: 6rem;">

</div>
