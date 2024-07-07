import React from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { useTheme } from '../assets/theme/Theme';

const ChartComponent = () => {
  const theme = useTheme();
  const screenWidth = Dimensions.get('window').width;
  const chartData = [10000, 5500, 1800, 2200, 4500, 6700, 9100, 12000];

  return (
    <View style={[styles.container, {backgroundColor: theme.text}]}>
      <LineChart
        data={{
          labels: Array(chartData.length).fill(''), 
          datasets: [
            {
              data: chartData,
              color: (opacity = 1) => `rgba(255, 121, 118, ${opacity})`,
              strokeWidth: 3, 
            },
          ],
        }}
        width={screenWidth}
        height={220}
        yAxisLabel=""
        yAxisSuffix="k"
        yAxisInterval={1} 
        chartConfig={{
          backgroundColor: '#fff',
          backgroundGradientFrom: theme.text,
          backgroundGradientTo: theme.text,
          decimalPlaces: 0, 
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          style: {
            borderRadius: 16,
          },
          propsForDots: {
            r: '0',
            strokeWidth: '1',
          },
          propsForBackgroundLines:{
            r: '0',
            strokeWidth: '0',
          }
        }}
        bezier
        style={{
          marginVertical: 8,
          borderRadius: 16,
        }}
      />
      <View style={styles.labelsContainer}>
        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun', 'Mon'].map((day, index) => (
          <View key={index} style={styles.label}>
            <Text style={styles.dayLabel}>{day}</Text>
            <Text style={styles.dateLabel}>{['15', '16', '17', '18', '19', '20', '21', '22'][index]}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#000',
    padding: 20,
  },
  labelsContainer: {
    position: 'absolute',
    paddingLeft: 35, 
    bottom: 20, // Adjust to position labels below the chart
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: Dimensions.get('window').width - 30, // Adjust to align with chart
  },
  label: {
    alignItems: 'center',
    width: (Dimensions.get('window').width - 30) / 8, // Adjust to fit 8 labels
  },
  dayLabel: {
    color: '#fff',
    fontSize: 12,
  },
  dateLabel: {
    color: '#fff',
    fontSize: 12,
  },
});

export default ChartComponent;
