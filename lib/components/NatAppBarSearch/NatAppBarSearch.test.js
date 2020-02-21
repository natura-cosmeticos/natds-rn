import React from 'react';
import renderer from 'react-test-renderer';

import { NatAppBarSearch } from './NatAppBarSearch';

describe('Header component', () => {
  it('Should render container component correctly', () => {
    const header = renderer.create(
      <NatAppBarSearch
        title="Title test"
        onPress={jest.fn()}
      />,
    ).toJSON();

    expect(header).toMatchSnapshot('NatAppBarSearch default render');
  });
});
