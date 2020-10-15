
function fixAElement(selector) {
  var domReady = function domReady(fn) {
    document.addEventListener("DOMContentLoaded", fn);
    if (document.readyState === "interactive" || document.readyState === "complete" ) {
      fn();
    }
  };

  var fix = function fix()
  {
    if (!navigator.userAgent.match('; wv'))
    {
      return;
    }
    
    // pass selector instead of an id so i can test it against any element
    // pass an id like: a#my-element
    // or you could pass a[target="_blank"]
    document.querySelectorAll(selector).forEach(function(el) {
      if (el.getAttribute('target') === '_blank') {
        el.removeAttribute('target');
      } 
      if (el.getAttribute('rel') === 'noopener') {
        el.removeAttribute('rel');
      }
    });
  };

  domReady(fix);
}

fixAElement('a[target="_blank"]');
