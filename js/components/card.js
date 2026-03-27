const typeLabels = {
  movie: 'Filme',
  series: 'Série',
  episode: 'Episódio',
};

export function createCard(movie) {
  const card = document.createElement('li');
  card.classList.add('card');
  card.dataset.id = movie.imdbID;

  card.innerHTML = `
    <div class="card__poster-wrapper">
      <img class="card__poster" loading="lazy" />
    </div>
    <div class="card__info">
      <span class="card__type"></span>
      <h2 class="card__title"></h2>
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

  const img = card.querySelector('.card__poster');
  if (movie.Poster !== 'N/A') {
    img.src = movie.Poster;
    img.alt = movie.Title;
    img.onerror = () => {
      img.parentElement.classList.add('card__poster--placeholder');
      img.remove();
    };
  } else {
    img.parentElement.classList.add('card__poster--placeholder');
    img.remove();
  }

  card.querySelector('.card__type').textContent = typeLabels[movie.Type] ?? movie.Type;
  card.querySelector('.card__title').textContent = movie.Title;

  return card;
}
