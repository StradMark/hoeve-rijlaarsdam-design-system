import * as React from 'react';
/** Coloured tile with a line icon and a short paragraph, and a letterspaced caption — by default in gold BELOW the tile, as in the mockups. */
export interface InfoTileProps {
  /** URL of a brand line icon (e.g. assets/icons/opstelling-theater.svg); the tile recolours it per tone (white on the sage and deep fills, dark on the light fills). */
  icon?: string;
  /** Rendered icon size in px — 152 (default) for the floor plans, 64–80 for feature tiles. */
  iconSize?: number;
  title?: string;
  /** One short line under the caption, e.g. '1 m² per persoon'. */
  meta?: string;
  body?: string;
  /** Tile fill. Gold captions are never used on the sage tones. */
  tone?: 'sage' | 'sageLight' | 'cream' | 'deep';
  /** 'below' (default, mockups): gold caption on the page under the tile. 'inside': hairline + caption in the tile, for tiles on a coloured section. */
  caption?: 'below' | 'inside';
  /** Caption colour when caption='below': gold on a light page, 'onDark' for light gold on a deep section. */
  captionTone?: 'gold' | 'onDark';
  style?: React.CSSProperties;
}
export declare function InfoTile(props: InfoTileProps): JSX.Element;
