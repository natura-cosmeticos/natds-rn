export type InputStates = 'active' | 'default' | 'disabled' | 'error' | 'filled' | 'success'

export interface InputFeedbackProps {
  active?: boolean;
  disabled?: boolean;
  filled?: boolean;
  feedback?: 'success' | 'error';
}

export const buildInputState = ({
  active, disabled, feedback, filled
}: InputFeedbackProps): InputStates => {
  if (disabled) return 'disabled'
  if (active) return 'active'
  if (feedback) return feedback
  if (filled) return 'filled'

  return 'default'
}
