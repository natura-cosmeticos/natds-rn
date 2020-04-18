import { Platform } from 'react-native';
import styled, { css } from 'styled-components/native';
import { roboto, sanfrancisco } from '../../assets/theme/fonts/fonts';
import { body, header } from '../../assets/theme/typography/typography';
import { colors } from '../../assets/theme/colors/colors';

export const ModalView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(3, 3, 3, 0.5);
`;
export const ModalContent = styled.View`
  background-color: ${colors.primary.white};
  elevation: 1;
  flex: 1;
  flex-direction: column;
  align-items: stretch;
`;
export const ModalText = styled.Text`
  padding-horizontal: 16;
  margin-bottom: 24;
  ${body(Platform.OS).Small}
  color: ${colors.bw.grayDarker};
`;
export const ModalTitle = styled.Text`
  color: ${colors.bw.black};
  ${header.XSmallBold};
  margin-top: ${props => (props.save ? 40 : 24)};
  margin-bottom: ${props => (props.save ? 40 : 8)};
  padding-horizontal: 16;
`;
export const ModalButton = styled.TouchableOpacity`
  align-items: center;
  padding: 16px;
  background-color: ${colors.primary.yellow};
  border-bottom-left-radius: 6;
  border-bottom-right-radius: 6;
  ${props => props.alternative
    && css`
      width: 50%;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 6;
    `}
`;
export const ModalButtonLabel = styled.Text`
  color: ${colors.primary.white}
  font-family: ${Platform.OS === 'ios' ? sanfrancisco.bold : roboto.bold};
  letter-spacing: 1px;
`;
export const ModalContainer = styled.View`
  flex-direction: row;
`;
export const ModalButtonAlternative = styled.TouchableOpacity`
  width: 50%;
  align-items: center;
  padding: 16px;
  background-color: ${colors.primary.white};
  border-bottom-left-radius: 6;
`;
export const ModalButtonLabelAlternative = styled.Text`
  color: ${colors.primary.yellow};
  font-family: ${Platform.OS === 'ios' ? sanfrancisco.bold : roboto.bold};
  letter-spacing: 1px;
`;
