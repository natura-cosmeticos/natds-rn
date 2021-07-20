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

  - ✅ Selected
  - ✅ Indeterminate

With the following attribute status:

  - **Disabled**

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
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <VerticalStoryContainer title="Checkbox">
      <ListItem>
        <Checkbox
          color="primary"
          label="Primary"
          onPress={setSelected}
          selected={selected === '1'}
          value='1'
        />
      </ListItem>
      <ListItem>
        <Checkbox
          color="primary"
          indeterminate
          label="Primary indeterminate"
          onPress={setSelected}
          selected={selected === '2'}
          value='2'
        />
      </ListItem>
      <ListItem>
        <Checkbox
          color="secondary"
          label="Secondary"
          onPress={setSelected}
          selected={selected === '3'}
          value='3'
        />
      </ListItem>
      <ListItem>
        <Checkbox
          color="secondary"
          indeterminate
          label="Secondary indeterminate"
          onPress={setSelected}
          selected={selected === '4'}
          value='4'
          />
      </ListItem>
      <ListItem>
        <Checkbox
          disabled
          label="Selected disabled"
          selected={true}
          />
      </ListItem>
      <ListItem>
        <Checkbox
          disabled
          indeterminate
          label="Indeterminate disabled"
          selected={true}
          />
      </ListItem>
      <ListItem>
        <Checkbox
          disabled
          label="Disabled"
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
