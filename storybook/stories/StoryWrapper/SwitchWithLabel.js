import React from 'react';
import { Switch } from 'react-native';
import { withTheme } from 'styled-components';
import { SwitchContainer, TextWithTheme } from './StoryWrapper.styles';
import { getSuccessContrastText, getSuccessMain, getActionDisabled } from '../../../lib';

const SwitchWithLabelComponent = ({
  onChange, isLast, label, isActive, theme,
}) => {
  const colorProps = {
    ios_backgroundColor: '#3e3e3e',
    thumbColor: getSuccessContrastText(theme),
    trackColor: {
      false: getActionDisabled(theme),
      true: getSuccessMain(theme),
    },
  };

  return (
    <SwitchContainer isLast={isLast}>
      <TextWithTheme style={{ paddingRight: 5 }}>{label}</TextWithTheme>
      <Switch {...colorProps} onValueChange={onChange} value={isActive} />
    </SwitchContainer>
  );
};

export const SwitchWithLabel = withTheme(SwitchWithLabelComponent);
