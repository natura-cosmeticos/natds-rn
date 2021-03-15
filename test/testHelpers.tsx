import React, { ReactElement } from 'react';
import { render, RenderAPI, RenderOptions } from '@testing-library/react-native'
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

const customRender: CustomRender = (ui, options) => render(
  ui,
  { wrapper: WithTheme, ...options },
);


// eslint-disable-next-line import/no-extraneous-dependencies
export * from '@testing-library/react-native';

export {
  customRender as render,
};
