import * as React from 'react';
/**
 * The brand's signature two-part heading: the script kicker hangs 0.34em left of the title's
 * left edge and overlaps it vertically, so it reads down-and-right. Needs ~24px of room to its
 * left; never place it in a narrow padded box or an overflow:hidden ancestor.
 */
export interface SectionHeadingProps {
  /** lowercase script line, e.g. "van harte" — never sentence-cased, never punctuated */
  kicker?: string;
  /** display-serif line, e.g. "Welkom" — sentence case */
  title: string;
  align?: 'left' | 'center';
  /** light = on white/cream, onSage = on the sage band, onDeep = on a deep-green panel */
  tone?: 'light' | 'onSage' | 'onDeep';
  size?: 's' | 'm' | 'l';
  style?: React.CSSProperties;
}
export declare function SectionHeading(props: SectionHeadingProps): JSX.Element;
