import React from 'react';
import {
  ScrollView,
  View,
} from 'react-native';
import PropTypes from 'prop-types';
import { NatText } from '../NatText';
import { NatImage } from '../NatImage';
import { CardWrapper, CardFooter } from './NatCard.styles';
import {
  ThemeNaturaLight,
} from '../..';

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
  shadowColor: '#000',
  shadowOffset: {
    width: 0,
    height: 1,
  },
  shadowOpacity: 0.24,
  shadowRadius: 4,
  elevation: 1,
  borderRadius: 4,
};

export const NatCard = ({
  onPress,
  type,
  title,
  subtitle,
  imageURI,
  resume,
  margin,
  accessibilityLabel,
  accessibilityHint,
  imageDescription,
  theme,
}) => {
  return (
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
};

NatCard.propTypes = {
  type: PropTypes.string,
  onPress: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
  imageURI: PropTypes.string.isRequired,
  resume: PropTypes.string.isRequired,
  margin: PropTypes.string,
  accessibilityLabel: PropTypes.string,
  accessibilityHint: PropTypes.string,
  imageDescription: PropTypes.string,
  theme: PropTypes.shape(),
};

NatCard.defaultProps = {
  type: 'default',
  title: 'Title',
  subTitle: 'SubTitle',
  theme: ThemeNaturaLight,
};
