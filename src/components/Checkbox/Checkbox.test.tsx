import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { fireEvent, render } from '@testing-library/react-native';
import renderer from 'react-test-renderer';
import theme from '../../common/themeSelectors/theme/mock-theme.json';
import { Checkbox, CheckboxProps } from './Checkbox';
// import * as TouchableRipple from '../TouchableRipple/TouchableRipple';

jest.mock('../TouchableRipple/TouchableRipple');
jest.mock(
  'react-native/Libraries/Components/Touchable/TouchableOpacity',
  () => 'TouchableOpacity',
);

const renderCheckbox = (fn, props?: Omit<CheckboxProps, 'theme'>) => (fn(
  <ThemeProvider theme={theme}>
    <Checkbox {...props} />
  </ThemeProvider>,
));

describe('Checkbox component', () => {
  it('should render checkbox correctly', () => {
    const checkbox = renderCheckbox(renderer.create).toJSON();

    expect(checkbox).toMatchSnapshot();
  });

  it('should render checkbox selected correctly', () => {
    const checkbox = renderCheckbox(renderer.create, { selected: true }).toJSON();

    expect(checkbox).toMatchSnapshot();
  });

  it('should render checkbox with label correctly', () => {
    const checkbox = renderCheckbox(renderer.create, { label: 'My Label' }).toJSON();

    expect(checkbox).toMatchSnapshot();
  });

  it('should render checkbox selected but disabled correctly', () => {
    const checkbox = renderCheckbox(renderer.create, {
      disabled: true,
      selected: true,
    }).toJSON();

    expect(checkbox).toMatchSnapshot();
  });

  it('should render checkbox selected but disabled with label correctly', () => {
    const checkbox = renderCheckbox(renderer.create, {
      disabled: true,
      label: 'My Label',
      selected: true,
    }).toJSON();

    expect(checkbox).toMatchSnapshot();
  });


  it('should call the onPress function when the user touches the checkbox', () => {
    const onPress = jest.fn();
    const { queryByTestId } = renderCheckbox(render, {
      onPress,
      value: 'checkbox',
    });

    const checkbox = queryByTestId('checkbox');

    fireEvent.press(checkbox);

    expect(onPress).toHaveBeenCalledWith('checkbox');
  });

  it('should call the onPress function when the user touches the checkbox label', () => {
    const onPress = jest.fn();
    const { queryByTestId } = renderCheckbox(render, {
      label: 'My label',
      onPress,
      value: 'checkbox-label',
    });

    const label = queryByTestId('checkbox-label');

    fireEvent.press(label);

    expect(onPress).toHaveBeenCalledWith('checkbox-label');
  });

  it('should render check inside box when selected is true', () => {
    const onPress = jest.fn();
    const { queryByTestId } = renderCheckbox(render, {
      onPress,
      selected: true,
      value: 'checkbox',
    });

    const checkbox = queryByTestId('checkbox');

    expect(checkbox.props.children).not.toBeNull();
  });

  it('should render text inside label container when label is different from null/undefined', () => {
    const onPress = jest.fn();
    const { queryByTestId } = renderCheckbox(render, {
      label: 'My Label',
      onPress,
      value: 'checkbox',
    });

    const checkboxLabel = queryByTestId('checkbox-label');

    expect(checkboxLabel).not.toBeNull();
  });
});
