import React from 'react';
import { View, Text } from 'react-native';
import { typography } from './lib/assets/theme/typography/typography.js';

export const App = () => (
  <View style={{ height: '100%', alignItems: 'center', justifyContent: 'center' }}>
    <Text style={[typography.display_small]}>You can test your component here</Text>
  </View>
);
