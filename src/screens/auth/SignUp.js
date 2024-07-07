import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, ScrollView} from 'react-native';
import CustomInput from '../../components/CustomInput';
import {useTheme} from '../../assets/theme/Theme';
import {assets} from '../../assets/image/assets';
import CustomBtn from '../../components/CustomBtn';

const SignUp = ({navigation}) => {
  const theme = useTheme();
  const [securePassword, setSecurePassword] = useState(true);

  const togglePasswordVisibility = () => {
    setSecurePassword(!securePassword);
  };
  const ToggleSignIn = () => {
    navigation.navigate('SignIn');
  }
const toggleSignIn = () =>  {
  navigation.navigate('ForgetPassword');
}
  return (
    <View
      style={{
        paddingHorizontal: 20,
        flex: 1,
        backgroundColor: theme.text,
        paddingTop: 20,
      }}>
        
      <View
        style={{
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          paddingVertical: 30,
        }}>
        <Text style={[styles.title, {color: theme.background}]}>
          Crypto<Text style={[styles.list, {color: '#FF265D'}]}>List</Text>
        </Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{marginVertical: 10}}>
        <Text style={[styles.Heading, {color: theme.background}]}>Sign Up</Text>
        <Text style={[styles.Discription, {color: theme.background}]}>
          Please fill your detail to access your account.
        </Text>
      </View>
      <CustomInput
        placeholder="Username"
        svgImage={assets.CrossIcon}
        label="username"
      />
      <CustomInput
        placeholder="Enter Your Email"
        label="Email"
      />
      <CustomInput
        placeholder="Password"
        svgImage={assets.HidePassword}
        label="Password"
        secureTextEntry={securePassword}
        onPress={() => togglePasswordVisibility()}
      />
      <CustomInput
        placeholder="Confirm Password"
        label="ConfirmPassword"
        secureTextEntry={securePassword}
      />
      <View>
       
      </View>
      <CustomBtn title='Sign In' onPress={()=>toggleSignIn()}/>
        <View style={{width: '100%',marginTop: 10, alignItems:'center', justifyContent:'center', flexDirection: 'row'}}>
          <Text style={{color: theme.background}}>Already have an account?</Text>
          <TouchableOpacity onPress={ToggleSignIn}>
          <Text style={{color: "#FF811D", fontWeight: 'bold', marginLeft: 5}}>Sign In</Text>
          </TouchableOpacity> 
        </View>
        </ScrollView>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  Heading: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  Discription: {
    fontSize: 14,
    marginTop: 4,
  },
  title: {
    color: 'white',
    fontSize: 32,
    fontWeight: 'bold',
  },
  list: {
    color: '#FF811D',
    fontSize: 32,
  },
});
