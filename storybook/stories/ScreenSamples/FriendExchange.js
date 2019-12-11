import React, { useState } from 'react';

import { NatCounterToggler } from '../../../lib';
import styled from 'styled-components/native';

export const CustomContainer = styled.View`
    width: 100%;
    display: flex;
    justifyContent: center;
    alignItems: center;
`;

export const FriendExchange = props => {
    const [itemCount, setItemCount] = useState(1);

    const onIncreaseHandler = () => {
        setItemCount(itemCount + 1);
    };

    const onDecreaseHandler = () => {
        setItemCount(itemCount - 1);
    };

    return (
        <CustomContainer>
            <NatCounterToggler
                counter={itemCount}
                min={1}
                max={6}
                onIncrease={onIncreaseHandler}
                onDecrease={onDecreaseHandler}
            />
        </CustomContainer>
    );
};
