/* eslint-disable max-len */

import React, { useState, useMemo } from 'react'
import {
  View, Text, TouchableOpacity, StyleSheet
} from 'react-native'
import { select } from '@storybook/addon-knobs'
import { SpotIcon } from './SpotIcon'
import { SpotIconName, SpotIconSizes, SpotIconColors } from './SpotIcon.types'
import { GrowthPlanProvider, generateLevelButtons, GrowthPlanLevel } from '../Provider'

const description = () => `
> 🎨 **SpotIcon com Provider de Cores Dinâmico**

O SpotIcon agora utiliza o **GrowthPlanProvider** para obter cores dinamicamente, permitindo trocar entre diferentes níveis do Growth Plan sem recriar o componente.

**Funcionalidades:**
- **Provider-Based:** Utiliza Context API para cores dinâmicas
- **Range de tamanhos:** medium, mediumX, large, largeX, largeXX, largeXXX, huge, hugeX
- **Cores semânticas:** main, mainLight, mainDark, onMain, etc.
- **API Simplificada:** Apenas especifique o nível, o tema é resolvido automaticamente

🔧 **Modo de uso**:
\`\`\`typescript
import { SpotIcon, GrowthPlanProvider } from '@naturacosmeticos/natds-rn';

// Com Provider (recomendado) - API simplificada
<GrowthPlanProvider level="bronze">
  <SpotIcon name="spoticon-growthplan-trophydiamond" color="main" size="large" />
</GrowthPlanProvider>

// Sem Provider (usa crystal como fallback)
<SpotIcon name="spoticon-growthplan-crystal" color="mainLight" size="medium" />
\`\`\`

🎮 **Playground Interativo:**
Use os botões de nível para testar diferentes esquemas de cores em tempo real!
`

export default {
  component: SpotIcon,
  parameters: {
    componentSubtitle: 'SpotIcon para Growth Plan com Provider de cores dinâmico',
    docs: {
      extractComponentDescription: description
    }
  },
  title: 'Growth Plan/Patterns/Spot Icon'
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  levelSelectorContainer: {
    marginBottom: 30
  },
  levelSelectorTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333'
  },
  levelButtonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10
  },
  levelButton: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: 'transparent'
  },
  activeLevelButton: {
    borderColor: '#333',
    borderWidth: 2
  },
  levelButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 12,
    textAlign: 'center'
  },
  iconContainer: {
    alignItems: 'center',
    padding: 20
  },
  sizesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16
  },
  sizeItem: {
    alignItems: 'center',
    margin: 12
  },
  sizeLabel: {
    marginTop: 8,
    fontSize: 12,
    textAlign: 'center',
    color: '#666'
  }
})

/**
 * Componente para seleção de níveis do Growth Plan
 */
interface LevelSelectorProps {
  selectedLevel: string;
  onLevelChange: (level: string) => void;
}

const LevelSelector: React.FC<LevelSelectorProps> = ({ selectedLevel, onLevelChange }) => {
  // Gera botões automaticamente sincronizados com growthPlanColors
  const levelButtons = useMemo(() => generateLevelButtons(), [])

  return (
    <View style={styles.levelSelectorContainer}>
      <Text style={styles.levelSelectorTitle}>🎨 Nível do Growth Plan</Text>
      <View style={styles.levelButtonsContainer}>
        {levelButtons.map((level) => (
          <TouchableOpacity
            key={level.key}
            style={[
              styles.levelButton,
              { backgroundColor: level.color },
              selectedLevel === level.key && styles.activeLevelButton
            ]}
            onPress={() => onLevelChange(level.key)}
          >
            <Text style={styles.levelButtonText}>{level.label}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  )
}

// Opções para knobs do Storybook
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

const SemanticColorOptions = {
  main: 'main',
  onMain: 'onMain',
  mainLight: 'mainLight',
  onMainLight: 'onMainLight',
  mainLightest: 'mainLightest',
  onMainLightest: 'onMainLightest',
  mainDark: 'mainDark',
  onMainDark: 'onMainDark',
  mainDarkest: 'mainDarkest',
  onMainDarkest: 'onMainDarkest'
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

/**
 * Story Playground - Interativo com botões de nível
 * Permite testar diferentes níveis do Growth Plan em tempo real
 */
export const Playground = () => {
  const [selectedLevel, setSelectedLevel] = useState<GrowthPlanLevel>('diamondPlus')
  const selectedColor = select('Color (semântica)', SemanticColorOptions, 'main') as SpotIconColors
  const iconName = select('Icon name', SpotIconOptionsName, 'spoticon-growthplan-trophydiamond') as SpotIconName
  const size = select('Size', SpotIconSizeOptions, 'large') as SpotIconSizes

  return (
    <View style={styles.container}>
      <LevelSelector
        selectedLevel={selectedLevel}
        onLevelChange={(level) => setSelectedLevel(level as GrowthPlanLevel)}
      />

      <GrowthPlanProvider level={selectedLevel}>
        <View style={styles.iconContainer}>
          <SpotIcon
            name={iconName}
            size={size}
            color={selectedColor}
          />
        </View>
      </GrowthPlanProvider>
    </View>
  )
}

/**
 * Story Sizes - Demonstra todos os tamanhos disponíveis
 * Usa um tema fixo (diamondPlus) para focar nos tamanhos
 */
export const Sizes = () => {
  const sizes: SpotIconSizes[] = ['medium', 'mediumX', 'large', 'largeX', 'largeXX', 'largeXXX', 'huge', 'hugeX']

  return (
    <GrowthPlanProvider level="diamondPlus">
      <View style={styles.sizesContainer}>
        {sizes.map((size) => (
          <View key={size} style={styles.sizeItem}>
            <SpotIcon
              name="spoticon-growthplan-trophydiamond"
              size={size}
              color="main"
            />
            <Text style={styles.sizeLabel}>{size}</Text>
          </View>
        ))}
      </View>
    </GrowthPlanProvider>
  )
}
