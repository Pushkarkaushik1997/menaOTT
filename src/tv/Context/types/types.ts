import { Item } from "src/types/types";


export interface State {
  popularMovies: Item[];
  trendingShows: Item[];
  mostLiked: Item[];
  series: Item[];
  music: Item[];
  heroData: Item[];
  loading: boolean;
  error: string | null;
}
