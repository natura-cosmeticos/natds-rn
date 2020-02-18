import React from 'react';
import { Text, ScrollView, SafeAreaView } from 'react-native';
import { NatContainer, NatMenuItem } from '../../../lib';

export const StoryNatMenuItem = () => {
  const menuList = [
    {
      id: 1,
      name: 'First menu',
      level: 1,
    },
    {
      id: 2,
      name: 'Second menu',
      level: 1,
    },
    {
      id: 3,
      name: 'Another sample menu',
      level: 1,
    },
    {
      id: 4,
      name: 'Another sample menu',
      level: 1,
    },
  ];
  const menuListSvg = [
    {
      id: 1,
      name: 'outlined-navigation-home',
      svg: {
        name: 'outlined-navigation-home',
        size: '24',
      },
      level: 1,
    },
    {
      id: 2,
      name: 'outlined-content-lock',
      svg: {
        name: 'outlined-content-lock',
      },
      level: 1,
    },
    {
      id: 3,
      name: 'outlined-content-wifi',
      svg: {
        name: 'outlined-content-wifi',
      },
      level: 1,
    },
    {
      id: 4,
      name: 'outlined-content-adddocument',
      svg: {
        name: 'outlined-content-adddocument',
      },
      level: 1,
    },
    {
      id: 5,
      name: 'outlined-communication-chat',
      svg: {
        name: 'outlined-communication-chat',
      },
      level: 1,
    },
    {
      id: 6,
      name: 'outlined-content-channel',
      svg: {
        name: 'outlined-content-channel',
      },
      level: 1,
    },
    {
      id: 7,
      name: 'outlined-finance-moneypaper',
      svg: {
        name: 'outlined-finance-moneypaper',
      },
      level: 1,
    },
    {
      id: 8,
      name: 'outlined-communication-speaker',
      svg: {
        name: 'outlined-communication-speaker',
      },
      level: 1,
    },
    {
      id: 9,
      name: 'outlined-place-bus',
      svg: {
        name: 'outlined-place-bus',
      },
      level: 1,
    },
    {
      id: 10,
      name: 'outlined-alert-info',
      svg: {
        name: 'outlined-alert-info',
      },
      level: 1,
    },
    {
      id: 11,
      name: 'outlined-navigation-exit',
      svg: {
        name: 'outlined-navigation-exit',
      },
      level: 1,
    },
  ];
  const menuListIconUri = [
    {
      name: 'Menu Food',
      icon: 'https://s3-sa-east-1.amazonaws.com/somos-natura-prd/files/menus/261/img_url_tmp_261_20180323135427.png',
      level: '1',
    },
    {
      name: 'Bus Information',
      icon: 'https://s3-sa-east-1.amazonaws.com/somos-natura-prd/files/menus/generic_menu/img_url_tmp_generic_menu_20170822160140.png',
      level: '1',
    },
  ];

  return (
    <SafeAreaView>
      <NatContainer style={{ backgroundColor: '#FFF', width: 300, paddingTop: 20 }}>
        <ScrollView>
          <Text>Without Icon</Text>
          {menuList.map(item => (
            <NatMenuItem
              title={item.name}
              key={item.id}
              level={item.levell}
              onPress={() => { alert('click event'); }}
            />
          ))}
          <Text>Use SVG</Text>
          {menuListSvg.map(item => (
            <NatMenuItem
              title={item.name}
              icon={{ svg: item.svg }}
              key={item.id}
              level={item.levell}
              onPress={() => { alert('click event'); }}
            />
          ))}
          <Text>With External Icon URL</Text>
          {menuListIconUri.map(item => (
            <NatMenuItem
              title={item.name}
              icon={{ uri: item.icon }}
              key={item.name}
              level={item.levell}
              onPress={() => { alert('click event'); }}
            />
          ))}
        </ScrollView>
      </NatContainer>
    </SafeAreaView>
  );
};

StoryNatMenuItem.propTypes = {
};
