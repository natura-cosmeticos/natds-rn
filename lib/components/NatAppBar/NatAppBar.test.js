import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import { NatAppBar } from './NatAppBar';
import { HeaderTitle } from './NatAppBar.styles';

describe('Header component', () => {
  it('Should render container component correctly', () => {
    const header = renderer.create(
      <NatAppBar
        title="Title test"
        onPress={jest.fn()}
      />,
    ).toJSON();

    expect(header).toMatchSnapshot();
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

  it('Should throw exception when header component title is empty', () => {
    expect(() => shallow(
      <NatAppBar
        title=""
        onPress={jest.fn()}
      />,
    )).toThrow('Title should not empty string');
  });
});
