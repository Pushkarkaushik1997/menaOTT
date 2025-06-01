import { BANNER_PLACEHOLDER, IMG_BASE_URL, POSTER_PLACEHOLDER } from "src/Config/config";
import { State } from "src/tv/Context/types/types";
import { Item, Source } from "src/types/types";

const IMAGE_BASE_URL = process.env.TMDB_IMAGE_URL || IMG_BASE_URL;
interface MovieItem {
  id: number;
  title?: string;
  name?: string;
  overview: string;
  source?: Source | null;
  poster_path?: string;
  backdrop_path?: string;
}

const getImageUrl = (path?: string, size: string = 'original'): string | undefined => {
  return path ? `${IMAGE_BASE_URL}/${size}${path}` : undefined;
};

const mapSingleMovie = (item: MovieItem): Item => ({
  id: item.id,
  title: item.title || item.name || 'Untitled',
  description: item.overview,
  image: getImageUrl(item.poster_path, 'w500') || POSTER_PLACEHOLDER,
  banner: getImageUrl(item.backdrop_path, 'original') || BANNER_PLACEHOLDER,
  source: formatSourceData(item.source),
  variant: 'default',
});

export const mapMovieData = (data: MovieItem[]): Item[] => data.map(mapSingleMovie).slice(0,11);

export const generateHomePageData = (state: Partial<State>) => [
  { title: 'Hero', data: state.heroData?.slice(0,5), isHero: true },
  { title: 'Popular Movies', data: state.popularMovies, isHero: false },
  { title: 'Trending Shows', data: state.trendingShows, isHero: false },
  { title: 'Most Liked', data: state.mostLiked, isHero: false },
  { title: 'Series', data: state.series, isHero: false },
  { title: 'Music', data: state.music, isHero: false },
]
export const noop = () => { }

export const formatSourceData = (source: any) => {
  if (!source)
    return undefined
  const formattedSource: Source= {
    url: source.url,
  };
  if (source.drm && source.drm.fairplay) {
    formattedSource.drm = { ...formattedSource.drm,
      fairplay: {
        fairplayLicenseUrl: source.drm.fairplay?.fairplayLicenseUrl,
        fairplayCertificateUri: source.drm.fairplay?.fairplayCertificateUri,
        useLegacyAppleMediaKeys: source.drm.fairplay?.useLegacyAppleMediaKeys
      }
    }
  }
  if (source.drm && source.drm.playready) {
    formattedSource.drm = { ...formattedSource.drm, playready:{
      playreadyLicenseUrl: source.drm.playready?.playreadyLicenseUrl
    }}
  }
  if (source.widevine) {
    formattedSource.drm = {...formattedSource.drm, widevine: {
      widevineLicenseUrl: source.drm.widevine?.widevineLicenseUrl
    }}
  }
  return formattedSource
}

export const loadFallbackImg = (e: React.SyntheticEvent<HTMLImageElement, Event>, img: string) => {
  e.currentTarget.src = img
}
