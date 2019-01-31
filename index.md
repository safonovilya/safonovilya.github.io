---
layout: default
title: Ilya Safonov
---

## Posts
<div class="row">
  {% for post in site.posts %}
    <div class="col-sm-6">
      <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="{{ post.thumbnail }}" alt="Card image cap">
        <div class="card-body">
          <h5 class="card-title">{{ post.title }}</h5>
          <p class="card-text">{{ post.excerpt }}</p>
          <a href="{{site.baseurl}}{{ post.url }}" class="btn btn-primary">Read</a>
        </div>
      </div>
    </div>
  {% endfor %}
</div>

{% include mailchimp.html %}
