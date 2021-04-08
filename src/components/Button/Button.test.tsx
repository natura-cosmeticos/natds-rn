import React from 'react';
import { fireEvent } from '@testing-library/react-native';
import { Button } from './Button';
import { renderWithTheme } from '../../../test/testHelpers';
import { ButtonProps } from './Button.types';

jest.mock('../TouchableRipple/TouchableRipple');

jest.mock('../../common/themeSelectors', () => (
  {
    getButtonPropsBySize: () => ({ minHeight: 48 }),
    getColorByName: () => '#BBBBBB',
    getColorLowEmphasis: () => '#FEEEEF',
    getColorMediumEmphasis: () => '#FAFAEA',
    getColorPrimary: () => '#FFFFFF',
    getRadiusBySize: () => 42,
    getShadowBySize: () => ({ shadowColor: '#AEAEAE' }),
    getSize: () => 16,
    getSpacingTiny: () => 8,
  }));

const defaultProps = ({
  onPress: () => { },
  text: 'label button',
});

const renderButton = (props?: Partial<ButtonProps>) => (
  renderWithTheme(<Button {...defaultProps} {...props} />)
);

describe('Button component', () => {
  it('should render button with default props', () => {
    const { queryByTestId } = renderButton({});

    expect(queryByTestId('button')?.props).toHaveProperty('type', 'contained');
    expect(queryByTestId('button')?.props).toHaveProperty('size', 'medium');
    expect(queryByTestId('button')?.props).toHaveProperty('disabled', false);
    expect(queryByTestId('button-label')).toHaveTextContent('LABEL BUTTON');
  });

  it('should render button with the given type prop', () => {
    const { queryByTestId } = renderButton({ type: 'outlined' });

    expect(queryByTestId('button')).toHaveStyle({
      borderWidth: 1,
    });
  });

  it('should call the given onPress function', () => {
    const onPress = jest.fn();
    const { getByTestId } = renderButton({ onPress });

    fireEvent.press(getByTestId('button'));

    expect(onPress).toHaveBeenCalledTimes(1);
  });

  it('should not call the given onPress function when button is disabled', () => {
    const onPress = jest.fn();
    const { getByTestId } = renderButton({ disabled: true, onPress });

    fireEvent.press(getByTestId('button'));

    expect(onPress).not.toHaveBeenCalled();
  });

  describe('Variants', () => {
    it('should render button component outlined', () => {
      const { toJSON } = renderButton({ type: 'outlined' });

      expect(toJSON()).toMatchSnapshot();
    });

    it('should render button component contained', () => {
      const { toJSON } = renderButton({ type: 'contained' });

      expect(toJSON()).toMatchSnapshot();
    });

    it('should render button component text', () => {
      const { toJSON } = renderButton({ type: 'text' });

      expect(toJSON()).toMatchSnapshot();
    });
  });

  describe('Disabled variants', () => {
    it('should render disabled button component outlined', () => {
      const { toJSON } = renderButton({ disabled: true, type: 'outlined' });

      expect(toJSON()).toMatchSnapshot();
    });

    it('should render disabled button component contained', () => {
      const { toJSON } = renderButton({ disabled: true, type: 'contained' });

      expect(toJSON()).toMatchSnapshot();
    });

    it('should render disabled button component text', () => {
      const { toJSON } = renderButton({ disabled: true, type: 'text' });

      expect(toJSON()).toMatchSnapshot();
    });
  });

  describe('with Icon', () => {
    it('should render the icon to the right by default', () => {
      const { toJSON } = renderButton({ iconName: 'outlined-default-mockup' });

      expect(toJSON()).toMatchSnapshot();
    });
    it('should render the icon to the left', () => {
      const { toJSON } = renderButton({ iconName: 'outlined-default-mockup', iconPosition: 'left' });

      expect(toJSON()).toMatchSnapshot();
    });
  });
});
