import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react-native';
import '@testing-library/jest-native/extend-expect';
import { ThemeProvider } from 'styled-components/native';
import { Button } from './Button';
import theme from '../../common/themeSelectors/theme/mock-theme.json';

jest.mock('../../common/themeSelectors', () => (
  {
    getButtonPropsBySize: () => ({ background: '#AEAEAE' }),
    getColorHighEmphasis: () => '#FAF3E3',
    getColorOnPrimary: () => '#F4F4',
    getColorPrimary: () => '#FFFFFF',
    getRadiusPropsBySize: () => 42,
    getShadowBySize: () => ({ shadowColor: '#AEAEAE' }),
    getTheme: fn => fn(),
  }));

describe('Button component', () => {
  it('Should render button with a text', () => {
    const { queryByTestId } = render(
      <ThemeProvider theme={theme}>
        <Button text="texto legal"/>
      </ThemeProvider>,
    );

    expect(queryByTestId('button')).toHaveTextContent('texto legal');
  });

  it('Should render button with default props', () => {
    const { queryByTestId } = render(
      <ThemeProvider theme={theme}>
        <Button text="texto legal"/>
      </ThemeProvider>,
    );

    expect(queryByTestId('button')?.props).toHaveProperty('type', 'contained');
  });

  it('Should render button with type props', () => {
    const { queryByTestId } = render(
      <ThemeProvider theme={theme}>
        <Button type="outlined" text="texto legal"/>
      </ThemeProvider>,
    );

    expect(queryByTestId('button')).toHaveStyle({
      borderWidth: 1,
    });
  });

  it('Should render button component outlined', () => {
    const button = renderer.create(
      <ThemeProvider theme={theme}>
        <Button type="outlined" text="texto legal"/>
      </ThemeProvider>,
    ).toJSON();

    expect(button).toMatchSnapshot();
  });

  it('Should render button component contained', () => {
    const button = renderer.create(
      <ThemeProvider theme={theme}>
        <Button text="texto legal"/>
      </ThemeProvider>,
    ).toJSON();

    expect(button).toMatchSnapshot();
  });

  it('Should render button component text', () => {
    const button = renderer.create(
      <ThemeProvider theme={theme}>
        <Button type="text" text="texto legal"/>
      </ThemeProvider>,
    ).toJSON();

    expect(button).toMatchSnapshot();
  });
});
