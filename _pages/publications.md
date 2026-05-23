---
layout: page
title: Publications
permalink: /publications/
description: For the most up-to-date list, see <a href="https://scholar.google.com/citations?user=Khfy-80AAAAJ">Google Scholar</a>.
nav: true
nav_order: 2
_styles: >
  .pubs-filter { display: flex; justify-content: flex-end; margin: 0.5rem 0 1rem 0; }
  .pubs-filter input { width: min(320px, 80vw); padding: 0.45rem 0.7rem; border: 1px solid var(--global-divider-color); border-radius: 0.4rem; background: var(--global-bg-color); color: var(--global-text-color); font-size: 0.9rem; }
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
