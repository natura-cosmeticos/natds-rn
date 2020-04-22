import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components/native';
import { StoryNatSelectInput } from './StoryNatSelectInput';

describe('StoryNatSelectInput component', () => {
  it('Should render StoryNatSelectInput component ', () => {
    const button = renderer.create(<StoryNatSelectInput />).toJSON();

    expect(button).toMatchSnapshot('StoryNatSelectInput snapshot');
  });
});
