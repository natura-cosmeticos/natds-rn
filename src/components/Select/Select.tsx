import * as React from 'react'
import {
  StyleSheet, View,
  requireNativeComponent,
  UIManager,
  Platform,
  ViewStyle
} from 'react-native'

export type SelectProps = {
  placeHolder?: string;
  style?: ViewStyle;
  items?: Array<string>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  box: {
    width: 260,
    height: 20
  }
})

const LINKING_ERROR = `The package 'naturareactnativecomponents' doesn't seem to be linked. Make sure: \n\n${
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' })
}- You rebuilt the app after installing the package\n`
  + '- You are not using Expo managed workflow\n'

const REACT_CLASS = 'Select'

const NativeComponent = UIManager.getViewManagerConfig(REACT_CLASS) != null
  ? requireNativeComponent<SelectProps>(REACT_CLASS)
  : () => {
    throw new Error(LINKING_ERROR)
  }

export const Select = () => (
  <View style={styles.container}>
    <NativeComponent
      placeHolder="Placeholder..."
      style={styles.box}
      items={['Item1', 'Item2']}
    />
  </View>
)
