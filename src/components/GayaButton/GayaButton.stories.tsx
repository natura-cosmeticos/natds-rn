/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable max-lines */
import React from 'react'
import { View } from 'react-native'
import { boolean, select, text as textKnob } from '@storybook/addon-knobs'
import { background } from '@storybook/theming'
import { StoryContainer, StoryWrapper } from '../../common/HelperComponents/StoryContainer'
import { GayaButton } from './GayaButton'
import {
  GayaButtonColor, GayaButtonSizes, GayaButtonTypes, ITextTransformProp
} from './GayaButton.types'
import { BrandTypes } from '../../common/brandTypes/brandTypes'
import { Typography } from '../Typography'

const description = () => `
> O GaYaButton faz parte da evolução contínua dos componentes do GaYa Design System. Lançado como um novo componente, o GaYaButton substitui o antigo Button, que permanecerá disponível para uso, mas não receberá mais atualizações ou suporte ativo. 
Recomendamos a migração para o GayaButton o mais rápido possível para aproveitar as melhorias e garantir a compatibilidade futura.

## Propriedades
| Figma         | Property         | Values                                                                             |    Status           |
|---               |---               |                                                                                 ---|                  ---|
| **variant**      | **type**         | contained, outlined, ghost, tonal                                                  | ✅ Disponível        |
| **textTranform** | **textTranform** | uppercase, lowercase,  capitalize                                                  | ✅ Disponível         |
| **Size**         | **size**         | semi, semiX, medium                                                                | ✅ Disponível        |
| **Icon**         | **iconName**     | 'icon_name'                                                                        | ✅ Disponível        |
| **Disabled**     | **disabled**     | true, false                                                                        | ✅ Disponível        |
| **Display**      | **display **     | inline, block                                                                      | ❌ Not Applicable   |
| **--**           | **brand**        | avon, avon_v2, natura, natura_v2, natura_v3, theBodyShop, <br /> consultoriaDeBeleza, casaEestilo            | ✅ Disponível        |
| **color**        | **color**        | primary, onPrimary, secondary, onSecondary, neutral, inverse                        | ✅ Disponível        |

## Exemplos de usos
`

export default {
  component: GayaButton,
  parameters: {
    componentSubtitle: '',
    docs: {
      extractComponentDescription: description
    }
  },
  title: 'Components|GayaButton'
}

const onPress = () => ({})

const GayabuttonTypes = {
  contained: 'contained',
  outlined: 'outlined',
  ghost: 'ghost',
  tonal: 'tonal'
}
const GayabuttontextTransform = {
  uppercase: 'uppercase',
  lowercase: 'lowercase',
  capitalize: 'capitalize'
}
const GayabuttonSizes = {
  medium: 'medium',
  semi: 'semi',
  semiX: 'semiX'
}
const brand = {
  undefined,
  avon: 'avon',
  avon_v2: 'avon_v2',
  natura: 'natura',
  natura_v2: 'natura_v2',
  natura_v3: 'natura_v3',
  theBodyShop: 'theBodyShop',
  consultoriaDeBeleza: 'consultoriaDeBeleza',
  casaEestilo: 'casaEestilo'
}
const mode = {
  undefined,
  light: 'light',
  dark: 'dark'
}
const GayabuttonColor = {
  primary: 'primary',
  onPrimary: 'onPrimary',
  secondary: 'secondary',
  onSecondary: 'onSecondary',
  neutral: 'neutral',
  inverse: 'inverse'
}
type mode = 'light' | 'dark' | undefined
export const Default = () => (
  <StoryContainer title="Standard">
    <GayaButton onPress={onPress} text="Natura Design System" />
  </StoryContainer>
)
export const BrandLight = () => (
  <StoryWrapper title="Brands">
    <StoryContainer title="Avon">
      <GayaButton brand="avon" type="contained" onPress={onPress} text="Button" />
      <GayaButton brand="avon" type="outlined" onPress={onPress} text="Button" />
      <GayaButton brand="avon" type="ghost" onPress={onPress} text="Button" />
      <GayaButton brand="avon" type="tonal" onPress={onPress} text="Button" />
    </StoryContainer>
    <StoryContainer title="Avon v2">
      <GayaButton brand="avon_v2" type="contained" onPress={onPress} text="Button" />
      <GayaButton brand="avon_v2" type="outlined" onPress={onPress} text="Button" />
      <GayaButton brand="avon_v2" type="ghost" onPress={onPress} text="Button" />
      <GayaButton brand="avon_v2" type="tonal" onPress={onPress} text="Button" />
    </StoryContainer>
    <StoryContainer title="Natura V1">
      <GayaButton brand="natura" type="contained" onPress={onPress} text="Button" />
      <GayaButton brand="natura" type="outlined" onPress={onPress} text="Button" />
      <GayaButton brand="natura" type="ghost" onPress={onPress} text="Button" />
      <GayaButton brand="natura" type="tonal" onPress={onPress} text="Button" />
    </StoryContainer>
    <StoryContainer title="Natura V2">
      <GayaButton brand="natura_v2" type="contained" onPress={onPress} text="Button" />
      <GayaButton brand="natura_v2" type="outlined" onPress={onPress} text="Button" />
      <GayaButton brand="natura_v2" type="ghost" onPress={onPress} text="Button" />
      <GayaButton brand="natura_v2" type="tonal" onPress={onPress} text="Button" />
    </StoryContainer>
    <StoryContainer title="Natura V3">
      <GayaButton brand="natura_v3" type="contained" onPress={onPress} text="Button" />
      <GayaButton brand="natura_v3" type="outlined" onPress={onPress} text="Button" />
      <GayaButton brand="natura_v3" type="ghost" onPress={onPress} text="Button" />
      <GayaButton brand="natura_v3" type="tonal" onPress={onPress} text="Button" />
    </StoryContainer>
    <StoryContainer title="Casa & Estilo">
      <GayaButton brand="casaEestilo" type="contained" onPress={onPress} text="Button" />
      <GayaButton brand="casaEestilo" type="outlined" onPress={onPress} text="Button" />
      <GayaButton brand="casaEestilo" type="ghost" onPress={onPress} text="Button" />
      <GayaButton brand="casaEestilo" type="tonal" onPress={onPress} text="Button" />
    </StoryContainer>
    <StoryContainer title="Consultoria de Beleza">
      <GayaButton brand="consultoriaDeBeleza" type="contained" onPress={onPress} text="Button" />
      <GayaButton brand="consultoriaDeBeleza" type="outlined" onPress={onPress} text="Button" />
      <GayaButton brand="consultoriaDeBeleza" type="ghost" onPress={onPress} text="Button" />
      <GayaButton brand="consultoriaDeBeleza" type="tonal" onPress={onPress} text="Button" />
    </StoryContainer>

  </StoryWrapper>
)
export const BrandDark = () => (

  <StoryWrapper title="Brands">
    <StoryContainer title="Avon" style={{ backgroundColor: 'black', padding: 20 }}>
      <GayaButton mode="dark" brand="avon" type="contained" onPress={onPress} text="Button" />
      <GayaButton mode="dark" brand="avon" type="outlined" onPress={onPress} text="Button" />
      <GayaButton mode="dark" brand="avon" type="ghost" onPress={onPress} text="Button" />
      <GayaButton mode="dark" brand="avon" type="tonal" onPress={onPress} text="Button" />
    </StoryContainer>
    <StoryContainer title="Avon v2" style={{ backgroundColor: 'black', padding: 20 }}>
      <GayaButton mode="dark" brand="avon_v2" type="contained" onPress={onPress} text="Button" />
      <GayaButton mode="dark" brand="avon_v2" type="outlined" onPress={onPress} text="Button" />
      <GayaButton mode="dark" brand="avon_v2" type="ghost" onPress={onPress} text="Button" />
      <GayaButton mode="dark" brand="avon_v2" type="tonal" onPress={onPress} text="Button" />
    </StoryContainer>
    <StoryContainer title="Natura V1" style={{ backgroundColor: 'black', padding: 20 }}>
      <GayaButton mode="dark" brand="natura" type="contained" onPress={onPress} text="Button" />
      <GayaButton mode="dark" brand="natura" type="outlined" onPress={onPress} text="Button" />
      <GayaButton mode="dark" brand="natura" type="ghost" onPress={onPress} text="Button" />
      <GayaButton mode="dark" brand="natura" type="tonal" onPress={onPress} text="Button" />
    </StoryContainer>
    <StoryContainer title="Natura V2" style={{ backgroundColor: 'black', padding: 20 }}>
      <GayaButton mode="dark" brand="natura_v2" type="contained" onPress={onPress} text="Button" />
      <GayaButton mode="dark" brand="natura_v2" type="outlined" onPress={onPress} text="Button" />
      <GayaButton mode="dark" brand="natura_v2" type="ghost" onPress={onPress} text="Button" />
      <GayaButton mode="dark" brand="natura_v2" type="tonal" onPress={onPress} text="Button" />
    </StoryContainer>
    <StoryContainer title="Natura V3" style={{ backgroundColor: 'black', padding: 20 }}>
      <GayaButton mode="dark" brand="natura_v3" type="contained" onPress={onPress} text="Button" />
      <GayaButton mode="dark" brand="natura_v3" type="outlined" onPress={onPress} text="Button" />
      <GayaButton mode="dark" brand="natura_v3" type="ghost" onPress={onPress} text="Button" />
      <GayaButton mode="dark" brand="natura_v3" type="tonal" onPress={onPress} text="Button" />
    </StoryContainer>
    <StoryContainer title="Casa & Estilo" style={{ backgroundColor: 'black', padding: 20 }}>
      <GayaButton mode="dark" brand="casaEestilo" type="contained" onPress={onPress} text="Button" />
      <GayaButton mode="dark" brand="casaEestilo" type="outlined" onPress={onPress} text="Button" />
      <GayaButton mode="dark" brand="casaEestilo" type="ghost" onPress={onPress} text="Button" />
      <GayaButton mode="dark" brand="casaEestilo" type="tonal" onPress={onPress} text="Button" />
    </StoryContainer>
    <StoryContainer title="Consultoria de Beleza" style={{ backgroundColor: 'black', padding: 20 }}>
      <GayaButton mode="dark" brand="consultoriaDeBeleza" type="contained" onPress={onPress} text="Button" />
      <GayaButton mode="dark" brand="consultoriaDeBeleza" type="outlined" onPress={onPress} text="Button" />
      <GayaButton mode="dark" brand="consultoriaDeBeleza" type="ghost" onPress={onPress} text="Button" />
      <GayaButton mode="dark" brand="consultoriaDeBeleza" type="tonal" onPress={onPress} text="Button" />
    </StoryContainer>

  </StoryWrapper>
)

export const Sizes = () => (
  <StoryWrapper title="Sizes">
    <StoryContainer title="Medium">
      <GayaButton onPress={onPress} text="Natura Design System" size="medium" />
    </StoryContainer>
    <StoryContainer title="SemiX">
      <GayaButton onPress={onPress} text="Natura Design System" size="semiX" />
    </StoryContainer>
    <StoryContainer title="Semi">
      <GayaButton onPress={onPress} text="Natura Design System" size="semi" />
    </StoryContainer>
  </StoryWrapper>
)

export const Variants = () => (
  <StoryWrapper title="Properties">
    <StoryWrapper title="Types">
      <StoryContainer title="Contained">
        <GayaButton onPress={onPress} text="Natura Design System" type="contained" />
      </StoryContainer>
      <StoryContainer title="Outlined">
        <GayaButton onPress={onPress} text="Natura Design System" type="outlined" />
      </StoryContainer>
      <StoryContainer title="ghost">
        <GayaButton color="primary" onPress={onPress} text="Natura Design System" type="ghost" />
      </StoryContainer>
      <StoryContainer title="tonal">
        <GayaButton onPress={onPress} text="Natura Design System" type="tonal" />
      </StoryContainer>
    </StoryWrapper>

    <StoryWrapper title="Icons">
      <StoryContainer title="Left Icon">
        <GayaButton onPress={onPress} text="Natura Design System" iconName="outlined-default-mockup" iconPosition="left" />
      </StoryContainer>
      <StoryContainer title="Right Icon">
        <GayaButton onPress={onPress} text="Natura Design System" iconName="outlined-default-mockup" iconPosition="right" />
      </StoryContainer>
    </StoryWrapper>

    <StoryWrapper title="Disabled">
      <StoryContainer title="Contained">
        <GayaButton onPress={onPress} text="Natura Design System" type="contained" disabled />
      </StoryContainer>
      <StoryContainer title="Outlined">
        <GayaButton onPress={onPress} text="Natura Design System" type="outlined" disabled />
      </StoryContainer>
      <StoryContainer title="ghost">
        <GayaButton onPress={onPress} text="Natura Design System" type="ghost" disabled />
      </StoryContainer>
      <StoryContainer title="tonal">
        <GayaButton onPress={onPress} text="Natura Design System" type="tonal" disabled />
      </StoryContainer>
    </StoryWrapper>

    <StoryWrapper title="Display">
      <StoryContainer title="Display-Inline">
        <View style={{ alignItems: 'flex-start', marginBottom: 14 }}>
          <GayaButton onPress={onPress} text="Natura Design System" />
        </View>
      </StoryContainer>
      <StoryContainer title="Display-Block">
        <View style={{ marginBottom: 14, width: '100%' }}>
          <GayaButton onPress={onPress} text="Natura Design System" />
        </View>
      </StoryContainer>
    </StoryWrapper>
  </StoryWrapper>
)

export const Interactive = () => (
  <StoryContainer title="Interactive">
    <GayaButton
      disabled={boolean('Disabled', false)}
      onPress={onPress}
      brand={select('brand', brand, undefined) as BrandTypes}
      mode={select('mode', mode, undefined) as mode}
      size={select('Size', GayabuttonSizes, 'semiX') as GayaButtonSizes}
      text={textKnob('Text', 'Natura Design System')}
      type={select('Types', GayabuttonTypes, 'contained') as GayaButtonTypes}
      color={select('Color', GayabuttonColor, 'primary') as GayaButtonColor}
      textTransform={select('textTransform', GayabuttontextTransform, 'uppercase') as ITextTransformProp}
    />
  </StoryContainer>
)

export const AccessibilityGuide = () => (
  <div>
    <Typography variant="heading4">Guia de acessibilidade</Typography>
    <table
      style={{
        fontFamily: 'roboto',
        fontSize: '13px',
        maxWidth: '800px',
        margin: '20px 0',
        borderCollapse: 'collapse',
        border: '1px solid #ccc'
      }}
    >
      <thead>
        <tr style={{ backgroundColor: '#f4f4f4', color: '#333' }}>
          <th style={{ padding: '10px', fontSize: '16px', border: '1px solid #ccc' }}><Typography variant="subtitle1">Atributo</Typography></th>
          <th style={{ padding: '10px', fontSize: '16px', border: '1px solid #ccc' }}><Typography variant="subtitle1">Descrição</Typography></th>
          <th style={{ padding: '10px', fontSize: '16px', border: '1px solid #ccc' }}><Typography variant="subtitle1">Código de Exemplo</Typography></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={{ padding: '10px', border: '1px solid #ccc' }}>role</td>
          <td style={{ padding: '10px', border: '1px solid #ccc' }}>Especifica o papel do elemento para tecnologias assistivas.</td>
          <td style={{ padding: '10px', border: '1px solid #ccc' }}><code>&lt;Gayabutton role="button"&gt;Click me&lt;/Gayabutton&gt;</code></td>
        </tr>
        <tr>
          <td style={{ padding: '10px', border: '1px solid #ccc' }}>aria-label</td>
          <td style={{ padding: '10px', border: '1px solid #ccc' }}>Fornece uma etiqueta de texto para leitores de tela.</td>
          <td style={{ padding: '10px', border: '1px solid #ccc' }}><code>&lt;Gayabutton aria-label="Fechar"&gt;X&lt;/Gayabutton&gt;</code></td>
        </tr>
        <tr>
          <td style={{ padding: '10px', border: '1px solid #ccc' }}>aria-describedby</td>
          <td style={{ padding: '10px', border: '1px solid #ccc' }}>Identifica elementos que descrevem o botão.</td>
          <td style={{ padding: '10px', border: '1px solid #ccc' }}>
            <code>&lt;Gayabutton aria-describedby="descriptionClose"&gt;Fechar&lt;/Gayabutton&gt;</code>
            <br />
            <code>&lt;div id="descriptionClose"&gt;Clique para fechar a janela&lt;/div&gt;</code>
          </td>
        </tr>
        <tr>
          <td style={{ padding: '10px', border: '1px solid #ccc' }}>aria-disabled</td>
          <td style={{ padding: '10px', border: '1px solid #ccc' }}>Indica que o elemento está desabilitado, mas ainda é acessado pela tecnologia assistiva.</td>
          <td style={{ padding: '10px', border: '1px solid #ccc' }}><code>&lt;Gayabutton aria-disabled="true"&gt;Não disponível&lt;/button&gt;</code></td>
        </tr>
        <tr>
          <td style={{ padding: '10px', border: '1px solid #ccc' }}>aria-haspopup</td>
          <td style={{ padding: '10px', border: '1px solid #ccc' }}>Indica que o botão tem um menu popup associado.</td>
          <td style={{ padding: '10px', border: '1px solid #ccc' }}><code>&lt;Gayabutton aria-haspopup="true"&gt;Opções&lt;/button&gt;</code></td>
        </tr>
      </tbody>
    </table>
  </div>
)
