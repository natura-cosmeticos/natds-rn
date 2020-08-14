import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react-native';
import '@testing-library/jest-native/extend-expect';
import { ThemeProvider } from 'styled-components/native';
import { Text } from 'react-native';
import theme from '../../common/themeSelectors/theme/mock-theme.json';
import { Card, CardTypes } from './Card';

jest.useFakeTimers();

const renderCard = (fn, props?: CardTypes) => fn(
    <ThemeProvider theme={theme}>
      <Card>
        <Text>{props}</Text>
      </Card>
    </ThemeProvider>,
);

describe('Card component', () => {
  it('Should render Base type as default', () => {
    const { queryByTestId } = renderCard(render);

    expect(queryByTestId('card')?.props).toHaveProperty('type', 'base');
  });
  it('Should render Card component', () => {
    const card = renderCard(renderer.create);

    expect(card).toMatchSnapshot();
  });
});
