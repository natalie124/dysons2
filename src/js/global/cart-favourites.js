'use strict';
(function() {
  var codeEnter = 13;

  document.addEventListener('click', function(evt) {
    if (evt.target.closest('.js-card-favourites')) {
      evt.preventDefault();
      var btn = evt.target.closest('.js-card-favourites');
      btn.classList.toggle('active');
    }
  });
  document.addEventListener('keydown', function(evt) {
    if (evt.target.closest('.js-card-favourites') && evt.keyCode === codeEnter) {
      evt.preventDefault();
      var btn = evt.target.closest('.js-card-favourites');
      btn.classList.toggle('active');
    }
  });
})();
