import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components/native';

import { StoryButton } from './StoryButton';

describe('StoryButton component', () => {
  it('Should render StoryButton component ', () => {
    const button = renderer.create(
      <StoryButton />,
    ).toJSON();

    expect(button).toMatchSnapshot('StoryButton default render');
  });
});
