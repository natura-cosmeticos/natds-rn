/* eslint-disable max-lines */
import React, { useState } from 'react';
import { View } from 'react-native';
import { array, boolean } from '@storybook/addon-knobs';
import { StoryContainer } from '../../common/HelperComponents/StoryContainer';

import { List, ItemProps } from './List';

export default {
  component: List,
  parameters: {
    componentSubtitle: 'List let users choose between several items',
  },
  title: 'Components|List',
};

export const Variants = () => {
  const [brand, setBrand] = useState('');

  const brands = ['natura', 'avon', 'theBodyShop', 'aesop'];
  const listBrands: ItemProps[] = brands.map(brandItem => ({
    divider: true,
    hideIconLeft: true,
    hideIconRight: true,
    id: brandItem,
    onPress: () => setBrand(brandItem),
    title: brandItem,
  }));

  return (
    <StoryContainer title="Variants">
      <List items={listBrands} selected={[brand]} onChange={() => {}} />
    </StoryContainer>
  );
};

export const State = () => {
  const [brand, setBrand] = useState('natura');

  const brands = ['natura', 'avon', 'theBodyShop', 'aesop'];
  const listBrands: ItemProps[] = brands.map(brandItem => ({
    divider: true,
    hideIconLeft: true,
    hideIconRight: true,
    id: brandItem,
    onPress: () => setBrand(brandItem),
    title: brandItem,
  }));

  return (
    <StoryContainer title="States">
      <List items={listBrands} selected={[brand]} onChange={() => {}} />
    </StoryContainer>
  );
};

export const Icons = () => {
  const [brand, setBrand] = useState('');
  const [brandIconRight, setBrandIconRight] = useState('');
  const [brandIconLeft, setBrandIconLeft] = useState('');
  const brands = ['natura', 'avon', 'theBodyShop', 'aesop'];

  const listBrands: ItemProps[] = brands.map(brandItem => ({
    divider: true,
    hideIconLeft: false,
    hideIconRight: false,
    iconLeft: 'filled-action-add',
    iconRight: 'filled-action-add',
    id: brandItem,
    onPress: () => setBrand(brandItem),
    title: brandItem,
  }));
  const listBrandsIconRight: ItemProps[] = brands.map(brandItem => ({
    divider: true,
    hideIconLeft: true,
    hideIconRight: false,
    iconRight: 'filled-action-add',
    id: brandItem,
    onPress: () => setBrandIconRight(brandItem),
    title: brandItem,
  }));
  const listBrandsIconLeft: ItemProps[] = brands.map(brandItem => ({
    divider: true,
    hideIconLeft: false,
    hideIconRight: true,
    iconLeft: 'filled-action-add',
    id: brandItem,
    onPress: () => setBrandIconLeft(brandItem),
    title: brandItem,
  }));

  return (
    <StoryContainer title="Icons">
      <View style={{ flex: 1, flexDirection: 'column' }}>
        <List
          items={listBrandsIconRight}
          selected={[brandIconRight]}
          onChange={() => {}}
        />
        <View style={{ height: 20 }} />

        <List
          items={listBrandsIconLeft}
          selected={[brandIconLeft]}
          onChange={() => {}}
        />
        <View style={{ height: 20 }} />

        <List items={listBrands} selected={[brand]} onChange={() => {}} />
      </View>
    </StoryContainer>
  );
};

export const Disabled = () => {
  const [brandDisabled, setBrandDisabled] = useState('');
  const brands = ['natura', 'avon', 'theBodyShop', 'aesop'];

  const listBrandsDisabled: ItemProps[] = brands.map(brandItem => ({
    divider: true,
    hideIconLeft: false,
    hideIconRight: true,
    iconLeft: 'filled-action-add',
    id: brandItem,
    onPress: () => setBrandDisabled(brandItem),
    title: brandItem,
  }));

  return (
    <StoryContainer title="Disabled">
        <List
          items={listBrandsDisabled}
          selected={[brandDisabled]}
          onChange={() => {}}
          disabled
        />
    </StoryContainer>
  );
};

export const Dividers = () => {
  const [brandType1, setBrandType1] = useState('');
  const [brandType2, setBrandType2] = useState('');
  const [brandType3, setBrandType3] = useState('');

  const brands = ['natura', 'avon', 'theBodyShop', 'aesop'];
  const listBrandsType1: ItemProps[] = brands.map(brandItem => ({
    divider: true,
    dividerType: 'fullBleed',
    hideIconLeft: true,
    hideIconRight: true,
    id: brandItem,
    onPress: () => setBrandType1(brandItem),
    title: brandItem,
  }));
  const listBrandsType2: ItemProps[] = brands.map(brandItem => ({
    divider: true,
    dividerType: 'inset',
    hideIconLeft: true,
    hideIconRight: true,
    id: brandItem,
    onPress: () => setBrandType2(brandItem),
    title: brandItem,
  }));
  const listBrandsType3: ItemProps[] = brands.map(brandItem => ({
    divider: true,
    dividerType: 'middle',
    hideIconLeft: true,
    hideIconRight: true,
    id: brandItem,
    onPress: () => setBrandType3(brandItem),
    title: brandItem,
  }));

  return (
    <StoryContainer title="Dividers">
      <View style={{ flex: 1, flexDirection: 'column' }}>
        <List
          items={listBrandsType1}
          selected={[brandType1]}
          onChange={() => {}}
        />
        <View style={{ height: 20 }} />

        <List
          items={listBrandsType2}
          selected={[brandType2]}
          onChange={() => {}}
        />
        <View style={{ height: 20 }} />

        <List
          items={listBrandsType3}
          selected={[brandType3]}
          onChange={() => {}}
        />
      </View>
    </StoryContainer>
  );
};

export const Interactive = () => {
  const [brand, setBrand] = useState('natura');

  const brands = ['natura', 'avon', 'theBodyShop', 'aesop'];
  const brandsKnob = array('Brands', brands);

  const listBrands: ItemProps[] = brandsKnob.map(brandItem => ({
    divider: boolean('Divider', true),
    hideIconLeft: boolean('HideIconLeft', true),
    hideIconRight: boolean('HideIconRight', true),
    id: brandItem,
    onPress: () => setBrand(brandItem),
    title: brandItem,
  }));

  return (
    <StoryContainer title="Interactive">
      <List
        items={listBrands}
        selected={[brand]}
        onChange={() => {}}
        isRequired
      />
    </StoryContainer>
  );
};

export const All = () => (
  <View>
    <Variants />
    <State />
    <Disabled />
    <Icons />
    <Dividers />
  </View>
);
