import React, { useState} from 'react';
import { Text } from 'react-native';
import { NatContainer, NatTextInput } from '../../../lib';
import icoArrowLeft from '../../../lib/assets/icons/ic_arrow_left_white.png';

export const StoryNatTextInput = ({type, icon}) => {

  const [inputSmall, setInputSmall]  = useState('');
  const [inputNormal, setInputNormal]  = useState('');


  return (

    <NatContainer>
          <NatTextInput
            label="Size Small"
            placeholder="Size Small"
            assistiveText="Size Small"
            onChangeText={setInputSmall}
            value={inputSmall}
            size="small"
            type={type}
            icon={icon && icoArrowLeft}
          />
           <NatTextInput
            label="Size Normal"
            placeholder="Size Normal"
            assistiveText="Size Normal"
            onChangeText={setInputNormal}
            value={inputNormal}
            size="normal"
            type={type}
            icon={icon && icoArrowLeft}
          />

          <Text>You can apply margin-top by sending "margin" prop, with values: none, dense or normal.</Text>
      </NatContainer>

  );
};
