import React, { useState } from 'react';
import {
  ScrollView, SafeAreaView, Dimensions, Alert,
} from 'react-native';
import { NatContainer, NatText, NatAppBarSearch } from '../../../lib';

const styles = {
  defaultScreen: {
    flex: 1,
    width: Dimensions.get('window').width,
  },
};

export const StoryNatAppBarSearch: React.SFC<{}> = () => {
  const [search1, setSearch1] = useState('');
  const [search2, setSearch2] = useState('');
  const [search3, setSearch3] = useState('');
  const [search4, setSearch4] = useState('');
  const [search5, setSearch5] = useState('');

  return (
    <SafeAreaView style={styles.defaultScreen}>
      <NatContainer>
        <ScrollView>
          <NatAppBarSearch
            title="Search1"
            value={search1}
            onSubmit={text => setSearch1(text)}
            onPressLeft={() => Alert.alert('press left icon')}
          />
          <NatText value={`Search value: ${search1}`} />
          <NatAppBarSearch
            title="Search2"
            value={search2}
            onSubmit={text => setSearch2(text)}
            onPressLeft={() => Alert.alert('press left icon')}
            onPressRight={() => Alert.alert('press right icon')}
            iconRight={{ svg: { name: 'outlined-action-mic' } }}
          />
          <NatText value={`Search value: ${search2}`} />
          <NatAppBarSearch
            title="Search3"
            value={search3}
            onSubmit={text => setSearch3(text)}
            showIconLeft={false}
            onPressLeft={() => Alert.alert('press left icon')}
            onPressRight={() => Alert.alert('press right icon')}
            iconRight={{ svg: { name: 'outlined-action-mic' } }}
          />
          <NatText value={`Search value: ${search3}`} />
          <NatAppBarSearch
            title="Search4"
            value={search4}
            onSubmit={text => setSearch4(text)}
            showIconLeft={false}
            onPressLeft={() => Alert.alert('press left icon')}
            onPressRight={() => Alert.alert('press right icon')}
          />
          <NatText value={`Search value: ${search4}`} />
          <NatAppBarSearch
            title="Search5 - submit on each tap"
            value={search5}
            onSubmit={text => setSearch5(text)}
            showIconLeft={false}
            onPressLeft={() => Alert.alert('press left icon')}
            onPressRight={() => Alert.alert('press right icon')}
            submitOnChange
          />
          <NatText value={`Search value: ${search5}`} />
        </ScrollView>
      </NatContainer>
    </SafeAreaView>
  );
};
