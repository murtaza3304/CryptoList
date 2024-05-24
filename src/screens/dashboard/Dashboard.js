// screens/Dashboard.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function Dashboard() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.totalValue}>Total Portfolio Value: $XX,XXX</Text>
      <Text style={styles.gainsLosses}>Gains/Losses: +X,XXX (+X.XX%)</Text>
      
      <View style={styles.table}>
        <Text>Holdings Table</Text>
      </View>

      <Button title="Add New Trade" onPress={() => navigation.navigate('AddTrade')} />
      <Button title="Trade History" onPress={() => navigation.navigate('TradeHistory')} />
      <Button title="Settings" onPress={() => navigation.navigate('Settings')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  totalValue: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  gainsLosses: {
    fontSize: 20,
    color: 'green',
    textAlign: 'center',
    marginVertical: 10,
  },
  table: {
    marginTop: 20,
  },
});
