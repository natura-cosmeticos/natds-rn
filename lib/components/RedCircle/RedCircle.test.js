import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components/native';

import { RedCircle } from './RedCircle';

describe('RedCircle component default', () => {
  it('Should render RedCircle RedCircle ', () => {
    const circle = renderer.create(<RedCircle />).toJSON();

    expect(circle).toMatchSnapshot('RedCircle snapshot');
  });
});
