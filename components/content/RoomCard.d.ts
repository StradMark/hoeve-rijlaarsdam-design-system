import * as React from 'react';
/**
 * The site's room tile: square-cornered photo, gold uppercase caption, and the facts a visitor
 * needs to choose (capacity, floor area). Used in every "andere ruimtes" grid.
 */
export interface RoomCardProps {
  image?: string;
  /** gold uppercase serif caption, e.g. "Koetshuis" */
  caption?: string;
  /** short facts, joined with a middot: ["250 gasten", "300 m²"] */
  meta?: string[];
  /** one sentence, max ~34 characters wide in `always` mode */
  summary?: string;
  /**
   * 'quiet' (default): one gold action, a hairline that grows on hover, whole card clickable.
   * 'bar': the split dark/sage action bar from the comps — only when a card truly needs two actions.
   */
  variant?: 'quiet' | 'bar';
  /**
   * 'always' (default): meta and summary printed under the caption — scannable, and it exists on touch.
   * 'hover': hidden behind a scrim over the photo. Desktop-only by nature; do not put anything
   * essential in it.
   */
  reveal?: 'always' | 'hover';
  /**
   * Which field the card stands on. 'light' (default) = gold caption on white or cream;
   * 'onSage' = white caption and ink facts, because gold on sage is forbidden;
   * 'onDeep' = candle gold on the deep-green panel.
   */
  tone?: 'light' | 'onSage' | 'onDeep';
  readMoreLabel?: string;
  bookLabel?: string;
  onReadMore?: () => void;
  /** `variant="bar"` only; omitted the bar becomes a single full-width action */
  onBook?: () => void;
  /** default "4 / 5" — rooms read better upright */
  ratio?: string;
  style?: React.CSSProperties;
}
/**
 * @startingPoint section="Blokken" subtitle="Fotokaart voor een ruimte, met feiten eronder" viewport="400x420"
 */
export declare function RoomCard(props: RoomCardProps): JSX.Element;
