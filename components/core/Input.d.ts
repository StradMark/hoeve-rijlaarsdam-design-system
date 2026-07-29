import * as React from 'react';
/**
 * Pill text field as used in the offerte form (white field on a deep-green panel).
 * `label` is required for accessibility — it renders as a real <label htmlFor> that sits
 * inside the field when empty and rises above it on focus or once filled.
 */
export interface InputProps {
  /** the accessible name; also the visible label. Always pass this. */
  label: string;
  /** optional hint shown only once the label has risen (e.g. "06 - 12 34 56 78") */
  placeholder?: string;
  /** helper line under the field, wired up via aria-describedby */
  hint?: React.ReactNode;
  /** error message; sets aria-invalid, recolours the border and announces via role="alert" */
  error?: React.ReactNode;
  type?: string;
  value?: string;
  defaultValue?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  name?: string;
  id?: string;
  /**
   * Which band the field sits on — this drives the colour of the RISEN label.
   * onDark = deep-green band (cream label), onSage = sage band, onLight = white/cream band.
   * Sage is a mid tone where NOTHING clears 4.5:1 except --ink-900 — so on sage both the
   * label and the error message are ink, and the red field border carries the error signal.
   */
  tone?: 'onDark' | 'onSage' | 'onLight';
  /** textarea instead of input; renders square-cornered */
  multiline?: boolean;
  rows?: number;
  required?: boolean;
  disabled?: boolean;
  /** styles the wrapper (which reserves 20px above the field for the risen label) */
  style?: React.CSSProperties;
  /** styles the input/textarea itself */
  fieldStyle?: React.CSSProperties;
}
export declare function Input(props: InputProps): JSX.Element;
