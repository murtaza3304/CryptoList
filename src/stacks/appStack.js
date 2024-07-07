import React, { useState, useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../splashscreen/SplashScreen';
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
        name="BottomTab"
        component={BottomTab}
      />
    </Stack.Navigator>
  );
}

export default AuthStack;
