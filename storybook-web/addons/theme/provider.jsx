import React, { useState, useEffect } from 'react';
import { addons, makeDecorator } from '@storybook/addons';
import { ThemeProvider } from 'styled-components/native';
import { CHANGE, PARAM_KEY, getStoryBookTheme } from './shared';
import { buildTheme } from '../../../src/common/themeSelectors';

const defaultTheme = buildTheme('natura', getStoryBookTheme());

const backgroundStyles = {
  bottom: 0,
  left: 0,
  position: 'fixed',
  right: 0,
  top: 0,
  zIndex: 0,
};

const storyStyles = {
  position: 'relative',
  width: '100%',
  zIndex: 1,
};

const DEFAULT_BACKGROUND = '#ffffff';

const wrapper = (getStory, storyContext, { parameters }) => {
  const channel = addons.getChannel();
  const { disableBackground } = parameters;
  const [theme, setTheme] = useState(defaultTheme);
  const [themeInfo, setThemeInfo] = useState({ activeTheme: 'natura', light: true });

  useEffect(() => {
    channel.on(CHANGE, ({ type, name }) => {
      setTheme(buildTheme(name, type));
      setThemeInfo({ activeTheme: name, light: type === 'light' });
    });

    return () => {
      channel.removeListener(CHANGE);
    };
  }, []);

  const background = disableBackground
    ? DEFAULT_BACKGROUND
    : theme.colorTokens.colorBackground;

  return (
    <ThemeProvider theme={theme}>
      <div style={storyStyles}>{getStory({ ...storyContext, ...themeInfo })}</div>
      <div style={{ ...backgroundStyles, background }} />
    </ThemeProvider>
  );
};

export const withTheme = makeDecorator({
  allowDeprecatedUsage: true,
  name: 'withTheme',
  parameterName: PARAM_KEY,
  skipIfNoParametersOrOptions: true,
  wrapper,
});
