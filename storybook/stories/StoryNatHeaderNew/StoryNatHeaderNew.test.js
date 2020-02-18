import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components/native';

import { StoryNatHeaderNew } from './StoryNatHeaderNew';

describe('StoryNatHeaderNew component', () => {
  it('Should render StoryNatHeaderNew component ', () => {
    const button = renderer.create(
      <StoryNatHeaderNew />,
    ).toJSON();
    expect(button).toMatchSnapshot();
  });
});
