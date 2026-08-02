/**
 * Carousel arrow: a hairline ring with a thin chevron, matching the drawn gold rules
 * elsewhere in the system. Fills with its tone on hover while the chevron steps in
 * its direction. Always used as a prev/next pair.
 */
export interface CarouselNavProps {
  direction?: 'prev' | 'next';
  /** sage (default), gold, deep or white. `gold` alleen op wit, crème of flessengroen — nooit op een sage-band (1,3:1). */
  tone?: 'sage' | 'gold' | 'deep' | 'white';
  /** diameter in px. 44 is the touch minimum — only go smaller in dense desktop-only rows */
  size?: number;
  /** at the end of a non-looping carousel */
  disabled?: boolean;
  onClick?: () => void;
  style?: React.CSSProperties;
}
export declare function CarouselNav(props: CarouselNavProps): JSX.Element;
