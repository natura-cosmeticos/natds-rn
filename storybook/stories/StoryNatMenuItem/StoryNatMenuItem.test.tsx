import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components/native';
import { StoryNatMenuItem } from './StoryNatMenuItem';

describe('StoryNatMenuItem component', () => {
  it('Should render StoryNatMenuItem component ', () => {
    const button = renderer.create(<StoryNatMenuItem />).toJSON();

    expect(button).toMatchSnapshot('StoryNatMenuItem snapshot');
  });
});
