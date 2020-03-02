import React, { useState } from 'react';
import {
  SafeAreaView,
  FlatList,
  View,
  ScrollView,
  Dimensions,
} from 'react-native';
import {
  NatContainer,
  NatText,
  NatIcon,
  NatTextInput,
  ThemeNaturaLight,
} from '../../../lib';

const styles = {
  defaultScreen: {
    flex: 1,
    width: Dimensions.get('window').width,
  },
};

export const StoryNatIcon = () => {
  const [input, setInput] = useState('');
  const iconList = [
    { name: 'filled-action-add' },
    { name: 'filled-action-cancel' },
    { name: 'filled-action-check' },
    { name: 'filled-action-rating' },
    { name: 'filled-action-subtract' },
    { name: 'filled-brand-naturarosacea' },
    { name: 'filled-media-pause' },
    { name: 'filled-media-play' },
    { name: 'filled-navigation-directionleft' },
    { name: 'filled-navigation-directionright' },
    { name: 'filled-navigation-directiontbottom' },
    { name: 'filled-navigation-directiontop' },
    { name: 'filled-navigation-menu' },
    { name: 'filled-navigation-more' },
    { name: 'outlined-action-add' },
    { name: 'outlined-action-attachment' },
    { name: 'outlined-action-autofilter' },
    { name: 'outlined-action-calendar' },
    { name: 'outlined-action-cancel' },
    { name: 'outlined-action-change' },
    { name: 'outlined-action-check' },
    { name: 'outlined-action-closedbox' },
    { name: 'outlined-action-copy' },
    { name: 'outlined-action-cycle' },
    { name: 'outlined-action-delete' },
    { name: 'outlined-action-done' },
    { name: 'outlined-action-download' },
    { name: 'outlined-action-edit' },
    { name: 'outlined-action-favorite' },
    { name: 'outlined-action-filter' },
    { name: 'outlined-action-gridsquare' },
    { name: 'outlined-action-help' },
    { name: 'outlined-action-history' },
    { name: 'outlined-action-like' },
    { name: 'outlined-action-list' },
    { name: 'outlined-action-love' },
    { name: 'outlined-action-mic' },
    { name: 'outlined-action-micrec' },
    { name: 'outlined-action-newrequest' },
    { name: 'outlined-action-order' },
    { name: 'outlined-action-phone' },
    { name: 'outlined-action-print' },
    { name: 'outlined-action-rating' },
    { name: 'outlined-action-request' },
    { name: 'outlined-action-save' },
    { name: 'outlined-action-schedule' },
    { name: 'outlined-action-search' },
    { name: 'outlined-action-selectedalllines' },
    { name: 'outlined-action-send' },
    { name: 'outlined-action-settings' },
    { name: 'outlined-action-share' },
    { name: 'outlined-action-subtract' },
    { name: 'outlined-action-update' },
    { name: 'outlined-action-upload' },
    { name: 'outlined-action-visibility' },
    { name: 'outlined-action-visibilityoff' },
    { name: 'outlined-alert-empty' },
    { name: 'outlined-alert-indeterminate' },
    { name: 'outlined-alert-info' },
    { name: 'outlined-communication-chat' },
    { name: 'outlined-communication-email' },
    { name: 'outlined-communication-help' },
    { name: 'outlined-communication-message' },
    { name: 'outlined-communication-occurrence' },
    { name: 'outlined-communication-readEmail' },
    { name: 'outlined-communication-signal' },
    { name: 'outlined-communication-speaker' },
    { name: 'outlined-communication-treatment' },
    { name: 'outlined-content-adddocument' },
    { name: 'outlined-content-agility' },
    { name: 'outlined-content-book' },
    { name: 'outlined-content-brightness' },
    { name: 'outlined-content-changeview' },
    { name: 'outlined-content-channel' },
    { name: 'outlined-content-christmascard' },
    { name: 'outlined-content-consistency' },
    { name: 'outlined-content-divulgation' },
    { name: 'outlined-content-education' },
    { name: 'outlined-content-gift' },
    { name: 'outlined-content-global' },
    { name: 'outlined-content-health' },
    { name: 'outlined-content-lock' },
    { name: 'outlined-content-magic' },
    { name: 'outlined-content-medal' },
    { name: 'outlined-content-menu' },
    { name: 'outlined-content-mirror' },
    { name: 'outlined-content-produtivity' },
    { name: 'outlined-content-store' },
    { name: 'outlined-content-wifi' },
    { name: 'outlined-finance-bag' },
    { name: 'outlined-finance-cards' },
    { name: 'outlined-finance-charging' },
    { name: 'outlined-finance-creditcard' },
    { name: 'outlined-finance-debit' },
    { name: 'outlined-finance-discount' },
    { name: 'outlined-finance-littlemachine' },
    { name: 'outlined-finance-money' },
    { name: 'outlined-finance-moneypaper' },
    { name: 'outlined-finance-promotion' },
    { name: 'outlined-finance-shoppingcart' },
    { name: 'outlined-finance-shoppingcartproduct' },
    { name: 'outlined-finance-tagdiscount' },
    { name: 'outlined-finance-transfermoney' },
    { name: 'outlined-media-app' },
    { name: 'outlined-media-camera' },
    { name: 'outlined-media-monitor' },
    { name: 'outlined-media-play' },
    { name: 'outlined-navigation-arrowbottom' },
    { name: 'outlined-navigation-arrowleft' },
    { name: 'outlined-navigation-arrowright' },
    { name: 'outlined-navigation-arrowtop' },
    { name: 'outlined-navigation-close' },
    { name: 'outlined-navigation-directionbottom' },
    { name: 'outlined-navigation-directionleft' },
    { name: 'outlined-navigation-directionright' },
    { name: 'outlined-navigation-directiontop' },
    { name: 'outlined-navigation-exit' },
    { name: 'outlined-navigation-goback' },
    { name: 'outlined-navigation-gofront' },
    { name: 'outlined-navigation-home' },
    { name: 'outlined-navigation-menu' },
    { name: 'outlined-place-bus' },
    { name: 'outlined-place-forklift' },
    { name: 'outlined-place-local' },
    { name: 'outlined-place-truck' },
    { name: 'outlined-place-waze' },
    { name: 'outlined-product-bagproduct' },
    { name: 'outlined-product-beard' },
    { name: 'outlined-product-brandsproduct' },
    { name: 'outlined-product-childish' },
    { name: 'outlined-product-dailycare' },
    { name: 'outlined-product-hair' },
    { name: 'outlined-product-makeup' },
    { name: 'outlined-product-outlet' },
    { name: 'outlined-product-perfumery' },
    { name: 'outlined-product-promotionproduct' },
    { name: 'outlined-product-vegan' },
    { name: 'outlined-social-addcontact' },
    { name: 'outlined-social-birthday' },
    { name: 'outlined-social-collaborate' },
    { name: 'outlined-social-contact' },
    { name: 'outlined-social-digitalconsultant' },
    { name: 'outlined-social-groupofpeople' },
    { name: 'outlined-social-myprofile' },
    { name: 'outlined-social-network' },
    { name: 'outlined-social-person' },
  ];

  const renderItem = name => (
    <View style={{ flex: 1, flexDirection: 'row' }}>
      <NatIcon name={name} fill={ThemeNaturaLight.palette.text.primary} />
      <NatText type="body1" value={name} />
    </View>
  );

  const filterIconList = filter => iconList.filter(item => item.name.includes(filter.toLowerCase()));

  return (
    <SafeAreaView style={styles.defaultScreen}>
      <NatContainer>
        <ScrollView>
          <NatText type="h6" value="ICONS SVG" />
          <NatTextInput
            label=""
            placeholder="Search"
            onChangeText={setInput}
            value={input}
            size="normal"
            type="default"
            icon={null}
          />
          <FlatList
            data={filterIconList(input)}
            renderItem={({ item }) => renderItem(item.name)}
            keyExtractor={item => item.name}
          />
        </ScrollView>
      </NatContainer>
    </SafeAreaView>
  );
};

StoryNatIcon.propTypes = {
};
