import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react-native';
import { ThemeProvider } from 'styled-components/native';
import theme from '../../common/themeSelectors/theme/mock-theme.json';

import { Divider, DividerTypes } from './Divider';

const renderDivider = (fn, type?: DividerTypes) => fn(
    <ThemeProvider theme={theme}>
      <Divider type={type} />
    </ThemeProvider>,
);

describe('Divider component', () => {
  it('Should render divider with default type', () => {
    const { queryByTestId } = renderDivider(render);

    expect(queryByTestId('divider')?.props).toHaveProperty('type', 'fullBleed');
  });
  it('Should render divider with inset type', () => {
    const { queryByTestId } = renderDivider(render, 'inset');

    expect(queryByTestId('divider')?.props).toHaveProperty('type', 'inset');
  });
  it('Should render divider with middle type', () => {
    const { queryByTestId } = renderDivider(render, 'middle');

    expect(queryByTestId('divider')?.props).toHaveProperty('type', 'middle');
  });

  it('Should render divider component fullBleed', () => {
    const divider = renderDivider(renderer.create);

    expect(divider).toMatchSnapshot();
  });

  it('Should render divider component inset', () => {
    const divider = renderDivider(renderer.create, 'inset').toJSON();

    expect(divider).toMatchSnapshot();
  });

  it('Should render divider component middle', () => {
    const divider = renderDivider(renderer.create, 'middle').toJSON();

    expect(divider).toMatchSnapshot();
  });
});
