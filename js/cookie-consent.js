(function () {
  "use strict";

  var CONSENT_KEY = "tektron_cookie_consent";
  var GA_ID = "G-FG36EB6D4N";
  var PRIVACY_URL = "https://www.tektron.ind.br/politica-de-privacidade/";

  function getConsent() {
    try {
      return localStorage.getItem(CONSENT_KEY);
    } catch (e) {
      return null;
    }
  }

  function setConsent(value) {
    try {
      localStorage.setItem(CONSENT_KEY, value);
    } catch (e) {
      /* localStorage indisponível (modo privado restrito) — segue sem persistir */
    }
  }

  function loadAnalytics() {
    if (window.__tektronGaLoaded) return;
    window.__tektronGaLoaded = true;

    window.dataLayer = window.dataLayer || [];
    window.gtag = function () {
      dataLayer.push(arguments);
    };
    gtag("js", new Date());
    gtag("config", GA_ID);

    var script = document.createElement("script");
    script.async = true;
    script.src = "https://www.googletagmanager.com/gtag/js?id=" + GA_ID;
    document.head.appendChild(script);
  }

  var consent = getConsent();
  if (consent === "aceito") {
    loadAnalytics();
    return;
  }
  if (consent === "recusado") {
    return;
  }

  function showBanner() {
    var banner = document.createElement("div");
    banner.className = "cookie-banner";
    banner.setAttribute("role", "region");
    banner.setAttribute("aria-label", "Aviso de cookies");

    var text = document.createElement("p");
    text.className = "cookie-banner-text";
    text.innerHTML =
      'Usamos cookies de análise (Google Analytics) para entender como o site é usado. ' +
      'Você pode aceitar ou recusar, sem afetar a navegação. ' +
      '<a href="' + PRIVACY_URL + '">Saiba mais na Política de Privacidade</a>.';

    var actions = document.createElement("div");
    actions.className = "cookie-banner-actions";

    var declineBtn = document.createElement("button");
    declineBtn.type = "button";
    declineBtn.className = "btn-secondary cookie-banner-btn";
    declineBtn.textContent = "Recusar";

    var acceptBtn = document.createElement("button");
    acceptBtn.type = "button";
    acceptBtn.className = "btn-primary cookie-banner-btn";
    acceptBtn.textContent = "Aceitar";

    actions.appendChild(declineBtn);
    actions.appendChild(acceptBtn);
    banner.appendChild(text);
    banner.appendChild(actions);
    document.body.appendChild(banner);

    acceptBtn.addEventListener("click", function () {
      setConsent("aceito");
      loadAnalytics();
      banner.remove();
    });

    declineBtn.addEventListener("click", function () {
      setConsent("recusado");
      banner.remove();
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", showBanner);
  } else {
    showBanner();
  }
})();
