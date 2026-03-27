const typeLabels = {
  movie: 'Filme',
  series: 'Série',
  episode: 'Episódio',
};

export function createCard(movie) {
  const card = document.createElement('li');
  card.classList.add('card');
  card.dataset.id = movie.imdbID;

  const posterSrc = movie.Poster !== 'N/A' ? movie.Poster : '';
  const posterClass = movie.Poster !== 'N/A' ? 'card__poster' : 'card__poster card__poster--placeholder';

  card.innerHTML = `
    <div class="card__poster-wrapper">
      <img class="${posterClass}" src="${posterSrc}" alt="${movie.Title}" loading="lazy" />
    </div>
    <div class="card__info">
      <span class="card__type">${typeLabels[movie.Type] ?? movie.Type}</span>
      <h2 class="card__title">${movie.Title}</h2>
    </div>
    <div class="card__details" role="tooltip" aria-hidden="true">
      <p class="card__details-loading">Carregando...</p>
      <div class="card__details-content" hidden>
        <p class="card__details-plot"></p>
        <ul class="card__details-meta">
          <li><span>Diretor</span><span class="card__details-director"></span></li>
          <li><span>Nota</span><span class="card__details-rating"></span></li>
          <li><span>Duração</span><span class="card__details-runtime"></span></li>
        </ul>
      </div>
    </div>
  `;

  return card;
}
