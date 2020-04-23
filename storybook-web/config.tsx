import { configure, addDecorator, addParameters } from '@storybook/react'; // eslint-disable-line import/no-extraneous-dependencies
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { withKnobs } from '@storybook/addon-knobs';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';
import { themes } from '@naturacosmeticos/natds-styles';
import { withTheme } from './addons/theme/provider';
import StorybookTheme from './theme';

addParameters({
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
  options: {
    sidebarAnimations: true,
    theme: StorybookTheme,
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

configure(() => {
  // eslint-disable-next-line global-require
  require('../storybook/stories');
}, module);
