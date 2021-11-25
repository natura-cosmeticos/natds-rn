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

export const renderTimes = (props: RatingProps) => (isRatingCounter(props) ? 1 : 5);
export const isFilled = (value: number, props: RatingProps) => !isRatingInput(props) || (props.rate && value + 1 <= props.rate);
export const isActive = (value: number, props: RatingProps) => (!isRatingCounter(props) && (props.rate && value + 1 <= props.rate)) || isRatingCounter(props);

export const isDisabled = (props: RatingProps) => isRatingInput(props) && props.disabled;

export const Rating = (props: RatingProps) => {
  const {
    size = 'semi', variant, testID = 'ds-rating', ...rest
  } = props;

  return (
    <Wrapper testID={testID} variant={variant} {...rest}>
      <Content testID={`${testID}-content`} variant={variant} {...rest}>
        {Array(renderTimes(props)).fill(0).map((_, index) => (
          (isRatingCounter(props) || isRatingReadOnly(props) || isRatingInput(props)) && (
            <RatingBase
              testID={`${testID}-${index + 1}`}
              key={index.toString()}
              size={size}
              onPress={isRatingInput(props) ? () => props.onPress(index + 1) : undefined}
              iconActive={!!isActive(index, props)}
              iconFilled={!!isFilled(index, props)}
              disabled={isDisabled(props)}
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
