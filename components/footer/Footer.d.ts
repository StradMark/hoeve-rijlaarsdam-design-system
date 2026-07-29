import * as React from 'react';
export interface FooterLine { text: string; label?: string; strong?: boolean }
export interface FooterColumn { title: string; lines: FooterLine[] }
/**
 * Deep-green three-column site footer with round sage social buttons and a hairline legal bar.
 * @startingPoint section="Layout" subtitle="Deep-green three-column footer" viewport="1280x300"
 */
export interface FooterProps {
  columns: FooterColumn[];
  /** platform keys rendered as typographic marks in round sage buttons: linkedin | instagram | facebook */
  /** platform keys — "instagram" | "facebook" | "linkedin"; the real profile URLs live in the component */
  social?: string[];
  /** credit line, bottom left — defaults to the 2026 Mark Stradmann copyright */
  legal?: React.ReactNode;
  links?: string[];
  style?: React.CSSProperties;
}
export declare function Footer(props: FooterProps): JSX.Element;
