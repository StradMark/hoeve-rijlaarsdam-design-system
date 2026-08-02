import * as React from 'react';
/**
 * Two-column band: a photo on one side, whatever you put in it on the other, on a sage or
 * cream field. Layout only — it has no content of its own.
 *
 * Almost always paired with `BenefitsPanel` (the photo plus a list of what is included).
 * They stay separate on purpose: merging would give a content component `image`, `ratio` and
 * `background`, and the pages that put something else beside a photo — the chef's story, for
 * one — would have to rebuild the same layout by hand.
 */
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
