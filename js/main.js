import { initSearch } from './components/searchInput.js';
import { loadShelf } from './components/shelf.js';

initSearch();

loadShelf('2026', 'shelf-recent', 5);
loadShelf('marvel', 'shelf-suggested', 5);
loadShelf('spielberg', 'shelf-top', 5);
