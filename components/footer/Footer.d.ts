import * as React from 'react';
export interface FooterLine { text: string; label?: string; strong?: boolean }
export interface FooterColumn { title: string; lines: FooterLine[] }
/**
 * Deep-green three-column site footer with round sage social buttons and a hairline legal bar.
 */
export interface FooterProps {
  columns: FooterColumn[];
  /** platform keys — "instagram" | "facebook" | "linkedin"; the real profile URLs live in the component */
  social?: string[];
  /** credit line, bottom left — defaults to the 2026 Mark Stradmann copyright */
  legal?: React.ReactNode;
  /** legal/nav row, bottom right. A plain string renders as a dead label; pass {label, href}
   *  — e.g. {label:'Agenda', href:'#Agenda'} — to make it actually navigate. */
  links?: (string | { label: string; href?: string })[];
  style?: React.CSSProperties;
}
/**
 * @startingPoint section="Layout" subtitle="Diepgroene footer met drie kolommen" viewport="1280x300"
 */
export declare function Footer(props: FooterProps): JSX.Element;
