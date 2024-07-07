import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Onboarding from '../screens/auth/Onboarding';
import infoCard1 from '../screens/auth/informationCards/infoCard1';
import InfoCard2 from '../screens/auth/informationCards/InfoCard2';
import InfoCard3 from '../screens/auth/informationCards/infoCard3';
import SignIn from '../screens/auth/SignIn';
import SplashScreen from '../splashscreen/SplashScreen';
import SignUp from '../screens/auth/SignUp';
import ForgetPassword from '../screens/auth/ForgetPassword';
import AuthenticationCode from '../screens/auth/AuthenticationCode';
import PasswordUpdate from '../screens/auth/PasswordUpdate';
import BottomTab from './BottomTab';

const Stack = createNativeStackNavigator();

function AuthStack() {
  const [isSplashVisible, setSplashVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setSplashVisible(false);
    }, 2000); 

    return () => clearTimeout(timer);
  }, []);

  if (isSplashVisible) {
    return <SplashScreen />;
  }

  return (
    <Stack.Navigator
      initialRouteName={'Onboarding'}
      screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
      />
      <Stack.Screen
        name="Onboarding"
        component={Onboarding}
      />
      <Stack.Screen
        name="infoCard1"
        component={infoCard1}
      />
      <Stack.Screen
        name="InfoCard2"
        component={InfoCard2}
      />
      <Stack.Screen
        name="InfoCard3"
        component={InfoCard3}
      />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
      />
      <Stack.Screen
        name="ForgetPassword"
        component={ForgetPassword}
      />
      <Stack.Screen
        name="AuthenticationCode"
        component={AuthenticationCode}
      />
      <Stack.Screen
        name="PasswordUpdate"
        component={PasswordUpdate}
      />
      
      <Stack.Screen
        name="BottomTab"
        component={BottomTab}
      />

    </Stack.Navigator>
  );
}

export default AuthStack;
