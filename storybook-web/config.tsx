import { configure, addDecorator, addParameters } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { withKnobs } from '@storybook/addon-knobs';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';
import { addons } from '@storybook/addons';
import { themes } from '@naturacosmeticos/natds-styles';
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
    themes,
  },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
});

addDecorator(withTheme);
addDecorator(withKnobs);

// configure(() => {
//   // eslint-disable-next-line global-require
//   require('../storybook/stories');
// }, module);


const instalation = require.context('../docs', true, /Instalation.stories.mdx/);
const contribution = require.context('../docs', true, /Contribution.stories.mdx/);
const version = require.context('../docs', true, /Version.stories.mdx/);

const tokens = require.context('../src/tokens', true, /\.stories.(ts|md)x?$/);
const components = require.context('../src/components', true, /\.stories.(ts|md)x?$/);

configure([instalation, contribution, version, tokens, components], module);
