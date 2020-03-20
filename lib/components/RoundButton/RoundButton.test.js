import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components/native';
import { View } from 'react-native';
import { RoundButton } from './RoundButton';

describe('RoundButton component', () => {
  it('should render round button correctly', () => {
    const button = renderer
      .create(
        <View>
          <RoundButton onPress={() => {}} text="+" type="primary" />
          <RoundButton onPress={() => {}} text="+" type="secondary" />
          <RoundButton onPress={() => {}} text="+" type="tertiary" />
          <RoundButton onPress={() => {}} type="tertiary" />
          <RoundButton
            onPress={() => {}}
            text="+"
            type="primary"
            size="large"
          />
          <RoundButton
            onPress={() => {}}
            text="+"
            type="secondary"
            size="large"
          />
          <RoundButton
            onPress={() => {}}
            text="+"
            type="tertiary"
            size="large"
          />
          <RoundButton onPress={() => {}} text="+" type="primary" size="huge" />
          <RoundButton
            onPress={() => {}}
            text="+"
            type="secondary"
            size="huge"
          />
          <RoundButton
            onPress={() => {}}
            text="+"
            type="tertiary"
            size="huge"
          />
        </View>,
      )
      .toJSON();

    expect(button).toMatchSnapshot('RoundButton snapshot');
  });
});
