import React from 'react';

import { ThemeProvider } from 'styled-components/native';
import { fireEvent, render } from '@testing-library/react-native';
import renderer from 'react-test-renderer';
import theme from '../../common/themeSelectors/theme/mock-theme.json';
import { RadioButton, RadioButtonProps } from './RadioButton';

jest.mock('react-native/Libraries/Components/Touchable/TouchableOpacity',
  () => 'TouchableOpacity');

const renderRadioButton = (fn, props?: Omit<RadioButtonProps, 'theme'>) => (fn(
  <ThemeProvider theme={theme}>
    <RadioButton {...props} />
  </ThemeProvider>,
));

describe('RadioButton component', () => {
  it('should render radio button correctly', () => {
    const radioButton = renderRadioButton(renderer.create).toJSON();

    expect(radioButton).toMatchSnapshot();
  });

  it('should render radio button selected correctly', () => {
    const radioButton = renderRadioButton(renderer.create, { selected: true }).toJSON();

    expect(radioButton).toMatchSnapshot();
  });

  it('should render radio button with label correctly', () => {
    const radioButton = renderRadioButton(renderer.create, { label: 'My Label' }).toJSON();

    expect(radioButton).toMatchSnapshot();
  });


  it('should call the onPress function when the user touches the radio button', () => {
    const onPress = jest.fn();
    const { queryByTestId } = renderRadioButton(render, {
      onPress,
    });

    const radioButton = queryByTestId('radio-button');

    fireEvent.pressIn(radioButton);

    expect(onPress).toHaveBeenCalled();
  });

  it('should call the onPress function when the user touches the radio button label', () => {
    const onPress = jest.fn();
    const { queryByTestId } = renderRadioButton(render, {
      label: 'My label',
      onPress,
    });

    const label = queryByTestId('radio-button-label');

    fireEvent.press(label);

    expect(onPress).toHaveBeenCalled();
  });
});
