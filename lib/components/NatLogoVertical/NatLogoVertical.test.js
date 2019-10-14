import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import 'jest-styled-components/native';

import { NatLogoVertical } from './NatLogoVertical';

describe('NatLogoVertical component default', () => {
  it('Should render NatLogoVertical component ', () => {
    const button = renderer.create(
      <NatLogoVertical />
    ).toJSON();
    expect(button).toMatchSnapshot();
  });
});
