import * as React from 'react';
/** Flat sage or deep-green block holding a short uppercase serif review. */
export interface TestimonialCardProps {
  /** keep to ~4 lines; the source design sets reviews in uppercase serif */
  quote: string;
  attribution?: string;
  tone?: 'sage' | 'deep';
  style?: React.CSSProperties;
}
export declare function TestimonialCard(props: TestimonialCardProps): JSX.Element;
