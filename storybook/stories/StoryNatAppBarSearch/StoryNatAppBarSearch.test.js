import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components/native';

import { StoryNatAppBarSearch } from './StoryNatAppBarSearch';

describe('StoryNatAppBarSearch component', () => {
  it('Should render StoryNatAppBarSearch component ', () => {
    const button = renderer.create(
      <StoryNatAppBarSearch />,
    ).toJSON();
    expect(button).toMatchSnapshot();
  });
});
