import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components/native';

import { NatLoading } from './NatLoading';

describe('Container component', () => {
  it('Should render loading component correctly', () => {
    const container = renderer.create(
      <NatLoading />,
    ).toJSON();
    expect(container).toMatchSnapshot();
  });

  it('Should render loading component with static styling', () => {
    const loading = renderer.create(
      <NatLoading />,
    ).toJSON();
    expect(loading).toHaveStyleRule('position', 'absolute');
    expect(loading).toHaveStyleRule('justify-content', 'center');
    expect(loading).toHaveStyleRule('align-items', 'center');
    expect(loading).toHaveStyleRule('right', 0);
    expect(loading).toHaveStyleRule('left', 0);
    expect(loading).toHaveStyleRule('top', 0);
    expect(loading).toHaveStyleRule('bottom', 0);
    expect(loading).toHaveStyleRule('z-index', 10);
  });
});
