/* eslint-disable no-console */
import React from 'react';
import {
  ScrollView,
  Dimensions,
  Alert,
  SafeAreaView,
} from 'react-native';
import { NatContainer, NatCard, NatSpace } from '../../../lib';

export const Card = () => {
  const press = () => Alert.alert(
    'Press',
    'My Alert Msg',
    [
      { text: 'Ask me later', onPress: () => console.log('Ask me later pressed') },
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      { text: 'OK', onPress: () => console.log('OK Pressed') },
    ],
    { cancelable: false },
  );

  const examples = [
    {
      title: 'Card Test Number 1',
      subtitle: '13 hours ago',
      resume: 'This is a Natura card ',
      iconURI: 'https://upload.wikimedia.org/wikipedia/pt/thumb/c/cb/Natura_Logo.png/200px-Natura_Logo.png',
      imageURI: 'https://i.picsum.photos/id/1016/328/184.jpg',
    },
    {
      title: 'Card Test Number 2',
      subtitle: '13 hours ago',
      resume: 'This is a Natura card ',
      iconURI: 'https://upload.wikimedia.org/wikipedia/pt/thumb/c/cb/Natura_Logo.png/200px-Natura_Logo.png',
      imageURI: 'https://i.picsum.photos/id/1016/328/184.jpg',
    },
    {
      title: 'Card Test Number 3',
      subtitle: '13 hours ago',
      resume: 'This is a Natura card ',
      iconURI: 'https://upload.wikimedia.org/wikipedia/pt/thumb/c/cb/Natura_Logo.png/200px-Natura_Logo.png',
      imageURI: 'https://i.picsum.photos/id/1016/328/184.jpg',
    },
    {
      title: 'Card Test Number 4',
      subtitle: '13 hours ago',
      resume: 'This is a Natura card ',
      iconURI: 'https://upload.wikimedia.org/wikipedia/pt/thumb/c/cb/Natura_Logo.png/200px-Natura_Logo.png',
      imageURI: 'https://i.picsum.photos/id/1016/328/184.jpg',
    },
  ];

  const styles = {
    defaultScreen: {
      backgroundColor: '#FAFAFA',
      marginTop: 0,
      width: Dimensions.get('window').width,
    },
  };

  return (
    <SafeAreaView>
      <NatContainer style={styles.defaultScreen}>
        <ScrollView>
          {examples.map((example, index) => (
            <NatSpace marginBottom="small">
              <NatCard
                title={example.title}
                subtitle={example.subtitle}
                resume={example.resume}
                imageURI={example.imageURI}
                key={index}
                onPress={press}
              />
            </NatSpace>
          ))}
        </ScrollView>
      </NatContainer>
    </SafeAreaView>
  );
};
