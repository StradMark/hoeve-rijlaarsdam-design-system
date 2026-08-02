import * as React from 'react';

/**
 * The panel a form shows after sending. Sage for success, the field-error brick for
 * failure — the brand has no green tick and no red cross. Announces itself: `status`
 * and polite for success, `alert` and assertive for failure.
 */
export interface FormStatusProps {
  variant?: 'success' | 'error';
  /** one line, sentence case — "Dank u, uw aanvraag is verstuurd" */
  title?: React.ReactNode;
  /** what happens next, or what went wrong and how to fix it */
  children?: React.ReactNode;
  /** one Button — "Nog een aanvraag", "Probeer opnieuw". Never two */
  action?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function FormStatus(props: FormStatusProps): JSX.Element;
