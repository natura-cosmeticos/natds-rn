import React from 'react';
import { renderWithTheme } from '../../../test/testHelpers';
import { Counter } from './Counter';

describe('Counter', () => {
  it('should render with default props', () => {
    const { getByTestId } = renderWithTheme(<Counter />);

    expect(getByTestId('counter')).toBeTruthy();
  });
});
