/* eslint-disable max-len */
import { IconName } from '@naturacosmeticos/natds-icons'
import React, { useEffect, useState, useCallback } from 'react'
import { ScrollView, View } from 'react-native'
import { withTheme } from 'styled-components/native'

import { Icon } from '../Icon'
import {
  TabWrapper, TabButton, TabText, TabButtonContent, getTabTextColor, getTabWrapperElevation
} from './Tab.styles'
import { TabProps, TabButtonTypes } from './Tab.types'

const TabComponent = ({
  testID = 'ds-tab', theme, tabOptions, onChange, position = 'fixed',
  iconPosition, elevation = false, backgroundColor = true, accessible = false,
  accessibilityRole = 'tab'
}: TabProps) => {
  const [activeTab, setActiveTab] = useState(0)

  const TabPositionType = position === 'fixed' ? View : ScrollView

  const handlePress = (index: number) => {
    onChange(index)
    setActiveTab(index)
  }

  const getCurrentType = (index: number, disabled = false): TabButtonTypes => {
    if (activeTab === index && !disabled) {
      return 'primary'
    }

    return 'secondary'
  }

  const getSelectedTab = useCallback((): number => {
    let selected = 0

    tabOptions.find((tab, index) => {
      if (tab.selected && !tab.disabled) {
        selected = index

        return true
      }

      return false
    })

    return selected
  }, [tabOptions])

  useEffect(() => {
    const selectedIndex = getSelectedTab()

    setActiveTab(selectedIndex)
  }, [getSelectedTab])

  return (
    <View
      // This view is to apply the shadow when the position is scrollable in IOS, but not working in Android.
      style={getTabWrapperElevation({ elevation, theme })}
      accessible={accessible}
      accessibilityRole={accessibilityRole}
    >
      <TabWrapper
        // This view is to apply the shadow to working in Android.
        style={getTabWrapperElevation({ elevation, theme })}
        as={TabPositionType}
        iconPosition={iconPosition}
        backgroundColor={backgroundColor}
        testID={testID}
      >
        {tabOptions.map((tabOption, index) => {
          const currentType = getCurrentType(index, tabOption.disabled)

          return (
            <TabButton
              accessible={accessible}
              disabled={tabOption.disabled}
              key={tabOption.key}
              onPress={() => handlePress(index)}
              type={currentType}
              testID={`${testID}-item-${index}`}
            >
              <TabButtonContent iconPosition={iconPosition}>
                {tabOption.iconName && iconPosition
                  && (
                  <Icon
                    accessibilityRole="imagebutton"
                    style={getTabTextColor({ disabled: tabOption.disabled, theme, type: currentType })}
                    name={tabOption.iconName as IconName}
                    size="standard"
                  />
                  )}
                <TabText iconPosition={iconPosition} type={currentType} disabled={tabOption.disabled}>
                  {tabOption.label.toUpperCase()}
                </TabText>
              </TabButtonContent>
            </TabButton>
          )
        })}
      </TabWrapper>
    </View>
  )
}

export const Tab = withTheme(TabComponent)
