import * as React from 'react';
export interface PhotoCarouselItem {
  src: string;
  /** short uppercase label shown in gold under the active frame, e.g. "Beeldentuin" */
  caption?: string;
}
/**
 * Centre-focused photo carousel. The middle frame is full size, sharp and undimmed; each step
 * outward is smaller, softer and darker, so the eye lands on one photo. Sits above the footer on
 * every page, carrying photography that belongs to that page.
 */
export interface PhotoCarouselProps {
  /** five or more reads best — with fewer than five the outer ring repeats visibly */
  items: (PhotoCarouselItem | string)[];
  /** height of the active frame in px; the frame is 4:3, so width follows */
  height?: number;
  initial?: number;
  /** ms each photo holds the centre before the strip advances by itself; 0/false via autoplay to stop */
  interval?: number;
  /** advance on its own — paused on hover, focus, touch, off-screen, and under prefers-reduced-motion */
  autoplay?: boolean;
  /** slow scale-up on the active photo while it holds the centre; off under prefers-reduced-motion */
  drift?: boolean;
  /** true coverflow: the side frames rotate away in perspective. Richer, distinctly less calm —
   *  compare the two on the card before choosing. Dropped on narrow screens. */
  tilt?: boolean;
  /** prev/next naast de streepjes; standaard uit — vegen, pijltoetsen, de zijfoto's en de streepjes volstaan */
  arrows?: boolean;
  /** kleur van de pijlen; volgt de band waarop de carousel staat, niet de foto */
  arrowTone?: 'deep' | 'sage' | 'gold' | 'white';
  /** fires when the already-active frame is clicked */
  onSelect?: (item: PhotoCarouselItem | string, index: number) => void;
  style?: React.CSSProperties;
}
export declare function PhotoCarousel(props: PhotoCarouselProps): JSX.Element;
