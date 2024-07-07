import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, ScrollView} from 'react-native';
import CustomInput from '../../../components/CustomInput';
import { useTheme } from '../../../assets/theme/Theme';
import { assets } from '../../../assets/image/assets';
import CustomBtn from '../../../components/CustomBtn';

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
      <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{marginVertical: 10}}>
        <Text style={[styles.Heading, {color: theme.background}]}>Add Details</Text>
      </View>
      <CustomInput
        placeholder="BTC"
        svgImage={assets.AddDetail}
        label="Which Coin you purchased"
      />
      <CustomInput
        placeholder="Quantity"
        svgImage={assets.AddDetail}
        label="Quantity"
      />
      <CustomInput
        placeholder="Buy"
        svgImage={assets.AddDetail}
        label="Buy Price"
      />
      <CustomInput
        placeholder="24"
        svgImage={assets.AddDetail}
        label="Quantity"
      />
      <CustomInput
        placeholder="Sell"
        svgImage={assets.AddDetail}
        label="Sell Price"
      />
     
      <View>
       
      </View>
      <CustomBtn title='Add' onPress={()=>toggleSignIn()} style={{}}/>
        </ScrollView>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  Heading: {
    fontSize: 24,
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
