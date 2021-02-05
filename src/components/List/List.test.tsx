import '@testing-library/jest-native/extend-expect';
import React from 'react';
import { render } from '@testing-library/react-native';
import { ThemeProvider } from 'styled-components/native';
import theme from '../../common/themeSelectors/theme/mock-theme.json';

import { List, ListProps, ItemProps } from './List';

jest.mock('../../common/themeSelectors', () => ({
  getColorBackground: () => '#FFFFFF',
  getColorHighEmphasis: () => '#FAF3E3',
  getColorLowEmphasis: () => '#FEEEEF',
  getColorPrimary: () => '#FFFFFF',
  getSpacingTiny: () => 10,
}));

const renderList = (fn, props: ListProps) => (
  fn(
    <ThemeProvider theme={theme}>
      <List {...props} />
    </ThemeProvider>,
  )
);

describe('List component', () => {
  const listItems: ItemProps[] = [
    {
      divider: true,
      hideIconLeft: true,
      hideIconRight: true,
      id: '1',
      onPress: () => {},
      title: 'Title Text',
    },
    {
      divider: true,
      hideIconLeft: true,
      hideIconRight: true,
      id: '2',
      onPress: () => {},
      title: 'Title Text',
    },
    {
      divider: true,
      hideIconLeft: true,
      hideIconRight: true,
      id: '3',
      onPress: () => {},
      title: 'Title Text',
    },
    {
      divider: true,
      hideIconLeft: true,
      hideIconRight: true,
      id: '4',
      onPress: () => {},
      title: 'Title Text',
    },
  ];

  it('Should render List component correctly', () => {
    const defaultProps: ListProps = {
      isRequired: false,
      items: listItems,
      multiSelect: false,
      onChange: () => {},
      selected: [listItems[0].id],
      theme,
    };

    const list = renderList(render, defaultProps).asJSON();

    expect(list).toMatchSnapshot('List snapshot');
  });
});
