/** Solid triangle carousel arrow flanking the footer image strip and testimonial rows. */
export interface CarouselNavProps {
  direction?: 'prev' | 'next';
  /** sage (default), gold, or white */
  tone?: 'sage' | 'gold' | 'deep' | 'white';
  onClick?: () => void;
  style?: React.CSSProperties;
}
export declare function CarouselNav(props: CarouselNavProps): JSX.Element;
