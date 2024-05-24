// screens/AddTrade.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function AddTrade() {
  const [asset, setAsset] = useState('');
  const [quantity, setQuantity] = useState('');
  const [purchasePrice, setPurchasePrice] = useState('');
  const [date, setDate] = useState('');
  const navigation = useNavigation();

  const saveTrade = () => {
    // Save trade logic here
    console.log('Trade saved:', { asset, quantity, purchasePrice, date });
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Add New Trade</Text>
      <TextInput
        style={styles.input}
        placeholder="Asset/Cryptocurrency"
        value={asset}
        onChangeText={setAsset}
      />
      <TextInput
        style={styles.input}
        placeholder="Quantity"
        value={quantity}
        onChangeText={setQuantity}
      />
      <TextInput
        style={styles.input}
        placeholder="Purchase Price"
        value={purchasePrice}
        onChangeText={setPurchasePrice}
      />
      <TextInput
        style={styles.input}
        placeholder="Date of Purchase"
        value={date}
        onChangeText={setDate}
      />
      <Button title="Save Trade" onPress={saveTrade} />
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
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});
