import * as React from 'react';
/**
 * A person speaking — chef, hostess, guest. Sentence case display serif, never uppercase;
 * a slogan on a full-width band is `QuoteBar`. Two shapes: a full-width section (optionally
 * with a 4:5 portrait) or, with `compact`, the same voice inside a card for a review grid.
 */
export interface PullQuoteProps {
  children: React.ReactNode;
  /** attribution name, rendered as a spaced uppercase label */
  name?: string;
  /** function or place under the name — "Chef-kok", "uit Nieuwkoop" */
  role?: string;
  /** 4:5 portrait beside the quote. Ignored when `compact` */
  portrait?: string;
  /** cream, sage or deep. `sage` falls back to cream when `compact`: sage only carries display type */
  tone?: 'cream' | 'sage' | 'deep';
  align?: 'left' | 'center';
  /** card shape for a review in a grid: no section padding, no portrait, smaller quote */
  compact?: boolean;
  style?: React.CSSProperties;
}
export declare function PullQuote(props: PullQuoteProps): JSX.Element;
