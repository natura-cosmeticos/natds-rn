import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components/native';
import { StoryNatAppBar } from './StoryNatAppBar';

describe('StoryNatAppBar component', () => {
  it('Should render StoryNatAppBar component ', () => {
    const button = renderer.create(<StoryNatAppBar />).toJSON();

    expect(button).toMatchSnapshot('StoryNatAppBar snapshot');
  });
});
