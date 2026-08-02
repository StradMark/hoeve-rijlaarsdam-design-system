import * as React from 'react';

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

/**
 * Dropdown built on a native <select>, styled as the brand pill with the same rising
 * label as `Input`. Native on purpose: keyboard, type-to-search and the mobile wheel
 * come free and a hand-rolled listbox gets them wrong.
 */
export interface SelectProps {
  /** the accessible name; also the visible label. Always pass this. */
  label: string;
  /** plain strings, or {value,label} when the two differ */
  options: (string | SelectOption)[];
  /** the empty first option — the closed state of the field. Default "Maak een keuze" */
  placeholder?: string;
  hint?: React.ReactNode;
  error?: React.ReactNode;
  value?: string;
  defaultValue?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  name?: string;
  id?: string;
  /** which band the field sits on — drives the risen label colour. Same table as Input */
  tone?: 'onDark' | 'onSage' | 'onLight';
  required?: boolean;
  disabled?: boolean;
  style?: React.CSSProperties;
  fieldStyle?: React.CSSProperties;
}
export declare function Select(props: SelectProps): JSX.Element;
