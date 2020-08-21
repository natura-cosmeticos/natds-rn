import React, { useState } from 'react';
import { withTheme } from 'styled-components/native';
import { Theme } from '../../common/themeSelectors';

import {
  TabWrapper, TabButton, TabText, TabButtonTypes,
} from './Tab.styles';

export interface TabOptions {
  key: string;
  label: string;
}

export interface TabProps {
  /**
   * Array of Tab options with key and label
   */
  tabOptions: TabOptions[];
  /**
   * The onChange prop allows passing a function that will be called
   * once the tab option has been pressed.
   */
  onChange: (value: number) => void;
  /**
   * The tab theme
   */
  theme: Theme;
  /**
   * Optional ID for testing
   */
  testID?: string;
}

const TabComponent = ({
  testID = 'tab', theme, tabOptions, onChange,
}: TabProps) => {
  const [activeTab, setActiveTab] = useState(0);

  const handlePress = (index: number) => {
    onChange(index);
    setActiveTab(index);
  };

  const getCurrentType = (index: number): TabButtonTypes => {
    if (activeTab === index) {
      return 'primary';
    }

    return 'secondary';
  };

  return (
    <TabWrapper theme={theme} testID={testID}>
      {tabOptions.map((tabOption, index) => (
        <TabButton
          key={tabOption.key}
          onPress={() => handlePress(index)}
          theme={theme}
          type={getCurrentType(index)}
        >
          <TabText theme={theme} type={getCurrentType(index)} style={{ fontWeight: 'bold' }}>
            {tabOption.label.toUpperCase()}
          </TabText>
        </TabButton>
      ))}
    </TabWrapper>
  );
};

export const Tab = withTheme(TabComponent);
