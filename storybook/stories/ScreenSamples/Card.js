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
      resume: 'Esse é um card da Haley Davidson',
      iconURI: 'http://global-press.com/wp-content/uploads/2015/06/corp4.png',
      imageURI: 'https://www.harley-davidson.com/content/dam/h-d/images/motorcycles/my19/softail/fxdr-114/overview/hdi/19-softail-fxdr114-hdi-hero.jpg',
    },
    {
      title : 'Card 2',
      subtitle: '13 hours ago',
      resume: 'Esse é um card da Haley Davidson',
      iconURI: 'http://global-press.com/wp-content/uploads/2015/06/corp4.png',
      imageURI: 'https://www.harley-davidson.com/content/dam/h-d/images/motorcycles/my19/softail/fxdr-114/overview/hdi/19-softail-fxdr114-hdi-hero.jpg',
    },
    {
      title : 'Card 3',
      subtitle: '13 hours ago',
      resume: 'Esse é um card da Haley Davidson',
      iconURI: 'http://global-press.com/wp-content/uploads/2015/06/corp4.png',
      imageURI: 'https://www.harley-davidson.com/content/dam/h-d/images/motorcycles/my19/softail/fxdr-114/overview/hdi/19-softail-fxdr114-hdi-hero.jpg',
    },
    {
      title : 'Card 4',
      subtitle: '13 hours ago',
      resume: 'Esse é um card da Haley Davidson',
      iconURI: 'http://global-press.com/wp-content/uploads/2015/06/corp4.png',
      imageURI: 'https://www.harley-davidson.com/content/dam/h-d/images/motorcycles/my19/softail/fxdr-114/overview/hdi/19-softail-fxdr114-hdi-hero.jpg',
    },
  ];

  return (
    <ScrollView >
      <NatContainer style={styles.container}>
      {examples.map((example, index) => (
       <NatCard
        title={example.title}
        subtitle={example.subtitle}
        resume={example.resume}
        iconURI={example.iconURI}
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
