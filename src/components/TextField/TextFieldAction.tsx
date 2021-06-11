import React from 'react';
import { View } from 'react-native';
import { IconButton } from '../IconButton';
import { ActionIcon, ActionImage } from './TextField.styles';

export const TextFieldPasswordAction = ({ secureState, onPress }: {
  secureState: boolean, onPress: () => void
}) => (
  <ActionIcon testID="action-icon">
    <IconButton onPress={onPress}
      icon={secureState
        ? 'outlined-action-visibilityoff'
        : 'outlined-action-visibility'} />
  </ActionIcon>
);

export const TextFieldAction = ({ action, actionComponent, size }) => (
  <View>
    { action === 'icon'
      && <ActionIcon testID="action-icon">{ actionComponent }</ActionIcon>
    }
    { action === 'image'
      && <ActionImage testID="action-image" size={size}>{ actionComponent }</ActionImage>
    }
  </View>
);
