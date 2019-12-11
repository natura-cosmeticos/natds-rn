import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image } from 'react-native';
import { NatLogoVertical } from '../../../lib';
import { NatCounterToggler } from '../../../lib';

export default class Welcome extends React.Component {
  styles = {
    wrapper: {
      flex: 1,
      padding: 24,
      justifyContent: 'center',
    },
    header: {
      flex: 1,
      fontSize: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
    content: {
      flex: 2,
      fontSize: 14,
      lineHeight: 18,
    },
  };

  showApp = event => {
    const { showApp } = this.props;
    event.preventDefault();

    if (showApp) {
      showApp();
    }
  };

  render() {
    return (
      <View style={this.styles.wrapper}>
        <NatLogoVertical />
        <Text style={this.styles.header}>Welcome to NATDS!</Text>
        <View style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginBottom: 30,
        }}>
            <NatCounterToggler />
        </View>
        <Text style={this.styles.content}>
          Here you can try out the components of our react-native library.
        </Text>
      </View>
    );
  }
}

Welcome.defaultProps = {
  showApp: null,
};

Welcome.propTypes = {
  showApp: PropTypes.func,
};
