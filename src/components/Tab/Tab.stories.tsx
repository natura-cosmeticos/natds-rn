import React from 'react';
import { Alert } from 'react-native';
import { Tab } from '.';

export default {
  component: Tab,
  parameters: {
    componentSubtitle: 'Buttons allow users to take actions, and make choices, with a single tap.',
  },
  title: 'Components|Tab',
};

export const fixed = () => {
  const tabOptions = [
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

  const onChange = (value: number) => {
    Alert.alert('current value', `${value}`);
  };

  return (
    <Tab tabOptions={tabOptions} onChange={onChange} />
  );
};
