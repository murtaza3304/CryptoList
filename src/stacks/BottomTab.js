import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Dashboard from '../screens/dashboard/Dashboard';
import Settings from '../screens/settings/Settings';
import Trade from '../screens/trade/Trade';
import TradeHistory from '../screens/tradeHistory/TradeHistory';

const Tab = createBottomTabNavigator();

export default BottomTab = () => {
  
  return (
    <Tab.Navigator>
      <Tab.Screen name="Dashboard" component={Dashboard} options={{ headerShown: false }} />
      <Tab.Screen name="Trade" component={Trade} options={{ headerShown: false }} />
      <Tab.Screen name="TradeHistory" component={TradeHistory} options={{ headerShown: false }} />
      <Tab.Screen name="Settings" component={Settings} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
}
