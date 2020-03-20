import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components/native';

import { StoryRoundButton } from './StoryRoundButton';

describe('StoryRoundButton component', () => {
  it('Should render StoryRoundButton component ', () => {
    const button = renderer.create(
      <StoryRoundButton />,
    ).toJSON();

    expect(button).toMatchSnapshot('StoryRoundButton snapshot');
  });
});