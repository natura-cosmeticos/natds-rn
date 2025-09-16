/* eslint-disable max-len */

import React from 'react'
import { View } from 'react-native'
import { text, select } from '@storybook/addon-knobs'
import { SpotIcon } from './SpotIcon'
import { SpotIconName, SpotIconSizes } from './SpotIcon.types'
import { IconColors } from '../../Icon/Icon.types'
import { StoryContainer } from '../../../common/HelperComponents/StoryContainer'

const description = () => `
> ⚠️ **Observação:** Este componente é específico para uso no Growth Plan.

> Componente SpotIcon baseado no Icon padrão.

O SpotIcon estende todas as funcionalidades do componente Icon padrão, mas com um range específico de tamanhos (medium até hugeX) e suporte a cores customizadas.

**Características principais:**
- **Range de tamanhos:** medium, mediumX, large, largeX, largeXX, largeXXX, huge, hugeX
- **Cores de tema:** mantém suporte a todos os tokens de cor do sistema de design
- **Cores customizadas:** prop \`customColor\` permite usar cores hexadecimais que sobrepõem as cores de tema

🔧 **Modo de uso**:
\`\`\`typescript
import { SpotIcon } from '@naturacosmeticos/natds-rn';

// Usando cor de tema
<SpotIcon name="heart" color="primary" size="large" />

// Usando cor customizada (sobrepõe cor de tema)
<SpotIcon name="heart" color="primary" customColor="#FF6B6B" size="large" />
\`\`\`

🎨 **Prioridade de cores:**
1. \`customColor\` (quando fornecida) - sobrepõe qualquer cor de tema
2. \`color\` - usa tokens de cor do sistema de design
3. Fallback padrão - 'highlight'
`

export default {
  component: SpotIcon,
  parameters: {
    componentSubtitle: 'SpotIcon para Growth Plan com suporte a cores customizadas',
    docs: {
      extractComponentDescription: description
    }
  },
  title: 'GrowthPlan|SpotIcon'
}

const containerStyle = {
  flexDirection: 'row' as const,
  flexWrap: 'wrap' as const,
  alignItems: 'center' as const,
  padding: 16
}

const itemStyle = {
  alignItems: 'center' as const,
  margin: 8
}

const labelStyle = {
  marginTop: 8,
  fontSize: 12,
  textAlign: 'center' as const
}

// Story demonstrando todos os tamanhos disponíveis
export const AllSizes = () => {
  const sizes: SpotIconSizes[] = ['medium', 'mediumX', 'large', 'largeX', 'largeXX', 'largeXXX', 'huge', 'hugeX']

  return (
    <View style={containerStyle}>
      {sizes.map((size) => (
        <View key={size} style={itemStyle}>
          <SpotIcon name="spoticon-growthplan-graphic" size={size} color="primary" />
          <View style={labelStyle}>
            <text>{size}</text>
          </View>
        </View>
      ))}
    </View>
  )
}

// Opções de tamanhos disponíveis para o SpotIcon
const SpotIconSizeOptions = {
  medium: 'medium',
  mediumX: 'mediumX',
  large: 'large',
  largeX: 'largeX',
  largeXX: 'largeXX',
  largeXXX: 'largeXXX',
  huge: 'huge',
  hugeX: 'hugeX'
}

// Opções de cores de tema mais comuns
const ThemeColorOptions = {
  primary: 'primary',
  secondary: 'secondary',
  highlight: 'highlight',
  surface: 'surface',
  alert: 'alert',
  warning: 'warning',
  success: 'success',
  link: 'link'
}
const SpotIconOptionsName = {
  'outlined-default-mockup': 'outlined-default-mockup',
  'spoticon-growthplan-crystal': 'spoticon-growthplan-crystal',
  'spoticon-growthplan-laurelwreath': 'spoticon-growthplan-laurelwreath',
  'spoticon-growthplan-flowertulip': 'spoticon-growthplan-flowertulip',
  'spoticon-growthplan-graphic': 'spoticon-growthplan-graphic',
  'spoticon-growthplan-trophyaward': 'spoticon-growthplan-trophyaward',
  'spoticon-growthplan-diamondgem': 'spoticon-growthplan-diamondgem',
  'spoticon-growthplan-trophy': 'spoticon-growthplan-trophy',
  'spoticon-growthplan-trophysapphire': 'spoticon-growthplan-trophysapphire',
  'spoticon-growthplan-trophydiamond': 'spoticon-growthplan-trophydiamond'
}

// Story interativo para playground
export const Playground = () => {
  const selectedColor = select('Color (tema)', ThemeColorOptions, 'highlight') as IconColors
  const customColor = text('Custom Color (hex)', '')
  const iconName = select('Icon name', SpotIconOptionsName, 'spoticon-growthplan-graphic') as SpotIconName
  const size = select('Size', SpotIconSizeOptions, 'large') as SpotIconSizes
  return (
    <StoryContainer title="SpotIcon Playground">
      <SpotIcon
        name={iconName}
        size={size}
        color={selectedColor}
        customColor={customColor || undefined}
      />
    </StoryContainer>
  )
}
