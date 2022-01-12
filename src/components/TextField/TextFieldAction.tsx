import React from 'react';
import { View } from 'react-native';
import { IconButton } from '../IconButton';
import { ActionIcon, ActionImage } from './TextField.styles';
import { AccessibilityButtonProps } from './TextField.types';

type TextFieldActionStyleProps = Pick<AccessibilityButtonProps,
  'accessibilityButtonHint' |
  'accessibilityButtonLabel' |
  'accessibilityButtonRole'>
& {
  secureState: boolean,
  onPress: () => void
}

export const TextFieldPasswordAction = ({
  accessibilityButtonHint,
  accessibilityButtonLabel,
  secureState,
  onPress,
}: TextFieldActionStyleProps) => (
  <ActionIcon testID="password-action-icon" >
    <IconButton
      accessibilityHint={accessibilityButtonHint}
      accessibilityLabel={accessibilityButtonLabel}
      onPress={onPress}
      icon={secureState
        ? 'outlined-action-visibilityoff'
        : 'outlined-action-visibility'} />
  </ActionIcon>
);

export const TextFieldAction = ({
  action,
  actionComponent,
  size,
  accessibilityButtonHint,
  accessibilityButtonLabel,
  accessibilityButtonRole,
}) => (
  <View>
    { action === 'icon'
      && <ActionIcon
          testID="action-icon"
          accessibilityHint={accessibilityButtonHint}
          accessibilityLabel={accessibilityButtonLabel}
          accessibilityRole={accessibilityButtonRole}
        >
          { actionComponent }
        </ActionIcon>
    }
    { action === 'image'
      && <ActionImage
          accessibilityHint={accessibilityButtonHint}
          accessibilityLabel={accessibilityButtonLabel}
          accessibilityRole={accessibilityButtonRole}
          testID="action-image"
          size={size}
        >
          { actionComponent }
        </ActionImage>
    }
  </View>
);
