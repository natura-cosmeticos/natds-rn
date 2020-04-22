import React, { useState } from 'react';
import { SafeAreaView, Dimensions } from 'react-native';
import styled from 'styled-components/native';
import { header } from '../../../lib/assets/theme/typography/typography';
import {
  NatPeriodButton,
  NatCounterToggler,
  NatGenericCard,
  NatContainer,
} from '../../../lib';

export const HeaderText = styled.Text`
  ${header.Small}
`;
const styles = {
  defaultScreen: {
    flex: 1,
    width: Dimensions.get('window').width,
  },
};
const FlexNatGenericCard = {
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  width: '100%',
};

export const FriendExchange = () => {
  const [itemCount, setItemCount] = useState(1);
  const onIncreaseHandler = () => {
    setItemCount(itemCount + 1);
  };
  const onDecreaseHandler = () => {
    setItemCount(itemCount - 1);
  };

  return (
    <SafeAreaView style={styles.defaultScreen}>
      <NatContainer>
        <NatGenericCard style={FlexNatGenericCard}>
          <HeaderText>Counter Toggler</HeaderText>
          <NatCounterToggler
            counter={itemCount}
            min={1}
            max={3}
            onIncrease={onIncreaseHandler}
            onDecrease={onDecreaseHandler}
            width="120px"
            height="55px"
          />
        </NatGenericCard>

        <NatGenericCard style={FlexNatGenericCard}>
          <HeaderText>Period Button</HeaderText>
          <NatPeriodButton
            title="Hoje"
            subtitle="04/11"
            onSelect={() => null}
            iconSrc="https://i.imgur.com/gM3z36s.png"
          />
          <NatPeriodButton
            title="Amanhã"
            subtitle="04/11"
            onSelect={() => null}
            iconSrc="https://i.imgur.com/gM3z36s.png"
          />
          <NatPeriodButton
            selected
            title="A combinar"
            onSelect={() => null}
            iconSrc="https://i.imgur.com/gM3z36s.png"
          />
        </NatGenericCard>
      </NatContainer>
    </SafeAreaView>
  );
};
