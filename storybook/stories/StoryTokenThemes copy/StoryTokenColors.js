import React from 'react';
import {
  SafeAreaView,
  View,
  FlatList,
  ScrollView,
  Dimensions,
} from 'react-native';
import {
  NatContainer,
  NatText,
  NatIcon,
  ThemeNaturaLight,
} from '../../../../lib';

const styles = {
  defaultScreen: {
    backgroundColor: '#FFF',
    width: Dimensions.get('window').width,
  },
};

export const StoryTokenColors = () => {

  const renderItem = (name, color) => (
    <View style={{ flexDirection: 'row' }}>
      <NatText type="body1" value={name} />
      <View style={{ backgroundColor: color, width: 30, height: 30 }} />
      <NatText type="body1" value={color} />
    </View>
  );

  const primary = Object.keys(ThemeNaturaLight.palette.primary).map((k) => { return { name: k, color: ThemeNaturaLight.palette.primary[k] }; });

  return (
    <SafeAreaView>
      <NatContainer style={styles.defaultScreen}>
        <ScrollView>
          <NatText type="h6" value="PRIMARY" />
          <FlatList
            data={primary}
            renderItem={({ item }) => renderItem(item.name, item.color)}
            keyExtractor={item => item.name}
          />
        </ScrollView>
      </NatContainer>
    </SafeAreaView>
  );
};

StoryTokenColors.propTypes = {
};
