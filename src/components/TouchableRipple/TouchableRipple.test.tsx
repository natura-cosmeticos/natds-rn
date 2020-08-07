import React from 'react';
import { View } from 'react-native';

import { ThemeProvider } from 'styled-components/native';
import { fireEvent, render } from '@testing-library/react-native';
import renderer from 'react-test-renderer';

import theme from '../../common/themeSelectors/theme/mock-theme.json';
import { TouchableRipple, TouchableRippleProps } from './TouchableRipple';

const defaultProps = {
  children: <View />,
  onPress: () => null,
  size: 24,
};

const renderTouchableRipple = (fn, props?: Omit<TouchableRippleProps, 'theme'>) => (fn(
  <ThemeProvider theme={theme}>
    <TouchableRipple
      {...defaultProps}
      {...props}
    />
  </ThemeProvider>,
));

describe('TouchableRipple component', () => {
  it('Should render touchapple ripple correctly', () => {
    const touchableRipple = renderTouchableRipple(renderer.create).toJSON();

    expect(touchableRipple).toMatchSnapshot();
  });

  it('it should call onPress on touchable press', () => {
    const onPress = jest.fn();
    const { queryByTestId } = renderTouchableRipple(render, {
      ...defaultProps,
      onPress,
    });

    const touchable = queryByTestId('touchable-ripple');

    fireEvent.press(touchable);

    expect(onPress).toHaveBeenCalled();
  });
});
