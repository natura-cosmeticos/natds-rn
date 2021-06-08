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

describe('Input', () => {
  describe('render', () => {
    it('should render with default props', () => {
      const { getByTestId } = renderWithTheme(<TextField />);

      const defaultStyles = {
        backgroundColor: '#000000',
        borderRadius: 8,
        color: '#333333',
        flexGrow: 1,
        height: 32,
        maxWidth: '100%',
        overflow: 'hidden',
        paddingLeft: 8,
        paddingRight: 8,
        width: 10,
      };

      expect(getByTestId('input')).toHaveStyle(defaultStyles);
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
        <TextField
          action="icon"
          actionOnPress={() => {}}
          iconName="filled-action-clock"
        />,
      );

      expect(getByTestId('action-icon')).toBeTruthy();
    });
    it('should render an image button when receives action image', () => {
      const { getByTestId } = renderWithTheme(
        <TextField
          action="image"
          actionOnPress={() => {}}
          imageSource={placeholderImage}
        />,
      );

      expect(getByTestId('action-image')).toBeTruthy();
    });
  });
});
