import React, { useState} from 'react';
import { View, Image, Alert, StyleSheet } from 'react-native';
import icoArrowLeft from '../lib/assets/icons/ic_arrow_left_white.png';
import { NatButton, NatContainer, NatTextInput } from '../lib';

export const Login = () => {

  const [inputMatricula, setInputMatricula]  = useState('');
  const [inputSenha, setInputSenha]  = useState('');

  const press = () =>
    Alert.alert(
      'Press',
      'My Alert Msg',
      [
        {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      {cancelable: false},
    );

  return (

    <NatContainer>
      <View style={styles.viewLogo}>
        <Image
          style={styles.imgLogo}
          source={{uri: 'https://upload.wikimedia.org/wikipedia/pt/c/cb/Natura_Logo.png'}}
        />
      </View>
      <View style={styles.viewInput}>
        <NatTextInput
          label="Matrícula"
          placeholder="Ex: 99999"
          assistiveText="Digite sua matrícula"
          onChangeText={setInputMatricula}
          value={inputMatricula}
        />
        <NatTextInput
          label="Senha"
          placeholder="Ex: sua senha"
          assistiveText="Digite sua senha"
          secureTextEntry
          onChangeText={setInputSenha}
          icon={icoArrowLeft}
          iconPress={press}
          value={inputSenha}
        />
      </View>
      <View style={styles.viewButton}>
        <NatButton
          type="short"
          label="Esqueceu a senha?"
          onPress={press}
        />
        <NatButton
          type="newDefault"
          label="Entrar"
          onPress={press}
        />
        <NatButton
          type="short"
          label="Selecionar país"
          onPress={press}
        />
      </View>
    </NatContainer>
  );
};

const styles = StyleSheet.create({
  viewLogo: {
    flex: 1.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgLogo: {
    width: 140,
    height: 105,
  },
  viewInput: {
    flex: 1.5,
  },
  viewButton: {
    flex: 1,
    justifyContent: 'space-between',
    marginBottom: 10,
  },
})
;
