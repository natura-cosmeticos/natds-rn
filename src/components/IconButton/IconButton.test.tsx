/* eslint-disable max-statements, mocha/no-setup-in-describe */
import React from 'react';
import { fireEvent } from '@testing-library/react-native';
import mockTheme from '../../common/themeSelectors/theme/mock-theme.json';
import { renderWithTheme } from '../../../test/testHelpers';
import { IconButton } from './IconButton';
import * as helpers from './IconButton.helpers';
import { iconButtonSizes, iconButtonColors, iconButtonBackgroundStyles } from './IconButton.types';

jest.mock('../Icon/Icon');
jest.mock('../../common/themeSelectors');

describe('IconButton component', () => {
  let getContainerElevationMock: jest.SpyInstance;
  let getContainerBackgroundColorMock: jest.SpyInstance;
  let getIconColorMock: jest.SpyInstance;
  let getIconSizeMock: jest.SpyInstance;

  afterEach(() => {
    jest.restoreAllMocks();
  });

  beforeEach(() => {
    // @ts-ignore
    getContainerElevationMock = jest
      .spyOn(helpers, 'getContainerElevation')
      .mockReturnValue({ elevation: 1 });
    // @ts-ignore
    getIconColorMock = jest
      .spyOn(helpers, 'getIconColor')
      .mockReturnValue('highEmphasis');
    // @ts-ignore
    getIconSizeMock = jest
      .spyOn(helpers, 'getIconSize')
      .mockReturnValue('standard');
    // @ts-ignore
    getContainerBackgroundColorMock = jest
      .spyOn(helpers, 'getContainerBackgroundColor')
      .mockReturnValue('transparent');
  });

  it('should render the correct background', () => {
    renderWithTheme(
      <IconButton
        iconColor="default"
        icon="outlined-finance-bank"
        size="semiX"
        backgroundStyle="float"
        onPress={() => { }}
      />,
    );

    expect(getContainerElevationMock).toHaveBeenCalledWith('float', mockTheme);
    expect(getContainerBackgroundColorMock).toHaveBeenCalledWith({
      backgroundStyle: 'float',
      disabled: false,
      theme: mockTheme,
    });
  });

  it('should render the correct icon', () => {
    const { queryByTestId } = renderWithTheme(
      <IconButton
        iconColor="primary"
        icon="outlined-finance-bank"
        accessibilityHint="Go to account page"
        accessibilityLabel="Press view your account"
        size="semiX"
        backgroundStyle="float"
        onPress={() => { }}
      />,
    );

    const icon = queryByTestId('icon-button-icon');

    expect(icon?.props).toHaveProperty('accessibilityHint', 'Go to account page');
    expect(icon?.props).toHaveProperty('accessibilityLabel', 'Press view your account');
    expect(icon?.props).toHaveProperty('size', 'standard');
    expect(icon?.props).toHaveProperty('color', 'highEmphasis');
    expect(icon?.props).toHaveProperty('name', 'outlined-finance-bank');
    expect(getIconSizeMock).toHaveBeenCalledWith('semiX');
    expect(getIconColorMock).toHaveBeenCalledWith('primary', false);
  });
  it('should call onPress when item is pressed', () => {
    const onPressMock = jest.fn();

    const { queryByTestId } = renderWithTheme(
      <IconButton
        color="default"
        icon="outlined-finance-bank"
        onPress={onPressMock}
      />,
    );

    const iconButton = queryByTestId('icon-button');

    if (iconButton) {
      fireEvent.press(iconButton);
    }

    expect(onPressMock).toHaveBeenCalled();
  });

  it.each(iconButtonSizes)('should render IconButton component with size %p', (size) => {
    const { toJSON } = renderWithTheme(
      <IconButton
        size={size}
        accessibilityHint="Go to account page"
        accessibilityLabel="Press view your account"
        icon="outlined-finance-bank"
        onPress={() => { }}
      />,
    );

    expect(toJSON()).toMatchSnapshot();
  });

  it.each(iconButtonBackgroundStyles)('should render IconButton component with background style %p', (backgroundStyle) => {
    const { toJSON } = renderWithTheme(
      <IconButton
        backgroundStyle={backgroundStyle}
        accessibilityHint="Go to account page"
        accessibilityLabel="Press view your account"
        icon="outlined-finance-bank"
        onPress={() => { }}
      />,
    );

    expect(toJSON()).toMatchSnapshot();
  });

  it.each(iconButtonColors)('should render IconButton component with color %p', (iconColor) => {
    const { toJSON } = renderWithTheme(
      <IconButton
        iconColor={iconColor}
        accessibilityHint="Go to account page"
        accessibilityLabel="Press view your account"
        icon="outlined-finance-bank"
        onPress={() => { }}
      />,
    );

    expect(toJSON()).toMatchSnapshot();
  });

  it('should render IconButton component disabled', () => {
    const { toJSON } = renderWithTheme(
      <IconButton
        disabled
        accessibilityHint="Go to account page"
        accessibilityLabel="Press view your account"
        icon="outlined-finance-bank"
        onPress={() => { }}
      />,
    );

    expect(toJSON()).toMatchSnapshot();
  });
});
