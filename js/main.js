import { initSearch } from './components/searchInput.js';
import { loadShelf } from './components/shelf.js';

initSearch();

loadShelf('2026', 'shelf-recent', 6);
loadShelf('marvel', 'shelf-suggested', 6);
loadShelf('spielberg', 'shelf-top', 6);
