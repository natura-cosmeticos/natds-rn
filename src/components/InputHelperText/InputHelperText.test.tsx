import React from 'react';
import { renderWithTheme } from '../../../test/testHelpers';
import { InputHelperText } from './InputHelperText';

jest.mock('../../common/themeSelectors', () => (
  {
    getColorByName: () => '#AAA',
    getColorMediumEmphasis: () => '#777',
    getSize: () => 24,
    getSpacingMicro: () => 2,
    getTypographyStyles: () => ({ caption: { fontSize: 12 } }),
  }));

const defaultProps = {
  content: 'testing helper text',
};

describe('InputHelperText', () => {
  it('should render with default props', () => {
    const { getByTestId, queryByTestId } = renderWithTheme(
      <InputHelperText {...defaultProps} />,
    );

    expect(getByTestId('helper-text')).toHaveStyle({
      color: '#777', flexDirection: 'row', fontSize: 12, marginTop: 2,
    });
    expect(getByTestId('helper-text')).not.toHaveStyle({ marginLeft: 2 });
    expect(queryByTestId('icon')).toBeFalsy();
  });

  it('should render given content correctly', () => {
    const { getByTestId } = renderWithTheme(
      <InputHelperText {...defaultProps} />,
    );

    expect(getByTestId('helper-text')).toHaveTextContent('testing helper text');
  });

  it('should render with icon to give feedback for error', () => {
    const { getByTestId, queryByTestId } = renderWithTheme(
      <InputHelperText {...defaultProps} feedback='error' />,
    );

    expect(getByTestId('helper-text')).toHaveStyle({ marginLeft: 2 });
    expect(queryByTestId('icon')).toBeTruthy();
  });

  it('should render with icon to give feedback for success', () => {
    const { getByTestId, queryByTestId } = renderWithTheme(
      <InputHelperText {...defaultProps} feedback='success' />,
    );

    expect(getByTestId('helper-text')).toHaveStyle({ marginLeft: 2 });
    expect(queryByTestId('icon')).toBeTruthy();
  });

  it('should render with given color', () => {
    const { getByTestId } = renderWithTheme(
      <InputHelperText {...defaultProps} color="#BBB" />,
    );

    expect(getByTestId('helper-text')).toHaveStyle({ color: '#BBB' });
  });
});
