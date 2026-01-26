(function () {
  'use strict';

  function loadHTML(selector, url, label, cacheBust) {
    const el = document.querySelector(selector);
    if (!el) {
      if (window.console && console.error) {
        console.error('Element "' + selector + '" not found for ' + (label || url));
      }
      return;
    }

    var finalUrl = url;
    if (cacheBust) {
      finalUrl += (url.indexOf('?') === -1 ? '?' : '&') + 'v=' + (new Date().getTime());
    }

    var xhr = new XMLHttpRequest();
    try {
      xhr.open('GET', finalUrl, true);
    } catch (e) {
      if (window.console && console.error) {
        console.error('Error opening ' + (label || url) + ':', e);
      }
      return;
    }

    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        var ok = (xhr.status >= 200 && xhr.status < 300) ||
                 xhr.status === 304 ||
                 (xhr.status === 0 && xhr.responseText);

        if (ok) {
          el.innerHTML = xhr.responseText;
        } else if (window.console && console.error) {
          console.error('Error loading ' + (label || url) + ': ' + xhr.status + ' ' + xhr.statusText);
        }
      }
    };

    try {
      xhr.send(null);
    } catch (e) {
      if (window.console && console.error) {
        console.error('Error sending request for ' + (label || url) + ':', e);
      }
    }
  }

  function onReady(fn) {
    if (document.readyState === 'complete' || document.readyState === 'interactive') {
      fn();
    } else if (document.addEventListener) {
      document.addEventListener('DOMContentLoaded', fn, false);
    } else {
      document.attachEvent('onreadystatechange', function () {
        if (document.readyState === 'complete') fn();
      });
    }
  }

  onReady(function () {
    loadHTML('#panel', './noindex/panel.html.js', 'panel.html.js');
    loadHTML('#block_big', './noindex/gameBig.html.js', 'gameBig.html.js');
  });
})();
