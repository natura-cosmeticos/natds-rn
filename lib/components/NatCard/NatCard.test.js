import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import 'jest-styled-components/native';

import { NatCard } from './NatCard';

describe('TextInput component default', () => {
  it('Should render textInput component ', () => {
    const button = renderer.create(
      <NatCard
        title="teste"
        onPress={jest.fn()}
        imageURI="https://www.harley-davidson.com/content/dam/h-d/images/motorcycles/my19/softail/fxdr-114/overview/hdi/19-softail-fxdr114-hdi-hero.jpg"
        resume="teste"
      />
    ).toJSON();
    expect(button).toMatchSnapshot();
  });

});
