import { Item } from 'src/types/types';
import api from 'src/services/api';
import { mapMovieData } from 'src/shared/utils/utils';

enum PATHS {
  POPULAR_MOVIES = '/movie/popular',
  WEEKLY_TRENDING = '/trending/tv/week',
  MOVIES = '/discover/movie',
  POPULAR_SERIES = '/tv/popular',
  NOW_PLAYING_MOVIES = '/movie/now_playing'

}

enum GENRES {
  DOCUMENTARIES = '99',
  MUSIC = '10402'
}

export const fetchPopularMovies = async (): Promise<Item[]> => {
  const response = await api.get(PATHS.POPULAR_MOVIES);
  return mapMovieData(response.data.results);
};

export const fetchTrendingShows = async (): Promise<Item[]> => {
  const response = await api.get(PATHS.WEEKLY_TRENDING);
  return mapMovieData(response.data.results);
};

export const fetchMostLiked = async (): Promise<Item[]> => {
  const response = await api.get(PATHS.MOVIES, {
    params: { with_genres: GENRES.DOCUMENTARIES },
  });
  return mapMovieData(response.data.results);
};

export const fetchSeries = async (): Promise<Item[]> => {
  const response = await api.get(PATHS.POPULAR_SERIES);
  return mapMovieData(response.data.results);
};

export const fetchMusic = async (): Promise<Item[]> => {
  const response = await api.get(PATHS.MOVIES, {
    params: { with_genres: GENRES.MUSIC },
  });
  return mapMovieData(response.data.results);
};

export const fetchHeroData = async (): Promise<Item[]> => {
  const response = await api.get(PATHS.NOW_PLAYING_MOVIES);
  return mapMovieData(response.data.results);
};
