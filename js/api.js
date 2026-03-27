const API_KEY = '342aa484';

async function request(params) {
  const url = new URL('https://www.omdbapi.com/');

  url.search = new URLSearchParams({
    apikey: API_KEY,
    ...params,
  });

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`HTTP error: ${response.status}`);
  }

  const data = await response.json();

  return data;
}

export async function getMovies(query) {
  if (!query) return [];

  const data = await request({ s: query });

  return data.Search || [];
}

export async function getMovieDetails(id) {
  if (!id) return null;

  const data = await request({ i: id });

  return data;
} 