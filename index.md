---
layout: home
title: Ilya Safonov
---

<div class="row">
{% include particles.html %}
</div>

<blockquote class="blockquote">
  <p class="mb-0">Make it work, then make it better</p>
  <footer class="blockquote-footer">someone clever</footer>
</blockquote>

## Notes
<div class="row">
  {% for post in site.posts %}
    <div class="col-md-6 col-lg-4 ">
      <div class="card" style="width: 18rem;">
        <img class="card-img-top d-sm-none d-md-block"
         src="{{ post.thumbnail }}" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">{{ post.title }}</h5>
          <p class="card-text">{{ post.excerpt }}</p>
          <a href="{{site.baseurl}}{{ post.url }}"
           class="btn btn-primary btn-lg btn-block">Read</a>
        </div>
      </div>
    </div>
  {% endfor %}
</div>

{% include mailchimp.html %}
