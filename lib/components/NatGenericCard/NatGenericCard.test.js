import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components/native';
import { Text } from 'react-native';
import { NatGenericCard } from './NatGenericCard';

describe('NatGenericCard', () => {
  it('Should match snapshot', () => {
    const card = renderer.create(
      <NatGenericCard>
        <Text>Teste</Text>
      </NatGenericCard>,
    ).toJSON();
    expect(card).toMatchSnapshot();
  });

  describe('NatGenericCard with props - children', () => {
    it('Should render with correct children', () => {
      const component = renderer.create(
        <NatGenericCard>
          <Text>Teste</Text>
        </NatGenericCard>,
      ).toJSON();
      expect(component.children[0].type).toBe('Text');
    });
  });
});
