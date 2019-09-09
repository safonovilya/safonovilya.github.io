---
layout: home
title: Ilya Safonov
---

<!-- <div class="row">
{% include particles.html %}
</div> -->

<blockquote class="blockquote">
  <p class="mb-0">Make it work, then make it better</p>
  <footer class="blockquote-footer">someone clever</footer>
</blockquote>

## Notes
<div class="row">
  {% for post in site.posts %}
  
  <div class="card shadow-box-hover bg-transparent mb-3 w-100">
    <div class="row no-gutters">
      <div class="col-md-3 bg-secondary">
        <a href="{{site.baseurl}}{{ post.url }}" class="">
            <img src="{{ post.thumbnail }}" class="card-img" alt="{{ post.title }}">
        </a>
      </div>
      <div class="col-md-9 text-left">
        <div class="card-body p-3 d-flex flex-column">
          <h5 class="card-title">{{ post.title }}</h5>
          <p class="card-text">{{ post.excerpt }}</p>
          <a href="{{site.baseurl}}{{ post.url }}"
                     class="btn ml-auto btn-secondary btn-sm">Read</a>
        </div>
      </div>
    </div>
  </div>
  
  {% endfor %}
</div>

<div class="m-5">
{% include mailchimp.html %}
</div>
