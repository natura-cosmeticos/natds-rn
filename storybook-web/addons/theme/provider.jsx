import React, { useState, useEffect } from 'react';
import { addons, makeDecorator } from '@storybook/addons';
import { ThemeProvider } from 'styled-components/native';
import { themes as themesWeb } from '@naturacosmeticos/natds-styles';
import { CHANGE, PARAM_KEY, getStoryBookTheme } from './shared';

const THEME_PROVIDERS = {
  web: {
    defaultTheme: themesWeb.natura.light,
    provider: ThemeProvider,
    themes: themesWeb,
  },
};

function getProvider(context) {
  return THEME_PROVIDERS[context] || THEME_PROVIDERS.web;
}

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

const wrapper = (getStory, storyContext, { options, parameters }) => {
  const channel = addons.getChannel();
  const { context, disableBackground } = parameters;
  const { themes, defaultTheme } = getProvider(context || options);
  const [theme, setTheme] = useState(getStoryBookTheme() === 'light' ? defaultTheme : { ...defaultTheme, defaultTheme: themesWeb.natura.dark });
  const [themeInfo, setThemeInfo] = useState({ activeTheme: 'natura', light: true });

  useEffect(() => {
    channel.on(CHANGE, ({ type, name }) => {
      setTheme(themes[name][type]);
      setThemeInfo({ activeTheme: name, light: type === 'light' });
    });

    return () => {
      channel.removeListener(CHANGE);
    };
  }, []);

  const background = disableBackground
    ? DEFAULT_BACKGROUND
    : theme.palette.background.paper;

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
