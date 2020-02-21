import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components/native';

import { ThemeNaturaLight } from './ThemeNaturaLight';

describe('ThemeNaturaLight component', () => {
  it('Should render ThemeNaturaLight component ', () => {
    const button = renderer.create(
      <ThemeNaturaLight />,
    ).toJSON();

    expect(button).toMatchSnapshot();
  });
});
