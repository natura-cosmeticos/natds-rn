/* eslint-disable @typescript-eslint/ban-ts-ignore */
/* eslint-disable max-len */
import React, { useState } from 'react'
import { text, select } from '@storybook/addon-knobs'
import { IconName, iconNames } from '@naturacosmeticos/natds-icons'
import { Icon } from './Icon'
import { IconColors, IconSizes } from './Icon.types'
import { StoryContainer } from '../../common/HelperComponents/StoryContainer'
import { TextField } from '../TextField'
import { Typography } from '../Typography'

const description = () => `
> A helper component to display icons from @naturacosmeticos/natds-icons package

## Properties
| Property                | Values                                                        |    Status    |
|---                      |                                                            ---|           ---|
| **color**               | color-tokens                                                  | ✅ Available |
| **size**                | none, micro, tiny, small, standard, semi, semiX, medium       | ✅ Available |
| **name**                | icon-name                                                     | ✅ Available |
| **accessibilityHint**   | string                                                        | ✅ Available |
| **accessibilityLabel**  | string                                                        | ✅ Available |
| **accessibilityLabel**  | imagebutton, image                                            | ✅ Available |


## Technical Usages Examples
`

export default {
  component: Icon,
  parameters: {
    componentSubtitle: '',
    docs: {
      extractComponentDescription: description
    }
  },
  title: 'Components/Icon'
}

export const Default = () => (
  <StoryContainer title="Default">
    <Icon />
  </StoryContainer>
)

export const Interactive = () => (
  <StoryContainer title="Interactive">
    <Icon
      color={text('Color', 'highlight')as IconColors}
      name={select('Icon name', iconNames as Array<IconName>, 'outlined-default-mockup') as IconName}
      size={text('Size', 'standard') as IconSizes}
    />
  </StoryContainer>
)
export interface OptionProps {
  value: string;
  label: string;
}
export const SearchIcon = () => {
  const [value, setValue] = useState(iconNames[0])
  const [filterOptionsN] = useState<OptionProps[]>(iconNames.map((icon) => ({ value: icon, label: icon })))
  const [filterOptions, setFilterOptions] = useState<OptionProps[]>(iconNames.map((icon) => ({ value: icon, label: icon })))

  const handleChange = (values: string) => {
    setValue(values)

    const newFilter = filterOptionsN.filter(
      (opt) => opt.label.toLowerCase().includes(values.toLowerCase())
    )

    if (newFilter.length > 0) {
      setFilterOptions(newFilter)
    } else {
      setFilterOptions([{ value: 'false', label: 'false' }])
    }
  }
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // @ts-ignore
    handleChange(e.target.value)
  }
  const handleSelect = (values: OptionProps) => {
    setValue(values.label)
    handleChange(values.label)
  }
  return (
    <>

      <div style={{
        display: 'flex',
        gap: '5px',
        boxSizing: 'border-box',
        padding: '10px'
      }}
      >
        <Typography variant="subtitle1">
          Total de Icones
        </Typography>
        {' '}
        <Typography variant="subtitle1">
          {filterOptionsN.length}
        </Typography>

      </div>
      <StoryContainer title="Search Icons">

        <div style={{ display: 'flex', gap: 20 }}>
          <div style={{ minWidth: 280 }}>
            <TextField
              size="small"
              onChange={(e) => handleInputChange(e)}
              value={value}
            />
          </div>
          <div style={{
            display: 'flex', gap: 20, width: '480px', flexWrap: 'wrap'
          }}
          >

            {
        filterOptions.map((names) => (
          <>
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center ',
              padding: '8px',
              backgroundColor: '#ffffff',
              border: '1px solid #ccc',
              width: '180px'
            }}
            >
              <Icon color="primary" name={names.value as IconName} />
              <p>{names.value}</p>
            </div>

          </>

        ))
      }
          </div>

        </div>
      </StoryContainer>
    </>
  )
}
export const ListIcon = () => {
  const [filterOptionsN] = useState<OptionProps[]>(iconNames.map((icon) => ({ value: icon, label: icon })))
  const [filterOptions] = useState<OptionProps[]>(iconNames.map((icon) => ({ value: icon, label: icon })))

  return (
    <>

      <div style={{
        display: 'flex',
        gap: '5px',
        boxSizing: 'border-box',
        padding: '10px'
      }}
      >
        <Typography variant="subtitle1">
          Total de Icones
        </Typography>
        {' '}
        <Typography variant="subtitle1">
          {filterOptionsN.length}
        </Typography>

      </div>
      <StoryContainer title="List Icons">

        <div style={{ display: 'flex', gap: 20 }}>

          <div style={{
            display: 'flex', gap: 4, width: '480px', flexDirection: 'column'
          }}
          >

            {
        filterOptions.map((names) => (
          <>
            <ul style={{
              display: 'flex'
            }}
            >
              <li>{names.value}</li>
            </ul>

          </>

        ))
      }
          </div>

        </div>
      </StoryContainer>
    </>
  )
}
