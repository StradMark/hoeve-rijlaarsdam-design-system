import * as React from 'react';
import { PhotoCarouselItem } from '../photo-carousel/PhotoCarousel';
/**
 * The fixed way every page ends: the offerte CtaBand with the centre-focused PhotoCarousel
 * hanging into it, so the two read as one closing move. Put <Footer/> directly after it.
 */
export interface PageOutroProps {
  /** page-specific photography — at least five frames */
  items: (PhotoCarouselItem | string)[];
  height?: number;
  /** how far the carousel hangs into the band, as a fraction of its height (default 0.28) */
  overlap?: number;
  /** must differ from the colour of the section above */
  tone?: 'cream' | 'sage';
  /** overridden automatically: white arrows on a coloured band, deep on cream */
  arrowTone?: 'deep' | 'sage' | 'gold' | 'white';
  kicker?: string;  title?: string;
  body?: React.ReactNode;
  ctaLabel?: string;
  onCta?: () => void;
  /** fires when the visitor clicks the centre photo — hang a Lightbox on it */
  onSelect?: (item: PhotoCarouselItem | string, index: number) => void;
  style?: React.CSSProperties;
}
/**
 * @startingPoint section="Layout" subtitle="De vaste afsluiting: CTA-band met de fotocarousel eroverheen" viewport="1280x720"
 */
export declare function PageOutro(props: PageOutroProps): JSX.Element;
