import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import 'jest-styled-components/native';

import { NatText } from './NatText';

describe('NatText component default', () => {
  it('Should render NatText component ', () => {
    const button = renderer.create(
      <NatText value="Teste" />
    ).toJSON();
    expect(button).toMatchSnapshot();
  });
});
