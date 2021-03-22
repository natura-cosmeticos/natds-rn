import React, { ReactElement } from 'react';
import { render, RenderAPI, RenderOptions } from '@testing-library/react-native';
import { ThemeProvider } from 'styled-components/native';
import theme from '../src/common/themeSelectors/theme/mock-theme.json';

const WithTheme = ({ children }) => (
  <ThemeProvider theme={theme}>
    {children}
  </ThemeProvider>
);

interface CustomRender {
  <T>(ui: ReactElement<T>, options?: RenderOptions): RenderAPI
}

const renderWithTheme: CustomRender = (ui, options) => render(
  ui,
  { wrapper: WithTheme, ...options },
);

export {
  renderWithTheme,
};
