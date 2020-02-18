import React from 'react';
<<<<<<< HEAD
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
=======
import { Text, ScrollView, SafeAreaView } from 'react-native';
import { NatContainer, NatCard } from '../../../lib';

export const StoryNatCard = () => (
  <SafeAreaView>
    <NatContainer style={{ backgroundColor: '#F5F5F5' }}>
>>>>>>> origin/update/react
      <ScrollView>
        <NatCard
          title="Card Test"
          subtitle="13 hours ago"
          resume="Esse é um card da Natura"
          iconURI="https://upload.wikimedia.org/wikipedia/pt/thumb/c/cb/Natura_Logo.png/200px-Natura_Logo.png"
<<<<<<< HEAD
          imageURI="https://i.picsum.photos/id/1016/328/184.jpg"
          onPress={() => null}
        />
=======
          imageURI="https://upload.wikimedia.org/wikipedia/pt/thumb/c/cb/Natura_Logo.png/200px-Natura_Logo.png"
          onPress={() => null}
        />
        <Text> You can apply margin-top by sending &ldquo;margin&ldquo; prop, with values: none, dense or normal. </Text>
>>>>>>> origin/update/react
      </ScrollView>
    </NatContainer>
  </SafeAreaView>

);
