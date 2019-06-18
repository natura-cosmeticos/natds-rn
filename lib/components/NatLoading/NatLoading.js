import React from 'react';
import { ActivityIndicator } from 'react-native';

import { colors } from '../../assets/theme/colors/colors';
import { LoadingWrapper } from './NatLoading.styles';

export const NatLoading = () => (
  <LoadingWrapper>
    <ActivityIndicator size="large" color={colors.primary.orange} />
  </LoadingWrapper>
);
