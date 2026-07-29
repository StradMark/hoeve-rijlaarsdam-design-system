import * as React from 'react';
import { SiteMapSpot } from './SiteMap';
/**
 * The chic variant of SiteMap: the plan is tinted to read as an engraved estate map on cream
 * paper, markers are gold serif numerals, and a numbered legend sits beside it. Hovering either
 * side highlights the other; the open legend row carries the photo, so nothing floats over the
 * plan. Prefer this on a full page; keep SiteMap where the plan must stand alone without a legend.
 * @startingPoint section="Layout" subtitle="Plan met genummerde legenda" viewport="1180x680"
 */
export interface SitePlanProps {
  /** the plan image; fills the left column */
  image: string;
  /** numbered in source order — 01, 02, 03 … in both map and legend */
  spots: SiteMapSpot[];
  alt?: string;
  /** small gold caption under the plan, e.g. "Het erf, van bovenaf" */
  title?: string;
  /** line under the legend while nothing is open; pass "" to hide */
  hint?: string;
  onSelect?: (spot: SiteMapSpot) => void;
  style?: React.CSSProperties;
}
export declare function SitePlan(props: SitePlanProps): JSX.Element;
