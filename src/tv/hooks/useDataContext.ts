import { useContext, useMemo } from "react";
import { DataContext } from "src/tv/Context/DataContext";
import { State } from "src/tv/Context/types/types";

export const useDataContext = () => {
    const { state } = useContext(DataContext);

    const data: Partial<State> = useMemo(() => {
        if (
            state.popularMovies.length &&
            state.trendingShows.length &&
            state.mostLiked.length &&
            state.series.length &&
            state.music.length &&
            state.heroData.length
        ) {
            return {
                popularMovies: state.popularMovies,
                trendingShows: state.trendingShows,
                mostLiked: state.mostLiked,
                series: state.series,
                music: state.music,
                heroData: state.heroData,
            };
        }
        return {
            popularMovies: [],
            trendingShows: [],
            mostLiked: [],
            series: [],
            music: [],
            heroData: [],
        }
    }, [
        state.popularMovies,
        state.trendingShows,
        state.mostLiked,
        state.series,
        state.music,
        state.heroData,
    ]);

    return {
        data,
        loading: state.loading,
        error: state.error,
    };
}
