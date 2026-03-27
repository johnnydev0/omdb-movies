const IS_LOCAL = location.hostname === 'localhost' || location.hostname === '127.0.0.1';
const API_KEY = '342aa484';

async function request(params, signal) {
  const url = IS_LOCAL
    ? new URL('https://www.omdbapi.com/')
    : new URL('/api/omdb', location.origin);

  url.search = new URLSearchParams(IS_LOCAL ? { apikey: API_KEY, ...params } : params);

  const response = await fetch(url, { signal });

  if (!response.ok) {
    throw new Error(`HTTP error: ${response.status}`);
  }

  const data = await response.json();

  return data;
}

export async function getMovies(query, signal) {
  if (!query) return [];

  const data = await request({ s: query }, signal);

  return data.Search || [];
}

export async function getMovieDetails(id) {
  if (!id) return null;

  const data = await request({ i: id });

  return data;
} 