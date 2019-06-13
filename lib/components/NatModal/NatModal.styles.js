import styled, { css } from 'styled-components/native';

import { roboto } from '../../assets/theme/fonts/fonts';
import { body, header } from '../../assets/theme/typography/typography';
import { colors } from '../../../lib/assets/theme/colors/colors';

export const ModalView = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: rgba(3, 3, 3, 0.5);
`;

export const ModalContent = styled.View`
  background-color: ${colors.primary.white};
  border-radius: 6;
  box-shadow: 0px 16px 32px rgba(0, 0, 0, 0.24);
  elevation: 8;
  margin-horizontal: 24;
`;

export const ModalText = styled.Text`
  padding-horizontal: 16;
  margin-bottom: 24;
  ${body.Small}
  color: ${colors.bw.grayDarker};
`;

export const ModalTitle = styled.Text`
  color: ${colors.bw.black};
  ${header.XSmallBold};
  margin-top: 24;
  margin-bottom: 8;
  padding-horizontal: 16;
`;

export const ModalButton = styled.TouchableOpacity`
  align-items: center;
  padding: 16px;
  background-color: ${colors.primary.yellow};
  border-bottom-left-radius: 6;
  border-bottom-right-radius: 6;
    ${props => props.alternative && css`
    width: 50%;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 6;
`}
`;

export const ModalButtonLabel = styled.Text`
  color: ${colors.primary.white}
  font-family: ${roboto.bold};
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
  font-family: ${roboto.bold};
  letter-spacing: 1px;
`;
