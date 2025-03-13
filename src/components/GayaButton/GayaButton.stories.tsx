/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable max-lines */
import React from 'react'
import { View } from 'react-native'
import { boolean, select, text as textKnob } from '@storybook/addon-knobs'
import { IconName, iconNames } from '@naturacosmeticos/natds-icons'
import { StoryContainer, StoryWrapper } from '../../common/HelperComponents/StoryContainer'
import { GayaButton } from './GayaButton'
import {
  GayaButtonColor, GayaButtonSizes, GayaButtonTypes, IconPositions, ITextTransformProp
} from './GayaButton.types'
import { BrandTypes } from '../../common/brandTypes/brandTypes'
import { Typography } from '../Typography'

// theme version 0.83.10
const description = () => `
> O GaYaButton faz parte da evolução contínua dos componentes do GaYa Design System. Lançado como um novo componente, o GaYaButton substitui o antigo Button, que permanecerá disponível para uso, mas não receberá mais atualizações ou suporte ativo. 
Recomendamos a migração para o GayaButton o mais rápido possível para aproveitar as melhorias e garantir a compatibilidade futura.

## Propriedades
| Figma         | Property         | Values                                                                             |    Status           |
|---               |---               |                                                                                 ---|                  ---|
| **hierarchy**      | **type**         | contained, outlined, ghost, tonal                                                  | ✅ Disponível        |
| **textTranform** | **textTranform** | uppercase, lowercase,  capitalize                                                  | ✅ Disponível         |
| **Size**         | **size**         | semi, semiX, medium                                                                | ✅ Disponível        |
| **Icon**         | **iconName**     | 'icon_name'                                                                        | ✅ Disponível        |
| **Disabled**     | **disabled**     | true, false                                                                        | ✅ Disponível        |
| **Display**      | **display **     | inline, block                                                                      | ❌ Não aplicável   |
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
const GayaButtonIconPosition = {
  left: 'left',
  right: 'right'
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
  consultoriaDeBeleza_v2: 'consultoriaDeBeleza_v2',
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
    <StoryContainer title="Casa & Estilo V2">
      <GayaButton brand="casaEestilo_v2" type="contained" onPress={onPress} text="Button" />
      <GayaButton brand="casaEestilo_v2" type="outlined" onPress={onPress} text="Button" />
      <GayaButton brand="casaEestilo_v2" type="ghost" onPress={onPress} text="Button" />
      <GayaButton brand="casaEestilo_v2" type="tonal" onPress={onPress} text="Button" />
    </StoryContainer>
    <StoryContainer title="Consultoria de Beleza">
      <GayaButton brand="consultoriaDeBeleza" type="contained" onPress={onPress} text="Button" />
      <GayaButton brand="consultoriaDeBeleza" type="outlined" onPress={onPress} text="Button" />
      <GayaButton brand="consultoriaDeBeleza" type="ghost" onPress={onPress} text="Button" />
      <GayaButton brand="consultoriaDeBeleza" type="tonal" onPress={onPress} text="Button" />
    </StoryContainer>
    <StoryContainer title="Consultoria de Beleza V2">
      <GayaButton brand="consultoriaDeBeleza_v2" type="contained" onPress={onPress} text="Button" />
      <GayaButton brand="consultoriaDeBeleza_v2" type="outlined" onPress={onPress} text="Button" />
      <GayaButton brand="consultoriaDeBeleza_v2" type="ghost" onPress={onPress} text="Button" />
      <GayaButton brand="consultoriaDeBeleza_v2" type="tonal" onPress={onPress} text="Button" />
    </StoryContainer>
    <StoryContainer title="Força de Vendas">
      <GayaButton brand="forcaDeVendas" type="contained" onPress={onPress} text="Button" />
      <GayaButton brand="forcaDeVendas" type="outlined" onPress={onPress} text="Button" />
      <GayaButton brand="forcaDeVendas" type="ghost" onPress={onPress} text="Button" />
      <GayaButton brand="forcaDeVendas" type="tonal" onPress={onPress} text="Button" />
    </StoryContainer>
    <StoryContainer title="Força de Vendas V2">
      <GayaButton brand="forcaDeVendas_v2" type="contained" onPress={onPress} text="Button" />
      <GayaButton brand="forcaDeVendas_v2" type="outlined" onPress={onPress} text="Button" />
      <GayaButton brand="forcaDeVendas_v2" type="ghost" onPress={onPress} text="Button" />
      <GayaButton brand="forcaDeVendas_v2" type="tonal" onPress={onPress} text="Button" />
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
    <StoryContainer title="Casa & Estilo V2" style={{ backgroundColor: 'black', padding: 20 }}>
      <GayaButton mode="dark" brand="casaEestilo_v2" type="contained" onPress={onPress} text="Button" />
      <GayaButton mode="dark" brand="casaEestilo_v2" type="outlined" onPress={onPress} text="Button" />
      <GayaButton mode="dark" brand="casaEestilo_v2" type="ghost" onPress={onPress} text="Button" />
      <GayaButton mode="dark" brand="casaEestilo_v2" type="tonal" onPress={onPress} text="Button" />
    </StoryContainer>
    <StoryContainer title="Consultoria de Beleza" style={{ backgroundColor: 'black', padding: 20 }}>
      <GayaButton mode="dark" brand="consultoriaDeBeleza" type="contained" onPress={onPress} text="Button" />
      <GayaButton mode="dark" brand="consultoriaDeBeleza" type="outlined" onPress={onPress} text="Button" />
      <GayaButton mode="dark" brand="consultoriaDeBeleza" type="ghost" onPress={onPress} text="Button" />
      <GayaButton mode="dark" brand="consultoriaDeBeleza" type="tonal" onPress={onPress} text="Button" />
    </StoryContainer>
    <StoryContainer title="Consultoria de Beleza v2" style={{ backgroundColor: 'black', padding: 20 }}>
      <GayaButton mode="dark" brand="consultoriaDeBeleza_v2" type="contained" onPress={onPress} text="Button" />
      <GayaButton mode="dark" brand="consultoriaDeBeleza_v2" type="outlined" onPress={onPress} text="Button" />
      <GayaButton mode="dark" brand="consultoriaDeBeleza_v2" type="ghost" onPress={onPress} text="Button" />
      <GayaButton mode="dark" brand="consultoriaDeBeleza_v2" type="tonal" onPress={onPress} text="Button" />
    </StoryContainer>
    <StoryContainer title="Força de Vendas" style={{ backgroundColor: 'black', padding: 20 }}>
      <GayaButton mode="dark" brand="forcaDeVendas" type="contained" onPress={onPress} text="Button" />
      <GayaButton mode="dark" brand="forcaDeVendas" type="outlined" onPress={onPress} text="Button" />
      <GayaButton mode="dark" brand="forcaDeVendas" type="ghost" onPress={onPress} text="Button" />
      <GayaButton mode="dark" brand="forcaDeVendas" type="tonal" onPress={onPress} text="Button" />
    </StoryContainer>
    <StoryContainer title="Força de Vendas V2" style={{ backgroundColor: 'black', padding: 20 }}>
      <GayaButton mode="dark" brand="forcaDeVendas_v2" type="contained" onPress={onPress} text="Button" />
      <GayaButton mode="dark" brand="forcaDeVendas_v2" type="outlined" onPress={onPress} text="Button" />
      <GayaButton mode="dark" brand="forcaDeVendas_v2" type="ghost" onPress={onPress} text="Button" />
      <GayaButton mode="dark" brand="forcaDeVendas_v2" type="tonal" onPress={onPress} text="Button" />
    </StoryContainer>

  </StoryWrapper>
)

export const Sizes = () => (
  <StoryWrapper title="Sizes">
    <StoryContainer title="Medium">
      <GayaButton onPress={onPress} text="GaYa Design System" size="medium" />
    </StoryContainer>
    <StoryContainer title="SemiX">
      <GayaButton onPress={onPress} text="GaYa Design System" size="semiX" />
    </StoryContainer>
    <StoryContainer title="Semi">
      <GayaButton onPress={onPress} text="GaYa Design System" size="semi" />
    </StoryContainer>
  </StoryWrapper>
)

export const Variants = () => (
  <StoryWrapper title="Properties">
    <StoryWrapper title="Types">
      <StoryContainer title="Contained">
        <GayaButton onPress={onPress} text="GaYa Design System" type="contained" />
      </StoryContainer>
      <StoryContainer title="Outlined">
        <GayaButton onPress={onPress} text="GaYa Design System" type="outlined" />
      </StoryContainer>
      <StoryContainer title="ghost">
        <GayaButton color="primary" onPress={onPress} text="GaYa Design System" type="ghost" />
      </StoryContainer>
      <StoryContainer title="tonal">
        <GayaButton onPress={onPress} text="GaYa Design System" type="tonal" />
      </StoryContainer>
    </StoryWrapper>

    <StoryWrapper title="Icons">
      <StoryContainer title="Left Icon">
        <GayaButton onPress={onPress} text="GaYa Design System" iconName="outlined-default-mockup" iconPosition="left" />
      </StoryContainer>
      <StoryContainer title="Right Icon">
        <GayaButton onPress={onPress} text="GaYa Design System" iconName="outlined-default-mockup" iconPosition="right" />
      </StoryContainer>
    </StoryWrapper>

    <StoryWrapper title="Disabled">
      <StoryContainer title="Contained">
        <GayaButton onPress={onPress} text="GaYa Design System" type="contained" disabled />
      </StoryContainer>
      <StoryContainer title="Outlined">
        <GayaButton onPress={onPress} text="GaYa Design System" type="outlined" disabled />
      </StoryContainer>
      <StoryContainer title="ghost">
        <GayaButton onPress={onPress} text="GaYa Design System" type="ghost" disabled />
      </StoryContainer>
      <StoryContainer title="tonal">
        <GayaButton onPress={onPress} text="GaYa Design System" type="tonal" disabled />
      </StoryContainer>
    </StoryWrapper>

    <StoryWrapper title="Display">
      <StoryContainer title="Display-Inline">
        <View style={{ alignItems: 'flex-start', marginBottom: 14 }}>
          <GayaButton onPress={onPress} text="GaYa Design System" />
        </View>
      </StoryContainer>
      <StoryContainer title="Display-Block">
        <View style={{ marginBottom: 14, width: '100%' }}>
          <GayaButton onPress={onPress} text="GaYa Design System" />
        </View>
      </StoryContainer>
    </StoryWrapper>
  </StoryWrapper>
)

export const Interactive = () => (
  <StoryContainer title="Interactive">
    <GayaButton
      iconPosition={select('IconPosition', GayaButtonIconPosition, 'left') as IconPositions}
      disabled={boolean('Disabled', false)}
      onPress={onPress}
      iconName={select('Icon name', iconNames as Array<IconName>, 'outlined-finance-bank' as IconName)}
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
export const Icon = () => (

  <StoryWrapper title="Icons">
    <StoryContainer title="Left Icon">
      <GayaButton
        iconPosition="left"
        iconName={select('Icon name', iconNames as Array<IconName>, 'outlined-finance-bank' as IconName)}
        disabled={boolean('Disabled', false)}
        onPress={onPress}
        size={select('Size', GayabuttonSizes, 'semiX') as GayaButtonSizes}
        text={textKnob('Text', 'Natura Design System')}
      />
    </StoryContainer>
    <StoryContainer title="Right Icon">
      <GayaButton
        iconPosition="right"
        iconName={select('Icon name', iconNames as Array<IconName>, 'outlined-finance-bank' as IconName)}
        disabled={boolean('Disabled', false)}
        onPress={onPress}
        size={select('Size', GayabuttonSizes, 'semiX') as GayaButtonSizes}
        text={textKnob('Text', 'Natura Design System')}
      />
    </StoryContainer>
  </StoryWrapper>

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
          <td style={{ padding: '10px', border: '1px solid #ccc' }}>accessibilityRole</td>
          <td style={{ padding: '10px', border: '1px solid #ccc' }}>A função de acessibilidade informa a uma pessoa que usa o VoiceOver no iOS ou o TalkBack no Android o tipo de elemento em que se concentra.</td>
          <td style={{ padding: '10px', border: '1px solid #ccc' }}><code>&lt;Gayabutton accessibilityRole="button"&gt;Click me&lt;/Gayabutton&gt;</code></td>
        </tr>
        <tr>
          <td style={{ padding: '10px', border: '1px solid #ccc' }}>accessibilityLabel</td>
          <td style={{ padding: '10px', border: '1px solid #ccc' }}>Fornece uma etiqueta de texto para leitores de tela.</td>
          <td style={{ padding: '10px', border: '1px solid #ccc' }}><code>&lt;Gayabutton accessibilityLabel="Fechar"&gt;X&lt;/GayaButton&gt;</code></td>
        </tr>
        <tr>
          <td style={{ padding: '10px', border: '1px solid #ccc' }}>accessibilityHint</td>
          <td style={{ padding: '10px', border: '1px solid #ccc' }}>Uma dica de acessibilidade ajuda os usuários a entender o que acontecerá quando eles executarem uma ação no elemento de acessibilidade quando esse resultado não for óbvio no rótulo de acessibilidade.</td>
          <td style={{ padding: '10px', border: '1px solid #ccc' }}>
            <code>&lt;Gayabutton accessibilityHint="Clique para fechar"&gt;X&lt;/GayaButton&gt;</code>
            <br />
          </td>
        </tr>
        <tr>
          <td style={{ padding: '10px', border: '1px solid #ccc' }}>accessibilityState</td>
          <td style={{ padding: '10px', border: '1px solid #ccc' }}>Ao receber disabled indica que o elemento está desabilitado, mas ainda é acessado pela tecnologia assistiva.</td>
          <td style={{ padding: '10px', border: '1px solid #ccc' }}><code>&lt;Gayabutton accessibilityState"disabled"&gt;Não disponível&lt;/GayaButton&gt;</code></td>
        </tr>
      </tbody>
    </table>
  </div>
)
