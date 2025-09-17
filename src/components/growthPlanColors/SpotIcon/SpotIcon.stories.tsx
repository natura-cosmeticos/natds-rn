/* eslint-disable max-len */

import React from 'react'
import { View } from 'react-native'
import { select } from '@storybook/addon-knobs'
import { SpotIcon } from './SpotIcon'
import { SpotIconName, SpotIconSizes, SpotIconColors } from './SpotIcon.types'
import { StoryContainer } from '../../../common/HelperComponents/StoryContainer'

const description = () => `
> ⚠️ **Observação:** Este componente é específico para uso no Growth Plan.

> Componente SpotIcon baseado no Icon padrão.

O SpotIcon estende todas as funcionalidades do componente Icon padrão, mas com um range específico de tamanhos (medium até hugeX) e cores semânticas do Growth Plan.

**Características principais:**
- **Range de tamanhos:** medium, mediumX, large, largeX, largeXX, largeXXX, huge, hugeX
- **Cores semânticas:** usa tokens de cor semântica do Growth Plan (primary, primaryLight, primaryDark, etc.)
- **Provider Ready:** preparado para receber configuração de nível via Provider futuro

🔧 **Modo de uso**:
\`\`\`typescript
import { SpotIcon } from '@naturacosmeticos/natds-rn';

// Usando cores semânticas do Growth Plan
<SpotIcon name="spoticon-growthplan-graphic" color="primary" size="large" />
<SpotIcon name="spoticon-growthplan-crystal" color="primaryLight" size="medium" />
<SpotIcon name="spoticon-growthplan-trophy" color="primaryDark" size="huge" />
\`\`\`

🎨 **Cores disponíveis:**
- \`primary\` - Cor principal
- \`primaryLight\` - Variação clara
- \`primaryLightest\` - Variação mais clara
- \`primaryDark\` - Variação escura  
- \`primaryDarkest\` - Variação mais escura
- \`onPrimary\`, \`onPrimaryLight\`, \`onPrimaryLightest\`, \`onPrimaryDark\`, \`onPrimaryDarkest\` - Cores de contraste
`

export default {
  component: SpotIcon,
  parameters: {
    componentSubtitle: 'SpotIcon para Growth Plan com cores semânticas',
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

// Story demonstrando todas as cores semânticas
export const AllSemanticColors = () => {
  const colors: SpotIconColors[] = ['primary', 'onPrimary', 'primaryLight', 'onPrimaryLight', 'primaryLightest', 'onPrimaryLightest', 'primaryDark', 'onPrimaryDark', 'primaryDarkest', 'onPrimaryDarkest']

  return (
    <View style={containerStyle}>
      {colors.map((color) => (
        <View key={color} style={itemStyle}>
          <SpotIcon name="spoticon-growthplan-crystal" size="large" color={color} />
          <View style={labelStyle}>
            <text>{color}</text>
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

// Opções de cores semânticas do Growth Plan
const SemanticColorOptions = {
  primary: 'primary',
  onPrimary: 'onPrimary',
  primaryLight: 'primaryLight',
  onPrimaryLight: 'onPrimaryLight',
  primaryLightest: 'primaryLightest',
  onPrimaryLightest: 'onPrimaryLightest',
  primaryDark: 'primaryDark',
  onPrimaryDark: 'onPrimaryDark',
  primaryDarkest: 'primaryDarkest',
  onPrimaryDarkest: 'onPrimaryDarkest'
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
  const selectedColor = select('Color (semântica)', SemanticColorOptions, 'primary') as SpotIconColors
  const iconName = select('Icon name', SpotIconOptionsName, 'spoticon-growthplan-graphic') as SpotIconName
  const size = select('Size', SpotIconSizeOptions, 'large') as SpotIconSizes
  return (
    <StoryContainer title="SpotIcon Playground">
      <SpotIcon
        name={iconName}
        size={size}
        color={selectedColor}
      />
    </StoryContainer>
  )
}
