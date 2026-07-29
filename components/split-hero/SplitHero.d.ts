import * as React from 'react';
export interface SplitHeroItem {
  /** uppercase display word, e.g. "Art" */
  label: string;
  /** pill label under it, e.g. "Galerie" */
  ctaLabel?: string;
  /** poster still (also the fallback when no video is given) */
  image?: string;
  /** calm looping clip; autoplays muted */
  video?: string;
  onSelect?: () => void;
}
/**
 * Homepage-only doorway hero: two full-height halves, one script ampersand between them,
 * calm motion and a widening half on hover, plus a scroll hint. Every other page uses HeroVideo.
 */
export interface SplitHeroProps {
  /** exactly two items — the pattern breaks with three */
  items: SplitHeroItem[];
  /** italic serif line in the deep-green strip at the bottom of the viewport */
  caption?: React.ReactNode;
  ampersand?: boolean;
/** fallback height of whatever sits above the hero; the real offset is measured after mount */
  offset?: number;
  fullHeight?: boolean;
  /** label under the scroll indicator; pass "" to hide it */
  scrollHint?: string;
  onScrollHint?: () => void;
  style?: React.CSSProperties;
}
export declare function SplitHero(props: SplitHeroProps): JSX.Element;
