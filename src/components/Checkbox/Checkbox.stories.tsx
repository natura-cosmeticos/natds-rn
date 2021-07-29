/* eslint-disable max-lines */
import React, { useState } from 'react';
import { View } from 'react-native';
import { boolean, select, text } from '@storybook/addon-knobs';
import { Checkbox, CheckboxColors } from './Checkbox';
import { ListItem } from '../ListItem';
import { VerticalStoryContainer } from '../../common/HelperComponents/StoryContainer';

const description = () => `
- - -

  ### NOTE:
  This component is available in the following variants:

  - ✅ **Standard**
  - ✅ **Indeterminate**

With the following attribute status:

  - ✅ **Disabled**

- - -
`;


export default {
  component: Checkbox,
  parameters: {
    componentSubtitle: 'Selection controls allow the user to select options.',
    docs: {
      extractComponentDescription: description,
    },
  },
  title: 'Components|Checkbox',
};

const colorTypes = {
  primary: 'primary',
  secondary: 'secondary',
};

export const all = () => {
  const initialState = {
    disabled: false,
    disabledIndeterminate: true,
    disabledSelected: true,
    indeterminate: false,
    standard: false,
  };

  const [state, setState] = useState<typeof initialState>(initialState);

  return (
    <VerticalStoryContainer title="Checkbox">
      <ListItem>
        <Checkbox
          label="Standard"
          onPress={
            value => setState({ ...state, standard: !state.standard })
          }
          selected={state.standard}
          value='1'
        />
      </ListItem>
      <ListItem>
        <Checkbox
          indeterminate
          label="Indeterminate"
          onPress={
            value => setState({ ...state, indeterminate: !state.indeterminate })
          }
          selected={state.indeterminate}
          value='2'
        />
      </ListItem>
      <ListItem>
        <Checkbox
          disabled
          label="Disabled"
          onPress={
            value => setState({ ...state, disabled: !state.disabled })
          }
          selected={state.disabled}
          value='5'
          />
      </ListItem>
      <ListItem>
        <Checkbox
          disabled
          indeterminate
          label="Disabled selected"
          onPress={
            value => setState({ ...state, disabledSelected: !state.disabledSelected })
          }
          selected={state.disabledSelected}
          value='6'
          />
      </ListItem>
      <ListItem>
        <Checkbox
          disabled
          label="Disabled indeterminate"
          onPress={
            value => setState({ ...state, disabledIndeterminate: !state.disabledIndeterminate })
          }
          selected={state.disabledIndeterminate}
          value='7'
        />
      </ListItem>
    </VerticalStoryContainer>
  );
};


export const interactive = () => (
  <View style={{ maxWidth: 600, padding: 30 }}>
    <Checkbox
      color={select('Color', colorTypes, 'primary') as CheckboxColors}
      indeterminate={boolean('Indeterminate', false)}
      selected={boolean('Selected', true)}
      disabled={boolean('Disabled', false)}
      onPress={() => null}
      label={text('Label', 'My Label')}
      value={text('Value', 'my-label')}
    />
  </View>
);
