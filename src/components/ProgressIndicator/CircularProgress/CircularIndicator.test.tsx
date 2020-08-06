import React from 'react';

import { ThemeProvider } from 'styled-components/native';
import renderer from 'react-test-renderer';

import theme from '../../../common/themeSelectors/theme/mock-theme.json';
import { CircularIndicator, CircularProgressIndicatorProps } from './CircularIndicator';

const defaultProps = {
  color: 'primary',
  size: 24,
  timer: {
    interpolate: jest.fn(),
  },
} as unknown as Omit<CircularProgressIndicatorProps, 'theme'>;

const renderCircularIndicator = (props?: Omit<CircularProgressIndicatorProps, 'theme'>) => (renderer.create(
  <ThemeProvider theme={theme}>
    <CircularIndicator
      {...defaultProps}
      {...props}
    />
  </ThemeProvider>,
));

describe('CircularIndicator component', () => {
  it('Should render circular indicator with default props correctly', () => {
    const circularProgress = renderCircularIndicator().toJSON();

    expect(circularProgress).toMatchSnapshot();
  });
});
