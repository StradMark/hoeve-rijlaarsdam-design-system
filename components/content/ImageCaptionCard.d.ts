import * as React from 'react';
/** Plain photo + gold caption tile (no action bar) — the "Zakelijk / De Hoeve / Particulier" row. */
export interface ImageCaptionCardProps {
  image?: string;
  caption?: string;
  /** optional short sans paragraph under the caption */
  body?: string;
  ratio?: string;
  /**
   * Which field the card stands on. 'light' (default) = gold caption on white or cream;
   * 'onSage' = white caption and ink facts, because gold on sage is forbidden;
   * 'onDeep' = candle gold on the deep-green panel.
   */
  tone?: 'light' | 'onSage' | 'onDeep';
  href?: string;
  style?: React.CSSProperties;
}
export declare function ImageCaptionCard(props: ImageCaptionCardProps): JSX.Element;
