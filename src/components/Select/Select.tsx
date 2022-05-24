import * as React from 'react'
import {
  StyleSheet, View,
  requireNativeComponent,
  UIManager,
  Platform,
  ViewStyle
} from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20
  }
})

const LINKING_ERROR = `The package 'react-native-component' doesn't seem to be linked. Make sure: \n\n${
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' })
}- You rebuilt the app after installing the package\n`
  + '- You are not using Expo managed workflow\n'

export type SelectProps = {
  color: string;
  style: ViewStyle;
};

const ComponentName = 'ComponentView'

const NativeComponent = UIManager.getViewManagerConfig(ComponentName) != null
  ? requireNativeComponent<SelectProps>(ComponentName)
  : () => {
    throw new Error(LINKING_ERROR)
  }

export const Select = () => (
  <View style={styles.container}>
    <NativeComponent color="#32a852" style={styles.box} />
  </View>
)
