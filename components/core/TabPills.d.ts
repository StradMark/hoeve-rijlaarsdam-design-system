/** Row of pill toggles that filter a section (ZAKELIJK / CATERING / PARTICULIER). */
export interface TabPillsProps {
  items: string[];
  value?: string;
  onChange?: (value: string) => void;
  /** onSage = white pills on the sage band (default), onLight = outlined pills on cream */
  tone?: 'onSage' | 'onLight';
  style?: React.CSSProperties;
}
export declare function TabPills(props: TabPillsProps): JSX.Element;
