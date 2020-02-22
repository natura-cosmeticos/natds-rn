import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components/native';

import { StoryNatButton } from './StoryNatButton';

describe('StoryNatButton component', () => {
  it('Should render StoryNatButton component ', () => {
    const button = renderer.create(
      <StoryNatButton />,
    ).toJSON();

    expect(button).toMatchSnapshot();
  });
});
