import * as React from 'react';
/**
 * What stands there when nothing does: no search results, an empty agenda, a filter that
 * matches nothing. No illustration and no exclamation mark — an empty state is not an error,
 * and this brand has no mascot. A gold hairline, one sentence, at most one way out.
 */
export interface EmptyStateProps {
  /** one line, sentence case — "Nog niets gepland" */
  title?: React.ReactNode;
  /** why it is empty and what the visitor can do about it. One or two sentences */
  children?: React.ReactNode;
  /** a single Button, or nothing. Never a row */
  action?: React.ReactNode;
  /** which field it sits on */
  tone?: 'light' | 'sage' | 'deep';
  style?: React.CSSProperties;
}
export declare function EmptyState(props: EmptyStateProps): JSX.Element;
