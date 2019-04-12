import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import 'jest-styled-components/native';

import { Text } from 'react-native';
import { NatButton } from './NatButton';
import { ButtonIcon } from './NatButton.styles';


describe('Button component', () => {
  it('Should render button component ', () => {
    const button = renderer.create(
      <NatButton label="string" onPress={jest.fn()}>
        <Text>Oi</Text>
      </NatButton>,
    ).toJSON();
    expect(button).toMatchSnapshot();
  });

  describe('when is card type', () => {
    const props = {
      type: 'card',
      label: 'test',
      onPress: jest.fn(),
    };

    it('Should render button component ', () => {
      const button = renderer.create(<NatButton {...props} />).toJSON();
      expect(button).toMatchSnapshot();
    });

    it('should have an icon', () => {
      const wrapper = shallow(<NatButton {...props} />);
      expect(wrapper.find(ButtonIcon).length).toBe(1);
    });
  });
});
