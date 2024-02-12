import React, {useContext} from "react"
import { View, Text } from "react-native"
import { useTheme } from "../contexts/useTheme"
import Styles from '../style'

export default function Home() {
    const { isDarkMode } = useTheme();
    return (
      <View style={[Styles.container, isDarkMode ? Styles.dark : Styles.light]}>
        <Text style={isDarkMode ? Styles.dark : Styles.light}>Home</Text>
      </View>
    );
  }