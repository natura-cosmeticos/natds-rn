import React from 'react';
import { ScrollView, StyleSheet, Alert, Text } from 'react-native';
import { NatContainer, NatCard } from '../../../lib';

export const Card = () => {

  const press = () =>
    Alert.alert(
      'Press',
      'My Alert Msg',
      [
        {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      {cancelable: false},
  );

  const examples = [
    {
      title : 'Card 1',
      subtitle: '13 hours ago',
      resume: 'Esse é um card da Natura',
      iconURI: 'https://upload.wikimedia.org/wikipedia/pt/thumb/c/cb/Natura_Logo.png/200px-Natura_Logo.png',
      imageURI: 'https://upload.wikimedia.org/wikipedia/pt/thumb/c/cb/Natura_Logo.png/200px-Natura_Logo.png',
    },
    {
      title : 'Card 2',
      subtitle: '13 hours ago',
      resume: 'Esse é um card da Natura',
      iconURI: 'https://upload.wikimedia.org/wikipedia/pt/thumb/c/cb/Natura_Logo.png/200px-Natura_Logo.png',
      imageURI: 'https://upload.wikimedia.org/wikipedia/pt/thumb/c/cb/Natura_Logo.png/200px-Natura_Logo.png',
    },
    {
      title : 'Card 3',
      subtitle: '13 hours ago',
      resume: 'Esse é um card da Natura',
      iconURI: 'https://upload.wikimedia.org/wikipedia/pt/thumb/c/cb/Natura_Logo.png/200px-Natura_Logo.png',
      imageURI: 'https://upload.wikimedia.org/wikipedia/pt/thumb/c/cb/Natura_Logo.png/200px-Natura_Logo.png',
    },
    {
      title : 'Card 4',
      subtitle: '13 hours ago',
      resume: 'Esse é um card da Natura',
      iconURI: 'https://upload.wikimedia.org/wikipedia/pt/thumb/c/cb/Natura_Logo.png/200px-Natura_Logo.png',
      imageURI: 'https://upload.wikimedia.org/wikipedia/pt/thumb/c/cb/Natura_Logo.png/200px-Natura_Logo.png',
    },
  ];

  return (
    <ScrollView>
      <NatContainer style={styles.container}>
      {examples.map((example, index) => (
       <NatCard
        title={example.title}
        subtitle={example.subtitle}
        resume={example.resume}
        imageURI={example.imageURI}
        margin="dense"
        key={index}
      />
      ))}
      <Text>You can apply margin-top by sending "margin" prop, with values: none, dense or normal.</Text>
      </NatContainer>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'gray',
  },
});
