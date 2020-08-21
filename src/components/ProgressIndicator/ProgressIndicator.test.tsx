import React from 'react';

import { ThemeProvider } from 'styled-components/native';
import renderer from 'react-test-renderer';

import theme from '../../common/themeSelectors/theme/mock-theme.json';
import { ProgressIndicator, ProgressIndicatorProps } from './ProgressIndicator';

jest.mock('./CircularProgress/CircularProgress', () => ({
  CircularProgress: 'CircularProgress',
}));

const defaultProps = {
  color: 'primary',
  type: 'indeterminate',
  variant: 'circular',
} as Omit<ProgressIndicatorProps, 'theme'>;

const renderProgressIndicator = (props?: Omit<ProgressIndicatorProps, 'theme'>) => (renderer.create(
  <ThemeProvider theme={theme}>
    <ProgressIndicator
      {...defaultProps}
      {...props}
    />
  </ThemeProvider>,
));

describe('ProgressIndicator component', () => {
  it('Should throw error when trying to render with non supported type or variant', () => {
    const renderProgressIndicatorWithError = () => renderProgressIndicator({
      ...defaultProps,
      type: 'unknown-type' as any,
      variant: 'unknown-variant' as any,
    });

    const error = new Error('Not implemented yet');

    expect(renderProgressIndicatorWithError).toThrow(error);
  });

  describe('circular', () => {
    it('Should render circular progress correctly', () => {
      const circularProgress = renderProgressIndicator().toJSON();

      expect(circularProgress).toMatchSnapshot();
    });
  });
});
