import React from 'react';
import renderer from 'react-test-renderer';
import { fireEvent, render } from '@testing-library/react-native';
import '@testing-library/jest-native/extend-expect';
import { ThemeProvider } from 'styled-components/native';
import theme from '../../common/themeSelectors/theme/mock-theme.json';
import { Button, ButtonProps } from './Button';

jest.mock('react-native/Libraries/Components/Touchable/TouchableHighlight',
  () => 'TouchableHighlight');

jest.mock('../../common/themeSelectors', () => (
  {
    getButtonPropsBySize: () => ({ background: '#AEAEAE' }),
    getColorHighEmphasis: () => '#FAF3E3',
    getColorOnPrimary: () => '#F4F4',
    getColorPrimary: () => '#FFFFFF',
    getColorPrimaryLight: () => '#BABABA',
    getFont: () => 'doc robot',
    getOpacity80: () => 0.8,
    getRadiusBySize: () => 42,
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
  it('Should render button with default props', () => {
    const { queryByTestId } = renderButton(render, defaultProps);

    expect(queryByTestId('button')?.props).toHaveProperty('type', 'contained');
  });

  it('Should render button with a uppercase text', () => {
    const { queryByTestId } = renderButton(render, defaultProps);

    expect(queryByTestId('button')).toHaveTextContent('LABEL BUTTON');
  });

  it('Should render button with the given type prop', () => {
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
