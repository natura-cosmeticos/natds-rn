import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Image } from 'react-native';

export default class Welcome extends React.Component {
  styles = {
    wrapper: {
      flex: 1,
      padding: 24,
      justifyContent: 'center',
    },
    header: {
      flex: 2,
      fontSize: 20,
    },
    content: {
      flex: 3,
      fontSize: 14,
      lineHeight: 18,
    },
    imgLogo: {
      width: 140,
      height: 105,
    },
    viewLogo: {
      flex: 3,
      alignItems: 'center',
      justifyContent: 'center',
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
        <View style={this.styles.viewLogo}>
        <Image
          style={this.styles.imgLogo}
          source={{uri: 'https://upload.wikimedia.org/wikipedia/pt/c/cb/Natura_Logo.png'}}
        />
        </View>
        <Text style={this.styles.header}>Welcome to NATDS!</Text>
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
