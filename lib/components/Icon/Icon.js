import React from 'react';
import { Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import iconNames from '@naturacosmeticos/natds-icons/dist/natds-icons.json';
import { sizes } from '../../tokens/sizes';


const Icon = ({ name, size, style }) => {
  const styles = StyleSheet.create({
    icon: {
      ...style,
      fontFamily: 'natds-icons',
      fontSize: size,
    },
  });

  const cleanedCode = iconNames[name] ? iconNames[name].replace('%', '\\') : iconNames['filled-brand-naturarosacea'];
  const iconCode = JSON.parse(`["${cleanedCode}"]`)[0];

  return (<Text style={styles.icon}>{iconCode}</Text>);
};

Icon.propTypes = {
  name: PropTypes.string,
  size: PropTypes.number,
  style: PropTypes.object,
};

Icon.defaultProps = {
  name: 'filled-brand-naturarosacea',
  size: sizes.medium,
  style: undefined,
};

export { Icon };
