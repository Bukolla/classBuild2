import React from 'react'
import { Text, View } from 'react-native'
import { useFonts } from "expo-font"
import SignUp from "./Screen/SignUp"
import SignIn from "./Screen/SignIn"

const App = () => {
  return (
    <View>
      <SignUp />
    </View>
  )
}

export default App

// const styles = StyleSheet.create({})
