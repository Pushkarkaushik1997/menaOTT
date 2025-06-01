export type CardType = 'hero' | 'default';


export interface DRMConfig {
  fairplay?: {
    fairplayLicenseUrl: string,
    fairplayCertificateUri: string,
    useLegacyAppleMediaKeys: boolean
  }
  playready?: {
    playreadyLicenseUrl: string
  }
  widevine?: {
    widevineLicenseUrl: string
  }
}
export interface Source {
  url: string,
  drm?: DRMConfig | undefined
}
export interface Item {
  id: number;
  title: string;
  description: string;
  image: string;
  source?: Source | undefined;
  banner: string;
  variant: CardType;
}
export interface CardRowProps {
  title: string;
  data: Item[];
  onFocus: (element: HTMLElement) => void;
  isHero?: boolean;
}

export interface CardProps {
  dataIndex?: number
  item: Item;
  onFocus: any;// FIXME (element: HTMLElement) => void;
  variant?: CardType;
}