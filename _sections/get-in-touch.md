---
title: Get in touch
order: 8
date: '2018-07-16 12:00:00 +0000'
highlight: We’d love to hear your story
email: contact@harvest-mobile.com
address: |-
  Harvest Media LLC<br>
  19C Trolley Square<br>
  Wilmington, DE 19806<br>
  United States
linkedin_url: 'https://www.linkedin.com/company/harvest-mobile/'
_template: get_in_touch
published: true
---

<div class="row">
  <div class="col-xs-12 col-md-4">
    <blockquote><p>{{ page.highlight }}</p></blockquote>
    <div class="u-mobile-hide">
      <a class="footer-link" target="_blank" href="mailto:{{ page.email }}"><img src="{{ site.baseurl }}/images/icon-email.svg" /> {{ page.email }}</a>
      <a class="footer-link" target="_blank" href="{{ page.linkedin_url }}"><img src="{{ site.baseurl }}/images/icon-linkedin.svg" /> {{ page.linkedin_url | replace: "https://www.linkedin.com/", ""  }}</a>
    </div>
  </div>
  <div class="col-xs-12 col-md-8">  
    <form id="contact-form" class="form" action="https://formspree.io/f/moqzbgaj" method="POST">
      <input class="field" type="text" name="name" placeholder="Name" required />
      <input class="field" type="text" name="company" placeholder="Company" />
      <input class="field" type="email" name="email" placeholder="Email" required />
      <div class="field-select">
        <select name="subject" class="field" required>
          <option value="" selected disabled hidden>Subject</option>
          <option value="Advertising">Advertising</option>
          <option value="Monetization">Monetization</option>
          <option value="Cooperation">Cooperation</option>
        </select>
      </div>
      <textarea class="field" name="message" rows="5" placeholder="Your message" required></textarea>
      <button type="submit" class="button button--dark" id="contact-form-button">Submit</button>
      <p class="form-message" id="contact-form-status"></p>
    </form>
    <!-- Place this script at the end of the body tag -->
    <script>
        var form = document.getElementById("contact-form");
        async function handleSubmit(event) {
          event.preventDefault();
          var status = document.getElementById("contact-form-status");
          var data = new FormData(event.target);
          fetch(event.target.action, {
            method: form.method,
            body: data,
            headers: {
                'Accept': 'application/json'
            }
          }).then(response => {
            if (response.ok) {
              status.innerHTML = "Thanks for your submission!";
              form.reset()
            } else {
              response.json().then(data => {
                if (Object.hasOwn(data, 'errors')) {
                  status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
                } else {
                  status.innerHTML = "Oops! There was a problem submitting your form"
                }
              })
            }
          }).catch(error => {
            status.innerHTML = "Oops! There was a problem submitting your form"
          });
        }
        form.addEventListener("submit", handleSubmit)
    </script>
  </div>
  <div class="col-xs-12">
    <div class="u-mobile-show">
        <a class="footer-link" target="_blank" href="mailto:{{ page.email }}"><img src="{{ site.baseurl }}/images/icon-email.svg" /> {{ page.email }}</a>
        <a class="footer-link" target="_blank" href="{{ page.linkedin_url }}"><img src="{{ site.baseurl }}/images/icon-linkedin.svg" /> {{ page.linkedin_url | replace: "https://www.linkedin.com/", ""  }}</a>
    </div>
  </div>
</div>
<div class="colophon">
  <div class="row">
    <div class="col-xs-12 col-sm-7">&copy; {{ "now" | date: "%Y" }} Harvest media LLC</div>
    <div class="col-xs-12 col-sm-5">
      Design & Website by <a href="https://www.nartadalladaku.com/" target="_blank">Narta Dalladaku</a> / <a href="https://sincere.studio" target="_blank">Sincere—Studio</a>
    </div>
  </div>
</div>
