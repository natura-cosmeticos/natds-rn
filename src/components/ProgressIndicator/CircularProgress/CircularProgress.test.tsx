import React from 'react';

import { ThemeProvider } from 'styled-components/native';
import renderer from 'react-test-renderer';

import theme from '../../../common/themeSelectors/theme/mock-theme.json';
import { CircularProgress, CircularProgressProps } from './CircularProgress';

jest.mock('./CircularIndicator', () => ({
  CircularIndicator: 'CircularIndicator',
}));

const defaultProps = {
  color: 'primary',
  type: 'indeterminated',
  variant: 'circular',
} as Omit<CircularProgressProps, 'theme'>;

const renderCircularProgress = (props?: Omit<CircularProgressProps, 'theme'>) => (renderer.create(
  <ThemeProvider theme={theme}>
    <CircularProgress
      {...defaultProps}
      {...props}
    />
  </ThemeProvider>,
));

describe('CircularProgress component', () => {
  it('Should render circular progress with default props correctly', () => {
    const circularProgress = renderCircularProgress().toJSON();

    expect(circularProgress).toMatchSnapshot();
  });

  it('Should render circular progress with color primary correctly', () => {
    const circularProgress = renderCircularProgress({ color: 'primary' }).toJSON();

    expect(circularProgress).toMatchSnapshot();
  });

  it('Should render circular progress with color primary secondary', () => {
    const circularProgress = renderCircularProgress({ color: 'secondary' }).toJSON();

    expect(circularProgress).toMatchSnapshot();
  });
});
