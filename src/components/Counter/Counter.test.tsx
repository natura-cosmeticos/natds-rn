import React from 'react';
import { renderWithTheme } from '../../../test/testHelpers';
import { Counter } from './Counter';

describe('Counter', () => {
  it('should render with default props', () => {
    const { getByTestId } = renderWithTheme(<Counter />);

    expect(getByTestId('counter')).toBeTruthy();
  });
  it('should render with given value', () => {
    const { getByTestId } = renderWithTheme(<Counter value={10} />);

    expect(getByTestId('counter-input').props.value).toBe('10');
  });
  it('should render with given label', () => {
    const { getByTestId } = renderWithTheme(<Counter label="testing label" />);

    expect(getByTestId('counter-label')).toHaveTextContent('testing label');
  });
  it('should render with given size', () => {
    const { getByTestId } = renderWithTheme(<Counter size="semiX" />);

    expect(getByTestId('counter')).toHaveStyle({ height: 40 });
  });
});
