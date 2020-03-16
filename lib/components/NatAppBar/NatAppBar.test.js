import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import { NatAppBar } from './NatAppBar';
import { HeaderTitle } from './NatAppBar.styles';

describe('NatAppBar component', () => {
  it('Should render container component correctly', () => {
    const header = renderer.create(
      <NatAppBar
        title="Title test"
        onPress={jest.fn()}
      />,
    ).toJSON();

    expect(header).toMatchSnapshot('NatAppBar snapshot');
  });

  it('Should render header component with title', () => {
    const wrapper = shallow(
      <NatAppBar
        title="Title test"
        onPress={jest.fn()}
      />,
    );

    expect(wrapper.find(HeaderTitle).text()).toBe('Title test');
  });
});
