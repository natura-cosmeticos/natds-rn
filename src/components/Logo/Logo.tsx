/* eslint-disable no-lonely-if */
/* eslint-disable max-len */
import React from 'react'
import { SvgCss } from 'react-native-svg'
import styled, { useTheme } from 'styled-components/native'
import { Theme } from '@naturacosmeticos/natds-themes/react-native'
import { CSSObject } from 'styled-components'
import {
  getColorByName,
  getCustomLogoA,
  getCustomLogoB,
  getNeutralLogoA,
  getNeutralLogoB,
  getSize
} from '../../common/themeSelectors'
import { LogoColors, LogoProps, NeutralLogoModel } from './Logo.types'

/**
 * Força (ou remove) o fill="..." em um <path ...>.
 * @param pathTag O trecho de string `<path ...>`
 * @param color   A cor a ser aplicada (se `undefined`, remove `fill="..."`)
 */
function setFillInline(pathTag: string, color?: string) {
  if (!color) {
    // Se não tem cor, remove completamente fill="..."
    return pathTag.replace(/fill="[^"]*"/, '').trim()
  }

  // Se já existe fill="...", substitui
  if (/fill="/.test(pathTag)) {
    return pathTag.replace(/fill="[^"]*"/, `fill="${color}"`)
  }

  // Se não tinha fill, adiciona
  return pathTag.replace('<path', `<path fill="${color}"`)
}

/**
 * Itera cada `<path ...>` e aplica:
 * - `hexColor` em todos os paths (se existir; senão mantém cor original)
 * - se o path anterior tiver `id="id-avonV2-b-custom"`, o path atual recebe `specialFill`
 */
function applyAvonInlineRules({
  svg,
  hexColor,
  specialFill
}: {
  svg: string;
  hexColor?: string;
  specialFill?: string;
}) {
  // Pega cor original de um path se não formos sobrescrever
  function getOriginalFill(pathStr: string) {
    const match = pathStr.match(/fill="([^"]*)"/)
    return match ? match[1] : undefined
  }

  let nextPathShouldUseSpecial = false

  const processed = svg.replace(/<path[^>]*>/g, (pathTag) => {
    let newPath = pathTag

    // Se este for o "próximo path" após id-avonV2-b-custom, aplica specialFill
    if (nextPathShouldUseSpecial) {
      newPath = setFillInline(newPath, specialFill)
      nextPathShouldUseSpecial = false
    } else {
      // Caso geral: se hexColor existe, aplica
      if (hexColor) {
        newPath = setFillInline(newPath, hexColor)
      } else {
        // Senão, mantém a cor original do path
        const origFill = getOriginalFill(newPath)
        newPath = setFillInline(newPath, origFill)
      }
    }

    // Se ESTE path tem id="id-avonV2-b-custom", o PRÓXIMO path recebe `specialFill`
    if (/id="id-avonV2-b-custom"/.test(pathTag)) {
      nextPathShouldUseSpecial = true
    }

    return newPath
  })

  return processed
}

/**
 * Substitui cor via `<style> path { fill: ... }>` e `<path fill="...">`.
 * Mantém o style no SVG.
 */
function applyStyleSubstitutions({
  svg,
  hexColor
}: {
  svg: string;
  hexColor?: string;
}): string {
  // Padrão para algo como: path { fill: #ABC123 }
  const styleFillPattern = /(path\s*\{\s*fill:\s*)(#[a-zA-Z\d]{6,8})(\s*\})/gm

  // Padrão para algo como: <path fill="#ABC123" ...>
  const inlineFillPattern = /(<path[^>]*fill=")(#[^"]+)("[^>]*>)/gm

  let replacedSvg = svg

  // Substitui no <style> path { fill: #xxxxxx }
  replacedSvg = replacedSvg.replace(styleFillPattern, (match, before, originalColor, after) => `${before}${hexColor || originalColor}${after}`)

  // Substitui diretamente no fill inline
  replacedSvg = replacedSvg.replace(inlineFillPattern, (match, before, originalColor, after) => `${before}${hexColor || originalColor}${after}`)

  return replacedSvg
}

/**
 * Função principal que processa o SVG:
 * - Ajusta width e height
 * - Se encontrar id="id-avonV2-b-custom", remove <style> e aplica inline
 * - Caso contrário, mantém <style> e usa as substituições
 */
function processSvg({
  svg,
  hexColor,
  specialFill,
  width,
  height
}: {
  svg: string;
  hexColor?: string;
  specialFill?: string;
  width: number;
  height: number;
}): string {
  // Ajusta width e height no <svg ...>
  const widthPattern = /width="(\d+)"/
  const heightPattern = /height="(\d+)"/

  let replacedSvg = svg.replace(widthPattern, (match, originalWidth) => `width="${width || originalWidth}"`)
  replacedSvg = replacedSvg.replace(heightPattern, (match, originalHeight) => `height="${height || originalHeight}"`)

  // Verifica se o SVG tem id="id-avonV2-b-custom"
  const hasAvonId = replacedSvg.includes('id="id-avonV2-b-custom"')

  if (!hasAvonId) {
    // Não tem ID especial => mantém estilo e substituições "tradicionais"
    return applyStyleSubstitutions({ svg: replacedSvg, hexColor })
  }

  // Tem ID especial => remove <style> e aplica rules inline -
  replacedSvg = replacedSvg.replace(/<style[^>]*>[\s\S]*?<\/style>/g, '')

  replacedSvg = applyAvonInlineRules({
    svg: replacedSvg,
    hexColor,
    specialFill
  })

  return replacedSvg
}

function getLogoType(color: LogoColors) {
  return color === 'neutral' ? 'neutral' : 'custom'
}

function getCustomColor(color: LogoColors, theme: Theme) {
  return color === 'neutral' ? undefined : getColorByName(theme, color)
}

function getLogoByProps(
  color: LogoColors,
  model: NeutralLogoModel,
  theme: Theme
) {
  const type = getLogoType(color)
  const logo = {
    custom: {
      a: getCustomLogoA(theme),
      b: getCustomLogoB(theme)
    },
    neutral: {
      a: getNeutralLogoA(theme),
      b: getNeutralLogoB(theme)
    }
  }
  return logo[type][model]
}

// -----------------------------------------------------
// Componente React
// -----------------------------------------------------
const Container = styled.View((): CSSObject => ({
  alignItems: 'center',
  flex: 1,
  justifyContent: 'center'
}))

export const Logo = ({
  accessibilityLabel,
  color = 'neutral',
  model = 'a',
  size = 'veryHuge',
  languages = 'default'
}: LogoProps) => {
  const theme = useTheme()
  const {
    file, height, width, es, pt
  } = getLogoByProps(color, model, theme)

  // Seleciona o arquivo de acordo com a prop languages
  const langProps = {
    default: file,
    es,
    pt
  }[languages]

  const langSafe = langProps || file

  // "hexColor": cor normal para paths gerais (pode ser undefined se color='neutral')
  const normalHexColor = getCustomColor(color, theme)

  // "specialFill": cor específica para o próximo path após id="id-avonV2-b-custom"
  const specialFill = color !== 'surface' ? '#fff' : '#000'

  const finalWidth = getSize(theme, size)
  const finalHeight = (finalWidth * height) / width

  const processedSvg = processSvg({
    svg: langSafe,
    hexColor: normalHexColor,
    specialFill,
    width: finalWidth,
    height: finalHeight
  })

  return (
    <Container>
      <SvgCss
        accessible={!!accessibilityLabel}
        accessibilityLabel={accessibilityLabel}
        accessibilityRole="image"
        testID="logo"
        xml={processedSvg}
      />
    </Container>
  )
}
