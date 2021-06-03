export type InputStates = 'active' | 'default' | 'disabled' | 'error' | 'filled' | 'success'

export interface InputFeedbackProps {
  active?: boolean,
  disabled?: boolean,
  filled?: boolean,
  feedback?: 'success' | 'error',
}

export const buildInputState = ({
  active, disabled, feedback, filled,
}: InputFeedbackProps) => {
  let state: InputStates = filled ? 'filled' : 'default';

  state = feedback || state;
  state = active ? 'active' : state;
  state = disabled ? 'disabled' : state;

  return state;
};
