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
  const [firstOptionStatus, setFirstOptionStatus] = useState<boolean>(true);
  const [secondOptionStatus, setSecondOptionStatus] = useState<boolean>(true);
  const [thirdOptionStatus, setThirdOptionStatus] = useState<boolean>(false);
  const [fourthOptionStatus, setFourthOptionStatus] = useState<boolean>(true);
  const [fifthOptionStatus, setFifthOptionStatus] = useState<boolean>(true);

  return (
    <VerticalStoryContainer title="Checkbox">
      <ListItem>
        <Checkbox
          label="Standard"
          onPress={value => setFirstOptionStatus(!firstOptionStatus)}
          selected={firstOptionStatus}
          value='1'
        />
      </ListItem>
      <ListItem>
        <Checkbox
          indeterminate
          label="Indeterminate"
          onPress={value => setSecondOptionStatus(!secondOptionStatus)}
          selected={secondOptionStatus}
          value='2'
        />
      </ListItem>
      <ListItem>
        <Checkbox
          disabled
          label="Disabled"
          onPress={value => setThirdOptionStatus(!thirdOptionStatus)}
          selected={thirdOptionStatus}
          value='5'
          />
      </ListItem>
      <ListItem>
        <Checkbox
          disabled
          indeterminate
          label="Disabled selected"
          onPress={value => setFourthOptionStatus(!fourthOptionStatus)}
          selected={fourthOptionStatus}
          value='6'
          />
      </ListItem>
      <ListItem>
        <Checkbox
          disabled
          label="Disabled indeterminate"
          onPress={value => setFifthOptionStatus(!fifthOptionStatus)}
          selected={fifthOptionStatus}
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
