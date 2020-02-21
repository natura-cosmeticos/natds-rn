import React, { useState } from 'react';
import { SafeAreaView } from 'react-native';

import styled from 'styled-components/native';
import { header } from '../../../lib/assets/theme/typography/typography';
import { NatPeriodButton, NatCounterToggler, NatGenericCard } from '../../../lib';

export const CustomContainer = styled.View`
    width: 100%;
    display: flex;
    flex-direction: column;
    justifyContent: center;
    alignItems: center;
`;

export const HeaderText = styled.Text`
  ${header.Small}
`;

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
    <SafeAreaView>
      <CustomContainer>
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
          <NatPeriodButton title="Hoje" subtitle="04/11" onSelect={() => null} iconSrc="https://i.imgur.com/gM3z36s.png" />
          <NatPeriodButton title="Amanhã" subtitle="04/11" onSelect={() => null} iconSrc="https://i.imgur.com/gM3z36s.png" />
          <NatPeriodButton selected title="A combinar" onSelect={() => null} iconSrc="https://i.imgur.com/gM3z36s.png" />
        </NatGenericCard>

      </CustomContainer>
    </SafeAreaView>
  );
};
