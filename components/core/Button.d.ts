import * as React from 'react';
/**
 * Pill button in letterspaced uppercase display serif — the brand's only button shape.
 */
export interface ButtonProps {
  children?: React.ReactNode;
  /** primary = deep green fill (default CTA), gold = ochre fill (form submit), outlineLight = on photos/dark, outlineDark = on cream, white = on sage/green fields */
  tone?: 'primary' | 'gold' | 'outlineLight' | 'outlineDark' | 'white';
  size?: 'sm' | 'md' | 'lg';
  /** renders an <a> instead of a <button> */
  href?: string;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  style?: React.CSSProperties;
}
export declare function Button(props: ButtonProps): JSX.Element;
