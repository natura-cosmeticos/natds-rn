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

  - ✅ Standard
  - ✅ Indeterminate

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
  const [selected1, setSelected1] = useState<boolean>(false);
  const [selected2, setSelected2] = useState<boolean>(false);
  const [selected3, setSelected3] = useState<boolean>(false);
  const [selected4, setSelected4] = useState<boolean>(false);
  const [selected5, setSelected5] = useState<boolean>(false);
  const [selected6, setSelected6] = useState<boolean>(true);
  const [selected7, setSelected7] = useState<boolean>(true);

  return (
    <VerticalStoryContainer title="Checkbox">
      <ListItem>
        <Checkbox
          color="primary"
          label="Primary"
          onPress={value => setSelected1(!selected1)}
          selected={selected1}
          value='1'
        />
      </ListItem>
      <ListItem>
        <Checkbox
          color="primary"
          indeterminate
          label="Primary indeterminate"
          onPress={value => setSelected2(!selected2)}
          selected={selected2}
          value='2'
        />
      </ListItem>
      <ListItem>
        <Checkbox
          color="secondary"
          label="Secondary"
          onPress={value => setSelected3(!selected3)}
          selected={selected3}
          value='3'
        />
      </ListItem>
      <ListItem>
        <Checkbox
          color="secondary"
          indeterminate
          label="Secondary indeterminate"
          onPress={value => setSelected4(!selected4)}
          selected={selected4}
          value='4'
          />
      </ListItem>
      <ListItem>
        <Checkbox
          disabled
          label="Disabled"
          onPress={value => setSelected5(!selected5)}
          selected={selected5}
          value='5'
          />
      </ListItem>
      <ListItem>
        <Checkbox
          disabled
          indeterminate
          label="Disabled selected"
          onPress={value => setSelected6(!selected6)}
          selected={selected6}
          value='6'
          />
      </ListItem>
      <ListItem>
        <Checkbox
          disabled
          label="Disabled indeterminate"
          onPress={value => setSelected7(!selected7)}
          selected={selected7}
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
