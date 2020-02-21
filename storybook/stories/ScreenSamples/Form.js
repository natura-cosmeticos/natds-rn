import React, { useState } from 'react';
import {
  View, Text, Dimensions, SafeAreaView,
} from 'react-native';
import icoArrowLeft from '../../../lib/assets/icons/ic_arrow_left_white.png';
import { NatContainer, NatTextInput } from '../../../lib';

const styles = {
  defaultScreen: {
    backgroundColor: '#FFF',
    marginTop: 0,
    width: Dimensions.get('window').width,
  },
};

export const Form = () => {
  const [inputSmall, setInputSmall] = useState('');
  const [inputError, setInputError] = useState('');
  const [inputDisabled, setInputDisabled] = useState('');
  const [inputNormal, setInputNormal] = useState('');

  return (
    <SafeAreaView>
      <NatContainer styles={styles}>
        <View>
          <NatTextInput
            label="Size Small"
            placeholder="Size Small"
            assistiveText="Size Small"
            onChangeText={setInputSmall}
            value={inputSmall}
            size="small"
            icon={icoArrowLeft}
          />
          <NatTextInput
            label="Size Normal and Margin Normal"
            placeholder="Size Normal"
            assistiveText="Size Normal"
            onChangeText={setInputNormal}
            value={inputNormal}
            margin="normal"
          />
          <NatTextInput
            label="Error"
            type="error"
            placeholder="Error"
            secureTextEntry
            assistiveText="Error"
            onChangeText={setInputError}
            value={inputError}
          />
          <NatTextInput
            label="Disabled"
            type="disabled"
            placeholder="Disabled"
            assistiveText="Disabled"
            onChangeText={setInputDisabled}
            value={inputDisabled}
          />
          <Text>You can apply margin by sending "margin" prop, with values: none, dense or normal.</Text>
        </View>
      </NatContainer>
    </SafeAreaView>
  );
};
