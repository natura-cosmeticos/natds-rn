import React from 'react';
import { fireEvent } from '@testing-library/react-native';
import theme from '../../common/themeSelectors/theme/mock-theme.json';
import { renderWithTheme } from '../../../test/testHelpers';

import { TextField, TextFieldProps } from './TextField';

jest.mock('../../common/themeSelectors', () => ({
  getColorAlert: () => '#FFFFFF',
  getColorByName: () => '#ffffff',
  getColorHighEmphasis: () => '#FAF3E3',
  getColorLowEmphasis: () => '#FEEEEF',
  getColorMediumEmphasis: () => '#FAFAEA',
  getColorOnPrimary: () => '#F4F4',
  getColorPrimary: () => '#FFFFFF',
  getColorPrimaryLight: () => '#BABABA',
  getColorSuccess: () => '#569a32',
  getSize: () => 56,
}));

jest.mock(
  'react-native/Libraries/Components/Touchable/TouchableOpacity.js',
  () => 'TouchableOpacity',
);

const defaultProps: TextFieldProps = {
  label: 'Label',
  onChangeText: () => { },
  onSubmitEditing: () => { },
  placeholder: 'Placeholder',
  testID: 'textField',
  theme,
  type: 'text',
  value: 'test',
};

/* eslint-disable max-statements */
describe('TextField component', () => {
  it('should render textField with default props', () => {
    const { getByTestId } = renderWithTheme(<TextField {...defaultProps} />);

    const textFieldWrapper = getByTestId('textField');
    const textFieldInput = getByTestId('textField-input');

    expect(textFieldWrapper).toHaveTextContent('Label');
    expect(textFieldInput).toHaveProp('placeholder', 'Placeholder');
    expect(textFieldInput).toHaveProp('value', 'test');
    expect(textFieldInput).toHaveProp('type', 'text');
  });

  it('should render textField with the given state prop', () => {
    const { getByTestId } = renderWithTheme(
      <TextField {...defaultProps} state="active" />,
    );

    const textFieldInput = getByTestId('textField-inputWrapper');

    expect(textFieldInput).toHaveStyle({
      borderColor: '#FFFFFF',
      borderWidth: 2,
    });
  });

  it('should render textField with the given feedback prop', () => {
    const { getByTestId } = renderWithTheme(
      <TextField {...defaultProps} feedback="success" />,
    );

    const textFieldInput = getByTestId('textField-inputWrapper');

    expect(textFieldInput).toHaveStyle({
      borderColor: '#569a32',
      borderWidth: 2,
    });
  });

  it('should render textField disabled', () => {
    const { toJSON, getByTestId } = renderWithTheme(
      <TextField {...defaultProps} disabled />,
    );

    const textFieldInput = getByTestId('textField-inputWrapper');

    expect(textFieldInput).toBeDisabled();
    expect(toJSON()).toMatchSnapshot();
  });

  it('should call the given onChangeText function', () => {
    const onChangeTextMock = jest.fn();

    const { getByTestId } = renderWithTheme(
      <TextField {...defaultProps} onChangeText={onChangeTextMock} />,
    );

    const textFieldInput = getByTestId('textField-input');

    fireEvent.changeText(textFieldInput);

    expect(onChangeTextMock).toHaveBeenCalled();
  });

  it('should call the given onFocus function', () => {
    const onFocusMock = jest.fn();

    const { getByTestId } = renderWithTheme(
      <TextField
        {...defaultProps}
        onFocus={onFocusMock}
      />,
    );

    const textFieldInput = getByTestId('textField-input');

    fireEvent(textFieldInput, 'onFocus');

    expect(onFocusMock).toHaveBeenCalled();
  });


  it('should call the given onBlur function', () => {
    const onBlurMock = jest.fn();

    const { getByTestId } = renderWithTheme(
      <TextField
        {...defaultProps}
        onBlur={onBlurMock}
      />,
    );

    const textFieldInput = getByTestId('textField-input');

    fireEvent(textFieldInput, 'onBlur');

    expect(onBlurMock).toHaveBeenCalled();
  });

  it('should match snapshot', () => {
    const { toJSON } = renderWithTheme(
      <TextField {...defaultProps} />,
    );

    expect(toJSON()).toMatchSnapshot();
  });

  it('should not be editable when read only', () => {
    const { getByTestId } = renderWithTheme(
      <TextField
        {...defaultProps}
        readOnly
      />,
    );

    const textFieldInput = getByTestId('textField-input');

    expect(textFieldInput).toHaveProp('editable', false);
  });

  it('should render TextField type password with icon', () => {
    const { getByTestId } = renderWithTheme(
      <TextField
        {...defaultProps}
        type="password"
      />,
    );

    const textFieldIcon = getByTestId('textField-icon-password');

    expect(textFieldIcon).toBeTruthy();
  });
});
