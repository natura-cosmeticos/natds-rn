import React from 'react';

import { ThemeProvider } from 'styled-components/native';
import renderer from 'react-test-renderer';

import theme from '../../common/themeSelectors/theme/mock-theme.json';
import { ProgressIndicator, ProgressIndicatorProps } from './ProgressIndicator';

jest.mock('./CircularProgress/CircularProgress', () => ({
  CircularProgress: 'CircularProgress',
}));

const renderProgressIndicator = (
  props?: Omit<ProgressIndicatorProps, 'theme'>,
) => renderer.create(
    <ThemeProvider theme={theme}>
      <ProgressIndicator {...props} />
    </ThemeProvider>,
);

describe('ProgressIndicator component', () => {
  it('Should render progress indicator correctly', () => {
    const progressIndicator = renderProgressIndicator().toJSON();

    expect(progressIndicator).toMatchSnapshot();
  });
});
