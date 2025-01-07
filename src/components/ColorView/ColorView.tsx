import React from 'react'
import {
  ColorText, Container, ContainerDeprecated, ContainerinternalOnly
} from './ColorView.styles'
import { Typography } from '../Typography'

type tokenLab = {
  labelToken: string;
  keyToken: string;
  deprecated?: boolean;
  internalOnly?: boolean;
}

const ColorView = ({
  labelToken, keyToken, deprecated, internalOnly
}: tokenLab) => (

  <div
    key={`${keyToken}`}
    style={{
      display: 'flex', flexDirection: 'column', gap: '5px', padding: '5px', marginBottom: '15px'
    }}
  >
    <div
      key={`${labelToken}`}
      style={{
        display: 'flex', flexDirection: 'column', width: '240px', justifyContent: 'space-between'
      }}
    >
      <Typography variant="subtitle2">{labelToken}</Typography>
      <Typography variant="body2"><ColorText>{keyToken}</ColorText></Typography>
      {
        deprecated && (
        <ContainerDeprecated>
          <Typography style={{ color: '#fff' }} color="" variant="subtitle2">Deprecated</Typography>
        </ContainerDeprecated>
        )
      }
      {
         internalOnly && (
         <ContainerinternalOnly>
           <Typography style={{ color: '#fff' }} color="" variant="subtitle2">internalOnly</Typography>
         </ContainerinternalOnly>
         )
      }

    </div>

    <Container color={labelToken} />
  </div>

)

export default ColorView
