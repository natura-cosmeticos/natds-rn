import React from 'react';
import mockTheme from '../../common/themeSelectors/theme/mock-theme.json';
import { renderWithTheme } from '../../../test/testHelpers';
import { getElementsColorsByState, InputFeedbackContainer } from './InputFeedbackContainer';

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
    getTheme: () => {},
    getTypographyStyles: () => ({ caption: {}, subtitle2: {} }),
  }));

const defaultProps = {
  children: <></>,
  helperText: 'testing helper text',
  label: 'testing label',
};

describe('InputFeedbackContainer', () => {
  it('should render with default props', () => {
    const { getByTestId } = renderWithTheme(
      <InputFeedbackContainer {...defaultProps} />,
    );

    expect(getByTestId('label')).toHaveStyle({ color: '#777' });
    expect(getByTestId('box')).toHaveStyle({ borderColor: '#BBB', borderWidth: 1 });
    expect(getByTestId('helper-text')).toHaveStyle({ color: '#777' });
  });

  it('should render given text elements correctly', () => {
    const { getByTestId } = renderWithTheme(
      <InputFeedbackContainer {...defaultProps} />,
    );

    expect(getByTestId('label')).toHaveTextContent('testing label');
    expect(getByTestId('helper-text')).toHaveTextContent('testing helper text');
  });

  it('should render with correct props when filled', () => {
    const { getByTestId } = renderWithTheme(
      <InputFeedbackContainer {...defaultProps} filled />,
    );

    expect(getByTestId('label')).toHaveStyle({ color: '#777' });
    expect(getByTestId('box')).toHaveStyle({ borderColor: '#333', borderWidth: 1 });
    expect(getByTestId('helper-text')).toHaveStyle({ color: '#777' });
  });

  it('should render with correct props to give feedback for error', () => {
    const { getByTestId } = renderWithTheme(
      <InputFeedbackContainer {...defaultProps} feedback='error' />,
    );

    expect(getByTestId('label')).toHaveStyle({ color: '#F00' });
    expect(getByTestId('box')).toHaveStyle({ borderColor: '#F00', borderWidth: 1 });
    expect(getByTestId('helper-text')).toHaveStyle({ color: '#F00' });
  });

  it('should render with correct props to give feedback for success', () => {
    const { getByTestId } = renderWithTheme(
      <InputFeedbackContainer {...defaultProps} feedback='success' />,
    );

    expect(getByTestId('label')).toHaveStyle({ color: '#0F0' });
    expect(getByTestId('box')).toHaveStyle({ borderColor: '#0F0', borderWidth: 1 });
    expect(getByTestId('helper-text')).toHaveStyle({ color: '#0F0' });
  });

  it('should render with correct props when disabled', () => {
    const { getByTestId } = renderWithTheme(
      <InputFeedbackContainer {...defaultProps} disabled />,
    );

    expect(getByTestId('label')).toHaveStyle({ color: '#BBB' });
    expect(getByTestId('box')).toHaveStyle({ borderColor: '#BBB', borderWidth: 1 });
    expect(getByTestId('helper-text')).toHaveStyle({ color: '#BBB' });
  });


  it('should render with correct props when active', () => {
    const { getByTestId } = renderWithTheme(
      <InputFeedbackContainer {...defaultProps} active />,
    );

    expect(getByTestId('box')).toHaveStyle({ borderColor: '#FA3', borderWidth: 2 });
  });
});

/*  eslint-disable mocha/no-setup-in-describe */
describe.each`
  title           | state         | expectedBoxColor  | expectedTextColor
  ${'"active"'}   | ${'active'}   | ${'#FA3'}         | ${'#777'}
  ${'"default"'}  | ${'default'}  | ${'#BBB'}         | ${'#777'}
  ${'"disabled"'} | ${'disabled'} | ${'#BBB'}         | ${'#BBB'}
  ${'"error"'}    | ${'error'}    | ${'#F00'}         | ${'#F00'}
  ${'"filled"'}   | ${'filled'}   | ${'#333'}         | ${'#777'}
  ${'"success"'}  | ${'success'}  | ${'#0F0'}         | ${'#0F0'}
`('getElementsColorsByState', ({
  expectedBoxColor, expectedTextColor, state, title,
}) => {
  it(`should return correct box color for state ${title}`, () => {
    const getBoxColorByState = getElementsColorsByState('box', mockTheme);
    const boxColor = getBoxColorByState(state);

    expect(boxColor).toBe(expectedBoxColor);
  });
  it(`should return correct text color for state ${title}`, () => {
    const getTextColorByState = getElementsColorsByState('text', mockTheme);
    const textColor = getTextColorByState(state);

    expect(textColor).toBe(expectedTextColor);
  });
});
/* eslint-enable mocha/no-setup-in-describe */
