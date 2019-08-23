import { Platform, StyleSheet } from 'react-native';
import styled, { css } from 'styled-components/native';
import { colors } from '../../assets/theme/colors/colors';
import { natura } from '../../assets/theme/fonts/fonts';

export const AndroidStyle = StyleSheet.create({
  android: {
    marginTop: 4,
  },
});

export const HeaderWrapper = styled.View`
  flex-wrap: wrap;
  width: 100%;
  height: 56;
  padding-top: 16;
  padding-bottom: 16;
  padding-left: 16;
  background-color: ${colors.primary.white};
  ${Platform.select({
    ios: css`
      flex-direction: row;
      justify-content: space-between;
    `,
  })}
`;

export const HeaderIcon = styled.TouchableOpacity`
  width: 24;
  ${Platform.select({
    ios: css`
      flex: 1;
      justify-content: flex-start;
    `,
  })}
`;

export const HeaderTitle = styled.Text`
  margin-left: 24;
  font-size: 20;
  color: ${colors.bw.grayDarker};
  font-family: ${natura.regular};
`;

export const HeaderRight = styled.View`
  margin-left: 16;
  width: 18;
  ${Platform.select({
    ios: css`
      flex: 1;
      justify-content: flex-end;
    `,
  })}
`;
