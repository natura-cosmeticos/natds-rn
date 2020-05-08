import React from 'react';
import renderer from 'react-test-renderer';
import { fireEvent, render } from '@testing-library/react-native';
import '@testing-library/jest-native/extend-expect';
import { ThemeProvider } from 'styled-components/native';
import theme from '../../common/themeSelectors/theme/mock-theme.json';
import { Button, ButtonProps } from './Button';

jest.mock('react-native/Libraries/Components/Touchable/TouchableOpacity',
  () => 'TouchableOpacity');

jest.mock('../../common/themeSelectors', () => (
  {
    getButtonPropsBySize: () => ({ background: '#AEAEAE' }),
    getColorHighEmphasis: () => '#FAF3E3',
    getColorOnPrimary: () => '#F4F4',
    getColorPrimary: () => '#FFFFFF',
    getFont: () => 'doc robot',
    getRadiusPropsBySize: () => 42,
    getShadowBySize: () => ({ shadowColor: '#AEAEAE' }),
  }));

const renderButton = (fn, props: Omit<ButtonProps, 'theme'>) => (fn(
  <ThemeProvider theme={theme}>
    <Button {...props} />
  </ThemeProvider>,
));

const defaultProps = ({
  onPress: () => {},
  text: 'label button',
});

describe('Button component', () => {
  it('Should render button with a text', () => {
    const { queryByTestId } = renderButton(render, defaultProps);

    expect(queryByTestId('button')).toHaveTextContent(defaultProps.text);
  });

  it('Should render button with default props', () => {
    const { queryByTestId } = renderButton(render, defaultProps);

    expect(queryByTestId('button')?.props).toHaveProperty('type', 'contained');
  });

  it('Should render button with type prop', () => {
    const { queryByTestId } = renderButton(render, {
      ...defaultProps,
      type: 'outlined',
    });

    expect(queryByTestId('button')).toHaveStyle({
      borderWidth: 1,
    });
  });

  it('Should call the given onPress function', () => {
    const onPressMock = jest.fn();
    const { queryByTestId } = renderButton(render, {
      ...defaultProps,
      onPress: onPressMock,
    });

    fireEvent.press(queryByTestId('button'));

    expect(onPressMock).toHaveBeenCalledTimes(1);
  });

  it('Should render button component outlined', () => {
    const button = renderButton(renderer.create, {
      ...defaultProps,
      type: 'outlined',
    }).toJSON();

    expect(button).toMatchSnapshot();
  });

  it('Should render button component contained', () => {
    const button = renderButton(renderer.create, defaultProps).toJSON();

    expect(button).toMatchSnapshot();
  });

  it('Should render button component text', () => {
    const button = renderButton(renderer.create, {
      ...defaultProps,
      type: 'text',
    }).toJSON();

    expect(button).toMatchSnapshot();
  });
});
