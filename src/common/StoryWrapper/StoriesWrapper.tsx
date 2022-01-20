import React, { useState } from 'react'
import themes from '@naturacosmeticos/natds-themes/react-native'
import { ThemeProvider } from 'styled-components/native'
import {
  ScrollView, SafeAreaView, Dimensions, StyleSheet, Platform, View
} from 'react-native'
import { Button } from '../../components/Button'
import { StoriesContainer } from '../HelperComponents/ThemeHelper.styles'
import { buildTheme, Brand } from '../themeSelectors'
import { Container } from './StoryWrapper.styles'
import { ThemeSelectorModal } from './ThemeSelectorModal'
import { SwitchWithLabel } from './SwitchWithLabel'

const styles = StyleSheet.create({
  defaultScreen: {
    flex: 1,
    width: Dimensions.get('window').width
  }
})

export const StoriesWrapperNative = ({ story }) => {
  const themeNames = Object.keys(themes)
  const [isLight, changeMode] = useState(true)
  const [activeTheme, changeTheme] = useState(themeNames[0] as Brand)
  const [modalVisible, setModalVisible] = useState(false)
  const mode = isLight ? 'light' : 'dark'

  const theme = buildTheme(activeTheme, mode)

  return (
    <SafeAreaView style={styles.defaultScreen}>
      <ThemeProvider theme={theme}>
        <Container style={{ borderBottomWidth: 1 }}>
          <ThemeSelectorModal
            modalVisible={modalVisible}
            themeNames={themeNames}
            activeTheme={activeTheme}
            changeTheme={changeTheme}
            setModalVisible={setModalVisible}
          />
          <Button
            onPress={() => setModalVisible(true)}
            text="Change Theme"
            type="outlined"
          />
          <SwitchWithLabel
            onChange={changeMode}
            label="Light"
            isActive={isLight}
            isLast
          />
        </Container>
        <StoriesContainer>
          {story && story({ activeTheme, light: isLight })}
        </StoriesContainer>
      </ThemeProvider>
    </SafeAreaView>
  )
}

export const StoriesWrapperWeb = ({ story }) => (
  <SafeAreaView style={styles.defaultScreen}>
    <ScrollView>
      <View>
        {story && story()}
      </View>
    </ScrollView>
  </SafeAreaView>
)

export const StoriesWrapper = (props) => (
  Platform.OS === 'web'
    ? <StoriesWrapperWeb {...props} />
    : <StoriesWrapperNative {...props} />
)
