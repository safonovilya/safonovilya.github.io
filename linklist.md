---
layout: linklist
title: Ilya Safonov
---

<style>
a div {
  background-color: #ffffff;
}
a:hover div {
  background-color: #ffffffbf;
}

body {
   background-color: #EDE6F2;
}
</style>

<div class="text-center mb-4">
  <img src="/images/avatar.jpg"
       class="img-thumbnail rounded-circle"
       alt="Ilya Safonov"
       width="75"
       height="75" />
</div>

<div>
{% for link in site.data.links.list %}
    <a href="{{link.link}}"
       class="text-decoration-none">
         <div class="shadow p-3 mb-3 rounded ">
           {{link.title}}
         </div>
     </a>
{% endfor %}
</div>
