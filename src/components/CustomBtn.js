import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useTheme } from '../assets/theme/Theme'
import LinearGradient from 'react-native-linear-gradient'
import { SvgXml } from 'react-native-svg'

const CustomBtn = ({ title, style, SVGIcon, onPress }) => {
  const theme = useTheme()

  return (
    <LinearGradient colors={theme.Gradient} style={[styles.gradient, style]}>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        {title ? (
          <Text style={styles.buttonText}>{title}</Text>
        ) : (
          <SvgXml xml={SVGIcon} style={styles.iconContainer} />
        )}
      </TouchableOpacity>
    </LinearGradient>
  )
}

export default CustomBtn

const styles = StyleSheet.create({
  gradient: {
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 10,
    marginTop: 20,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
 
})
