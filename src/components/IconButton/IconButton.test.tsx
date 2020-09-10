import React from 'react';
import renderer from 'react-test-renderer';
import { fireEvent, render } from '@testing-library/react-native';
import { ThemeProvider } from 'styled-components/native';
import theme from '../../common/themeSelectors/theme/mock-theme.json';
import {
  IconButton,
  IconButtonProps,
  IconButtonSizes,
  IconButtonColors,
} from './IconButton';

const renderButton = (fn, props: Omit<IconButtonProps, 'theme'>) => (fn(
  <ThemeProvider theme={theme}>
    <IconButton {...props} />
  </ThemeProvider>,
));

describe('IconButton component', () => {
  it('should render IconButton component', () => {
    const props = {
      color: 'default' as IconButtonColors,
      icon: 'outlined-finance-bank',
      onPress: () => {},
      size: 'medium' as IconButtonSizes,
      testID: 'icon-button',
    };

    const wrapper = renderButton(renderer.create, props);

    expect(wrapper.toJSON()).toMatchSnapshot();
  });

  it('should call onPress when item is pressed', () => {
    const onPressMock = jest.fn();

    const props = {
      color: 'primary' as IconButtonColors,
      icon: 'outlined-finance-bank',
      onPress: onPressMock,
      size: 'small' as IconButtonSizes,
      testID: 'icon-button',
    };

    const { queryByTestId } = renderButton(render, props);

    fireEvent.press(queryByTestId('icon-button'));

    expect(onPressMock).toHaveBeenCalled();
  });
});
