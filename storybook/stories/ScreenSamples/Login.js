/* eslint-disable no-console */
import React, { useState } from 'react';
import {
  View,
  Alert,
  StyleSheet,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import icoArrowLeft from '../../../lib/assets/icons/ic_arrow_left_white.png';
import {
  NatButton,
  NatContainer,
  NatTextInput,
  NatLogo,
} from '../../../lib';

const styles = StyleSheet.create({
  defaultScreen: {
    backgroundColor: '#FFF',
    marginTop: 0,
    width: Dimensions.get('window').width,
  },
  imgLogo: {
    height: 105,
    width: 140,
  },
  viewButton: {
    flex: 1,
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  viewInput: {
    flex: 1.5,
  },
  viewLogo: {
    alignItems: 'center',
    flex: 1.5,
    justifyContent: 'center',
  },
});

export const Login = () => {
  const [inputMatricula, setInputMatricula] = useState('');
  const [inputSenha, setInputSenha] = useState('');

  const press = () => Alert.alert(
    'Press',
    'My Alert Msg',
    [
      { onPress: () => console.log('Ask me later pressed'), text: 'Ask me later' },
      {
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
        text: 'Cancel',
      },
      { onPress: () => console.log('OK Pressed'), text: 'OK' },
    ],
    { cancelable: false },
  );

  return (
    <SafeAreaView>
      <NatContainer style={styles.defaultScreen}>
        <View style={styles.viewLogo}>
          <NatLogo name="logo-natura-vertical" size={300} />
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
    </SafeAreaView>
  );
};
