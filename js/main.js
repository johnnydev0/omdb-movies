import { initSearch } from './components/searchInput.js';
import { loadShelf } from './components/shelf.js';

initSearch();

loadShelf('2025', 'shelf-recent');
loadShelf('marvel', 'shelf-suggested');
loadShelf('spielberg', 'shelf-top', 5);
