import * as React from 'react';
/** Deep-green (or sage) panel listing facilities/advantages, overlapping a photo. */
export interface BenefitsPanelProps {
  kicker?: string;
  title?: string;
  /** short plain lines — the panel puts a gold hairline dash in front of each */
  items: string[];
  tone?: 'deep' | 'sage';
  style?: React.CSSProperties;
}
export declare function BenefitsPanel(props: BenefitsPanelProps): JSX.Element;
