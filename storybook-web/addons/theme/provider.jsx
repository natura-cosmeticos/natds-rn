import React, { useState, useEffect } from 'react';
import { addons, makeDecorator } from '@storybook/addons';
import { FORCE_RE_RENDER } from '@storybook/core-events';
import { ThemeProvider } from 'styled-components/native';
import { themes as themesWeb } from '@naturacosmeticos/natds-styles';
import { CHANGE, PARAM_KEY } from './shared';

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

const knobsChange = 'storybookjs/knobs/change';

const backgroundStyles = {
  bottom: 0,
  boxShadow: 'rgba(255,255,255,.1) 0 0 0 1px inset',
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

const DEFAULT_BACKGROUND = 'transparent';

const Wrapper = (getStory, storyContext, { options, parameters }) => {
  const channel = addons.getChannel();
  const { context, disableBackground } = parameters;
  const { themes, defaultTheme } = getProvider(context || options);
  const [theme, setTheme] = useState(defaultTheme);

  useEffect(() => {
    channel.on(CHANGE, ({ type, name }) => {
      setTheme(themes[name][type]);
    });

    channel.on(knobsChange, () => {
      channel.emit(FORCE_RE_RENDER);
    });

    return () => {
      channel.removeListener(CHANGE);
      channel.removeListener(knobsChange);
    };
  }, []);

  const background = disableBackground
    ? DEFAULT_BACKGROUND
    : theme.palette.background.default;

  return (
    <ThemeProvider theme={theme}>
      <div style={storyStyles}>{getStory(storyContext)}</div>
      <div style={{ ...backgroundStyles, background }} />
    </ThemeProvider>
  );
};

export const withTheme = makeDecorator({
  allowDeprecatedUsage: true,
  name: 'withTheme',
  parameterName: PARAM_KEY,
  skipIfNoParametersOrOptions: true,
  wrapper: Wrapper,
});
