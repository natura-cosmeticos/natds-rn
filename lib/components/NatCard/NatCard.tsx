import React from 'react';
import {
  View,
} from 'react-native';
import PropTypes from 'prop-types';
import { NatText } from '../NatText';
import { NatImage } from '../NatImage';
import { CardWrapper, CardFooter } from './NatCard.styles';
import {
  ThemeNaturaLight,
} from '../../themes/ThemeNaturaLight';

const defaultMargin = (propMargin) => {
  switch (propMargin) {
    case 'micro': return '4';
    case 'tiny': return '8';
    case 'small': return '16';
    case 'standard': return '24';
    default: return '0';
  }
};

const styles = {
  borderRadius: 4,
  elevation: 1,
  shadowColor: '#000',
  shadowOffset: {
    height: 1,
    width: 0,
  },
  shadowOpacity: 0.24,
  shadowRadius: 4,
};

export const NatCard = ({
  onPress,
  title,
  subtitle,
  imageURI,
  resume,
  margin,
  accessibilityLabel,
  accessibilityHint,
  theme,
}) => (
  <View style={styles}>
    <CardWrapper
      onPress={onPress}
      defaultMargin={defaultMargin(margin)}
      accessible
      accessibilityLabel={accessibilityLabel}
      accessibilityHint={accessibilityHint}
    >
      <NatImage
        source={imageURI}
        type="card"
      />
      <CardFooter>
        <NatText
          type="h6"
          value={title}
          color={theme.palette.text.primary}
          margin={theme.spacing.spacingMicro}
        />
        <NatText
          type="caption"
          value={subtitle}
          color={theme.palette.text.secondary}
          margin={theme.spacing.spacingSmall}
        />
        <NatText
          type="body2"
          value={resume}
          color={theme.palette.text.primary}
          margin={theme.spacing.spacingStandard}
        />
      </CardFooter>
    </CardWrapper>
  </View>

);

NatCard.propTypes = {
  accessibilityHint: PropTypes.string,
  accessibilityLabel: PropTypes.string,
  imageURI: PropTypes.string.isRequired,
  margin: PropTypes.string,
  onPress: PropTypes.func.isRequired,
  resume: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  theme: PropTypes.shape({}),
  title: PropTypes.string.isRequired,
};

NatCard.defaultProps = {
  subTitle: 'SubTitle',
  theme: ThemeNaturaLight,
  title: 'Title',
  type: 'default',
};
