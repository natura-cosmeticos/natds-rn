import React, { useEffect, Fragment } from 'react';
import { useAddonState, Consumer } from '@storybook/api';
import { TabButton, WithTooltip, TooltipLinkList } from '@storybook/components';
import {
  PANEL_ID, CHANGE, PARAM_KEY, getStoryBookTheme,
} from './shared';
import { light, dark } from '../../theme';

import './styles.css';

const DEFAULT_THEME = {
  name: 'natura',
  type: 'light',
};

const buildThemeProps = mode => ({ ...DEFAULT_THEME, type: mode });

function parseTheme(themes) {
  return Object.entries(themes).reduce((accum, [name, variants]) => {
    Object.entries(variants).forEach(([type]) => {
      accum.push({ name, type });
    });

    return accum;
  }, []);
}

const createBackgroundSelectorItem = ({ name, type }, onChange, selectedItem) => ({
  active: selectedItem.name === name && selectedItem.type === type,
  id: `${name} - ${type}`,
  onClick: () => onChange({ name, type }),
  title: `${name} - ${type}`,
});

const getDisplayedItems = (list, onChange, selectedItem) => {
  if (!list.length) {
    return [];
  }

  return [
    ...list.map(params => createBackgroundSelectorItem(params, onChange, selectedItem)),
  ];
};

const mapper = ({ api, state }) => {
  const story = state.storiesHash[state.storyId];
  const { themes = {} } = (story && api.getParameters(story.id, PARAM_KEY)) || {};

  return { items: parseTheme(themes) };
};

export default function Theme({ channel, api }) {
  const apiTheme = getStoryBookTheme();
  const initialTheme = apiTheme ? buildThemeProps(apiTheme) : DEFAULT_THEME;
  const [currentTheme, changeTheme] = useAddonState(PANEL_ID, initialTheme);
  const { disabled } = api.getCurrentParameter(PARAM_KEY) || {};

  const handleChange = (params) => {
    changeTheme(params);
    api.setOptions({
      theme: params.type === 'light' ? light : dark,
    });
    const event = new Event('CHANGE_THEME', { detail: params.type });

    window.dispatchEvent(event);
    channel.emit(CHANGE, params);
  };

  const renderTooltip = items => ({ onHide }) => (
    <TooltipLinkList
      links={getDisplayedItems(items, (index) => {
        handleChange(index);
        onHide();
      }, currentTheme)}
    />
  );

  const eventListener = event => handleChange(buildThemeProps(event.matches ? 'dark' : 'light'));

  useEffect(() => {
    handleChange(initialTheme);

    const matchMediaEnvent = window.matchMedia('(prefers-color-scheme: dark)');

    matchMediaEnvent.addEventListener('change', eventListener);

    return () => {
      matchMediaEnvent.removeEventListener('change', eventListener);
    };
  }, []);

  if (disabled) return null;

  return (
    <Consumer filter={mapper}>
      {({ items }) => (items.length ? (
          <Fragment>
            <WithTooltip
              placement="top"
              trigger="click"
              closeOnClick
              tooltip={renderTooltip(items)}
            >
              <TabButton
                key="Theme"
                title="Change the Theme">
                {currentTheme.name} - {currentTheme.type}
              </TabButton>
            </WithTooltip>
          </Fragment>
      ) : null)}
    </Consumer>
  );
}
