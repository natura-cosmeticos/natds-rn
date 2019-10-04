import React from 'react';
import { Text } from 'react-native';
import { NatContainer, NatCard } from '../../../lib';

export const StoryNatCard = () => {

  return (

    <NatContainer style={{backgroundColor: '#F5F5F5'}}>
      <NatCard
        title="Card Test"
        subtitle="13 hours ago"
        resume="Esse é um card da Haley Davidson"
        iconURI="http://global-press.com/wp-content/uploads/2015/06/corp4.png"
        imageURI="https://www.harley-davidson.com/content/dam/h-d/images/motorcycles/my19/softail/fxdr-114/overview/hdi/19-softail-fxdr114-hdi-hero.jpg"
        onPress={() => null}
      />
      <Text>You can apply margin-top by sending "margin" prop, with values: none, dense or normal.</Text>
    </NatContainer>

  );
};
