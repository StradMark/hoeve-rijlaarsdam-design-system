import * as React from 'react';
/**
 * A person: 4:5 portrait, optional dark "Boek mij" bar, then name in gold caps with role and phone under it.
 * Used for the team and for the hostesses that can be hired for external events.
 */
export interface PersonCardProps {
  image?: string;
  /** rendered in gold display caps */
  name?: string;
  /** one short line, e.g. "Eventmanager" */
  role?: string;
  /** shown under the role, unlinked */
  phone?: string;
  bookLabel?: string;
  /**
   * "light" (default) on white or cream: name in gold. Use "onSage" / "onDeep" on a
   * coloured band — gold on sage only reaches 1.3:1, so the name flips to white there.
   */
  tone?: 'light' | 'onSage' | 'onDeep';
  /** omit to render a portrait with no action bar (team members who aren't bookable) */
  onBook?: () => void;
  ratio?: string;
  style?: React.CSSProperties;
}
export declare function PersonCard(props: PersonCardProps): JSX.Element;
