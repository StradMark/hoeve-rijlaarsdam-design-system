import * as React from 'react';
/**
 * A person speaking at length — chef, hostess, team member. Sentence case display serif,
 * optional 4:5 portrait beside it. Not for marketing lines: those go in QuoteBar (uppercase).
 */
export interface PullQuoteProps {
  children: React.ReactNode;
  /** attribution name, rendered as a spaced uppercase label */
  name?: string;
  /** role after the name, separated by a middot */
  role?: string;
  /** 4:5 portrait to the left of the quote */
  portrait?: string;
  tone?: 'cream' | 'sage' | 'deep';
  /** only applies without a portrait */
  align?: 'left' | 'center';
  style?: React.CSSProperties;
}
export declare function PullQuote(props: PullQuoteProps): JSX.Element;
