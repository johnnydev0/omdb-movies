import { createCard } from './card.js';
import { attachDetailsListeners } from './movieDetails.js';

const list = document.getElementById('movie-list');

export function renderResults(movies) {
  list.innerHTML = '';

  movies.forEach((movie) => {
    const card = createCard(movie);
    attachDetailsListeners(card);
    list.appendChild(card);
  });
}

export function renderMessage(text) {
  list.innerHTML = '';
  const msg = document.createElement('p');
  msg.className = 'results__message';
  msg.textContent = text;
  list.appendChild(msg);
}
