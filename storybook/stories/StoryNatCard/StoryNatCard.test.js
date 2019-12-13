import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components/native';

import { StoryNatCard } from './StoryNatCard';

describe('StoryNatCard component', () => {
  it('Should render StoryNatCard component ', () => {
    const button = renderer.create(
      <StoryNatCard />,
    ).toJSON();
    expect(button).toMatchSnapshot();
  });
});
