import React from 'react';
import renderer from 'react-test-renderer';

import { NatGridItem } from './NatGridItem';
import {
  Thumb, Item, Description, Title,
} from './NatGridItem.styles';
import 'jest-styled-components/native';

describe('NatGridItem and local styled components', () => {
  describe('NatGridItem component', () => {
    it('Should render NatGridItem component ', () => {
      const griditem = renderer.create(
        <NatGridItem sizeMedium onPress={jest.fn()} source="#">
          Texto
        </NatGridItem>,
      ).toJSON();

      expect(griditem).toMatchSnapshot();
    });

    describe('Properties of NatGridItem', () => {
      let press = () => {};

      beforeEach(() => {
        press = jest.fn();
      });

      const props = {
        children: 'descrição',
        onPress: press,
        sizeMedium: true,
        source: '#',
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
      expect(thumb).toHaveStyleRule('height', 128);
      expect(thumb).toHaveStyleRule('border-radius', 6);
      expect(thumb).toHaveStyleRule('margin-bottom', 8);
    });

    it('Style Thumb with sizeMedium props', () => {
      const thumb = renderer.create(<Thumb sizeMedium />).toJSON();

      expect(thumb).toHaveStyleRule('width', 156);
      expect(thumb).toHaveStyleRule('height', 156);
    });
  });

  describe('Style Item', () => {
    it('Item default', () => {
      const item = renderer.create(<Item />).toJSON();

      expect(item).toHaveStyleRule('margin-right', 16);
      expect(item).toHaveStyleRule('width', 128);
      expect(item).toHaveStyleRule('height', 176);
    });

    it('Item with sizeMedium props', () => {
      const item = renderer.create(<Item sizeMedium />).toJSON();

      expect(item).toHaveStyleRule('width', 156);
      expect(item).toHaveStyleRule('height', 200);
    });
  });

  describe('Style Description', () => {
    it('Description default', () => {
      const description = renderer.create(<Description />).toJSON();

      expect(description).toHaveStyleRule('width', 128);
    });

    it('description with sizeMedium props', () => {
      const description = renderer.create(<Description sizeMedium />).toJSON();

      expect(description).toHaveStyleRule('width', 156);
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
      expect(title).toHaveStyleRule('robotoRegular');
    });
  });
});
