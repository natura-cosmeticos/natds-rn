import React from 'react'
import { ColorText, Container } from './ColorView.styles'
import { Typography } from '../Typography'

type tokenLab = {
  labelToken: string;
  keyToken: string;
}

const ColorView = ({ labelToken, keyToken }: tokenLab) => (

  <div style={{
    display: 'flex', flexDirection: 'column', gap: '5px', padding: '5px', marginBottom: '15px'
  }}
  >
    <div style={{
      display: 'flex', flexDirection: 'column', width: '240px', justifyContent: 'space-between'
    }}
    >
      <Typography variant="subtitle2">{labelToken}</Typography>
      <Typography variant="body2"><ColorText>{keyToken}</ColorText></Typography>
    </div>

    <Container color={labelToken} />
  </div>

)

export default ColorView
