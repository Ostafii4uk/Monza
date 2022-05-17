'use strict';

const form = document.querySelector('.subscription__entry');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  form.reset();

  window.location.href = '#monza';
});
