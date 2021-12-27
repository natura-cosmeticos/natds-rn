import React from 'react';

import { Container, Label } from './Tag.styles';
import { TagProps } from './Tag.types';

export const Tag = (props: TagProps) => {
  const {
    testID = 'ds-tag', color = 'primary', size = 'small', borderPosition = 'default',
  } = props;

  return (
    <Container
      testID={testID}
      color={color}
      size={size}
      borderPosition={borderPosition}
    >
      <Label
        color={color}
        testID={`${testID}-label`}
        accessible={props.accessible}
        accessibilityRole={props.accessibilityRole}
        accessibilityHint={props.accessibilityHint}
        accessibilityLabel={props.accessibilityLabel}
        accessibilityState={props.accessibilityState}
        allowFontScaling={props.allowFontScaling}
        maxFontSizeMultiplier={props.maxFontSizeMultiplier}
      >
        {props.text}
      </Label>
    </Container>
  );
};
