import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components/native';

import { StoryTokenSpace } from './StoryTokenSpace';

describe('StoryTokenSpace component', () => {
  it('Should render StoryTokenSpace component ', () => {
    const button = renderer.create(
      <StoryTokenSpace />,
    ).toJSON();
    expect(button).toMatchSnapshot();
  });
});
