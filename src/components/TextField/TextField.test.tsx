import { fireEvent } from '@testing-library/react-native';
import React from 'react';
import { renderWithTheme } from '../../../test/testHelpers';
import { TextField } from './TextField';
// @ts-ignore
import placeholderImage from '../../assets/images/anonymous.jpg';

jest.mock('../../common/themeSelectors', () => (
  {
    buildColorWithOpacity: () => '#BBBBBB00',
    getBorderRadiusMedium: () => 8,
    getColorAlert: () => '#FF0000',
    getColorByName: () => '#0F0F0F',
    getColorHighEmphasis: () => '#333333',
    getColorHighlight: () => '#333333',
    getColorLowEmphasis: () => '#BBBBBB',
    getColorMediumEmphasis: () => '#777777',
    getColorPrimary: () => '#FFAA33',
    getColorSuccess: () => '#00FF00',
    getColorSurface: () => '#000000',
    getOpacityDisabledLow: () => 0.5,
    getSize: () => 16,
    getSizeLarge: () => 42,
    getSizeMedium: () => 24,
    getSizeMediumX: () => 32,
    getSizeSemi: () => 14,
    getSpacingMicro: () => 4,
    getSpacingSmall: () => 8,
    getSpacingTiny: () => 2,
    getTheme: () => {},
    getTypographyStyles: () => ({
      caption: {}, subtitle2: {},
    }),
  }));

describe('TextField', () => {
  describe('render', () => {
    it('should render with default props', () => {
      const { getByTestId, toJSON } = renderWithTheme(<TextField />);

      const defaultStyles = {
        backgroundColor: '#000000',
        color: '#333333',
        height: 32,
      };

      expect(getByTestId('input')).toHaveStyle(defaultStyles);
      expect(toJSON()).toMatchSnapshot();
    });
    it('should render with given size', () => {
      const { getByTestId } = renderWithTheme(<TextField size="medium" />);

      expect(getByTestId('input')).toHaveStyle({ height: 24 });
    });
    it('should render with correct props when disabled', () => {
      const { getByTestId } = renderWithTheme(<TextField disabled />);

      expect(getByTestId('input')).toHaveStyle({ color: '#BBBBBB' });
      expect(getByTestId('input')).toHaveProp('editable', false);
    });
    it('should render with correct props when readonly', () => {
      const { getByTestId } = renderWithTheme(<TextField readonly />);

      expect(getByTestId('input')).toHaveStyle({ backgroundColor: '#BBBBBB00' });
      expect(getByTestId('input')).toHaveProp('editable', false);
    });
  });
  describe('content', () => {
    it('should get given value', () => {
      const { getByTestId } = renderWithTheme(<TextField value="testing value" />);

      expect(getByTestId('input')).toHaveProp('value', 'testing value');
    });
    it('should get given placeholder', () => {
      const { getByTestId } = renderWithTheme(<TextField placeholder="testing placeholder" />);

      expect(getByTestId('input')).toHaveProp('placeholder', 'testing placeholder');
    });
  });
  describe('status events', () => {
    it('should call onFocus when focused', () => {
      const onFocusMock = jest.fn();
      const { getByTestId } = renderWithTheme(<TextField onFocus={onFocusMock} />);

      fireEvent(getByTestId('input'), 'focus');

      expect(onFocusMock).toHaveBeenCalled();
    });
    it('should call onBlur when loses focus', () => {
      const onBlurMock = jest.fn();
      const { getByTestId } = renderWithTheme(<TextField onBlur={onBlurMock} />);

      fireEvent(getByTestId('input'), 'blur');

      expect(onBlurMock).toHaveBeenCalled();
    });
  });
  describe('action', () => {
    it('should render an icon button when receives action icon', () => {
      const { getByTestId } = renderWithTheme(
        <TextField action="icon" actionComponent={<></>} />,
      );

      expect(getByTestId('action-icon')).toBeTruthy();
    });
    it('should render an image button when receives action image', () => {
      const { getByTestId } = renderWithTheme(
        <TextField action="image" actionComponent={<></>} />,
      );

      expect(getByTestId('action-image')).toBeTruthy();
    });
  });
  describe('type password', () => {
    it('should render with correct props when type is password', () => {
      const { getByTestId } = renderWithTheme(<TextField type="password" />);
      const iconName = getByTestId('password-action-icon').props.children.props.icon;

      expect(iconName).toBe('outlined-action-visibilityoff');
      expect(getByTestId('input')).toHaveProp('secureTextEntry', true);
    });
    it('should handle value visibility when type is password', () => {
      const { getByTestId } = renderWithTheme(<TextField type="password" />);

      fireEvent(getByTestId('password-action-icon'), 'press');
      const iconName = getByTestId('password-action-icon').props.children.props.icon;

      expect(iconName).toBe('outlined-action-visibility');
      expect(getByTestId('input')).toHaveProp('secureTextEntry', false);
    });
  });
  describe('type number', () => {
    it('should show keyboard type number when active', () => {
      const { getByTestId } = renderWithTheme(<TextField type="number" />);

      expect(getByTestId('input')).toHaveProp('keyboardType', 'numeric');
    });
    it('should only accept numbers', () => {
      const { getByTestId } = renderWithTheme(<TextField type="number" />);

      fireEvent(getByTestId('input'), 'changeText', '1234abc567');

      expect(getByTestId('input')).toHaveProp('value', '1234567');
    });
  });
});
