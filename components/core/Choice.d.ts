import * as React from 'react';

/**
 * One checkbox or radio. Square box for checkbox, round for radio — otherwise identical,
 * because they are the same gesture with different arity. Put two or more inside a
 * `ChoiceGroup`: it owns the question, the error and (for radios) the shared `name`.
 */
export interface ChoiceProps {
  /** the visible label, and the accessible name */
  label: React.ReactNode;
  /** one quiet line under the label */
  hint?: React.ReactNode;
  type?: 'checkbox' | 'radio';
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  /** radios in one set share this — pass it from the group */
  name?: string;
  /** required on a radio: the group tracks selection by this value */
  value?: string;
  id?: string;
  /** which band it sits on. Same table as Input and Select */
  tone?: 'onDark' | 'onSage' | 'onLight';
  disabled?: boolean;
  /** red box border; the message itself belongs on the surrounding ChoiceGroup */
  invalid?: boolean;
  style?: React.CSSProperties;
}
export declare function Choice(props: ChoiceProps): JSX.Element;

/**
 * Legend, spacing and error message around a set of choices. Renders a real
 * fieldset/legend so the question is announced before each option.
 */
export interface ChoiceGroupProps {
  /** the question, in the brand's uppercase label style */
  legend?: React.ReactNode;
  hint?: React.ReactNode;
  /** one message for the whole set — set `invalid` on the options themselves */
  error?: React.ReactNode;
  children?: React.ReactNode;
  tone?: 'onDark' | 'onSage' | 'onLight';
  /** lay the options out in this many columns. Keep to 1 on mobile */
  columns?: number;
  /** the selected radio's `value` — leave out and the group keeps its own */
  value?: string;
  /** fires with the newly selected radio's `value` */
  onChange?: (value: string) => void;
  style?: React.CSSProperties;
}
export declare function ChoiceGroup(props: ChoiceGroupProps): JSX.Element;
