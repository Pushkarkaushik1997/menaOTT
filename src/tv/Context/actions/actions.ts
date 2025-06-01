import { Item } from 'src/types/types';
import { ACTION_TYPES } from 'src/tv/Context/actions/actionTypes';


export interface SetPopularMoviesAction {
  type: typeof ACTION_TYPES.SET_POPULAR_MOVIES;
  payload: Item[];
}

export interface SetTrendingShowsAction {
  type: typeof ACTION_TYPES.SET_TRENDING_SHOWS;
  payload: Item[];
}

export interface SetMostLikedAction {
  type: typeof ACTION_TYPES.SET_MOST_LIKED;
  payload: Item[];
}

export interface SetSeriesAction {
  type: typeof ACTION_TYPES.SET_SERIES;
  payload: Item[];
}

export interface SetMusicAction {
  type: typeof ACTION_TYPES.SET_MUSIC;
  payload: Item[];
}

export interface SetHeroDataAction {
  type: typeof ACTION_TYPES.SET_HERO_DATA;
  payload: Item[];
}
export interface SetLoadingAction {
  type: typeof ACTION_TYPES.SET_LOADING;
  payload: boolean;
}

export interface SetErrorAction {
  type: typeof ACTION_TYPES.SET_ERROR;
  payload: string | null;
}

export type Action =
  | SetPopularMoviesAction
  | SetTrendingShowsAction
  | SetMostLikedAction
  | SetSeriesAction
  | SetMusicAction
  | SetHeroDataAction
  | SetLoadingAction
  | SetErrorAction;

// Action Creators
export const setPopularMovies = (movies: Item[]): SetPopularMoviesAction => ({
  type: ACTION_TYPES.SET_POPULAR_MOVIES,
  payload: movies,
});

export const setTrendingShows = (shows: Item[]): SetTrendingShowsAction => ({
  type: ACTION_TYPES.SET_TRENDING_SHOWS,
  payload: shows,
});

export const setMostLiked = (docs: Item[]): SetMostLikedAction => ({
  type: ACTION_TYPES.SET_MOST_LIKED,
  payload: docs,
});

export const setSeries = (series: Item[]): SetSeriesAction => ({
  type: ACTION_TYPES.SET_SERIES,
  payload: series,
});

export const setMusic = (music: Item[]): SetMusicAction => ({
  type: ACTION_TYPES.SET_MUSIC,
  payload: music,
});

export const setHeroData = (heroes: Item[]): SetHeroDataAction => ({
  type: ACTION_TYPES.SET_HERO_DATA,
  payload: heroes,
});

export const setLoading = (isLoading: boolean): SetLoadingAction => ({
  type: ACTION_TYPES.SET_LOADING,
  payload: isLoading,
});

export const setError = (error: string | null): SetErrorAction => ({
  type: ACTION_TYPES.SET_ERROR,
  payload: error,
});

