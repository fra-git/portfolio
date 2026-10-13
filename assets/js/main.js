/* Portfolio — small progressive enhancements. The page works without this file. */
(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Mobile navigation ---------- */
  var nav = document.querySelector("[data-nav]");
  var toggle = document.querySelector("[data-nav-toggle]");

  if (nav && toggle) {
    var setOpen = function (open) {
      nav.classList.toggle("is-open", open);
      toggle.setAttribute("aria-expanded", String(open));
    };

    toggle.addEventListener("click", function () {
      setOpen(toggle.getAttribute("aria-expanded") !== "true");
    });

    nav.addEventListener("click", function (event) {
      if (event.target.closest("a")) setOpen(false);
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && nav.classList.contains("is-open")) {
        setOpen(false);
        toggle.focus();
      }
    });

    var desktop = window.matchMedia("(min-width: 821px)");
    var closeOnDesktop = function (mq) { if (mq.matches) setOpen(false); };
    if (desktop.addEventListener) desktop.addEventListener("change", closeOnDesktop);
  }

  /* ---------- Header border once the page scrolls ---------- */
  var header = document.querySelector("[data-header]");

  if (header) {
    var onScroll = function () {
      header.classList.toggle("is-scrolled", window.scrollY > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  if (!("IntersectionObserver" in window)) return;

  /* ---------- Highlight the nav link of the section in view ---------- */
  var navLinks = Array.prototype.slice.call(document.querySelectorAll('.nav-menu a[href^="#"]'));
  var linkFor = {};
  navLinks.forEach(function (link) { linkFor[link.hash.slice(1)] = link; });

  var spy = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      navLinks.forEach(function (link) { link.removeAttribute("aria-current"); });
      var active = linkFor[entry.target.id];
      if (active) active.setAttribute("aria-current", "true");
    });
  }, { rootMargin: "-45% 0px -50% 0px" });

  document.querySelectorAll("main section[id]").forEach(function (section) { spy.observe(section); });

  /* ---------- Fade in content below the fold ---------- */
  if (reduceMotion) return;

  var revealer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      var el = entry.target;
      revealer.unobserve(el);
      el.classList.remove("reveal-pending");
      // Drop the reveal transition afterwards so hover transitions work normally.
      window.setTimeout(function () {
        el.classList.remove("reveal");
        el.style.removeProperty("--reveal-i");
      }, 1000);
    });
  }, { rootMargin: "0px 0px -8% 0px" });

  var fold = window.innerHeight;

  document.querySelectorAll("[data-reveal]").forEach(function (el) {
    // Content already on screen at load stays put; only content below the fold animates.
    if (el.getBoundingClientRect().top < fold) return;
    var siblings = Array.prototype.filter.call(el.parentElement.children, function (child) {
      return child.hasAttribute("data-reveal");
    });
    el.style.setProperty("--reveal-i", String(siblings.indexOf(el) % 3));
    el.classList.add("reveal", "reveal-pending");
    revealer.observe(el);
  });
})();

/* ---------- Copy email button & footer year ---------- */
(function () {
  "use strict";

  document.querySelectorAll("[data-copy]").forEach(function (button) {
    var source = document.querySelector(button.getAttribute("data-copy"));
    var label = button.querySelector("[data-copy-label]");
    if (!source) return;

    var showResult = function (text) {
      if (!label) return;
      label.textContent = text;
      window.setTimeout(function () { label.textContent = "Copy"; }, 2000);
    };

    var fallbackCopy = function (text) {
      var field = document.createElement("textarea");
      field.value = text;
      field.setAttribute("readonly", "");
      field.style.position = "absolute";
      field.style.left = "-9999px";
      document.body.appendChild(field);
      field.select();
      var ok = false;
      try { ok = document.execCommand("copy"); } catch (e) { ok = false; }
      document.body.removeChild(field);
      if (ok) {
        showResult("Copied");
        return;
      }
      // Last resort: select the address so the visitor can copy it by hand.
      var range = document.createRange();
      range.selectNodeContents(source);
      var selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
      showResult("Selected");
    };

    button.addEventListener("click", function () {
      var text = source.textContent.trim();
      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(text).then(
          function () { showResult("Copied"); },
          function () { fallbackCopy(text); }
        );
      } else {
        fallbackCopy(text);
      }
    });
  });

  var year = document.querySelector("[data-year]");
  if (year) year.textContent = String(new Date().getFullYear());
})();
