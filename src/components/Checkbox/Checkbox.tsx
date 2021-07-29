import React from 'react';
import { IconName } from '@naturacosmeticos/natds-icons';
import { Icon } from '../Icon';
import { TouchableRipple } from '../TouchableRipple/TouchableRipple';
import {
  Container, Box, Label,
} from './Checkbox.styles';

export type CheckboxColors = 'primary' | 'secondary';

export interface CheckboxProps {
  /**
   * Checkbox color: `primary` | `secondary`
   * @default `primary`
   *
   * @deprecated this prop is no longer necessary as this component
   * should always be used with the primary color
   */
  color?: CheckboxColors;
  /**
   * Called when the touch is released, but not if cancelled
   */
  onPress?: (value: string) => void;
  /**
   * Programmatically tell if the component is selected
   */
  selected?: boolean;
  /**
   * Optional property that tells if the select is disabled,
   * if so, the user cannot click on this item.
   */
  disabled?: boolean;
  /**
   * Indeterminate checkboxes are displayed with a dash inside
   * the box, being visually different than default checkboxes
   */
  indeterminate?: boolean;
  /**
   * Optional label that appears to the right of the component,
   * if the user clicks that label, the onPress function will be called
   */
  label?: string;
  /**
   * The value of the component.
   */
  value?: string;
  /**
   * Optional testID
   */
  testID?: string;
}

const getIconName = (indeterminate: boolean): IconName => (
  indeterminate
    ? 'outlined-action-subtract'
    : 'outlined-action-done'
);

const SelectedIcon = ({ indeterminate }: { indeterminate: boolean }): JSX.Element => (
  <Icon
    color="surface"
    name={getIconName(indeterminate)}
    size="small"
  />
);

export const Checkbox = ({
  color = 'primary',
  disabled = false,
  indeterminate = false,
  label,
  onPress,
  selected = false,
  testID = 'checkbox',
  value = '',
}: CheckboxProps) => {
  const onPressWithValue = () => {
    if (onPress) {
      onPress(value);
    }
  };

  const checkbox = (
    <Container disabled={disabled} testID={testID} onPress={onPressWithValue}>
      <TouchableRipple
        size={20}
        color={color}
        onPress={onPressWithValue}
        disabled={disabled}
      >
        <Box disabled={disabled} color={color} selected={selected} testID={`${testID}-box`}>
          {
            selected
              ? <SelectedIcon indeterminate={indeterminate} />
              : null
          }
        </Box>
      </TouchableRipple>
      {
        label
          && <Label testID={`${testID}-label`} disabled={disabled}>{label}</Label>
      }
    </Container>
  );

  return checkbox;
};
