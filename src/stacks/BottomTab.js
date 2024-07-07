import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SvgXml } from 'react-native-svg';
import Home from '../screens/app/home/Home';
import Trade from '../screens/app/Trade/Trade';
import TradeHistory from '../screens/app/TradeHistory/TradeHistory';
import { assets } from '../assets/image/assets';

const Tab = createBottomTabNavigator();

export default BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: {
          backgroundColor: '#1F1815',
          height: 60,
        },
        tabBarIcon: ({ focused, size }) => {
          let iconName = focused ? assets.Active : assets.inActive

          if (route.name === 'Home') {
            iconName = iconName.Home;
          } else if (route.name === 'Trade') {
            iconName = iconName.Trade;
          } else if (route.name === 'TradeHistory') {
            iconName = iconName.TradeDetail;
          }

          return <SvgXml xml={iconName} width={size} height={size}/>;
        },
        tabBarShowLabel: false, 
      })}
    >
      <Tab.Screen 
        name="Home" 
        component={Home} 
        options={{ headerShown: false }} 
      />
      <Tab.Screen 
        name="Trade" 
        component={Trade} 
        options={{ headerShown: false }} 
      />
      <Tab.Screen 
        name="TradeHistory" 
        component={TradeHistory} 
        options={{ headerShown: false }} 
      />  
    </Tab.Navigator>
  );
}
