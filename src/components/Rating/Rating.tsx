/* eslint-disable max-len */
import React from 'react';

import { Wrapper, Content, Label } from './Rating.styles';
import {
  RatingCounterProps, RatingInputProps, RatingProps, RatingReadOnlyProps,
} from './Rating.types';
import { RatingBase } from './RatingBase';

export const isRatingInput = (props: RatingProps): props is RatingInputProps => props.variant === 'input';
export const isRatingCounter = (props: RatingProps): props is RatingCounterProps => props.variant === 'counter';
export const isRatingReadOnly = (props: RatingProps): props is RatingReadOnlyProps => props.variant === 'read-only';

export const Rating = (props: RatingProps) => {
  const {
    size = 'semi', variant, testID = 'ds-rating', ...rest
  } = props;

  const renderTimes = isRatingCounter(props) ? 1 : 5;
  const IsFilled = (value: number) => !isRatingInput(props) || (props.rate && value + 1 <= props.rate);
  const isActive = (value: number) => (!isRatingCounter(props) && (props.rate && value + 1 <= props.rate)) || isRatingCounter(props);

  const isDisabled = isRatingInput(props) && props.disabled;

  return (
    <Wrapper testID={testID} variant={variant} {...rest}>
      <Content testID={`${testID}-content`} {...rest}>
        {Array(renderTimes).fill(0).map((_, index) => (
          (isRatingCounter(props) || isRatingReadOnly(props) || isRatingInput(props)) && (
            <RatingBase
              testID={`${testID}-${index + 1}`}
              key={index.toString()}
              size={size}
              onPress={isRatingInput(props) ? () => props.onPress(index + 1) : undefined}
              iconActive={!!isActive(index)}
              iconFilled={!!IsFilled(index)}
              disabled={isDisabled}
              isClickable={isRatingInput(props)}
            />
          )
        ))}
      </Content>
      {(isRatingInput(props) || isRatingCounter(props)) && (
        <Label testID={`${testID}-label`} variant={variant} {...rest}>{props.label}</Label>
      )}
    </Wrapper>
  );
};
