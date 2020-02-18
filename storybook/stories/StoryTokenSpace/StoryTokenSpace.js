import React from 'react';
import {
  ScrollView,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import {
  NatContainer,
  NatSpace,
  ThemeNaturaLight as Theme,
  NatText,
} from '../../../lib';

const styles = {
  defaultScreen: {
    backgroundColor: '#FAFAFA',
    marginTop: 0,
    width: Dimensions.get('window').width,
  },
};

export const StoryTokenSpace = () => (
  <SafeAreaView>
    <NatContainer style={styles.defaultScreen}>
      <ScrollView>
        <NatSpace
          marginTop="small"
          marginBottom="none"
          marginRight="none"
          marginLeft="none"
          paddingTop="none"
          paddingBottom="none"
          paddingRight="none"
          paddingLeft="none"
          backgroundColor={Theme.palette.primary.main}
        />
        <NatText value="None" type="body1" />
        <NatSpace
          marginTop="small"
          marginBottom="none"
          marginRight="none"
          marginLeft="none"
          paddingTop="none"
          paddingBottom="micro"
          paddingRight="none"
          paddingLeft="none"
          backgroundColor={Theme.palette.primary.main}
        />
        <NatText value="Micro" type="body1" />
        <NatSpace
          marginTop="small"
          marginBottom="none"
          marginRight="none"
          marginLeft="none"
          paddingTop="none"
          paddingBottom="tiny"
          paddingRight="none"
          paddingLeft="none"
          backgroundColor={Theme.palette.primary.main}
        />
        <NatText value="Tiny" type="body1" />
        <NatSpace
          marginTop="small"
          marginBottom="none"
          marginRight="none"
          marginLeft="none"
          paddingTop="none"
          paddingBottom="small"
          paddingRight="none"
          paddingLeft="none"
          backgroundColor={Theme.palette.primary.main}
        />
        <NatText value="Small" type="body1" />
        <NatSpace
          marginTop="small"
          marginBottom="none"
          marginRight="none"
          marginLeft="none"
          paddingTop="none"
          paddingBottom="standard"
          paddingRight="none"
          paddingLeft="none"
          backgroundColor={Theme.palette.primary.main}
        />
        <NatText value="Standard" type="body1" />
      </ScrollView>
    </NatContainer>
  </SafeAreaView>

);
