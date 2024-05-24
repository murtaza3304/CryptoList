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
  background: '#FFFFFF',
  text: '#0a1224',
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
  background: '#0a1224',
  text: 'white',
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
