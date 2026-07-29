import * as React from 'react';
/** Sage tile with a thin white line icon, a short paragraph and a gold caption below the tile. */
export interface InfoTileProps {
  /** URL of a brand line icon, rendered white; omit to show the empty placeholder frame (the brand's icon set was not supplied) */
  icon?: string;
  title?: string;
  body?: string;
  tone?: 'sage' | 'sageLight';
  style?: React.CSSProperties;
}
export declare function InfoTile(props: InfoTileProps): JSX.Element;
