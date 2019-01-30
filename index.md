---
layout: default
title: Ilya Safonov
---

Here I'll be share posts and demos.

while I built this site I found out how use:

Atom.io (usually I work with WebStorm)
- plugin <a href="https://atom.io/packages/emmet">emmet</a>

Jekyll
- <a href="https://learn.cloudcannon.com/jekyll-cheat-sheet/">cheet-sheet</a>
- <a href="https://jekyllrb.com/docs/">Docs</a>

## Posts
{% for post in site.posts %}
  <a href="{{site.baseurl}}{{ post.url }}"> {{ post.title }}
  </a>
{% endfor %}

<!-- Begin Mailchimp Signup Form -->
<link href="//cdn-images.mailchimp.com/embedcode/slim-10_7.css" rel="stylesheet" type="text/css">
<style type="text/css">
	#mc_embed_signup{background:#fff; clear:left; font:14px Helvetica,Arial,sans-serif;  width:500px;}
</style>
<div id="mc_embed_signup">
<form action="https://facebook.us19.list-manage.com/subscribe/post?u=5c87b27039587b4f0f5c0dc9e&amp;id=93ac706e51" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" novalidate>
    <div id="mc_embed_signup_scroll">
	<label for="mce-EMAIL">Subscribe</label>
	<input type="email" value="" name="EMAIL" class="email" id="mce-EMAIL" placeholder="email address" required>
    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
    <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_5c87b27039587b4f0f5c0dc9e_93ac706e51" tabindex="-1" value=""></div>
    <div class="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="button"></div>
    </div>
</form>
</div>

<!--End mc_embed_signup-->
