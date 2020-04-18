import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components/native';
import { StoryAvatar } from './StoryAvatar';

describe('StoryAvatar component', () => {
  it('should render correctly', () => {
    const button = renderer.create(<StoryAvatar />).toJSON();

    expect(button).toMatchSnapshot('StoryAvatar snapshot');
  });
});
