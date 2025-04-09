/* eslint-disable max-len */

import React from 'react'
import { grouwthPlanColors } from './growthPlanColors'

export default {

  parameters: {
    component: <>GrowPlanColors</>,
    componentSubtitle: '',
    docs: {
      extractComponentDescription: ''
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
  const colorGroups = grouwthPlanColors.color

  return (
    <div style={{ padding: '2rem' }}>
      {Object.entries(colorGroups).map(([categoryName, colors]) => (
        <CategoryBlock key={categoryName} categoryName={categoryName} colors={colors} />
      ))}
    </div>
  )
}
