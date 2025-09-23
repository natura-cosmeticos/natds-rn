/* eslint-disable max-len */

import React, { useState } from 'react'
import { legacyGrowthPlanColors } from './legacyGrowthPlanColors'
import { growthPlanColors } from './growthPlanColors'
import { GayaButton } from '../GayaButton'

const description = () => `
> ⚠️ **Observação:** Essas cores não são recomendadas para componentes core.



> Cores do Plano de Crescimento.

Este componente exibe os grupos de cores do Growth Plan de forma visual.

Cada grupo (como crystal, bronze, silver, etc) é apresentado com suas variações de cor.

🔧 **Modo de uso**:
Importe o objeto de cores diretamente da biblioteca \`@naturacosmeticos/natds-rn\`:

\`\`\`
import { legacyGrowthPlanColors } from '@naturacosmeticos/natds-rn';
\`\`\`

🎨 **Exemplo de uso **:

const { crystal, bronze, silver } = legacyGrowthPlanColors.color;

> 📋 ** NovaEstrutura Semântica:** O \`growthPlanColors\` facilita significativamente o uso em providers, contextos e temas.
>
> **Formato da Nova Estrutura:**
> 
> bronze: {
   main: '#DE713B',
   onMain: '#111111',
   mainLight: '#F7C6BA',
   onMainLight: '#111111',
  etc..
> }
> 
>
> **Benefícios para Contextos e Providers:**
> 
> // ✅ Facilita criação de contextos reutilizáveis
> const ThemeContext = createContext({
>   colors: growthPlanColors.bronze // Objeto completo
> });
>
> // ✅ Permite troca dinâmica de níveis
> const [currentLevel, setCurrentLevel] = useState('bronze');
> const themeColors = growthPlanColors[currentLevel];
>
> // ✅ Uso consistente independente do nível
> <Button 
>   backgroundColor={themeColors.main}
>   color={themeColors.onMain}
> />
> \`\`\`
>


Utilize esta visualização para verificar as cores disponíveis, seus nomes, valores hexadecimais e uma prévia visual de cada uma.
`

export default {
  component: <>GrowthPlanColors</>,
  parameters: {
    componentSubtitle: '',
    docs: {
      extractComponentDescription: description
    }
  },
  title: 'Growth Plan/Colors'
}

const boxStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  margin: '1rem',
  width: '120px',
  fontFamily: 'sans-serif'
}

const colorBoxStyle = (color: string): React.CSSProperties => ({
  width: '100%',
  height: '50px',
  backgroundColor: color,
  borderRadius: '4px',
  marginTop: '0.5rem',
  border: '1px solid #ccc'
})

const ColorBlock = ({ name, value }: { name: string; value: string }) => (
  <div style={boxStyle}>
    <strong>{name}</strong>
    <div style={{ fontSize: '0.8rem', color: '#666' }}>{value}</div>
    <div style={colorBoxStyle(value)} />
  </div>
)

const CategoryBlock = ({ categoryName, colors }: { categoryName: string; colors: Record<string, string> }) => (
  <div style={{ marginBottom: '2rem' }}>
    <h2 style={{ fontFamily: 'sans-serif' }}>{categoryName.toUpperCase()}</h2>
    <div style={{ display: 'flex', flexWrap: 'wrap', padding: '2rem' }}>
      {Object.entries(colors).map(([key, value]) => (
        <ColorBlock key={key} name={key} value={value} />
      ))}
    </div>
  </div>
)

const renderToggleButtons = (isLegacy: boolean, setIsLegacy: (value: boolean) => void) => (
  <div style={{ marginBottom: '1rem', display: 'flex', gap: '1rem' }}>
    <GayaButton
      onPress={() => setIsLegacy(true)}
      color={isLegacy ? 'primary' : 'neutral'}
      type={isLegacy ? 'contained' : 'outlined'}
      text="Estrutura Legacy"
    />
    <GayaButton
      onPress={() => setIsLegacy(false)}
      color={!isLegacy ? 'primary' : 'neutral'}
      type={!isLegacy ? 'contained' : 'outlined'}
      text="Estrutura Semântica"
    />
  </div>
)

const renderIndicator = (isLegacy: boolean) => (
  <div
    style={{
      padding: '1rem',
      marginBottom: '1rem',
      backgroundColor: '#f5f5f5',
      borderRadius: '4px'
    }}
  >
    <p
      style={{
        margin: 0,
        fontFamily: 'sans-serif',
        fontSize: '14px',
        color: '#666'
      }}
    >
      {isLegacy
        ? '📋 Exibindo: legacyGrowthPlanColors (nomenclatura: bronze, bronzeLight, bronzeDark, etc.)'
        : '🎨 Exibindo: growthPlanColors (nomenclatura: main, mainLight, mainDark, etc.)'}
    </p>
  </div>
)

export const AllColors = () => {
  const [isLegacy, setIsLegacy] = useState(true)

  // Alterna entre os dois objetos baseado no estado
  const colorGroups = isLegacy ? legacyGrowthPlanColors.color : growthPlanColors

  return (
    <>
      {renderToggleButtons(isLegacy, setIsLegacy)}
      {renderIndicator(isLegacy)}
      <div style={{ padding: '2rem' }}>
        {Object.entries(colorGroups).map(([categoryName, colors]) => (
          <CategoryBlock key={categoryName} categoryName={categoryName} colors={colors} />
        ))}
      </div>
    </>
  )
}
