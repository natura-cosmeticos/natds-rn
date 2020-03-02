import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components/native';

import { NatLogo } from './NatLogo';

describe('NatLogo component default', () => {
  it('Should render NatLogo component ', () => {
    const button = renderer.create(
      <NatLogo />,
    ).toJSON();

    expect(button).toMatchSnapshot('NatLogo snapshot');
  });
});
