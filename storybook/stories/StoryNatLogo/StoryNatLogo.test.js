import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components/native';

import { StoryNatLogo } from './StoryNatLogo';

describe('StoryNatLogo component', () => {
  it('Should render StoryNatLogo component ', () => {
    const button = renderer.create(
      <StoryNatLogo />,
    ).toJSON();
    expect(button).toMatchSnapshot();
  });
});
