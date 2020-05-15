import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components/native';
import { shallow } from 'enzyme';

import { TabBar } from './TabBar';
import { TabButton } from './TabBar.styles';

const navigation = {
  routes: [
    {
      key: 'given',
      title: 'Given',
    },
    {
      key: 'received',
      title: 'Received',
    },
    {
      key: 'disabled',
      status: 'disabled',
      title: 'Disabled',
    },
  ],
};

describe('TabBar Component', () => {
  it('should render the tab bar correctly', () => {
    const wrapper = renderer
      .create(
        <TabBar
          setIndex={jest.fn()}
          navigationState={navigation}
          position={{}}
        />,
      )
      .toJSON();

    expect(wrapper).toMatchSnapshot('Tabbar snapshot with uppercase');
  });
  it('should render each type with no uppercase titles correctly', () => {
    const wrapper = renderer
      .create(
        <TabBar
          setIndex={jest.fn()}
          navigationState={navigation}
          position={{}}
          noUppercase
        />,
      )
      .toJSON();

    expect(wrapper).toMatchSnapshot('Tabbar snapshot without uppercase');
  });
  it('should render all children correctly', () => {
    const wrapper = shallow(<TabBar
      setIndex={jest.fn()}
      navigationState={navigation}
      position={{}}
    />);

    expect(wrapper.find(TabButton)).toHaveLength(3);
  });

  it('should render each type with a different type', () => {
    const wrapper = shallow(<TabBar
      setIndex={jest.fn()}
      navigationState={navigation}
      position={{}}
      value={1}
    />);

    expect(wrapper.find(TabButton).at(1).prop('type')).toEqual('primary');
    expect(wrapper.find(TabButton).at(0).prop('type')).toEqual('secondary');
    expect(wrapper.find(TabButton).at(2).prop('type')).toEqual('disabled');
  });
});
