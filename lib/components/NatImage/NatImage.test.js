import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import 'jest-styled-components/native';

import { NatImage } from './NatImage';

describe('NatImage component default', () => {
  it('Should render NatImage component ', () => {
    const button = renderer.create(
      <NatImage />,
    ).toJSON();
    expect(button).toMatchSnapshot();
  });
});
