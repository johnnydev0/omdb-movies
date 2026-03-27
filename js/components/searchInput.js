import { getMovies } from '../api.js';
import { renderResults, renderMessage } from './movieList.js';
import { debounce } from '../utils/debounce.js';

const input = document.getElementById('search-input');
const results = document.getElementById('results');
const shelves = document.getElementById('shelves');

let currentController = null;

async function handleSearch(query) {
  if (!query.trim()) {
    results.hidden = true;
    shelves.hidden = false;
    return;
  }

  if (currentController) currentController.abort();
  currentController = new AbortController();

  try {
    const movies = await getMovies(query, currentController.signal);
    if (movies.length === 0) {
      renderMessage(`Nenhum resultado encontrado para "${query}".`);
    } else {
      renderResults(movies);
    }
    shelves.hidden = true;
    results.hidden = false;
  } catch (err) {
    if (err.name === 'AbortError') return;
    renderMessage('Erro ao buscar resultados. Tente novamente.');
    shelves.hidden = true;
    results.hidden = false;
  }
}

export function initSearch() {
  input.addEventListener('input', debounce((e) => handleSearch(e.target.value), 400));
}
