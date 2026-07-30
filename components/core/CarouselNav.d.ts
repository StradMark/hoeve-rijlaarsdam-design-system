/** Solid triangle carousel arrow flanking the footer image strip and testimonial rows. */
export interface CarouselNavProps {
  direction?: 'prev' | 'next';
  /** sage (default), gold, deep or white. `gold` alleen op wit, crème of flessengroen — nooit op een sage-band (1,3:1). */
  tone?: 'sage' | 'gold' | 'deep' | 'white';
  onClick?: () => void;
  style?: React.CSSProperties;
}
export declare function CarouselNav(props: CarouselNavProps): JSX.Element;
