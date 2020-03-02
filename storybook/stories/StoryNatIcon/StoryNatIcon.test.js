import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components/native';

import { StoryNatIcon } from './StoryNatIcon';

describe('StoryNatIcon component', () => {
  it('Should render StoryNatIcon component ', () => {
    const button = renderer.create(
      <StoryNatIcon />,
    ).toJSON();

    expect(button).toMatchSnapshot('StoryNatIcon snapshot');
  });
});
