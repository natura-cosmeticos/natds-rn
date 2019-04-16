import React from 'react';
import renderer from 'react-test-renderer';

import { NatGridItem } from './NatGridItem';
import {
  Thumb, Item, Description, Title,
} from './NatGridItem.styles';
import 'jest-styled-components/native';


describe('NatGridItem component', () => {
  it('Should render NatGridItem component ', () => {
    const griditem = renderer.create(
      <NatGridItem square onPress={jest.fn()} source="#">
        Texto
      </NatGridItem>,
    ).toJSON();
    expect(griditem).toMatchSnapshot();
  });

  describe('Properties of NatGridItem', () => {
    const press = jest.fn();

    const props = {
      source: '#',
      square: true,
      onPress: press,
      children: 'descrição',
    };

    it('Should render NatGridItem component ', () => {
      const griditem = renderer.create(<NatGridItem {...props} />).toJSON();
      expect(griditem).toMatchSnapshot();
    });
  });
});

describe('Style Thumb', () => {
  it('Thumb default', () => {
    const thumb = renderer.create(<Thumb />).toJSON();
    expect(thumb).toHaveStyleRule('width', 128);
    expect(thumb).toHaveStyleRule('height', 80);
    expect(thumb).toHaveStyleRule('border-radius', 6);
  });

  it('Style Thumb with square props', () => {
    const thumb = renderer.create(<Thumb square />).toJSON();
    expect(thumb).toHaveStyleRule('width', 152);
    expect(thumb).toHaveStyleRule('height', 152);
  });
});

describe('Style Item', () => {
  it('Item default', () => {
    const item = renderer.create(<Item />).toJSON();
    expect(item).toHaveStyleRule('margin-left', 12);
    expect(item).toHaveStyleRule('margin-right', 12);
    expect(item).toHaveStyleRule('margin-bottom', 12);
    expect(item).toHaveStyleRule('width', 128);
    expect(item).toHaveStyleRule('height', 128);
  });

  it('Item with square props', () => {
    const item = renderer.create(<Item square />).toJSON();
    expect(item).toHaveStyleRule('width', 152);
    expect(item).toHaveStyleRule('height', 200);
  });
});

describe('Style Description', () => {
  it('Description default', () => {
    const description = renderer.create(<Description />).toJSON();
    expect(description).toHaveStyleRule('width', 128);
    expect(description).toHaveStyleRule('height', 40);
    expect(description).toHaveStyleRule('margin-top', 8);
  });

  it('description with square props', () => {
    const description = renderer.create(<Description square />).toJSON();
    expect(description).toHaveStyleRule('width', 152);
  });
});

describe('Style Title', () => {
  it('Title default', () => {
    const title = renderer.create(<Title />).toJSON();
    expect(title).toHaveStyleRule('flex');
    expect(title).toHaveStyleRule('font-size', 14);
    expect(title).toHaveStyleRule('font-weight', '500');
    expect(title).toHaveStyleRule('font-style', 'normal');
    expect(title).toHaveStyleRule('font-align');
    expect(title).toHaveStyleRule('color', '#777777');
    expect(title).toHaveStyleRule('font-family', 'Roboto');
  });
});
