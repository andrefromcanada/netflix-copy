
const api_key = "1f6b010b46e153df35d26f095f0a7632";

const requests = {
  fetchNetflixOriginal: `/discover/tv?api_key=${api_key}&with_networks=213`,
  fetchTrending: `/trending/all/week?api_key=${api_key}&language=en-US`,
  fetchTopRated: `/movie/top_rated?api_key=${api_key}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${api_key}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${api_key}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${api_key}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${api_key}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${api_key}&with_genres=99`,
};

export default requests;
