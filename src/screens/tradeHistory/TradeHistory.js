// screens/TradeHistory.js
import React from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function TradeHistory() {
  const navigation = useNavigation();

  // Example data for trade history
  const tradeData = [
    { id: '1', asset: 'Bitcoin', quantity: 1, purchasePrice: 50000, date: '2021-01-01', currentValue: 60000, gainsLosses: 10000 },
    { id: '2', asset: 'Ethereum', quantity: 10, purchasePrice: 2000, date: '2021-02-01', currentValue: 2500, gainsLosses: 5000 },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Trade History</Text>
      <FlatList
        data={tradeData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.tradeItem}>
            <Text>Asset: {item.asset}</Text>
            <Text>Quantity: {item.quantity}</Text>
            <Text>Purchase Price: {item.purchasePrice}</Text>
            <Text>Date: {item.date}</Text>
            <Text>Current Value: {item.currentValue}</Text>
            <Text>Gains/Losses: {item.gainsLosses}</Text>
          </View>
        )}
      />
      <Button title="Back to Dashboard" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  tradeItem: {
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: 'gray',
  },
});
