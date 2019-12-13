import React from 'react';
import { ScrollView } from 'react-native';
import PropTypes from 'prop-types';
import { NatText } from '../NatText';
import { NatImage } from '../NatImage';
import { CardWrapper, CardFooter } from './NatCard.styles';

const defaultMargin = (propMargin) => {
  switch (propMargin) {
    case 'none': return '0';
    case 'dense': return '8';
    case 'normal': return '16';
    default: return '0';
  }
};

export const NatCard = ({
  onPress, type, title, subtitle, imageURI, resume, margin, accessibilityLabel, accessibilityHint, imageDescription,
}) => (
  <ScrollView>

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
        />
        <NatText
          type="caption"
          value={subtitle}
        />
        <NatText
          type="body2"
          value={resume}
          margin="dense"
        />
      </CardFooter>
    </CardWrapper>
  </ScrollView>

);

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
};

NatCard.defaultProps = {
  type: 'default',
  title: 'Title',
  subTitle: 'SubTitle',
};
