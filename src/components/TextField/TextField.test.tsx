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
    getColorByName: () => '#0F0F0F',
    getColorHighEmphasis: () => '#333333',
    getColorHighlight: () => '#333333',
    getColorLowEmphasis: () => '#BBBBBB',
    getColorMediumEmphasis: () => '#777777',
    getColorPrimary: () => '#FFAA33',
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
    getTypographyStyles: () => ({
      caption: {}, subtitle2: {},
    }),
  }));

describe('Input', () => {
  it('should render with default props', () => {
    const { getByTestId } = renderWithTheme(<TextField />);

    const deafultStyles = {
      backgroundColor: '#000000',
      borderRadius: 8,
      color: '#333333',
      flexGrow: 1,
      height: 32,
      overflow: 'hidden',
      paddingHorizontal: 8,
    };

    expect(getByTestId('input').props.style).toEqual(deafultStyles);
  });

  it('should render with given size', () => {
    const { getByTestId } = renderWithTheme(<TextField size="medium" />);

    expect(getByTestId('input').props.style.height).toEqual(24);
  });

  it('should render with correct props when disabled', () => {
    const { getByTestId } = renderWithTheme(<TextField disabled />);

    expect(getByTestId('input').props.style.color).toEqual('#BBBBBB');
    expect(getByTestId('input').props.editable).toEqual(false);
  });

  it('should render with correct props when readonly', () => {
    const { getByTestId } = renderWithTheme(<TextField readonly />);

    expect(getByTestId('input').props.style.backgroundColor).toEqual('#BBBBBB00');
    expect(getByTestId('input').props.editable).toEqual(false);
  });

  it('should get content when filled', () => {
    const { getByTestId } = renderWithTheme(<TextField value="filled" />);

    expect(getByTestId('input').props.value).toEqual('filled');
  });

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
