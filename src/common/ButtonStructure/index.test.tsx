import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import '@testing-library/jest-native/extend-expect';
import { ThemeProvider } from 'styled-components/native';
import { Text } from 'react-native';
import theme from '../../common/themeSelectors/theme/mock-theme.json';
import ButtonStructure, { ButtonStructureProps, AccessibilityRole } from '.';

jest.mock(
  'react-native/Libraries/Components/Touchable/TouchableHighlight',
  () => 'TouchableHighlight',
);

jest.mock('../../common/themeSelectors', () => ({
  getButtonPropsBySize: () => ({ background: '#AEAEAE' }),
  getColorPrimaryLight: () => '#BABABA',
  getOpacity10: () => 0.8,
}));

const renderButton = (fn, props: Omit<ButtonStructureProps, 'theme'>) => (fn(
  <ThemeProvider theme={theme}>
    <ButtonStructure {...props} />
  </ThemeProvider>,
));

const props = {
  accessibilityHint: 'button',
  accessibilityLabel: 'button-strucuture',
  accessibilityRole: 'button' as AccessibilityRole,
  borderRadius: 10,
  children: <Text>LABEL BUTTON</Text>,
  disabled: false,
  onPress: () => {},
  styles: {},
  testID: 'button-structure',
  type: 'random-type',
};

describe('ButtonStructure component', () => {
  it('should render button with the given props', () => {
    const { queryByTestId } = renderButton(render, props);

    const renderedProps = queryByTestId('button-structure').props;

    expect(renderedProps).toHaveProperty('accessibilityHint', 'button');
    expect(renderedProps).toHaveProperty('accessibilityLabel', 'button-strucuture');
    expect(renderedProps).toHaveProperty('accessibilityRole', 'button');
    expect(renderedProps).toHaveProperty('borderRadius', 10);
    expect(renderedProps).toHaveProperty('type', 'random-type');
    expect(renderedProps).toHaveProperty('styles', {});
    expect(renderedProps).toHaveProperty('disabled', false);
  });

  it('should call onPress if pressed', () => {
    const onPressMock = jest.fn();

    const { queryByTestId } = renderButton(render, {
      ...props,
      onPress: onPressMock,
    });

    fireEvent.press(queryByTestId('button-structure'));

    expect(onPressMock).toHaveBeenCalled();
  });

  it('should render button with correct default props', () => {
    const { queryByTestId } = renderButton(render, props);

    const renderedProps = queryByTestId('button-structure').props;

    expect(renderedProps).toHaveProperty('borderRadius', 10);
    expect(renderedProps).toHaveProperty('underlayColor', '#BABABA');
  });
});
