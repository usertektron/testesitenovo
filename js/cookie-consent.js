(function () {
  "use strict";

  var CONSENT_KEY = "tektron_cookie_consent";
  var GA_ID = "G-FG36EB6D4N";
  var PRIVACY_URL = "https://www.tektron.ind.br/politica-de-privacidade/";

  function getConsent() {
    try {
      var raw = localStorage.getItem(CONSENT_KEY);
      if (!raw) return null;
      if (raw === "aceito") return { analytics: true, signals: false };
      if (raw === "recusado") return { analytics: false, signals: false };
      return JSON.parse(raw);
    } catch (e) {
      return null;
    }
  }

  function setConsent(value) {
    try {
      localStorage.setItem(CONSENT_KEY, JSON.stringify(value));
    } catch (e) {
      /* localStorage indisponível (modo privado restrito) — segue sem persistir */
    }
  }

  function loadAnalytics(consent) {
    if (window.__tektronGaLoaded) return;
    window.__tektronGaLoaded = true;

    window.dataLayer = window.dataLayer || [];
    window.gtag = function () {
      dataLayer.push(arguments);
    };
    gtag("consent", "default", {
      analytics_storage: consent.analytics ? "granted" : "denied",
      ad_storage: consent.signals ? "granted" : "denied",
      ad_user_data: consent.signals ? "granted" : "denied",
      ad_personalization: consent.signals ? "granted" : "denied"
    });
    gtag("js", new Date());
    gtag("config", GA_ID);

    var script = document.createElement("script");
    script.async = true;
    script.src = "https://www.googletagmanager.com/gtag/js?id=" + GA_ID;
    document.head.appendChild(script);
  }

  var consent = getConsent();
  if (consent && consent.analytics) {
    loadAnalytics(consent);
    return;
  }
  if (consent && !consent.analytics) {
    return;
  }

  function makeBtn(label, cls) {
    var b = document.createElement("button");
    b.type = "button";
    b.className = cls + " cookie-banner-btn";
    b.textContent = label;
    return b;
  }

  function makeCheckboxRow(id, label, checked) {
    var row = document.createElement("label");
    row.className = "cookie-banner-check-row";
    row.setAttribute("for", id);

    var input = document.createElement("input");
    input.type = "checkbox";
    input.id = id;
    input.checked = checked;

    var span = document.createElement("span");
    span.textContent = label;

    row.appendChild(input);
    row.appendChild(span);
    return { row: row, checkbox: input };
  }

  function showBanner() {
    var banner = document.createElement("div");
    banner.className = "cookie-banner";
    banner.setAttribute("role", "region");
    banner.setAttribute("aria-label", "Aviso de cookies");
    document.body.appendChild(banner);

    function renderMainView() {
      banner.innerHTML = "";

      var text = document.createElement("p");
      text.className = "cookie-banner-text";
      text.innerHTML =
        'Usamos cookies de análise (Google Analytics) para entender como o site é usado. ' +
        'Você pode aceitar, recusar ou personalizar, sem afetar a navegação. ' +
        '<a href="' + PRIVACY_URL + '">Saiba mais na Política de Privacidade</a>.';
      banner.appendChild(text);

      var actions = document.createElement("div");
      actions.className = "cookie-banner-actions";

      var declineBtn = makeBtn("Recusar", "btn-secondary");
      var customizeBtn = makeBtn("Personalizar", "btn-secondary");
      var acceptBtn = makeBtn("Aceitar", "btn-primary");

      actions.appendChild(declineBtn);
      actions.appendChild(customizeBtn);
      actions.appendChild(acceptBtn);
      banner.appendChild(actions);

      acceptBtn.addEventListener("click", function () {
        var c = { analytics: true, signals: false };
        setConsent(c);
        loadAnalytics(c);
        banner.remove();
      });

      declineBtn.addEventListener("click", function () {
        var c = { analytics: false, signals: false };
        setConsent(c);
        banner.remove();
      });

      customizeBtn.addEventListener("click", renderCustomizeView);
    }

    function renderCustomizeView() {
      banner.innerHTML = "";

      var text = document.createElement("p");
      text.className = "cookie-banner-text";
      text.textContent = "Escolha o que você autoriza:";
      banner.appendChild(text);

      var analyticsRow = makeCheckboxRow(
        "tektron-consent-analytics",
        "Cookie de análise (Google Analytics, anônimo)",
        true
      );
      var signalsRow = makeCheckboxRow(
        "tektron-consent-signals",
        "Dado demográfico e de múltiplos dispositivos (Google Signals)",
        false
      );
      banner.appendChild(analyticsRow.row);
      banner.appendChild(signalsRow.row);

      var note = document.createElement("p");
      note.className = "cookie-banner-note";
      note.textContent = "O dado demográfico só funciona com a análise ativada.";
      banner.appendChild(note);

      analyticsRow.checkbox.addEventListener("change", function () {
        if (!analyticsRow.checkbox.checked) {
          signalsRow.checkbox.checked = false;
        }
      });
      signalsRow.checkbox.addEventListener("change", function () {
        if (signalsRow.checkbox.checked) {
          analyticsRow.checkbox.checked = true;
        }
      });

      var actions = document.createElement("div");
      actions.className = "cookie-banner-actions";
      var saveBtn = makeBtn("Salvar preferências", "btn-primary");
      actions.appendChild(saveBtn);
      banner.appendChild(actions);

      saveBtn.addEventListener("click", function () {
        var c = {
          analytics: analyticsRow.checkbox.checked,
          signals: analyticsRow.checkbox.checked && signalsRow.checkbox.checked
        };
        setConsent(c);
        if (c.analytics) loadAnalytics(c);
        banner.remove();
      });
    }

    renderMainView();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", showBanner);
  } else {
    showBanner();
  }
})();
