import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components/native';

import { StoryDivider } from './StoryDivider';

describe('StoryDivider component', () => {
  it('Should render StoryDivider component ', () => {
    const button = renderer.create(
      <StoryDivider />,
    ).toJSON();

    expect(button).toMatchSnapshot('StoryDivider snapshot');
  });
});
