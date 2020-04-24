import React from 'react';
import { addons, types } from '@storybook/addons';
import {
  PANEL_ID, ADDON_ID, TITLE, PARAM_KEY,
} from './shared';
import Theme from './index';

addons.register(ADDON_ID, (api) => {
  const render = () => (
      <Theme
        channel={addons.getChannel()}
        api={api}
      />
  );

  addons.add(PANEL_ID, {
    match: ({ viewMode }) => viewMode === 'story',
    paramKey: PARAM_KEY,
    render,
    title: TITLE,
    type: types.TOOL,
  });
});
