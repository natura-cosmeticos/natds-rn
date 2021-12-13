/* eslint-disable max-lines */
import React from 'react';
import {
  AvatarIcon, AvatarImage, AvatarLetter, Container,
} from './Avatar.styles';
import {
  AvatarIconProps,
  AvatarImageProps, AvatarLetterProps, AvatarProps,
} from './Avatar.types';
// @ts-ignore
import IconAnonymous from '../../assets/images/anonymous.jpg';

/**
 * Get the first character from first and last word
 * @param text string
 */
export const getTextValue = (text = '') => {
  const textFormated = text.trim().toUpperCase();

  const firstLetters = textFormated
    .trim()
    .split(' ')
    .map(item => item.charAt(0))
    .join();

  if (firstLetters.length < 2) return firstLetters;

  return `${firstLetters.charAt(0)}${firstLetters.charAt(firstLetters.length - 1)}`;
};

export const isAvatarLetter = (props: AvatarProps): props is AvatarLetterProps => props.type === 'letter';
export const isAvatarImage = (props: AvatarProps): props is AvatarImageProps => props.type === 'image';
export const isAvatarIcon = (props: AvatarProps): props is AvatarIconProps => props.type === 'icon';

export const Avatar = (props: AvatarProps) => {
  const {
    size = 'standard',
    testID = 'avatar',
    accessibilityLabel,
    accessibilityHint,
    type = 'anonymous',
  } = props;

  return (
    <Container size={size}>
      {isAvatarLetter(props) && (
        <AvatarLetter
          accessibilityLabel={accessibilityLabel}
          accessibilityHint={accessibilityHint}
          accessibilityRole="text"
          testID={testID}
          size={size}
          type={type}
        >
          {getTextValue(props.text)}
        </AvatarLetter>
      )}
      {isAvatarImage(props) && (
        <AvatarImage
          accessibilityLabel={accessibilityLabel}
          accessibilityHint={accessibilityHint}
          accessibilityRole="image"
          testID={testID}
          size={size}
          type={type}
          source={props.imgSource}
        />
      )}
      {isAvatarIcon(props) && (
        <AvatarIcon
          accessibilityHint={accessibilityHint}
          accessibilityLabel={accessibilityLabel}
          accessibilityRole="image"
          testID={testID}
          size={size}
          name={props.iconName}
        />
      )}
      {type === 'anonymous' && (
        <AvatarImage
          accessibilityLabel={accessibilityLabel}
          accessibilityHint={accessibilityHint}
          accessibilityRole="image"
          testID={testID}
          size={size}
          type={type}
          source={IconAnonymous}
        />
      )}
    </Container>
  );
};
