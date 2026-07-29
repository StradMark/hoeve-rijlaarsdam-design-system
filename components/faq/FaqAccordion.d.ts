import * as React from 'react';
export interface FaqItem {
  /** de vraag, wordt in kapitalen gezet */
  question: string;
  /** het antwoord; ontbreekt het, dan staat er een zichtbare notitie */
  answer?: React.ReactNode;
}
/**
 * Uitklapbare vragenlijst in pilvorm. Opent met een hoogte-animatie; de plus draait
 * naar een minus. Standaard staat er precies één open, zodat de sectie nooit leeg lijkt.
 */
export interface FaqAccordionProps {
  items: FaqItem[];
  /** onDeep = witte pillen op donkergroen (de standaard); onLight = sage pillen op wit of creme */
  tone?: 'onDeep' | 'onLight';
  /** index die bij het laden open staat; -1 voor alles dicht */
  defaultOpen?: number;
  /** laat meerdere vragen tegelijk open staan */
  allowMultiple?: boolean;
  style?: React.CSSProperties;
}
export declare function FaqAccordion(props: FaqAccordionProps): JSX.Element;
