import * as React from 'react';

export interface TabbedDetailItem {
  /** pill caption, and the heading above the text unless `title` overrides it */
  label: string;
  /** photo shown for this pill, 4:3 by default */
  image: string;
  /** heading when it should differ from the pill caption */
  title?: string;
  /** two to five lines; keep it under about 46 characters wide */
  body: string;
  /** alt text; leave empty for decorative photos */
  alt?: string;
  /** one action under the text — omit for panels that only inform */
  ctaLabel?: string;
  onCta?: () => void;
}

/**
 * Pills that switch one photo-and-text panel: pick a room, a moment of the day, an occasion.
 * The most repeated section on the site. Every pill owns a panel — a pill row that changes
 * nothing is the bug this component exists to prevent, so `items` carries the content.
 */
export interface TabbedDetailProps {
  items: TabbedDetailItem[];
  /** controlled selection; leave out and the component keeps its own */
  value?: string;
  onChange?: (label: string) => void;
  /** starting pill when uncontrolled; defaults to the first item */
  defaultValue?: string;
  /** script kicker above the title — max 2 words, 14 characters */
  kicker?: string;
  /** section title; omit the whole heading by leaving kicker, title and lead out */
  title?: string;
  /** one intro sentence under the title */
  lead?: string;
  /** background band. sage forces body text to ink for contrast */
  tone?: 'light' | 'cream' | 'sage';
  imageSide?: 'left' | 'right';
  /** photo aspect ratio, CSS syntax */
  ratio?: string;
  style?: React.CSSProperties;
}
/**
 * @startingPoint section="Blokken" subtitle="Pillen die één foto-en-tekstpaneel wisselen" viewport="1280x520"
 */
export declare function TabbedDetail(props: TabbedDetailProps): JSX.Element;
