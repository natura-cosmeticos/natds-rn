import React from 'react';
import { View, SafeAreaView } from 'react-native';
import { NatLogo, NatText } from '../../../lib';

export const Welcome = () => (
  <SafeAreaView>
    <View style={{
      alignItems: 'center',
      justifyContent: 'center',
    }}
    >
      <NatLogo name="logo-natura-vertical" size={300} />
    </View>
    <NatText type="h3" value="Welcome to NATDS!" />
    <NatText value="Here you can try out the components of our react-native library." />
  </SafeAreaView>
);
