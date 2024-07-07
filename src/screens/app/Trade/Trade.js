import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, FlatList, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-elements';
import { SvgXml } from 'react-native-svg';
import { assets } from '../../../assets/image/assets';
import { useTheme } from '../../../assets/theme/Theme';
import CustomChart from '../../../components/CustomChart';

const TradingScreen = () => {
  const theme = useTheme();
  const [activeButton, setActiveButton] = useState('BTC');

  const buttons = ['BTC', 'ETH', 'LTC', 'XRP', 'EOS'];

  const cryptoNames = {
    BTC: 'Bitcoin',
    ETH: 'Ethereum',
    LTC: 'LiteCoin',
    XRP: 'Ripple',
    EOS: 'EOSIO',
  };

  return (
    <ScrollView style={[styles.container, { backgroundColor: theme.text }]}>
      <View style={{ paddingHorizontal: 15, paddingTop: 30 }}>
        <Text style={[styles.title, { color: theme.background }]}>Trading</Text>
      </View>
      <FlatList
        data={buttons}
        horizontal
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => setActiveButton(item)}
            style={styles.button}
          >
            <Text
              style={[
                styles.buttonText,
                item === activeButton && {
                  fontWeight: 'bold',
                  color: theme.background,
                  borderBottomColor: theme.Orange,
                  borderBottomWidth: 3, 
                  paddingBottom: 5, 
                },
              ]}
            >
              {item}
            </Text>
          </TouchableOpacity>
        )}
        contentContainerStyle={{ paddingHorizontal: 15, marginTop: 20 }}
      />
      <Card
        containerStyle={[
          {
            borderWidth: 0,
            borderColor: 'transparent',
            elevation: 0,
            backgroundColor: theme.text,
            marginTop: 0,
          },
        ]}
      >
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 15,
          }}
        >
          <View
            style={{
              backgroundColor: '#212125',
              paddingHorizontal: 10,
              borderRadius: 5,
            }}
          >
            <SvgXml xml={assets.BitCoin} />
          </View>
          <View style={{ width: '63%', justifyContent: 'center' }}>
            <Text style={[styles.cryptoTitle, { color: theme.background }]}>
              {cryptoNames[activeButton]}
            </Text>
            <Text style={[styles.price, { color: theme.gray }]}>{activeButton}</Text>
          </View>
          <View>
            <Text style={[styles.price, { color: theme.background }]}>
              $28927
            </Text>
            <Text style={[styles.price, { color: theme.gray }]}>
              2.05 {activeButton}
            </Text>
          </View>
        </View>
        <CustomChart theme={theme} />
        <View style={styles.details}>
          <View style={{ width: '100%' }}>
            <Text style={[styles.label, { color: theme.background }]}>
              At Price | USD
            </Text>
            <Text style={[styles.value, { color: theme.background }]}>0.031</Text>
          </View>
          <View
            style={{
              width: '100%',
              borderTopWidth: 1,
              borderColor: 'grey',
              marginVertical: 12,
              height: 12,
            }}
          ></View>
          <View style={{ flexDirection: 'row' }}>
            <View style={{ width: '45%' }}>
              <Text style={[styles.label, { color: theme.background }]}>
                Amount
              </Text>
              <Text style={[styles.value, { color: theme.background }]}>
                345 USD
              </Text>
            </View>
            <View style={styles.percentages}>
              <Text style={[styles.label, { color: theme.background }]}>25%</Text>
              <Text style={[styles.label, { color: theme.background }]}>50%</Text>
              <Text style={[styles.label, { color: theme.background }]}>100%</Text>
            </View>
          </View>
        </View>
        <View
          style={{
            width: '100%',
            borderTopWidth: 1,
            borderColor: 'grey',
            marginVertical: 12,
            height: 12,
          }}
        ></View>
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 28,
  },
  button: {
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  buttonText: {
    fontSize: 16,
    color: 'gray',
  },
  cryptoTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 14,
  },
  details: {
    marginTop: 16,
  },
  chart: {
    marginVertical: 5,
    // borderRadius: 16,
  },
  label: {
    fontSize: 14,
  },
  value: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  percentages: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
    width: '50%',
  },
});

export default TradingScreen;
