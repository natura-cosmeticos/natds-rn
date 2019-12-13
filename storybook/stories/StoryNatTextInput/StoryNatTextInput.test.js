import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components/native';

import { StoryNatTextInput } from './StoryNatTextInput';

describe('StoryNatTextInput component', () => {
  it('Should render StoryNatTextInput component ', () => {
    const button = renderer.create(
      <StoryNatTextInput />,
    ).toJSON();
    expect(button).toMatchSnapshot();
  });
});
