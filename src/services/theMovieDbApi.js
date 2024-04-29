import axios from 'axios';

const successToken =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNWIxMzQ5YTJlMDYwODRmOTcyNjg3NzdhNTFmZWE3MiIsInN1YiI6IjY2MmY1NjEzNTExZDA5MDEyNGM1NzYwZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Y5wZxlMIXGb-ql_UUeNckGFIDRrAlwWv3obyId5ewtI';

const baseUrl = 'https://api.themoviedb.org/3';

export const fecthTrendingMovies = async () => {
  const {
    data: { results },
  } = await axios(`${baseUrl}/trending/movie/day`, {
    headers: { Authorization: `Bearer ${successToken}` },
  });
  return results;
};
export const fetchMovieDetailsById = async id => {
  const { data } = await axios(`${baseUrl}/movie/${id}`, {
    headers: { Authorization: `Bearer ${successToken}` },
  });
  return data;
};

export const fetchCreditsByMovieId = async id => {
  const { data } = await axios(`${baseUrl}/movie/${id}/credits`, {
    headers: { Authorization: `Bearer ${successToken}` },
  });
  return data.cast;
};
export const fetchReviewsByMovieId = async id => {
  const { data } = await axios(`${baseUrl}/movie/${id}/reviews`, {
    headers: { Authorization: `Bearer ${successToken}` },
  });
  return data.results;
};
export const fetchMoviesByQuery = async query => {
  const { data } = await axios(`${baseUrl}/search/movie?query=${query}`, {
    headers: { Authorization: `Bearer ${successToken}` },
  });
  return data.results;
};