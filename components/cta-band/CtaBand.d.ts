import * as React from 'react';
/**
 * Closing call to action: script kicker, serif title, one short paragraph, one button.
 * Two variants: cream (default) and sage.
 * Never deep green — the footer directly below is deep green.
 * Never place it on its own — use PageOutro, which pairs it with the photo carousel.
 */
export interface CtaBandProps {
  kicker?: string;
  title?: string;
  body?: React.ReactNode;
  ctaLabel?: string;
  onCta?: () => void;
  /** 'deep' green (default), 'sage', or 'cream' for a light band between two coloured sections */
  tone?: 'cream' | 'sage';
  /** extra bottom padding in px, so a following carousel can overlap into the band */
  bleed?: number;
  style?: React.CSSProperties;
}
export declare function CtaBand(props: CtaBandProps): JSX.Element;
