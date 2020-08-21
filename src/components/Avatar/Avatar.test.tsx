import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react-native';
import '@testing-library/jest-native/extend-expect';
import { ThemeProvider } from 'styled-components/native';
import theme from '../../common/themeSelectors/theme/mock-theme.json';

import { Avatar, AvatarTypes } from './Avatar';

const renderAvatar = (fn, type?: AvatarTypes) => fn(
    <ThemeProvider theme={theme}>
      <Avatar type={type} />
    </ThemeProvider>,
);

describe('Avatar component', () => {
  it('Should render avatar with default type', () => {
    const { queryByTestId } = renderAvatar(render);

    expect(queryByTestId('avatar')?.props).toHaveProperty('type', 'anonymous');
  });
  it('Should render avatar with anonymous type', () => {
    const { queryByTestId } = renderAvatar(render, 'anonymous');

    expect(queryByTestId('avatar')?.props).toHaveProperty('type', 'anonymous');
  });
  it('Should render avatar with image type', () => {
    const { queryByTestId } = renderAvatar(render, 'image');

    expect(queryByTestId('avatar')?.props).toHaveProperty('type', 'image');
  });
  it('Should render avatar with letter type', () => {
    const { queryByTestId } = renderAvatar(render, 'letter');

    expect(queryByTestId('avatar')?.props).toHaveProperty('type', 'letter');
  });

  it('Should render avatar component', () => {
    const avatar = renderAvatar(renderer.create);

    expect(avatar).toMatchSnapshot();
  });

  it('Should render avatar component anonymous', () => {
    const avatar = renderAvatar(renderer.create, 'anonymous').toJSON();

    expect(avatar).toMatchSnapshot();
  });

  it('Should render avatar component image', () => {
    const avatar = renderAvatar(renderer.create, 'image').toJSON();

    expect(avatar).toMatchSnapshot();
  });

  it('Should render avatar component letter', () => {
    const avatar = renderAvatar(renderer.create, 'letter').toJSON();

    expect(avatar).toMatchSnapshot();
  });
});
