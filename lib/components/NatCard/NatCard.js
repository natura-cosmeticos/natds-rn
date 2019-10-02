import React from 'react';
import { Dimensions } from 'react-native';
import PropTypes from 'prop-types';
import { CardWrapper, CardImage, CardIcon, CardIHeader, CardFooter, IconContainer, TitleContainer, Title, Subtitle, Resume } from './NatCard.styles';

const width = Dimensions.width;

const defaultMargin = propMargin => {
  switch (propMargin) {
    case 'none': return '0px';
    case 'dense': return '8px';
    case 'normal': return '16px';
    default: return '0px';
  }
};

export const NatCard = ({
  onPress, type, title, subtitle, imageURI, resume, margin, accessibilityLabel, accessibilityHint, imageDescription,
}) => (
  <CardWrapper
    onPress={onPress}
    defaultMargin={defaultMargin(margin)}
    accessible={true}
    accessibilityLabel={accessibilityLabel}
    accessibilityHint={accessibilityHint}
  >
    <CardIHeader>
      <IconContainer>
        <CardIcon
          source={{uri: 'http://global-press.com/wp-content/uploads/2015/06/corp4.png'}}
        />
      </IconContainer>
      <TitleContainer>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </TitleContainer>
    </CardIHeader>
    <CardImage
      source={{uri: imageURI}}
      style={{width: width}}
      accessible={true}
      accessibilityLabel={imageDescription}
    />
    <CardFooter>
      <Resume>{resume}</Resume>
    </CardFooter>
  </CardWrapper>
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
