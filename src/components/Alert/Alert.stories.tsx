import React from 'react'
import { select, text } from '@storybook/addon-knobs'
import { Alert } from './Alert'

import { StoryContainer, StoryWrapper } from '../../common/HelperComponents/StoryContainer'
import { Types as TypesProps, Variants as VariantsProps } from './Alert.types'

const description = () => `
> Alert An alert displays a short, important message in a way that attracts the user's attention without interrupting the user's task.

## Properties
| Property                   | Values                                           |    Status           |
|---                         |                                               ---|                  ---|
| **variant**                | standard, outlined,  filled                      | ✅ Available        |
| **type**                   | success, error, warning, info, custom            | ✅ Available        |
| **icon**                   | true/false                                       | ✅ Available        |
| **title**                  | string                                           | ✅ Available        |
| **message**                | string                                           | ✅ Available        |
| **backgroundColorName **   | string of theme color                            | ✅ Available        |
| **borderColorName **       | string of theme color                            | ✅ Available        |
| **iconColorName **         | string of theme color                            | ✅ Available        |
| **iconName **              | icon-name                                        | ✅ Available        |
| **titleColorName **        | icon-name                                        | ✅ Available        |
| **messageColorName **      | icon-name                                        | ✅ Available        |

## Technical Usages Examples
`

const alertDefinition = ''

export default {
  component: Alert,
  parameters: {
    componentSubtitle: alertDefinition,
    docs: {
      extractComponentDescription: description
    }
  },
  title: 'Components|Alert'
}

const typesMap = {
  error: 'error',
  info: 'info',
  success: 'success',
  warning: 'warning',
  custom: 'custom'
}

const variantsMap = {
  standard: 'standard',
  outlined: 'outlined',
  filled: 'filled'
}

export const Default = () => (
  <StoryWrapper title="Default">
    <StoryContainer title="Standard">
      <Alert title="Title" message={alertDefinition} />
    </StoryContainer>
  </StoryWrapper>
)

export const Variants = () => (
  <StoryWrapper title="Variants">
    <StoryContainer title="Standard">
      <Alert variant="standard" title="Title" message={alertDefinition} />
    </StoryContainer>

    <StoryContainer title="Outlined">
      <Alert variant="outlined" title="Title" message={alertDefinition} />
    </StoryContainer>
  </StoryWrapper>
)

export const Icon = () => (
  <StoryWrapper title="Icon">
    <StoryContainer title="Without Icon">
      <Alert icon={false} title="Title" message={alertDefinition} />
    </StoryContainer>

    <StoryContainer title="With Icon">
      <Alert title="Title" message={alertDefinition} />
    </StoryContainer>
  </StoryWrapper>
)

export const Title = () => (
  <StoryWrapper title="Title">
    <StoryContainer title="Without Title">
      <Alert message={alertDefinition} />
    </StoryContainer>

    <StoryContainer title="With Title">
      <Alert title="Title" message={alertDefinition} />
    </StoryContainer>
  </StoryWrapper>
)

export const Types = () => (
  <StoryWrapper title="Types">
    <StoryContainer title="Info">
      <Alert type="info" title="Title" message={alertDefinition} />
    </StoryContainer>

    <StoryContainer title="Success">
      <Alert type="success" title="Title" message={alertDefinition} />
    </StoryContainer>

    <StoryContainer title="Error">
      <Alert type="error" title="Title" message={alertDefinition} />
    </StoryContainer>

    <StoryContainer title="Warning">
      <Alert type="warning" title="Title" message={alertDefinition} />
    </StoryContainer>

    <StoryContainer title="Custom">
      <Alert
        type="custom"
        title="Title"
        message={alertDefinition}
        variant="outlined"
        backgroundColorName="secondaryDark"
        borderColorName="secondaryDark"
        titleColorName="secondaryDark"
        messageColorName="secondaryDark"
        iconColorName="secondaryDark"
      />
    </StoryContainer>
  </StoryWrapper>
)

export const Interactive = () => (
  <Alert
    title={text('Text', 'Title')}
    variant={select('Variant', variantsMap, 'standard') as VariantsProps}
    type={select('Type', typesMap, 'info') as TypesProps}
    message={text('Message', alertDefinition)}
  />
)
