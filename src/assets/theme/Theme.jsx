// ThemeContext.js

import React, {useEffect, useState} from 'react';
import {useColorScheme} from 'react-native';

export const useTheme = () => {
  const colorScheme = useColorScheme();
  const [theme, setTheme] = useState(
    colorScheme === 'dark' ? darkTheme : lightTheme,
  );

  useEffect(() => {
    setTheme(colorScheme === 'dark' ? darkTheme : lightTheme);
  }, [colorScheme]);
  return theme;
};

const lightTheme = {
  pinkLight: '#D4AA99',
  Orange: '#FF265D',
  background: '#FFFFFF',
  Gradient: ['#FF811D', '#FF265D'],
  text: '#0a1224',
  lightText: 'white',
  blue: '#38B6FF',
  lightBlue: '#38B6FF',
  red: '#D70E0E',
  lightGreen: '#21BF73',
  green: '#3B9B32',
  itembg: '#f5f5f5',
  gray: '#6C757D',
  chip:"#F61C7A",


  flex: {
    fullRow: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
    },
    row: {
      flex: 0,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
    },
    fullColumn: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
    },
    column: {
      flex: 0,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
    },
  },
};

const darkTheme = {
  pinkLight: '#000',
  OnboardingBgColor: 'rgb(223,193,181)',
  background: '#0a1224',
  Gradient: ['#FF811D', '#FF265D'],
  Orange: '#FF265D',
  text: 'white',
  lightText: '#0a1224',
  blue: '#38B6FF',
  red: '#D70E0E',
  green: '#3B9B32',
  itembg: '#202832',
  gray: '#6C757D',
  chip:"#F61C7A",
  flex: {
    fullRow: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
    },
    row: {
      flex: 0,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
    },
    fullColumn: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
    },
    column: {
      flex: 0,
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
    },
  },
};
