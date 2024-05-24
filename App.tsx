import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import BottomTab from './src/stacks/BottomTab'


const App = () => {
  return (
<NavigationContainer>
      <BottomTab/>
      </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})