import * as React from 'react';

export interface PriceRow {
  /** what it is — display serif, e.g. "Dagdeel" */
  label: string;
  /** the condition next to it, e.g. "9.00–13.00 of 13.00–17.00". Small, quiet, optional */
  detail?: string;
  /** the amount as written text: "€ 395", "€ 7,50", "op aanvraag" */
  amount: string;
}

/**
 * Label, detail and amount on one rule with a hairline under it — zaalhuur, extra's,
 * arrangementsprijzen. Amounts are strings, never numbers: "op aanvraag" is a valid price
 * and no currency formatting should happen in the component.
 *
 * Prices belong in one place. The sample site reads them from `prijzen.jsx`, which mirrors
 * `guidelines/content-en-feiten.md` — never type an amount straight into a page.
 */
export interface PriceListProps {
  /** small caps heading above the rules, e.g. "Zaalhuur" */
  kicker?: string;
  items: PriceRow[];
  /** one quiet line under the list — the place for "Alle bedragen zijn exclusief btw." */
  note?: string;
  /** which field the list stands on. Gold is forbidden on sage */
  tone?: 'light' | 'onSage' | 'onDeep';
  style?: React.CSSProperties;
}
/**
 * @startingPoint section="Blokken" subtitle="Label, detail en bedrag op één regel" viewport="640x240"
 */
export declare function PriceList(props: PriceListProps): JSX.Element;
