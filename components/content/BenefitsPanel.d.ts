import * as React from 'react';
/** Deep-green (or sage) panel listing facilities/advantages, overlapping a photo. */
export interface BenefitsPanelProps {
  kicker?: string;
  title?: string;
  /** short plain lines — no bullets, no icons, one per row */
  items: string[];
  tone?: 'deep' | 'sage';
  style?: React.CSSProperties;
}
export declare function BenefitsPanel(props: BenefitsPanelProps): JSX.Element;
