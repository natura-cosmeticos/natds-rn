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

export const StoryFAB = ({ type, value }) => (
  <SafeAreaView style={styles.defaultScreen}>
    <ScrollView>
      <NatText value="Sizes" />
      <View style={{ flexDirection: 'row' }}>
        <FAB type={type} value={value} onPress={() => {}} color='primary' />
        <FAB type={type} value={value} size="medium" onPress={() => {}} color='primary' />
        <FAB type={type} value={value} size="large" onPress={() => {}} color='primary' />
      </View>
      <NatSpace />
      <NatText value="Colors" />
      <View style={{ flexDirection: 'row' }}>
        <FAB type={type} value={type === 'round' ? value : 'default'} onPress={() => {}} />
        <FAB type={type} value={type === 'round' ? value : 'primary'} color="primary" onPress={() => {}} />
        <FAB
          type={type}
          value={type === 'round' ? value : 'secondary'}
          color="secondary"
          onPress={() => {}}
        />
      </View>
    </ScrollView>
  </SafeAreaView>
);

StoryFAB.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
