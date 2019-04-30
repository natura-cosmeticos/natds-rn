import styled from 'styled-components/native';

import { natura, roboto } from '../../assets/theme/fonts/fonts';
import { colors } from '../../assets/theme/colors/colors';

export const ModalView = styled.View`
  align-items: stretch;
  justify-content: center;
  background-color: ${colors.primary.white};
  border-radius: 6;
  margin-horizontal: 24;
  box-shadow: 0px 16px 32px rgba(0, 0, 0, 0.24);
  elevation: 6;
`;

export const ModalText = styled.Text`
  padding-horizontal: 16;
  margin-bottom: 24;
  font-size: 14;
  color: ${colors.bw.grayDarker};
`;

export const ModalTitle = styled.Text`
  color: ${colors.bw.black};
  font-size: 20;
  font-family: ${natura.bold}
  margin-top: 24;
  margin-bottom: 16;
  padding-horizontal: 16;
  align-self: flex-start;
`;

export const ModalButton = styled.TouchableOpacity`
  align-items: center
  padding: 16px;
  background-color: ${colors.primary.yellow}
  border-bottom-left-radius: 6
  border-bottom-right-radius: 6
`;

export const ModalButtonLabel = styled.Text`
  color: ${colors.primary.white}
  font-family: ${roboto.bold};
  letter-spacing: 1px
`;
