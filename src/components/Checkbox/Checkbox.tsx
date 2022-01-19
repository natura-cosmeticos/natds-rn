import React from 'react'
import { IconName } from '@naturacosmeticos/natds-icons'
import { Icon } from '../Icon'
import { TouchableRipple } from '../TouchableRipple/TouchableRipple'
import {
  Container, Box, Label, Wrapper
} from './Checkbox.styles'
import { CheckboxProps } from './Checkbox.types'

const getIconName = (indeterminate: boolean): IconName => (
  indeterminate
    ? 'outlined-action-subtract'
    : 'outlined-action-done'
)

const SelectedIcon = ({ indeterminate }: { indeterminate: boolean }): JSX.Element => (
  <Icon
    color="surface"
    name={getIconName(indeterminate)}
    size="small"
  />
)

export const Checkbox = ({
  accessibilityHint,
  accessibilityLabel,
  accessibilityRole,
  accessibilityState,
  color = 'primary',
  disabled = false,
  indeterminate = false,
  label,
  onPress,
  selected = false,
  testID = 'checkbox',
  value = ''
}: CheckboxProps) => {
  const onPressWithValue = () => {
    if (onPress) {
      onPress(value)
    }
  }

  const checkbox = (
    <Container
      accessibilityHint={accessibilityHint}
      accessibilityLabel={accessibilityLabel}
      accessibilityRole={accessibilityRole}
      accessibilityState={accessibilityState}
      disabled={disabled}
      onPress={onPressWithValue}
      testID={testID}
    >
      <TouchableRipple
        size={20}
        color={color}
        onPress={onPressWithValue}
        disabled={disabled}
        style={{ borderRadius: 50 }}
      >
        <Wrapper>
          <Box disabled={disabled} color={color} selected={selected} testID={`${testID}-box`}>
            {
              selected
                ? <SelectedIcon indeterminate={indeterminate} />
                : null
            }
          </Box>
        </Wrapper>
      </TouchableRipple>
      {
        label
        && <Label testID={`${testID}-label`} disabled={disabled}>{label}</Label>
      }
    </Container>
  )

  return checkbox
}
