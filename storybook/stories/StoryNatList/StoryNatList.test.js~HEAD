import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components/native';

import { StoryNatList } from './StoryNatList';

describe('StoryNatList component', () => {
  it('Should render StoryNatList component ', () => {
    const button = renderer.create(
      <StoryNatList />,
    ).toJSON();
    expect(button).toMatchSnapshot();
  });
});
