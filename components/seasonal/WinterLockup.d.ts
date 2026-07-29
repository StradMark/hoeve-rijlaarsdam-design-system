import * as React from 'react';
/**
 * Winter Rijlaarsdam — het seizoenslogo van de ontwerper, als vector uit de huisstijl gehaald
 * (`assets/logo-winter-*.svg`). Drie tekeningen: `panel` (sneeuwvlok-lockup op flessengroen),
 * `reversed` (dezelfde tekening op transparant, voor foto's en donkere vlakken) en `wordmark`
 * (het losse "Winters RIJLAARSDAM" in zwart, wit, goud of currentColor).
 *
 * Het winterlogo **vervangt** het hoofdlogo voor de duur van de campagne; de twee staan nooit
 * samen in één beeld. Nooit hertekend, nooit van kleur veranderd buiten de meegeleverde tonen.
 */
export interface WinterLockupProps {
  /** panel = op flessengroen · reversed = wit/goud op transparant · wordmark = alleen de tekst */
  variant?: 'panel' | 'reversed' | 'wordmark';
  /** kleur van `wordmark`; genegeerd bij panel en reversed */
  tone?: 'light' | 'onDeep' | 'gold' | 'mono';
  /** hoogte in px. Min. 96 voor panel en reversed (sneeuwvlok), min. 34 voor wordmark */
  size?: number;
  /** pad naar de assets-map, bv. "../../assets/" in een kaart */
  assetBase?: string;
  /**
   * Alleen voor een ander seizoenswoord dan "Winters" (bv. "Kerst", "Oud & Nieuw"): dan wordt het
   * lockup typografisch nagebouwd uit schuurmerk + BDScript + Playfair. Nagebouwd, niet aangeleverd —
   * niet voor drukwerk gebruiken; vraag de ontwerper om echte artwork.
   */
  script?: string;
  /** caps-regel bij een nagebouwd lockup; blijft in principe "RIJLAARSDAM" */
  word?: string;
  /** kleine caps onder de regel bij een nagebouwd lockup; nooit kleiner dan --fs-label-s (10.5px) */
  tagline?: string;
  showMark?: boolean;
  style?: React.CSSProperties;
}
export declare function WinterLockup(props: WinterLockupProps): JSX.Element;
