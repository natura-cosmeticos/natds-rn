import React from 'react';
import { Switch } from 'react-native';
import { withTheme } from 'styled-components';
import { SwitchContainer, TextWithTheme } from './StoryWrapper.styles';

const SwitchWithLabelComponent = ({
  onChange, isLast, label, isActive, theme,
}) => {
  const colors = theme.palette;
  const colorProps = {
    ios_backgroundColor: '#3e3e3e',
    thumbColor: colors.success.contrastText,
    trackColor: {
      false: colors.action.disabled,
      true: colors.success.main,
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
