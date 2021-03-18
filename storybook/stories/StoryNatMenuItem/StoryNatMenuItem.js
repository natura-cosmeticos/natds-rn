/* eslint-disable max-lines */
import React from 'react';
import {
  Text,
  ScrollView,
  SafeAreaView,
  Dimensions,
  Alert,
} from 'react-native';
import { NatContainer, NatMenuItem } from '../../../lib';

const styles = {
  defaultScreen: {
    flex: 1,
    width: Dimensions.get('window').width,
  },
};

export const StoryNatMenuItem = () => {
  const menuList = [
    {
      id: 1,
      level: 1,
      name: 'First menu',
    },
    {
      id: 2,
      level: 1,
      name: 'Second menu',
    },
    {
      id: 3,
      level: 1,
      name: 'Another sample menu',
    },
    {
      id: 4,
      level: 1,
      name: 'Another sample menu',
    },
  ];
  const menuListSvg = [
    {
      id: 1,
      level: 1,
      name: 'outlined-navigation-home',
      svg: {
        name: 'outlined-navigation-home',
        size: '24',
      },
    },
    {
      id: 2,
      level: 1,
      name: 'outlined-content-lock',
      svg: {
        name: 'outlined-content-lock',
      },
    },
    {
      id: 3,
      level: 1,
      name: 'outlined-content-wifi',
      svg: {
        name: 'outlined-content-wifi',
      },
    },
    {
      id: 4,
      level: 1,
      name: 'outlined-content-adddocument',
      svg: {
        name: 'outlined-content-adddocument',
      },
    },
    {
      id: 5,
      level: 1,
      name: 'outlined-communication-chat',
      svg: {
        name: 'outlined-communication-chat',
      },
    },
    {
      id: 6,
      level: 1,
      name: 'outlined-content-channel',
      svg: {
        name: 'outlined-content-channel',
      },
    },
    {
      id: 7,
      level: 1,
      name: 'outlined-finance-moneypaper',
      svg: {
        name: 'outlined-finance-moneypaper',
      },
    },
    {
      id: 8,
      level: 1,
      name: 'outlined-communication-speaker',
      svg: {
        name: 'outlined-communication-speaker',
      },
    },
    {
      id: 9,
      level: 1,
      name: 'outlined-place-bus',
      svg: {
        name: 'outlined-place-bus',
      },
    },
    {
      id: 10,
      level: 1,
      name: 'outlined-alert-info',
      svg: {
        name: 'outlined-alert-info',
      },
    },
    {
      id: 11,
      level: 1,
      name: 'outlined-navigation-exit',
      svg: {
        name: 'outlined-navigation-exit',
      },
    },
  ];
  const menuListIconUri = [
    {
      icon:
        'https://s3-sa-east-1.amazonaws.com/somos-natura-prd/files/menus/261/img_url_tmp_261_20180323135427.png',
      level: '1',
      name: 'Menu Food',
    },
    {
      icon:
        'https://s3-sa-east-1.amazonaws.com/somos-natura-prd/files/menus/generic_menu/img_url_tmp_generic_menu_20170822160140.png',
      level: '1',
      name: 'Bus Information',
    },
  ];

  return (
    <SafeAreaView style={styles.defaultScreen}>
      <NatContainer>
        <ScrollView>
          <Text>Without Icon</Text>
          {menuList.map(item => (
            <NatMenuItem
              title={item.name}
              key={item.id}
              level={item.levell}
              onPress={() => {
                Alert.alert('click event');
              }}
            />
          ))}
          <Text>Use SVG</Text>
          {menuListSvg.map(item => (
            <NatMenuItem
              title={item.name}
              icon={{ svg: item.svg }}
              iconLeft={{ svg: item.svg }}
              key={item.id}
              level={item.levell}
              onPress={() => {
                Alert.alert('click event');
              }}
            />
          ))}
          <Text>Use SVG</Text>
          {menuListSvg.map(item => (
            <NatMenuItem
              title={item.name}
              icon={{ svg: item.svg }}
              key={item.id}
              level={item.levell}
              onPress={() => {
                Alert.alert('click event');
              }}
              showNotification={true}
            />
          ))}
          <Text>Use SVG</Text>
          {menuListSvg.map(item => (
            <NatMenuItem
              title={item.name}
              icon={{ svg: item.svg }}
              iconLeft={{ svg: item.svg }}
              key={item.id}
              level={item.levell}
              onPress={() => {
                Alert.alert('click event');
              }}
              showNotification={true}
            />
          ))}
          <Text>With External Icon URL</Text>
          {menuListIconUri.map(item => (
            <NatMenuItem
              title={item.name}
              icon={{ uri: item.icon }}
              key={item.name}
              level={item.levell}
              onPress={() => {
                Alert.alert('click event');
              }}
            />
          ))}
          <Text>With Submenu indicator</Text>
          <NatMenuItem
            title={'Compras'}
            icon={{ svg: { name: 'outlined-content-store' } }}
            key={''}
            level={1}
            onPress={() => {
              Alert.alert('click event');
            }}
            iconLeft={{
              svg: {
                name: 'outlined-navigation-arrowbottom',
              },
            }}
          />
        </ScrollView>
      </NatContainer>
    </SafeAreaView>
  );
};

StoryNatMenuItem.propTypes = {};
