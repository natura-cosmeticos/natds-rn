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
    getButtonPropsBySize: () => ({ background: '#EEEEEE' }),
    getColorHighEmphasis: () => '#FAF3E3',
    getColorLowEmphasis: () => '#FEEEEF',
    getColorMediumEmphasis: () => '#FAFAEA',
    getColorOnPrimary: () => '#F4F4',
    getColorPrimary: () => '#FFFFFF',
    getColorPrimaryLight: () => '#BABABA',
    getMediumSize: () => 66,
    getOpacity10: () => 0.8,
    getRadiusBySize: () => 42,
    getSemiSize: () => 68,
    getSemixSize: () => 67,
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
  it('should render button with default props', () => {
    const { queryByTestId } = renderButton(render, defaultProps);

    expect(queryByTestId('button')?.props).toHaveProperty('type', 'contained');
    expect(queryByTestId('button')?.props).toHaveProperty('size', 'medium');
    expect(queryByTestId('button')?.props).toHaveProperty('disabled', false);
    expect(queryByTestId('button')).toHaveTextContent('LABEL BUTTON');
  });

  it('should render button with the given type prop', () => {
    const { queryByTestId } = renderButton(render, {
      ...defaultProps,
      type: 'outlined',
    });

    expect(queryByTestId('button')).toHaveStyle({
      borderWidth: 1,
    });
  });

  it('should call the given onPress function', () => {
    const onPressMock = jest.fn();
    const { queryByTestId } = renderButton(render, {
      ...defaultProps,
      onPress: onPressMock,
    });

    fireEvent.press(queryByTestId('button'));

    expect(onPressMock).toHaveBeenCalledTimes(1);
  });

  it('should not call the given onPress function when button is disabled', () => {
    const onPressMock = jest.fn();
    const { queryByTestId } = renderButton(render, {
      ...defaultProps,
      disabled: true,
      onPress: onPressMock,
    });

    fireEvent.press(queryByTestId('button'));

    expect(onPressMock).not.toHaveBeenCalled();
  });

  describe('Variants', () => {
    it('should render button component outlined', () => {
      const button = renderButton(renderer.create, {
        ...defaultProps,
        type: 'outlined',
      }).toJSON();

      expect(button).toMatchSnapshot();
    });

    it('should render button component contained', () => {
      const button = renderButton(renderer.create, defaultProps).toJSON();

      expect(button).toMatchSnapshot();
    });

    it('should render button component text', () => {
      const button = renderButton(renderer.create, {
        ...defaultProps,
        disabled: true,
        type: 'text',
      }).toJSON();

      expect(button).toMatchSnapshot();
    });
  });

  describe('Disabled variants', () => {
    it('should render disabled button component outlined', () => {
      const button = renderButton(renderer.create, {
        ...defaultProps,
        disabled: true,
        type: 'outlined',
      }).toJSON();

      expect(button).toMatchSnapshot();
    });

    it('should render disabled button component contained', () => {
      const button = renderButton(renderer.create, defaultProps).toJSON();

      expect(button).toMatchSnapshot();
    });

    it('should render disabled button component text', () => {
      const button = renderButton(renderer.create, {
        ...defaultProps,
        disabled: true,
        type: 'text',
      }).toJSON();

      expect(button).toMatchSnapshot();
    });
  });
});
