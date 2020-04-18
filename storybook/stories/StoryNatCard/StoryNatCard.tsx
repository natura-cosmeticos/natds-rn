import React from 'react';
import { ScrollView, SafeAreaView, Dimensions } from 'react-native';
import { NatContainer, NatCard, NatSpace } from '../../../lib';

const styles = {
  defaultScreen: {
    flex: 1,
    width: Dimensions.get('window').width,
  },
};

export const StoryNatCard = () => (
  <SafeAreaView style={styles.defaultScreen}>
    <NatContainer style={{}}>
      <ScrollView>
        <NatCard
          title="Card Test"
          subtitle="13 hours ago"
          resume="Esse é um card da Natura"
          iconURI="https://upload.wikimedia.org/wikipedia/pt/thumb/c/cb/Natura_Logo.png/200px-Natura_Logo.png"
          imageURI="https://i.picsum.photos/id/1016/328/184.jpg"
          onPress={() => null}
        />
        <NatSpace />
        <NatCard
          title="Card Test"
          subtitle="13 hours ago"
          resume="Esse é um card da Natura"
          iconURI="https://upload.wikimedia.org/wikipedia/pt/thumb/c/cb/Natura_Logo.png/200px-Natura_Logo.png"
          imageURI="https://i.picsum.photos/id/1016/528/184.jpg"
          onPress={() => null}
        />
        <NatSpace />
        <NatCard
          title="Card Test"
          subtitle="13 hours ago"
          resume="Esse é um card da Natura"
          iconURI="https://upload.wikimedia.org/wikipedia/pt/thumb/c/cb/Natura_Logo.png/200px-Natura_Logo.png"
          imageURI="https://i.picsum.photos/id/1016/728/184.jpg"
          onPress={() => null}
        />
        <NatSpace />
        <NatCard
          title="Card Test"
          subtitle="13 hours ago"
          resume="Esse é um card da Natura"
          iconURI="https://upload.wikimedia.org/wikipedia/pt/thumb/c/cb/Natura_Logo.png/200px-Natura_Logo.png"
          imageURI="https://i.picsum.photos/id/1016/200/184.jpg"
          onPress={() => null}
        />
        <NatSpace />
      </ScrollView>
    </NatContainer>
  </SafeAreaView>
);
