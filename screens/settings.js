import { View } from 'react-native'
import React from 'react'
import ThemeSwitchButton from '../components/ThemeSwitchButton.js'
import { useTheme } from '../contexts/useTheme'
import Styles from '../style'


export default function Settings() {
    const { isDarkMode } = useTheme()
    return(
        <View style={[Styles.container,isDarkMode ? Styles.dark : Styles.light]}>
            <ThemeSwitchButton />
        </View>
    )
}