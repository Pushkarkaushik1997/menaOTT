import { Action } from 'src/tv/Context/actions/actions';
import { State } from 'src/tv/Context/types/types';
import { ACTION_TYPES } from 'src/tv/Context/actions/actionTypes';

export const initialState: State = {
  popularMovies: [],
  trendingShows: [],
  mostLiked: [],
  series: [],
  music: [],
  heroData: [],
  loading: true,
  error: null,
};

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ACTION_TYPES.SET_POPULAR_MOVIES:
      return { ...state, popularMovies: action.payload };
    case ACTION_TYPES.SET_TRENDING_SHOWS:
      return { ...state, trendingShows: action.payload };
    case ACTION_TYPES.SET_MOST_LIKED:
      return { ...state, mostLiked: action.payload };
    case ACTION_TYPES.SET_SERIES:
      return { ...state, series: action.payload };
    case ACTION_TYPES.SET_MUSIC:
      return { ...state, music: action.payload };
    case ACTION_TYPES.SET_HERO_DATA:
      return { ...state, heroData: action.payload };
    case ACTION_TYPES.SET_LOADING:
        return { ...state, loading: action.payload };
    case ACTION_TYPES.SET_ERROR:
        return { ...state, error: action.payload };
    default:
      return state;
  }
};
