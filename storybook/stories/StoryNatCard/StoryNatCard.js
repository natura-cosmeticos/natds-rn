import React from 'react';
import {
  ScrollView,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import { NatContainer, NatCard } from '../../../lib';

const styles = {
  defaultScreen: {
    backgroundColor: '#FAFAFA',
    marginTop: 0,
    width: Dimensions.get('window').width,
  },
};

export const StoryNatCard = () => (
  <SafeAreaView>
    <NatContainer style={styles.defaultScreen}>
      <ScrollView>
        <NatCard
          title="Card Test"
          subtitle="13 hours ago"
          resume="Esse é um card da Natura"
          iconURI="https://upload.wikimedia.org/wikipedia/pt/thumb/c/cb/Natura_Logo.png/200px-Natura_Logo.png"
          imageURI="https://i.picsum.photos/id/1016/328/184.jpg"
          onPress={() => null}
        />
      </ScrollView>
    </NatContainer>
  </SafeAreaView>

);
