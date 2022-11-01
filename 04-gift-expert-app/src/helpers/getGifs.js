export const getGifs = async (category) => {
  const url = `http://api.giphy.com/v1/gifs/search?api_key=IcS2ANCPXfNGkrse30cQ04PuRf4yjPKw&q=${category}&limit=10`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url,
  }));

  return gifs;
};
