import React from 'react';
import { ScrollView, SafeAreaView, Dimensions, View } from 'react-native';
import PropTypes from 'prop-types';
import { FAB, NatText, NatSpace } from '../../../lib';

const styles = {
  defaultScreen: {
    flex: 1,
    width: Dimensions.get('window').width,
    marginTop: 5
  },
};

const valueText = "+";
const valueExtended = "extended";

export const StoryFAB = () => (
  <SafeAreaView style={styles.defaultScreen}>
    <ScrollView>

      <NatText value="TYPE: round" type="h6" />

      <NatText value="Sizes - Icon" />
      <View style={{ flexDirection: 'row' }}>
        <FAB type="round" icon="outlined-navigation-directiontop" onPress={() => {}} color='primary' />
        <FAB type="round" icon="outlined-navigation-directiontop" size="medium" onPress={() => {}} color='primary' />
        <FAB type="round" icon="outlined-navigation-directiontop" size="large" onPress={() => {}} color='primary' />
      </View>
      <NatSpace />
      <NatText value="Sizes - Text" />
      <View style={{ flexDirection: 'row' }}>
        <FAB type="round" value={valueText} onPress={() => {}} color='primary' />
        <FAB type="round" value={valueText} size="medium" onPress={() => {}} color='primary' />
        <FAB type="round" value={valueText} size="large" onPress={() => {}} color='primary' />
      </View>
      <NatSpace />
      <NatText value="Colors - Text" />
      <View style={{ flexDirection: 'row' }}>
        <FAB type="round" value={valueText} onPress={() => {}} />
        <FAB type="round" value={valueText} color="primary" onPress={() => {}} />
        <FAB
          type="round"
          value={valueText}
          color="secondary"
          onPress={() => {}}
        />
      </View>

      <NatText value="TYPE: extended" type="h6" />

      <NatText value="Sizes - Icon" />
      <View style={{ flexDirection: 'row' }}>
        <FAB type="extended" value={valueExtended} onPress={() => {}} color='primary' />
        <FAB type="extended" value={valueExtended} size="medium" onPress={() => {}} color='primary' />
        <FAB type="extended" value={valueExtended} size="large" onPress={() => {}} color='primary' />
      </View>
      <NatSpace />
      <NatText value="Sizes - Text" />
      <View style={{ flexDirection: 'row' }}>
        <FAB type="extended" value={valueExtended} onPress={() => {}} color='primary' />
        <FAB type="extended" value={valueExtended} size="medium" onPress={() => {}} color='primary' />
        <FAB type="extended" value={valueExtended} size="large" onPress={() => {}} color='primary' />
      </View>
      <NatSpace />
      <NatText value="Colors - Text" />
      <View style={{ flexDirection: 'row' }}>
        <FAB type="extended" value="default" onPress={() => {}} />
        <FAB type="extended" value="default" color="primary" onPress={() => {}} />
        <FAB
          type="extended"
          value="secondary"
          color="secondary"
          onPress={() => {}}
        />
      </View>
    </ScrollView>
  </SafeAreaView>
);

StoryFAB.propTypes = {
  type: PropTypes.string.isRequired,
};
