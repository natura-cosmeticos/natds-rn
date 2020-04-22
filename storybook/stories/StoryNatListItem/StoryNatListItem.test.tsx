import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components/native';
import { StoryNatListItem } from './StoryNatListItem';

describe('StoryNatListItem component', () => {
  it('Should render StoryNatListItem component ', () => {
    const button = renderer.create(<StoryNatListItem />).toJSON();

    expect(button).toMatchSnapshot('StoryNatListItem snapshot');
  });
});
