import * as React from 'react';

/** A top-level entry: a plain label, or a label with a dropdown panel under it. */
export type NavItem = string | { label: string; items: string[] };

/**
 * White top bar: links left, centred logo, links + green "Offerte" pill right.
 * Entries given as { label, items } open a deep-green panel on hover or focus.
 */
export interface NavBarProps {
  /** logo image URL (assets/logo.png) */
  logo?: string;
  left?: NavItem[];
  right?: NavItem[];
  /** label of the current page — rendered gold; a parent whose child is active goes gold too */
  active?: string;
  /**
   * "dropdown" (default) opens a panel under any entry that has `items`.
   * "flat" ignores `items` entirely and renders every entry as a plain link —
   * use it when the site is small enough that six or seven links fit on one line.
   */
  mode?: 'dropdown' | 'flat';
  ctaLabel?: string;
  onCta?: () => void;
  /** fires with the clicked label, parent or child alike */
  onNavigate?: (item: string) => void;
  style?: React.CSSProperties;
}
export declare function NavBar(props: NavBarProps): JSX.Element;
