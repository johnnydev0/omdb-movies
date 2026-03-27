export default async function handler(req, res) {
  const params = new URLSearchParams({
    apikey: process.env.OMDB_API_KEY,
    ...Object.fromEntries(new URLSearchParams(req.query)),
  });

  const response = await fetch(`https://www.omdbapi.com/?${params}`);

  if (!response.ok) {
    return res.status(response.status).json({ error: 'OMDB request failed' });
  }

  const data = await response.json();
  res.status(200).json(data);
}
