/* eslint-disable max-lines */
import React from 'react';
import { Alert, View } from 'react-native';

import { boolean, select } from '@storybook/addon-knobs';
import { Tab } from '.';
import { TabPositions, IconPositions } from './Tab.types';

export default {
  component: Tab,
  parameters: {
    componentSubtitle: 'Tabs allow the users to navigate between groups of contents that are at the same level of hierarchy.',
  },
  title: 'Components|Tab',
};

const tabPositions = {
  fixed: 'fixed',
  scrollable: 'scrollable',
};

const iconPositions = {
  icon: 'icon',
  leading: 'leading',
  none: 'none',
  top: 'top',
};

const easyTabOptions = [
  {
    key: 'itemOne',
    label: 'Item One',
  },
  {
    key: 'itemTwo',
    label: 'Item Two',
  },
  {
    key: 'itemThree',
    label: 'Item Three',
  },
];

const iconTabOptions = [
  {
    iconName: 'outlined-default-mockup',
    key: 'itemOne',
    label: 'Item One',
  },
  {
    iconName: 'outlined-default-mockup',
    key: 'itemTwo',
    label: 'Item Two',
  },
  {
    iconName: 'outlined-default-mockup',
    key: 'itemThree',
    label: 'Item Three',
  },
];

const easyOnChange = (value: number) => {
  Alert.alert('Current Tab', `${easyTabOptions[value].label}`);
};

export const Positions = () => {
  const scrollableTabOptions = [
    ...easyTabOptions,
    {
      key: 'itemFourth',
      label: 'Item Four',
    },
  ];

  const onChange = (value: number) => {
    Alert.alert('Current Tab', `${scrollableTabOptions[value].label}`);
  };

  return (
    <>
      <View style={{ maxWidth: 600, paddingBottom: 30 }}>
        <Tab tabOptions={easyTabOptions} onChange={onChange} />
      </View>
      <View style={{ maxWidth: 600, paddingBottom: 30 }}>
        <Tab position="scrollable" tabOptions={scrollableTabOptions} onChange={onChange} />
      </View>
    </>
  );
};

export const Icon = () => {
  const onChange = (value: number) => {
    Alert.alert('Current Tab', `${iconTabOptions[value].label}`);
  };

  return (
    <>
      <View style={{ maxWidth: 600, paddingBottom: 30 }}>
        <Tab iconPosition="leading" tabOptions={iconTabOptions} onChange={onChange} />
      </View>
      <View style={{ maxWidth: 600, paddingBottom: 30 }}>
        <Tab iconPosition="top" tabOptions={iconTabOptions} onChange={onChange} />
      </View>
      <View style={{ maxWidth: 600, paddingBottom: 30 }}>
        <Tab iconPosition="icon" tabOptions={iconTabOptions} onChange={onChange} />
      </View>
    </>
  );
};

export const Disabled = () => {
  const tabOptions = [
    {
      disabled: true,
      key: 'itemOne',
      label: 'Item One',
    },
    {
      key: 'itemTwo',
      label: 'Item Two',
      selected: true,
    },
    {
      key: 'itemThree',
      label: 'Item Three',
    },
  ];

  const onChange = (value: number) => {
    Alert.alert('Current Tab', `${tabOptions[value].label}`);
  };

  return (
    <View style={{ maxWidth: 600, paddingBottom: 30 }}>
      <Tab tabOptions={tabOptions} onChange={onChange} />
    </View>
  );
};

export const Elevation = () => (
  <View style={{ maxWidth: 600, paddingBottom: 30 }}>
    <Tab elevation={true} tabOptions={easyTabOptions} onChange={easyOnChange} />
  </View>
);

export const Color = () => (
  <View style={{ maxWidth: 600, paddingBottom: 30 }}>
    <Tab backgroundColor={false} tabOptions={easyTabOptions} onChange={easyOnChange} />
  </View>
);

export const Interactive = () => {
  const onChange = (value: number) => {
    Alert.alert('Current Tab', `${iconTabOptions[value].label}`);
  };

  return (
    <View style={{ maxWidth: 600, paddingBottom: 30 }}>
      <Tab
        tabOptions={iconTabOptions}
        onChange={onChange}
        elevation={boolean('Elevation', false)}
        backgroundColor={boolean('BackgroundColor', true)}
        position={select('Position', tabPositions, 'fixed') as TabPositions}
        iconPosition={select('Icon Position', iconPositions, 'none') as IconPositions}
      />
    </View>
  );
};


export const All = () => (
  <>
    <Color />
    <Disabled />
    <Elevation />
    <Icon />
    <Positions />
  </>
);
