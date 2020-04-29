import React from 'react';
import { Switch } from 'react-native';
import { withTheme } from 'styled-components/native';
import { SwitchContainer } from './StoryWrapper.styles';
import { getSuccessContrastText, getSuccessMain, getActionDisabled } from '../themeSelectors';
import { TextWithTheme } from '../HelperComponents/ThemeHelper.styles';

const SwitchWithLabelComponent = ({
  onChange, isLast, label, isActive, theme,
}) => {
  const colorProps = {
    ios_backgroundColor: '#3e3e3e',
    thumbColor: getSuccessContrastText(theme),
    trackColor: {
      false: getActionDisabled(theme) || '#eaeaea',
      true: getSuccessMain(theme) || '#BEC950',
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
