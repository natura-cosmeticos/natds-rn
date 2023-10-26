/* eslint-disable max-lines */
/* eslint-disable no-console */
import React, { useState } from 'react'
import { View, FlatList, Text } from 'react-native'
import { Card } from '../Card'
import { Divider } from '../Divider'
import { ListItem, ListItemFeedback } from './ListItem'
import { Checkbox } from '../Checkbox'
import { TextWithTheme } from '../../common/HelperComponents/ThemeHelper.styles'
import { data } from './stories.data'
import { StoryContainer } from '../../common/HelperComponents/StoryContainer'

const description = () => `
> List items are rows of information that can have user interactions or not

## Properties
| Property                | Values                                         |    Status    |
|---                      |                                             ---|           ---|
| **feedback**            | ripple, selection                              | ✅ Available |
| **selected**            | true/false                                     | ✅ Available |
| **onPress**             | function                                       | ✅ Available |

## Technical Usages Examples
`

export default {
  component: ListItem,
  parameters: {
    componentSubtitle: '',
    docs: {
      extractComponentDescription: description
    }
  },
  title: 'Components|List'
}

export const Default = () => (
  <StoryContainer title="Standard">
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <ListItem>
          <View style={{ padding: 16 }}>
            <TextWithTheme>{item.title}</TextWithTheme>
          </View>
        </ListItem>
      )}
    />
  </StoryContainer>
)

export const RippleFeedback = () => (
  <StoryContainer title="Feedback Ripple">
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <ListItem feedback="ripple" onPress={() => console.log('I was pressed')}>
          <View style={{ padding: 16 }}>
            <TextWithTheme>{item.title}</TextWithTheme>
          </View>
        </ListItem>
      )}
    />
  </StoryContainer>
)

export const SelectionFeedback = () => {
  const [selected, setSelected] = useState('')

  const renderItem = ({ item }) => {
    const listItemProps = {
      feedback: 'selection' as ListItemFeedback,
      selected: item.key === selected,
      ...(item.unreleased ? {} : { onPress: () => setSelected(item.key) })
    }

    return (
      <ListItem {...listItemProps}>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 16
        }}
        >
          <TextWithTheme>{item.title}</TextWithTheme>
          <Checkbox
            selected={item.key === selected}
            onPress={() => setSelected(item.key)}
            disabled={item.unreleased}
          />
        </View>
      </ListItem>
    )
  }

  return (
    <StoryContainer title="Feedback Selection">
      <FlatList
        ItemSeparatorComponent={Divider}
        data={data}
        renderItem={renderItem}
        extraData={selected}
      />
    </StoryContainer>
  )
}

export const Dividers = () => {
  const renderExtraInfo = (extraInfo) => {
    if (!extraInfo) return null

    const extraInfoData = Object
      .keys(extraInfo)
      .map((item, index) => (
        <View key={extraInfo[item].key} style={{ backgroundColor: '#fafafa' }}>
          <ListItem>
            <View style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 32,
              paddingVertical: 16
            }}
            >
              <TextWithTheme>{item}</TextWithTheme>
              <TextWithTheme>{extraInfo[item]}</TextWithTheme>
            </View>
          </ListItem>
          {
            index < Object.keys(extraInfo).length - 1
              ? <Divider type="inset" />
              : null
          }
        </View>
      ))

    return extraInfoData
  }

  return (
    <StoryContainer title="Dividers">
      <View style={{
        flex: 1,
        paddingHorizontal: 10,
        paddingVertical: 20
      }}
      >
        <Card>
          <FlatList
            ItemSeparatorComponent={Divider}
            data={data}
            renderItem={({ item }) => (
              <>
                <ListItem onPress={() => console.log('I was pressed')}>
                  <View style={{ padding: 16 }}>
                    <Text>{item.title}</Text>
                  </View>
                </ListItem>
                {renderExtraInfo(item.extraInfo)}
              </>
            )}
          />
        </Card>
      </View>
    </StoryContainer>
  )
}
