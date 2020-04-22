import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components/native';

import { View } from 'react-native';
import { StoryFAB } from './StoryFAB';

describe('StoryFAB component', () => {
  it('Should render StoryFAB component ', () => {
    const button = renderer
      .create(
        <View>
          <StoryFAB type="round" value="+" />
          <StoryFAB type="extended" value="extended" />
        </View>,
      )
      .toJSON();

    expect(button).toMatchSnapshot('StoryFAB snapshot');
  });
});
