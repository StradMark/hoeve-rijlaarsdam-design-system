import * as React from 'react';
/** Two-column band (photo one side, content panel the other) on a sage or cream field. */
export interface SplitPanelProps {
  image?: string;
  children?: React.ReactNode;
  imageSide?: 'left' | 'right';
  /** any CSS background — usually var(--surface-sage) or var(--surface-cream) */
  background?: string;
  padded?: boolean;
  ratio?: string;
  style?: React.CSSProperties;
}
export declare function SplitPanel(props: SplitPanelProps): JSX.Element;
