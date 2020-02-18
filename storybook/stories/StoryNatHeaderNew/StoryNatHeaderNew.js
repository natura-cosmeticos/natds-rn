import React, { useState } from 'react';
import {
  View,
  ScrollView,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import {
  NatContainer,
  NatHeaderNew,
  NatLogo,
  NatTextInput,
} from '../../../lib';

const styles = {
  defaultScreen: {
    backgroundColor: '#FAFAFA',
    marginTop: 0,
    width: Dimensions.get('window').width,
  },
};

export const StoryNatHeaderNew = () => {
  const [inputSearch, setInputSearch] = useState('');

  const logo = () => (<NatLogo name="logo-natura-horizontal" size={200} />);
  const getInput = () => (
    <View style={{ width: 200 }}>
      <NatTextInput
        label=""
        placeholder="Search"
        onChangeText={setInputSearch}
        value={inputSearch}
        size="normal"
        type="default"
        icon={null}
      />
    </View>
  );
  return (
    <SafeAreaView>
      <NatContainer style={styles.defaultScreen}>
        <ScrollView>
          <NatHeaderNew
            title="Title Text"
            iconLeft={{ svg: { name: 'outlined-navigation-menu' } }}
            iconRight={{ svg: { name: 'outlined-action-autofilter' } }}
            onPressLeft={() => alert('press')}
            onPressRight={() => alert('press')}
          />
          <View style={{ height: 10 }} />
          <NatHeaderNew
            title="Title Text"
            iconLeft={{ svg: { name: 'outlined-navigation-menu' } }}
            onPressLeft={() => alert('press')}
            onPress={() => alert('press')}
          />
          <View style={{ height: 10 }} />
          <NatHeaderNew
            title="Title Text"
            onPress={() => alert('press')}
          />
          <View style={{ height: 10 }} />
          <NatHeaderNew
            title="Title Text"
            node={logo()}
            iconLeft={{ svg: { name: 'outlined-navigation-menu' } }}
            iconRight={{ svg: { name: 'outlined-action-autofilter' } }}
            onPressLeft={() => alert('press')}
            onPressRight={() => alert('press')}
          />
          <View style={{ height: 10 }} />
          <NatHeaderNew
            title="Title Text"
            node={logo()}
            iconLeft={{ svg: { name: 'outlined-navigation-menu' } }}
            onPressLeft={() => alert('press')}
            onPress={() => alert('press')}
          />
          <View style={{ height: 10 }} />
          <NatHeaderNew
            title="Title Text"
            node={logo()}
            onPress={() => alert('press')}
          />
          <View style={{ height: 10 }} />
          <NatHeaderNew
            title="Exclusive"
            iconLeft={false}
            iconRight={{ svg: { name: 'outlined-action-autofilter' } }}
            onPressLeft={() => alert('press')}
            onPressRight={() => alert('press')}
          />
          <View style={{ height: 10 }} />
          <NatHeaderNew
            title="Exclusive"
            iconLeft={{ svg: { name: 'outlined-navigation-menu' } }}
            iconRight={false}
            onPressLeft={() => alert('press')}
            onPress={() => alert('press')}
          />
          <View style={{ height: 10 }} />
          <NatHeaderNew
            title="Exclusive"
            iconLeft={false}
            iconRight={false}
            onPress={() => alert('press')}
          />
          <View style={{ height: 10 }} />
          <NatHeaderNew
            title="Title Text"
            node={getInput()}
          />
        </ScrollView>
      </NatContainer>
    </SafeAreaView>
  );
};

StoryNatHeaderNew.propTypes = {
};
