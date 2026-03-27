import { getMovieDetails } from '../api.js';

const cache = {};

function showPanel(card) {
  card.querySelector('.card__details').setAttribute('aria-hidden', 'false');
}

function hidePanel(card) {
  card.querySelector('.card__details').setAttribute('aria-hidden', 'true');
}

function populate(card, data) {
  card.querySelector('.card__details-plot').textContent =
    data.Plot !== 'N/A' ? data.Plot : 'Sinopse não disponível.';
  card.querySelector('.card__details-director').textContent = data.Director;
  card.querySelector('.card__details-rating').textContent = data.imdbRating;
  card.querySelector('.card__details-runtime').textContent = data.Runtime;

  card.querySelector('.card__details-loading').hidden = true;
  card.querySelector('.card__details-content').hidden = false;
}

async function load(card) {
  const id = card.dataset.id;
  showPanel(card);

  if (cache[id]) {
    populate(card, cache[id]);
    return;
  }

  try {
    const data = await getMovieDetails(id);
    cache[id] = data;
    populate(card, data);
  } catch {
    card.querySelector('.card__details-loading').textContent = 'Erro ao carregar.';
  }
}

export function attachDetailsListeners(card) {
  card.addEventListener('mouseenter', () => load(card));
  card.addEventListener('mouseleave', () => hidePanel(card));
  card.addEventListener('touchstart', () => load(card), { passive: true });
}
