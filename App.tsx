import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AuthStack from './src/stacks/AuthStack'
import { NavigationContainer } from '@react-navigation/native'

const App = () => {
  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({
  
})