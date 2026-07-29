import * as React from 'react';
/**
 * Full-bleed photo/video hero with a centred round play button and optional script+caps title.
 */
export interface HeroVideoProps {
  image?: string;
  /** script line above the title, e.g. "een kijkje in" */
  kicker?: string;
  /** uppercase serif title, e.g. "HET KOETSHUIS" */
  title?: string;
  height?: number | string;
  /** defaults to true only when there is no title — the play button and a hero title never share the centre */
  showPlay?: boolean;
  align?: 'center' | 'left';
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function HeroVideo(props: HeroVideoProps): JSX.Element;
