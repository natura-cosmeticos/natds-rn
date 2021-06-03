import { buildInputState, InputFeedbackProps } from './InputFeedbackHelper';

describe('InputFeedbackHelper', () => {
  it('always returns "disabled" when receives disabled true', () => {
    const inputProps: InputFeedbackProps = {
      active: true,
      disabled: true,
      feedback: 'success',
      filled: true,
    };
    const result = buildInputState(inputProps);

    expect(result).toBe('disabled');
  });
  it('always returns "active"   when not disabled and receives active true', () => {
    const inputProps: InputFeedbackProps = {
      active: true,
      feedback: 'success',
      filled: true,
    };
    const result = buildInputState(inputProps);

    expect(result).toBe('active');
  });
  it('always returns "success"  when not disabled or active and receives feedback success', () => {
    const inputProps: InputFeedbackProps = {
      feedback: 'success',
      filled: true,
    };
    const result = buildInputState(inputProps);

    expect(result).toBe('success');
  });
  it('always returns "error"    when not disabled or active and receives feedback error', () => {
    const inputProps: InputFeedbackProps = {
      feedback: 'error',
      filled: true,
    };
    const result = buildInputState(inputProps);

    expect(result).toBe('error');
  });
  it('always returns "filled"   when not disabled or active, without feedback and receives filled true', () => {
    const inputProps: InputFeedbackProps = {
      filled: true,
    };
    const result = buildInputState(inputProps);

    expect(result).toBe('filled');
  });
  it('returns "default" when receives no props', () => {
    const inputProps: InputFeedbackProps = {};
    const result = buildInputState(inputProps);

    expect(result).toBe('default');
  });
});
