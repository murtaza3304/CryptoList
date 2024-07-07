import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {LineChart} from 'react-native-chart-kit'; 
import {SvgXml} from 'react-native-svg';
import {assets} from '../../../assets/image/assets';
import LinearGradient from 'react-native-linear-gradient';

const TradeHistory = () => {
  const [activeCurrency, setActiveCurrency] = useState(null);
  const currencies = ['Dash', 'BNB', 'BTC', 'Solana', 'ADD'];

  const renderCurrencyItem = ({item}) => {
    const isActive = item === activeCurrency;
    return (
      <TouchableOpacity
        key={item}
        style={[
          styles.currencyButton,
          isActive && {backgroundColor: '#fff'},
        ]}
        onPress={() => setActiveCurrency(item)}>
        <Text style={[styles.currencyText, isActive && {color: '#000'}]}>
          {item}
        </Text>
      </TouchableOpacity>
    );
  };

  const formatPrice = (price) => {
    return price > 1000 ? (price / 1000).toFixed(1) + 'K' : price.toFixed(2);
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require('../../../assets/image/Logo.png')}
          style={styles.profilePic}
        />
        <View style={{flexDirection:'column'}}>
          <Text style={styles.greeting}>Hello</Text>
          <Text style={[styles.greeting, {fontWeight: 'bold'}]}>Alex</Text>
        </View>
        <SvgXml xml={assets.Setting} style={styles.settingsIcon} />
      </View>
      <Text style={{color:"#fff", fontSize: 24, marginTop:10}}>Currencies</Text>

      <FlatList
        horizontal
        data={currencies}
        renderItem={renderCurrencyItem}
        keyExtractor={(item) => item}
        style={styles.currencySelector}
        showsHorizontalScrollIndicator={false}
      />

      <ScrollView horizontal style={styles.dataTable}>
        {/* Table header */}
        <LinearGradient colors={['#FF811D', '#FF265D']} style={styles.tableHeaderRow}>
          {[
            'Date',
            'Buy Price',
            'Buy Qty',
            'Sell Qty',
            'Sell Price',
            'Payment',
            'Sale',
            'Earning',
          ].map(header => (
            <Text key={header} style={styles.tableHeader}>
              {header}
            </Text>
          ))}
        </LinearGradient>
        {[
          ['12-03-23', '40.1', '32', '16', '22.4', '923', '930', '24'],
          ['13-03-23', '39.2', '34', '17', '22.4', '924', '930', '24'],
          ['14-03-23', '26.5', '35', '18', '22.4', '923', '930', '24'],
          ['15-03-23', '34', '36', '19', '22.4', '923', '930', '24'],
        ].map((row, index) => (
          <View key={index} style={[styles.tableDataRow, index % 2 === 0 ? styles.rowEven : styles.rowOdd]}>
            {row.map((data, idx) => (
              <Text key={idx} style={styles.tableCell}>
                {data}
              </Text>
            ))}
          </View>
        ))}
      </ScrollView>

      <View style={styles.holdingsSection}>
        <Text style={styles.sectionTitle}>Holdings</Text>
        <TouchableOpacity>
          <Text style={styles.seeAll}>See All</Text>
        </TouchableOpacity>
      </View>

      {[
        { name: 'Ethereum', price: 503.12, quantity: '50 ETH', chartColor: '#29b6f6', shortForm: 'ETH' },
        { name: 'Bitcoin', price: 26927, quantity: '2.05 BTC', chartColor: '#ff5252', shortForm: 'BTC' },
      ].map(coin => (
        <View key={coin.name} style={styles.holdingItem}>
          <TouchableOpacity style={styles.iconWrapper}>
            <SvgXml xml={assets.BitCoin} style={styles.settingsIcon} />
          </TouchableOpacity>
          
          <View style={styles.holdingDetails}>
          <View style={styles.CoinDetails}>
            <Text style={styles.coinName}>{coin.name}</Text>
            <Text style={styles.shortForm}>{coin.shortForm}</Text>
            </View>

            <LineChart
              data={{
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                datasets: [
                  {data: Array.from({length: 10}, () => Math.random() * 80)},
                ],
              }}
              width={130} 
              height={60}
              withDots={false}
              withInnerLines={false}
              withOuterLines={false}
              withVerticalLabels={false}
              withHorizontalLabels={false}
              chartConfig={{
                backgroundGradientFrom: 'transparent',
                backgroundGradientTo: 'transparent',
                color: (opacity = 1) => coin.chartColor,
                strokeWidth: 2,
              }}
              bezier
              style={styles.chart}
            />
            <View style={styles.valueWrapper}>
              <Text style={styles.coinPrice}>${coin.price.toLocaleString()}</Text>
              <Text style={styles.coinQuantity}>{coin.quantity}</Text>
            </View>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  profilePic: {
    width: 50,
    height: 50,
    borderRadius: 20,
    backgroundColor:'#fff',
    marginRight: 5
  },
  greeting: {
    color: '#fff',
    fontSize: 18,
  },
  settingsIcon: {
    marginLeft: 'auto',
  },
  currencySelector: {
    marginVertical: 16,
  },
  currencyButton: {
    padding: 8,
    borderRadius: 10,
    paddingHorizontal: 12,
    backgroundColor: 'transparent',
    marginHorizontal: 7,
    borderWidth: 1,
    borderColor: '#fff',
  },
  currencyText: {
    color: '#fff',
  },
  dataTable: {
    marginVertical: 5,
    borderRadius: 8,
    overflow: 'hidden',
  },
  tableHeaderRow: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems:'flex-start',
    width: 80,
    borderRadius: 10
    
  },
  tableDataRow: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderRadius: 10
  },
  tableHeader: {
    color: '#fff',
    fontWeight: 'bold',
    width: 70,
    textAlign: 'center',
    marginVertical: 4,
    paddingVertical: 5,
  },
  tableCell: {
    color: '#fff',
    width: 70,
    textAlign: 'center',
    justifyContent:'space-between'
  },
  rowEven: {
    backgroundColor: '#333',
    justifyContent:'space-between',
    marginHorizontal: 2,
  },
  rowOdd: {
    backgroundColor: '#444',
    justifyContent:'space-between',
  },
  holdingsSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 16,
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  seeAll: {
    color: '#00f',
  },
  holdingItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    width: "100%",
  },
  iconWrapper: {
    backgroundColor: '#222222',
    paddingVertical: 8,
    paddingHorizontal: 8,
    borderRadius: 5,
  },
  holdingDetails: {
    marginLeft: 8,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  CoinDetails: {
    flexDirection: 'column',
    alignItems:'flex-start',
    justifyContent:'flex-start'
  },
  coinName: {
    color: '#fff',
    fontSize: 16,
    marginRight: 10,
  },
  coinPrice: {
    color: '#fff',
    fontSize: 14,
  },
  coinQuantity: {
    color: '#666',
    fontSize: 12,
  },
  valueWrapper: {
    alignItems: 'flex-end',
    marginLeft: 'auto',
  },
  chart: {
    borderRadius: 8,
    overflow: 'hidden',
    width: 150,
    height: 50,
    alignItems:'flex-start',
    justifyContent:'flex-start',
    paddingRight: 30,
    paddingVertical: 0
  },
  shortForm: {
    color: '#fff',
    marginTop: 4,
    fontSize: 12,
    textAlign: 'right',
  },
});

export default TradeHistory;
