import styled from 'styled-components/native'
import { ContainerRow, TextWithTheme, ContainerWithTheme } from '../HelperComponents/ThemeHelper.styles'

export const Container = styled(ContainerRow)`
  padding: 10px;
  border-bottom-color: #eaeaea;
`

const addBorder = ({ isLast }) => {
  if (isLast) return ''

  return `
      border-bottom-color: #eaeaea;
      border-bottom-width: 1px;
    `
}

export const SwitchContainer = styled(Container)`
  ${addBorder}
`

export const ModalContainer = styled(ContainerWithTheme)`
  flex: 1;
  align-items: flex-start;
  padding-top: 60px;
  padding-left: 20px;
  padding-right: 20px;
`

export const Title = styled(TextWithTheme)`
  margin-bottom: 15px;
  font-size: 30px;
  font-weight: 100;
`
