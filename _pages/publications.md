---
layout: page
title: Publications
permalink: /publications/
description: 'For the most up-to-date list, see <a href="https://scholar.google.com/citations?user=Khfy-80AAAAJ">Google Scholar</a>.'
nav: true
nav_order: 2
_styles: >
  .post-header { position: relative; }
  .post-header .post-description { margin-bottom: 0; padding-right: 340px; }
  .pubs-filter { position: absolute; right: 0; top: 50%; transform: translateY(-50%); margin: 0; }
  .pubs-filter input { width: min(320px, 80vw); padding: 0.45rem 0.7rem; border: 1px solid var(--global-divider-color); border-radius: 0.4rem; background: var(--global-bg-color); color: var(--global-text-color); font-size: 0.9rem; }
  @media (max-width: 768px) {
    .post-header .post-description { padding-right: 0; }
    .pubs-filter { position: static; transform: none; margin-top: 0.75rem; display: flex; justify-content: flex-end; }
  }
  .publications { margin-top: 1.5rem; }
  .publications .links { margin-top: 0.4rem; }
---

<div class="pubs-filter">
  <input type="text" id="pub-filter" autocomplete="off" spellcheck="false" placeholder="Type to filter publications">
</div>

<div class="publications">

{% bibliography %}

</div>

<script>
(function() {
  // Move the filter div into the post-header so it renders on the same row as the description.
  function relocateFilter() {
    var filter = document.querySelector(".pubs-filter");
    var header = document.querySelector(".post-header");
    if (filter && header && filter.parentElement !== header) {
      header.appendChild(filter);
    }
  }
  // Run as early as possible (before paint when script is in body).
  relocateFilter();
  document.addEventListener("DOMContentLoaded", relocateFilter);

  document.addEventListener("DOMContentLoaded", function () {
    var input = document.getElementById("pub-filter");
    var pubs = document.querySelector(".publications");
    if (!input || !pubs) return;
    function filt() {
      var q = input.value.toLowerCase();
      pubs.querySelectorAll("li").forEach(function (li) {
        li.style.display = li.textContent.toLowerCase().indexOf(q) > -1 ? "" : "none";
      });
      pubs.querySelectorAll("ol.bibliography").forEach(function (ol) {
        var any = Array.prototype.some.call(
          ol.querySelectorAll("li"),
          function (li) { return li.style.display !== "none"; }
        );
        ol.style.display = any ? "" : "none";
        var prev = ol.previousElementSibling;
        if (prev && prev.tagName === "H2") prev.style.display = any ? "" : "none";
      });
    }
    input.addEventListener("input", filt);
  });
})();
</script>
