import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import 'jest-styled-components/native';

import { NatLogoHorizontal } from './NatLogoHorizontal';

describe('NatLogoHorizontal component default', () => {
  it('Should render NatLogoHorizontal component ', () => {
    const button = renderer.create(
      <NatLogoHorizontal />
    ).toJSON();
    expect(button).toMatchSnapshot();
  });
});
