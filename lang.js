// Til tanlash: #uz / #ru / #en — faqat tanlangan bo'lim ko'rinadi.
// JS o'chiq bo'lsa hammasi ketma-ket ko'rinadi (tekshiruvchilar uchun ham qulay).
(function () {
  var langs = ["uz", "ru", "en"];
  function pick() {
    var h = (location.hash || "").replace("#", "");
    if (langs.indexOf(h) < 0) {
      var n = (navigator.language || "uz").slice(0, 2);
      h = langs.indexOf(n) >= 0 ? n : "uz";
    }
    langs.forEach(function (l) {
      var s = document.getElementById(l);
      if (s) s.style.display = l === h ? "" : "none";
    });
    document.querySelectorAll(".langs a").forEach(function (a) {
      a.className = a.getAttribute("data-l") === h ? "on" : "";
    });
    document.documentElement.lang = h;
  }
  window.addEventListener("hashchange", pick);
  pick();
})();
