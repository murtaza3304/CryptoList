import { StyleSheet, Text, View, Button, Image } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { useTheme } from '../../assets/theme/Theme'
import CustomBtn from '../../components/CustomBtn'

const Onboarding = ({navigation}) => {
    const  theme  = useTheme()
  return (
    <View
      style={[styles.MainContainer, {backgroundColor: theme.pinkLight}]}
    >
      
      <Text style={styles.title}>Crypto<Text style={[styles.list,{color: '#FF265D'}]}>List</Text></Text>
      <View style={{marginTop: 40}}>
        <Image source={require('../../assets/image/Logo.png')} style={{height: 200, width: 200}}/>
      </View>
      <Text style={styles.subtitle}>Jump start your crypto portfolio</Text>
      <Text style={styles.description}>Take your investment portfolio to next level</Text>
      <CustomBtn title="Get Started" style={styles.customButton} onPress={()=>navigation.navigate('infoCard1')} />
      
    </View>
  )
}

export default Onboarding

const styles = StyleSheet.create({
    
  MainContainer: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 60,
    paddingHorizontal: 20
  },
  title: {
    color: 'white',
    fontSize: 64,
    fontWeight: 'bold',
  },
  list: {
    color: '#FF811D', 
    fontSize: 64,
  },
  circle: {
    width: 150,
    height: 150,
    backgroundColor: 'rgba(255, 129, 29, 0.5)',
    borderRadius: 75,
    marginVertical: 20,
  },
  subtitle: {
    color: 'white',
    fontSize: 28,
    fontWeight: 'bold',
    marginTop: 20,
  },
  description: {
    color: 'white',
    fontSize: 16,
    marginVertical: 10,
    paddingHorizontal: 20,
  },
 
  customButton: {
    width: '100%',
    paddingVertical: 10
  }
})
