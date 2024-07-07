import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { useTheme } from '../assets/theme/Theme'


const SplashScreen = () => {
    const  theme  = useTheme()
  return (
    <View style={{backgroundColor: theme.Gradient,  flex: 1, alignItems:'center', justifyContent:'center'}}>
      <Image source={require('../assets/image/Logo.png')} style={{height: 200, width: 200}}/>
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({})