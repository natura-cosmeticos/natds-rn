import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components/native';
import { shallow } from 'enzyme';

import { View } from 'react-native';

import { FAB } from './FAB';

describe('FAB component', () => {
  it('should render FAB component', () => {
    const button = renderer
      .create(
        <View>
          <FAB
            type="extended"
            value="extended"
            onPress={() => {}}
            color="primary"
          />
          <FAB
            type="extended"
            value="extended"
            size="medium"
            onPress={() => {}}
            color="primary"
          />
          <FAB
            type="extended"
            value="extended"
            size="large"
            onPress={() => {}}
            color="primary"
          />
          <FAB type="round" value="+" onPress={() => {}} color="primary" />
          <FAB
            type="round"
            value="+"
            size="medium"
            onPress={() => {}}
            color="primary"
          />
          <FAB
            type="round"
            value="+"
            size="large"
            onPress={() => {}}
            color="primary"
          />
          <FAB type="extended" value="default" onPress={() => {}} />
          <FAB
            type="extended"
            value="primary"
            color="primary"
            onPress={() => {}}
          />
          <FAB
            type="extended"
            value={'secondary'}
            color="secondary"
            onPress={() => {}}
          />
          <FAB type="round" value="+" color="default" onPress={() => {}} />
          <FAB type="round" value="+" color="primary" onPress={() => {}} />
          <FAB type="round" value="+" color="secondary" onPress={() => {}} />
        </View>,
      )
      .toJSON();

    expect(button).toMatchSnapshot('FAB snapshot');
  });
  it('should render the extend type correctly', () => {
    const button = shallow(
      <FAB onPress={jest.fn()} type="extended" value="extended" />,
    );

    expect(button.prop('type')).toEqual('extended');
    expect(button.text()).toEqual('extended');
  });
  it('should render the round type correctly', () => {
    const button = shallow(<FAB onPress={jest.fn()} type="round" value="+" />);

    expect(button.prop('type')).toEqual('round');
    expect(button.text()).toEqual('+');
  });
});
