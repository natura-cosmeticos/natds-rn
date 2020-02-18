import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { NatLogo } from '../../../lib';

const styles = {
  wrapper: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
  },
  header: {
    flex: 1,
    fontSize: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 2,
    fontSize: 14,
    lineHeight: 18,
  },
};

export const Welcome = () => (
  <SafeAreaView>
    <View style={styles.wrapper}>
      <NatLogo name="logo-natura-vertical" size={300} />
      <Text style={styles.header}>Welcome to NATDS!</Text>
      <View style={{
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 30,
      }}
      />
      <Text style={styles.content}>
        Here you can try out the components of our react-native library.
      </Text>
    </View>
  </SafeAreaView>
);
