import React from 'react';
import { renderWithTheme } from '../../../test/testHelpers';
import { InputFeedbackContainer } from './InputFeedbackContainer';

jest.mock('../../common/themeSelectors', () => (
  {
    getBorderRadiusMedium: () => 8,
    getColorAlert: () => '#F00',
    getColorByName: () => '#AAA',
    getColorHighEmphasis: () => '#333',
    getColorLowEmphasis: () => '#BBB',
    getColorMediumEmphasis: () => '#777',
    getColorPrimary: () => '#FA3',
    getColorSuccess: () => '#0F0',
    getColorSurface: () => '#000',
    getSize: () => 24,
    getSpacingMicro: () => 2,
    getTypographyStyles: () => ({ caption: {}, subtitle2: {} }),
  }));

const defaultProps = {
  children: <></>,
  helperText: 'testing helper text',
  label: 'testing label',
};

describe('InputFeedbackContainer', () => {
  it('should render with default props', () => {
    const { getByTestId, queryByTestId } = renderWithTheme(
      <InputFeedbackContainer {...defaultProps} />,
    );

    expect(getByTestId('label').props.style.color).toEqual('#777');
    expect(getByTestId('box').props.style.borderColor).toEqual('#BBB');
    expect(getByTestId('box').props.style.borderRadius).toEqual(8);
    expect(getByTestId('helper-text').props.style.color).toEqual('#777');
    expect(queryByTestId('icon')).toBeFalsy();
  });

  it('should render given text elements correctly', () => {
    const { getByTestId } = renderWithTheme(
      <InputFeedbackContainer {...defaultProps} />,
    );

    expect(getByTestId('label')).toHaveTextContent('testing label');
    expect(getByTestId('helper-text')).toHaveTextContent('testing helper text');
  });

  it('should render given Label with asterisk when required', () => {
    const { getByTestId } = renderWithTheme(
      <InputFeedbackContainer {...defaultProps} required />,
    );

    expect(getByTestId('label')).toHaveTextContent('testing label*');
  });

  it('should render with correct props when filled', () => {
    const { getByTestId } = renderWithTheme(
      <InputFeedbackContainer {...defaultProps} filled />,
    );

    expect(getByTestId('label').props.style.color).toEqual('#777');
    expect(getByTestId('box').props.style.borderColor).toEqual('#333');
    expect(getByTestId('box').props.style.borderRadius).toEqual(8);
    expect(getByTestId('helper-text').props.style.color).toEqual('#777');
  });

  it('should render with correct props to give feedback for error', () => {
    const { getByTestId, queryByTestId } = renderWithTheme(
      <InputFeedbackContainer {...defaultProps} feedback='error' />,
    );

    expect(getByTestId('label').props.style.color).toEqual('#F00');
    expect(getByTestId('box').props.style.borderColor).toEqual('#F00');
    expect(getByTestId('helper-text').props.style.color).toEqual('#F00');
    expect(queryByTestId('icon')).toBeTruthy();
  });

  it('should render with correct props to give feedback for success', () => {
    const { getByTestId, queryByTestId } = renderWithTheme(
      <InputFeedbackContainer {...defaultProps} feedback='success' />,
    );

    expect(getByTestId('label').props.style.color).toEqual('#0F0');
    expect(getByTestId('box').props.style.borderColor).toEqual('#0F0');
    expect(getByTestId('helper-text').props.style.color).toEqual('#0F0');
    expect(queryByTestId('icon')).toBeTruthy();
  });

  it('should render with correct props when disabled', () => {
    const { getByTestId } = renderWithTheme(
      <InputFeedbackContainer {...defaultProps} disabled />,
    );

    expect(getByTestId('label').props.style.color).toEqual('#BBB');
    expect(getByTestId('box').props.style.borderColor).toEqual('#BBB');
    expect(getByTestId('helper-text').props.style.color).toEqual('#BBB');
  });


  it('should render with correct props when active', () => {
    const { getByTestId } = renderWithTheme(
      <InputFeedbackContainer {...defaultProps} active />,
    );

    expect(getByTestId('label').props.style.color).toEqual('#777');
    expect(getByTestId('box').props.style.borderColor).toEqual('#FA3');
    expect(getByTestId('box').props.style.borderWidth).toEqual(2);
    expect(getByTestId('helper-text').props.style.color).toEqual('#777');
  });
});
