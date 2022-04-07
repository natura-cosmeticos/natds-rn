/* eslint-disable max-lines */
import React from 'react'
import { View } from 'react-native'

import { boolean, select } from '@storybook/addon-knobs'
import { Tab } from '.'
import { TabPositions, IconPositions } from './Tab.types'
import { StoryContainer, StoryWrapper } from '../../common/HelperComponents/StoryContainer'
import {
  defaultOptions, disabledOptions, elevationOptions, iconOptions, interactiveOptions
} from './stories.data'

const description = () => `
- - -

  ### NOTE:
  This component is available in the following variants:

  - ✅ Standard

With the following attribute status:

  - **Position:**
    - ✅ \`Fixed\`
    - ✅ \`Scrollable\`
  - **Icon:**
    - ✅ \`Leading\`
    - ✅ \`Top\`
    - ✅ \`Icon\`
  - ✅ **Disabled**
  - ✅ **Elevation**
  - ✅ **Background Color**

- - -
`

export default {
  component: Tab,
  parameters: {
    componentSubtitle: 'Tabs allow the users to navigate between groups of contents that are at the same level of hierarchy.',
    docs: {
      extractComponentDescription: description
    }
  },
  title: 'Components|Tab'
}

const tabPositions = {
  fixed: 'fixed',
  scrollable: 'scrollable'
}

const iconPositions = {
  icon: 'icon',
  leading: 'leading',
  top: 'top'
}

const Container = ({ title, children }) => (
  <StoryContainer title={title}>
    <View style={{ maxWidth: 600, paddingBottom: 30, width: '100%' }}>
      {children}
    </View>
  </StoryContainer>
)

export const Default = () => (
  <Container title="Standard">
    <Tab tabOptions={defaultOptions} onChange={() => ({})} />
  </Container>
)

export const Variants = () => (
  <StoryWrapper title="Variants">
    <Container title="Background">
      <Tab backgroundColor={false} tabOptions={defaultOptions} onChange={() => ({})} />
    </Container>

    <Container title="Disabled">
      <Tab tabOptions={disabledOptions} onChange={() => ({})} />
    </Container>

    <Container title="Elevation">
      <Tab elevation tabOptions={elevationOptions} onChange={() => ({})} />
    </Container>

    <StoryWrapper title="Icons">
      <Container title="Leading">
        <Tab iconPosition="leading" tabOptions={iconOptions} onChange={() => ({})} />
      </Container>
      <Container title="Top">
        <Tab iconPosition="top" tabOptions={iconOptions} onChange={() => ({})} />
      </Container>
      <Container title="Only Icon">
        <Tab iconPosition="icon" tabOptions={iconOptions} onChange={() => ({})} />
      </Container>
    </StoryWrapper>

    <StoryWrapper title="Position">
      <Container title="Fixed">
        <Tab tabOptions={defaultOptions} onChange={() => ({})} />
      </Container>
      <Container title="Scrollable">
        <Tab position="scrollable" tabOptions={interactiveOptions} onChange={() => ({})} />
      </Container>
    </StoryWrapper>
  </StoryWrapper>
)

export const Interactive = () => (
  <View style={{ maxWidth: 600, paddingBottom: 30 }}>
    <Tab
      tabOptions={interactiveOptions}
      onChange={() => ({})}
      elevation={boolean('Elevation', false)}
      backgroundColor={boolean('BackgroundColor', true)}
      position={select('Position', tabPositions, 'fixed') as TabPositions}
      iconPosition={select('Icon Position', iconPositions, 'icon') as IconPositions}
    />
  </View>
)
