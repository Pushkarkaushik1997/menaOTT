import React, { createContext, useReducer, useContext, useEffect, ReactNode, useMemo } from 'react';
import { reducer, initialState } from 'src/tv/Context/reducers/reducers';
import { Action, setPopularMovies, setTrendingShows, setMostLiked, setSeries, setMusic, setHeroData, setLoading, setError } from 'src/tv/Context/actions/actions';
import { State } from 'src/tv/Context/types/types';
import {
  fetchPopularMovies,
  fetchTrendingShows,
  fetchMostLiked,
  fetchSeries,
  fetchMusic,
  fetchHeroData,
} from 'src/services/assets';
import { DATA_FETCH_ERROR } from 'src/tv/Strings/Strings';

interface DataContextProps {
  state: State;
  dispatch: React.Dispatch<Action>;
}

export const DataContext = createContext<DataContextProps>({
  state: initialState,
  dispatch: () => null,
});

export const DataProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    async function fetchData() {
      dispatch(setLoading(true));
      try {
        const [
          popularMoviesData,
          trendingShowsData,
          mostLikedData,
          seriesData,
          musicData,
          heroDataData,
        ] = await Promise.all([
          fetchPopularMovies(),
          fetchTrendingShows(),
          fetchMostLiked(),
          fetchSeries(),
          fetchMusic(),
          fetchHeroData(),
        ]);

        dispatch(setPopularMovies(popularMoviesData));
        dispatch(setTrendingShows(trendingShowsData));
        dispatch(setMostLiked(mostLikedData));
        dispatch(setSeries(seriesData));
        dispatch(setMusic(musicData));
        dispatch(setHeroData(heroDataData));
        dispatch(setLoading(false));
      } catch (error) {
        dispatch(setError(`${DATA_FETCH_ERROR} error: ${error}`));
        dispatch(setLoading(false));
      }
    }

    fetchData();
  }, []);

  const contextValue = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  return <DataContext.Provider value={contextValue}>{children}</DataContext.Provider>;
};
