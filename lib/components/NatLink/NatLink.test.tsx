import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components/native';
import { NatLink } from './NatLink';

describe('NatText component default', () => {
  it('Should render NatText component ', () => {
    const button = renderer.create(<NatLink value="Teste" />).toJSON();

    expect(button).toMatchSnapshot('NatLink snapshot');
  });
});
