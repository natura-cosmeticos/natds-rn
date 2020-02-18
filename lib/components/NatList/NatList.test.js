import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import { NatList } from './NatList';
import { HeaderTitle } from './NatList.styles';

describe('Header component', () => {
  const listItems = [
    {
      id: '1',
      title: 'Title Text',
      iconLeft: { svg: { name: 'outlined-navigation-menu' } },
      iconRight: { svg: { name: 'outlined-action-autofilter' } },
      onPressLeft: () => alert('press'),
      onPress: () => alert('press'),
      onPressRight: () => alert('press'),
    },
    {
      id: '2',
      title: 'Title Text',
      iconRight: { svg: { name: 'outlined-action-autofilter' } },
      iconLeft: false,
      onPressLeft: () => alert('press'),
      onPressRight: () => alert('press'),
      dividerBottom: true,
    },
    {
      id: '3',
      title: 'Title Text',
      iconLeft: { svg: { name: 'outlined-navigation-menu' } },
      iconRight: false,
      onPressLeft: () => alert('press'),
      onPressRight: () => alert('press'),
    },
    {
      id: '4',
      title: 'Title Text',
      iconLeft: { svg: { name: 'outlined-navigation-menu' } },
      iconRight: false,
      onPressLeft: () => alert('press'),
      onPressRight: () => alert('press'),
      dividerTop: true,
    },
  ];

  it('Should render container component correctly', () => {
    const header = renderer.create(
      <NatList
        items={listItems}
      />,
    ).toJSON();

    expect(header).toMatchSnapshot();
  });

  it('Should render header component with title', () => {
    shallow(
      <NatList
        items={listItems}
        select="1"
      />,
    );
  });
});
