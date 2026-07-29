import * as React from 'react';
export interface SiteMapSpot {
  /** uppercase-rendered label, e.g. "Het Koetshuis" */
  name: string;
  /** percentage of the map image: left, top, width, height */
  x: number; y: number; w: number; h: number;
  /** which side the hover card opens on; default 'right' */
  side?: 'left' | 'right';
  image?: string;
  body?: string;
  /** presence of href turns the card into a link and makes the hotspot clickable */
  href?: string;
  linkLabel?: string;
}
/**
 * Interactive site plan: gold markers over a plan image, hover (or tap) reveals a
 * photo + description + link card. Hotspots are percentages of the image, so a
 * redrawn plan only needs new coordinates.
 */
export interface SiteMapProps {
  /** the plan image; fills its container width */
  image: string;
  spots: SiteMapSpot[];
  alt?: string;
  /** called with the spot when a hotspot with an href is activated */
  onSelect?: (spot: SiteMapSpot) => void;
  style?: React.CSSProperties;
}
export declare function SiteMap(props: SiteMapProps): JSX.Element;
