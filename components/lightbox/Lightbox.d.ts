import * as React from 'react';

export interface LightboxItem {
  src: string;
  /** shown under the photo, and used as the accessible name of the dialog */
  caption?: string;
}

/**
 * One photo at full size, above the page. For the carousel and the gallery: clicking the
 * centre image means "show me this bigger", not "take me elsewhere".
 *
 * Deep green at 94% rather than black — the brand has no black. Escape, a click beside the
 * photo, or the Sluiten button all close it; arrow keys page through. Focus returns to
 * whatever opened it and the page behind does not scroll.
 */
export interface LightboxProps {
  /** plain URLs, or {src, caption} */
  items: (string | LightboxItem)[];
  /** which photo to show. Controlled when paired with `onIndex` */
  index?: number;
  onClose?: () => void;
  /** fires with the new index; leave out and the lightbox pages on its own */
  onIndex?: (index: number) => void;
  style?: React.CSSProperties;
}
export declare function Lightbox(props: LightboxProps): JSX.Element | null;
