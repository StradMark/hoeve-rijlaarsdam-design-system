import * as React from 'react';
/**
 * The shape of what is coming, while it loads. Not a spinner: a spinner only says "wait",
 * a skeleton says how much is coming and where it will sit — and the page does not jump
 * when the content lands.
 *
 * The motion is the brand's own hairline, not the usual grey shimmer: a gold rule writes in
 * from the left, holds, and withdraws to the right. Runs on transform, so it stays smooth;
 * holds still under prefers-reduced-motion.
 */
export interface SkeletonProps {
  /** text = a stack of lines, image = one photo block, card = photo + caption + line */
  variant?: 'text' | 'image' | 'card';
  /** number of lines for `text`; the last one is short, like a real paragraph */
  lines?: number;
  /** aspect ratio for `image` and `card` */
  ratio?: string;
  width?: number | string;
  height?: number | string;
  /** dark on the deep-green panel, light everywhere else */
  tone?: 'light' | 'dark';
  /** stagger in seconds — give each block in a row a slightly later start so the line reads
   *  as one hand moving down the page instead of everything pulsing at once */
  delay?: number;
  style?: React.CSSProperties;
}
export declare function Skeleton(props: SkeletonProps): JSX.Element;

/**
 * Wraps a loading area so screen readers hear what sighted users see: sets `aria-busy`
 * and announces the label politely while `busy` is true.
 */
export interface LoadingRegionProps {
  /** announced while loading — "Agenda wordt geladen" */
  label?: string;
  busy?: boolean;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function LoadingRegion(props: LoadingRegionProps): JSX.Element;
