/* eslint-disable max-len */

import React from 'react'
import { growthPlanColors } from './growthPlanColors'

const description = () => `
> ⚠️ **Observação:** Essas cores não são recomendadas para componentes core.



> Cores do Plano de Crescimento.

Este componente exibe os grupos de cores do Growth Plan de forma visual.

Cada grupo (como crystal, bronze, silver, etc) é apresentado com suas variações de cor.

🔧 **Modo de uso**:
Importe o objeto de cores diretamente da biblioteca \`@naturacosmeticos/natds-rn\`:

\`\`\`
import { growthPlanColors } from '@naturacosmeticos/natds-rn';
\`\`\`

🎨 **Exemplo de uso **:

const { crystal, bronze, silver } = growthPlanColors.color;

> 📋 **Nova Estrutura Semântica Disponível:** Introduzimos \`growthPlanSemanticColors\` que facilita significativamente o uso em providers, contextos e temas.
>
> **Formato da Nova Estrutura:**
> 
> bronze: {
   primary: '#DE713B',
   onPrimary: '#111111',
   primaryLight: '#F7C6BA',
   onPrimaryLight: '#111111',
  etc..
> }
> 
>
> **Benefícios para Contextos e Providers:**
> 
> // ✅ Facilita criação de contextos reutilizáveis
> const ThemeContext = createContext({
>   colors: growthPlanSemanticColors.color.bronze // Objeto completo
> });
>
> // ✅ Permite troca dinâmica de níveis
> const [currentLevel, setCurrentLevel] = useState('bronze');
> const themeColors = growthPlanSemanticColors.color[currentLevel];
>
> // ✅ Uso consistente independente do nível
> <Button 
>   backgroundColor={themeColors.primary}
>   color={themeColors.onPrimary}
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
  title: 'Colors|GrowthPlan'
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
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {Object.entries(colors).map(([key, value]) => (
        <ColorBlock key={key} name={key} value={value} />
      ))}
    </div>
  </div>
)

export const AllColors = () => {
  const colorGroups = growthPlanColors.color

  return (
    <div style={{ padding: '2rem' }}>
      {Object.entries(colorGroups).map(([categoryName, colors]) => (
        <CategoryBlock key={categoryName} categoryName={categoryName} colors={colors} />
      ))}
    </div>
  )
}
