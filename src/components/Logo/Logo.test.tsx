/* eslint-disable mocha/no-setup-in-describe */
/* eslint-disable mocha/no-skipped-tests */
import React from 'react';
import { Logo } from './Logo';
import { renderWithTheme } from '../../../test/testHelpers';

describe('Logo component', () => {
  it('should render correctly with default props', () => {
    const { getByTestId } = renderWithTheme(<Logo />);

    expect(getByTestId('logo')).toBeTruthy();
  });
  it('should render correctly with given model', () => {
    const { getByTestId } = renderWithTheme(<Logo model="b" />);

    expect(getByTestId('logo')).toBeTruthy();
  });
  it('should render correctly with given color', () => {
    const { getByTestId } = renderWithTheme(<Logo color="primary" />);

    expect(getByTestId('logo')).toBeTruthy();
  });
  it('should render correctly with given size', () => {
    const { getByTestId } = renderWithTheme(<Logo size="medium" />);

    expect(getByTestId('logo')).toBeTruthy();
  });
});
