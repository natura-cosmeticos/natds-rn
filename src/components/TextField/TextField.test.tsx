import '@testing-library/jest-native/extend-expect';
import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import { ThemeProvider } from 'styled-components/native';
import theme from '../../common/themeSelectors/theme/mock-theme.json';

import { TextField, TextFieldProps } from './TextField';

jest.mock('../../common/themeSelectors', () => ({
  getColorAlert: () => '#FFFFFF',
  getColorHighEmphasis: () => '#FAF3E3',
  getColorLowEmphasis: () => '#FEEEEF',
  getColorMediumEmphasis: () => '#FAFAEA',
  getColorOnPrimary: () => '#F4F4',
  getColorPrimary: () => '#FFFFFF',
  getColorPrimaryLight: () => '#BABABA',
  getColorSuccess: () => '#569a32',
  getSpacingBySize: () => 16,
}));

const renderTextField = (fn, props: TextFieldProps) => (
  fn(
    <ThemeProvider theme={theme}>
      <TextField {...props} />
    </ThemeProvider>,
  )
);

const defaultProps: TextFieldProps = {
  label: 'Label',
  onChangeText: () => {},
  onSubmitEditing: () => {},
  placeholder: 'Placeholder',
  testID: 'textField',
  theme,
  type: 'text',
  value: 'test',
};

/* eslint-disable max-statements */
describe('TextField component', () => {
  it('should render textField with default props', () => {
    const { getByTestId } = renderTextField(render, defaultProps);

    const textFieldWrapper = getByTestId('textField');
    const textFieldInput = getByTestId('textField-input');

    expect(textFieldWrapper).toHaveTextContent('Label');
    expect(textFieldInput).toHaveProp('placeholder', 'Placeholder');
    expect(textFieldInput).toHaveProp('value', 'test');
    expect(textFieldInput).toHaveProp('type', 'text');
  });

  it('should render textField with the given state prop', () => {
    const { getByTestId } = renderTextField(render, {
      ...defaultProps,
      state: 'active',
    });
    const textFieldInput = getByTestId('textField-inputWrapper');

    expect(textFieldInput).toHaveStyle({
      borderColor: '#FFFFFF',
      borderWidth: 2,
    });
  });

  it('should render textField with the given feedback prop', () => {
    const { getByTestId } = renderTextField(render, {
      ...defaultProps,
      feedback: 'success',
    });
    const textFieldInput = getByTestId('textField-inputWrapper');

    expect(textFieldInput).toHaveStyle({
      borderColor: '#569a32',
      borderWidth: 2,
    });
  });

  it('should call the given onChangeText function', () => {
    const onChangeTextMock = jest.fn();

    const { getByTestId } = renderTextField(render, {
      ...defaultProps,
      onChangeText: onChangeTextMock,
    });
    const textFieldInput = getByTestId('textField-input');

    fireEvent.changeText(textFieldInput);

    expect(onChangeTextMock).toHaveBeenCalled();
  });

  it('should not call the given onChangeText function when TextField is disabled', () => {
    const onChangeTextMock = jest.fn();

    const { getByTestId } = renderTextField(render, {
      ...defaultProps,
      disabled: true,
      onChangeText: onChangeTextMock,
    });
    const textFieldInput = getByTestId('textField-input');

    fireEvent.changeText(textFieldInput);

    expect(onChangeTextMock).not.toHaveBeenCalled();
  });

  it('should call the given onFocus function', () => {
    const onFocusMock = jest.fn();

    const { getByTestId } = renderTextField(render, {
      ...defaultProps,
      onFocus: onFocusMock,
    });
    const textFieldInput = getByTestId('textField-input');

    fireEvent.focus(textFieldInput);

    expect(onFocusMock).toHaveBeenCalled();
  });

  it('should not call the given onFocus function when TextField is disabled', () => {
    const onFocusMock = jest.fn();

    const { getByTestId } = renderTextField(render, {
      ...defaultProps,
      disabled: true,
      onFocus: onFocusMock,
    });
    const textFieldInput = getByTestId('textField-input');

    fireEvent.focus(textFieldInput);

    expect(onFocusMock).not.toHaveBeenCalled();
  });

  it('should call the given onBlur function', () => {
    const onBlurMock = jest.fn();

    const { getByTestId } = renderTextField(render, {
      ...defaultProps,
      onBlur: onBlurMock,
    });
    const textFieldInput = getByTestId('textField-input');

    fireEvent.blur(textFieldInput);

    expect(onBlurMock).toHaveBeenCalled();
  });

  it('should not call the given onBlur function when TextField is disabled', () => {
    const onBlurMock = jest.fn();

    const { getByTestId } = renderTextField(render, {
      ...defaultProps,
      disabled: true,
      onBlur: onBlurMock,
    });
    const textFieldInput = getByTestId('textField-input');

    fireEvent.focus(textFieldInput);

    expect(onBlurMock).not.toHaveBeenCalled();
  });

  it('should match snapshot', () => {
    const textField = renderTextField(render, defaultProps).asJSON();

    expect(textField).toMatchSnapshot();
  });

  it('should not call the given onChangeText function when TextField is readOnly', () => {
    const onChangeTextMock = jest.fn();

    const { getByTestId } = renderTextField(render, {
      ...defaultProps,
      onChangeText: onChangeTextMock,
      readOnly: true,
    });
    const textFieldInput = getByTestId('textField-input');

    fireEvent.change(textFieldInput);

    expect(onChangeTextMock).not.toHaveBeenCalled();
  });
});
