import React from 'react';
import { Alert } from 'react-native';

import { ContainerRow } from '../../common/HelperComponents/ThemeHelper.styles';
import { Tab } from '.';

export default {
  component: Tab,
  parameters: {
    componentSubtitle: 'Tabs allow the users to navigate between groups of contents that are at the same level of hierarchy.',
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
    Alert.alert('Current Tab', `${tabOptions[value].label}`);
  };

  return (
    <ContainerRow style={{ paddingBottom: 30 }}>
      <Tab tabOptions={tabOptions} onChange={onChange} />
    </ContainerRow>
  );
};
