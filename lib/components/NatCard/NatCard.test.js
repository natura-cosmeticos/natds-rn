import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components/native';

import { NatCard } from './NatCard';

describe('TextInput component default', () => {
  it('Should render textInput component ', () => {
    const button = renderer.create(
      <NatCard
        title="teste"
        onPress={jest.fn()}
        imageURI="https://upload.wikimedia.org/wikipedia/pt/thumb/c/cb/Natura_Logo.png/200px-Natura_Logo.png"
        resume="teste"
      />,
    ).toJSON();
    expect(button).toMatchSnapshot();
  });
});
