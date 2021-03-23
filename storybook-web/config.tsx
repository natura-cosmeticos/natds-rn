import { configure, addDecorator, addParameters } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { withKnobs } from '@storybook/addon-knobs';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';
import { addons } from '@storybook/addons';
import dsThemes from '@naturacosmeticos/natds-themes';
import { withTheme } from './addons/theme/provider';
import { dark, light } from './theme';

const isInDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

const activeTheme = isInDarkMode ? dark : light;

addons.setConfig({
  theme: activeTheme,
});

addParameters({
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
  options: {
    enableShortcuts: true,
    isFullscreen: false,
    isToolshown: true,
    panelPosition: 'bottom',
    showNav: true,
    showPanel: true,
    sidebarAnimations: true,
  },
  theme: {
    themes: dsThemes,
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
});

addDecorator(withTheme);
addDecorator(
  withKnobs({
    escapeHTML: false,
  }),
);

const docs = require.context('./docs', true, /\.stories.mdx/);
const tokens = require.context('../src/tokens', true, /\.stories.(ts|md)x?$/);
const components = require.context('../src/components', true, /\.stories.(ts|md)x?$/);

configure([docs, tokens, components], module);
