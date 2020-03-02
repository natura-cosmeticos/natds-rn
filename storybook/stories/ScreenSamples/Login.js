/* eslint-disable no-console */
import React, { useState } from 'react';
import {
  View,
  Alert,
  StyleSheet,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import {
  Button,
  NatContainer,
  NatTextInput,
  NatLogo,
  NatSpace,
  NatLink,
} from '../../../lib';

const widthTotal = Dimensions.get('window').width;

const styles = StyleSheet.create({
  defaultScreen: {
    flex: 1,
    width: widthTotal,
  },
  viewButton: {
    flex: 1,
    justifyContent: 'space-between',
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
  const [inputUsername, setInputUsername] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  const [inputPasswordSecret, setInputPasswordSecret] = useState(true);
  const [inputPasswordIcon, setInputPasswordIcon] = useState('outlined-action-visibility');
  

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

  const togglePassword = () => {
    if (inputPasswordIcon === 'outlined-action-visibility') {
      setInputPasswordIcon('outlined-action-visibilityoff');
      setInputPasswordSecret(false);
    } else {
      setInputPasswordIcon('outlined-action-visibility');
      setInputPasswordSecret(true);
    }
  }

  return (
    <SafeAreaView style={styles.defaultScreen}>
      <NatContainer style={{ flex: 1 }}>
        <View style={styles.viewLogo}>
          <NatSpace>
            <NatLogo name="logo-natura-vertical" size={widthTotal - 100} />
          </NatSpace>
        </View>
        <View style={styles.viewInput}>
          <NatTextInput
            label="Username"
            placeholder="your username"
            assistiveText=""
            onChangeText={setInputUsername}
            value={inputUsername}
          />
          <NatTextInput
            label="Password"
            placeholder="your password"
            assistiveText=""
            onChangeText={setInputPassword}
            value={inputPassword}
            icon={{ svg: { name: inputPasswordIcon } }}
            iconPress={() => togglePassword()}
            secureTextEntry={inputPasswordSecret}
          />
          <NatLink type="body1" value="Forgot password?" onPress={() => alert('press link')} align="center" />
        </View>
        <View style={styles.viewButton}>
          <Button
            type="primary"
            label="Enter"
            onPress={() => {}}
          />
          <Button
            type="tertiary"
            label="Select Country"
            onPress={() => {}}
          />
        </View>
      </NatContainer>
    </SafeAreaView>
  );
};
