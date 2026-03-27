import { getMovies } from '../api.js';
import { createCard } from './card.js';
import { attachDetailsListeners } from './movieDetails.js';

export async function loadShelf(query, listId, limit = Infinity) {
  const list = document.getElementById(listId);

  try {
    const movies = (await getMovies(query)).slice(0, limit);

    movies.forEach((movie) => {
      const card = createCard(movie);
      attachDetailsListeners(card);
      list.appendChild(card);
    });
  } catch {
    return;
  }
}
