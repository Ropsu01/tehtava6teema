import React from "react"
import { Switch } from "react-native-paper"
import { useTheme } from "../contexts/useTheme"

export default function ThemeSwitchButton() {
    const { isDarkMode, toggleDarkMode } = useTheme()

    return (
        <Switch value={isDarkMode} onValueChange={toggleDarkMode} />
    )
}