import * as React from 'react';
/** Plain photo + gold caption tile (no action bar) — the "Zakelijk / De Hoeve / Particulier" row. */
export interface ImageCaptionCardProps {
  image?: string;
  caption?: string;
  /** optional short sans paragraph under the caption */
  body?: string;
  ratio?: string;
  href?: string;
  style?: React.CSSProperties;
}
export declare function ImageCaptionCard(props: ImageCaptionCardProps): JSX.Element;
